/**
 * Defines our build pipeline
 * See: JENKINS.md
 */

String buildVersion = env.BUILD_NUMBER

try {
  String gitCommitId

  stage('Checkout') {
    node {
      sh "oc project ${env.PROJECT_NAME}"

      checkout scm
      stash includes: 'openshift/*.sh', name: 'scripts'

      String gitCommitNum = sh(returnStdout: true, script: "git rev-list HEAD --count").trim()
      String gitShortId = sh(returnStdout: true, script: "git rev-parse --short HEAD").trim()
      buildVersion = gitCommitNum + '-' + gitShortId

      gitCommitId = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
    }
  }

  stage('Apply Templates') {
    node {
      String currentBranch = sh(
        returnStdout: true,
        script: "oc get bc telus-isomorphic-starter-kit-pipeline -o='jsonpath={.spec.source.git.ref}'"
      ).trim()

      sh("""
        oc apply -f openshift/openshift-template.yml
        oc process telus-isomorphic-starter-kit-pipeline BRANCH=${currentBranch} | oc apply -f -
      """)
    }
  }

  stage('Build') {
    parallel 'Build UI':{
      build(
        name: 'telus-isomorphic-starter-kit-ui',
        buildVersion: buildVersion,
        gitCommitId: gitCommitId
      )
    }, 'Build BFF':{
      build(
        name: 'telus-isomorphic-starter-kit-bff',
        buildVersion: buildVersion,
        gitCommitId: gitCommitId
      )
    }, 'Build E2E':{
      build(
        name: 'telus-isomorphic-starter-kit-e2e',
        buildVersion: buildVersion,
        gitCommitId: gitCommitId
      )
    }, 'Build Load Test':{
      build(
        name: 'telus-isomorphic-starter-kit-load',
        buildVersion: buildVersion,
        gitCommitId: gitCommitId
      )
    }
  }

  stage('Test') {
    parallel 'Test UI':{
      test(
        name: 'telus-isomorphic-starter-kit-ui',
        buildVersion: buildVersion
      )
    }, 'Test BFF':{
      test(
        name: 'telus-isomorphic-starter-kit-bff',
        buildVersion: buildVersion
      )
    }
  }

  stage('Deploy Staging') {
    deploy(
      buildVersion: buildVersion,
      environment: 'staging',
      uiNewRelicId: '24442659',
      bffNewRelicId: '24534378',
      numReplicas: 1
    )
  }

  stage('E2E Staging') {
    e2e(
      buildVersion: buildVersion,
      environment: 'staging'
    )
  }

  stage('Load Test Staging') {
    loadTest(
      buildVersion: buildVersion,
      environment: 'staging'
    )
  }

  stage('User Input') {
    inputUrl = env.BUILD_URL ? "(${env.BUILD_URL}input)" : '';
    notifyBuild(
      message: "Build is ready for Production ${inputUrl}",
      color: '#0000FF',
      buildVersion: buildVersion
    )
    timeout(time:1, unit:'DAYS') {
      input 'Deploy to Production?'
    }
  }

  stage('Deploy Production') {
    deploy(
      buildVersion: buildVersion,
      environment: 'production',
      uiNewRelicId: '24442164',
      bffNewRelicId: '24534533',
      numReplicas: 3
    )
  }

  stage('E2E Production') {
    e2e(
      buildVersion: buildVersion,
      environment: 'production'
    )
  }

  currentBuild.result = 'SUCCESS'
}
catch (org.jenkinsci.plugins.workflow.steps.FlowInterruptedException flowError) {
  currentBuild.result = 'ABORTED'
}
catch (err) {
  currentBuild.result = 'FAILURE'
  consoleUrl = env.BUILD_URL ? "(${env.BUILD_URL}console)" : '';
  notifyBuild(
    message:  "Build failed ${consoleUrl}",
    color: '#FF0000',
    buildVersion: buildVersion
  )
  throw err
}
finally {
  if (currentBuild.result == 'SUCCESS') {
    notifyBuild(
      message: "Production deploy successful",
      color: '#00FF00',
      buildVersion: buildVersion
    )
  }
}

def build(Map attrs) {
  node {
    boolean imageTagExists = sh(
      returnStatus: true,
      script: "oc get istag ${attrs.name}:${attrs.buildVersion}"
    ) == 0

    if (!imageTagExists) {
      openshiftBuild(
        buildConfig: attrs.name,
        commitID: attrs.gitCommitId,
        waitTime: '3600000'
      )

      openshiftTag(
        sourceStream: attrs.name,
        destinationStream: attrs.name,
        sourceTag: 'latest',
        destinationTag: attrs.buildVersion,
        namespace: env.PROJECT_NAME
      )
    }
  }
}

def test(Map attrs) {
  node {
    unstash 'scripts'
    sh("./openshift/run-test.sh ${attrs.name} ${attrs.buildVersion}")
  }
}

def deploy(Map attrs) {
  node {
    String uiDockerRegistry = sh(
      returnStdout: true,
      script: "oc get imagestream telus-isomorphic-starter-kit-ui -o='jsonpath={.status.dockerImageRepository}'"
    ).trim()

    String bffDockerRegistry = sh(
      returnStdout: true,
      script: "oc get imagestream telus-isomorphic-starter-kit-bff -o='jsonpath={.status.dockerImageRepository}'"
    ).trim()

    sh("""
      # workaround for https://github.com/kubernetes/kubernetes/issues/34413
      if oc get hpa/telus-isomorphic-starter-kit-${attrs.environment} > /dev/null 2>&1
      then
        oc delete hpa/telus-isomorphic-starter-kit-${attrs.environment}
      fi

      oc new-app \
        --template='telus-isomorphic-starter-kit' \
        -p VERSION='${attrs.buildVersion}' \
        -p ENVIRONMENT='${attrs.environment}' \
        -p UI_DOCKER_REGISTRY='${uiDockerRegistry}:${attrs.buildVersion}' \
        -p BFF_DOCKER_REGISTRY='${bffDockerRegistry}:${attrs.buildVersion}' \
        -p NUM_REPLICAS='${attrs.numReplicas}' \
        -o yaml | oc apply -f -

      oc autoscale dc/telus-isomorphic-starter-kit-${attrs.environment} --min ${attrs.numReplicas} --max 5 --cpu-percent=80
    """)

    openshiftVerifyDeployment(
      deploymentConfig: "telus-isomorphic-starter-kit-${attrs.environment}",
      waitTime: '1800000'
    )

    notifyNewrelic(attrs.uiNewRelicId, attrs.buildVersion)
    notifyNewrelic(attrs.bffNewRelicId, attrs.buildVersion)
  }
}

def notifyNewrelic(String newRelicId, String buildVersion) {
  sh("""#!/bin/sh
    curl -i -X POST 'https://api.newrelic.com/v2/applications/${newRelicId}/deployments.json' \
      -H 'X-Api-Key: ${env.NEW_RELIC_API_KEY}' \
      -H 'Content-Type: application/json' \
      -d '{ \"deployment\": { \"revision\": \"${buildVersion}\" } }'
  """)
}

def e2e(Map attrs) {
  node {
    String baseUrl =  sh(
      returnStdout: true,
      script: "oc get route telus-isomorphic-starter-kit-${attrs.environment}-ui -o='jsonpath={.spec.host}'"
    ).trim()

    String e2eDockerRegistry = sh(
      returnStdout: true,
      script: "oc get imagestream telus-isomorphic-starter-kit-e2e -o='jsonpath={.status.dockerImageRepository}'"
    ).trim()

    sh("""
      oc run telus-isomorphic-starter-kit-${attrs.environment}-e2e-${attrs.buildVersion} \
        --image='${e2eDockerRegistry}:${attrs.buildVersion}' \
        --rm=true --attach=true --restart=Never \
        --env BASE_URL='https://${baseUrl}'
    """)
  }
}

def loadTest(Map attrs) {
  node {
    String loadDockerRegistry = sh(
      returnStdout: true,
      script: "oc get imagestream telus-isomorphic-starter-kit-load -o='jsonpath={.status.dockerImageRepository}'"
    ).trim()

    sh("""
      oc run telus-isomorphic-starter-kit-${attrs.environment}-load-${attrs.buildVersion} \
        --image='${loadDockerRegistry}:${attrs.buildVersion}' \
        --rm=true --attach=true --restart=Never \
        --env BASE_URL='http://telus-isomorphic-starter-kit-${attrs.environment}:3000/en/bc/hello-world'
    """)
  }
}

def notifyBuild(Map attrs) {
  node {
    slackSend(
      color: attrs.color,
      message: "${env.JOB_NAME} [${attrs.buildVersion}]\n${attrs.message}",
      teamDomain: 'telusdigital',
      channel: 'starter-kit-builds',
      token: env.SLACK_TOKEN
    )
  }
}
