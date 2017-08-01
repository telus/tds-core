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
        script: "oc get bc tds-pipeline -o='jsonpath={.spec.source.git.ref}'"
      ).trim()

      sh("""
        oc apply -f openshift/openshift-template.yml
        oc process tds-pipeline BRANCH=${currentBranch} | oc apply -f -
      """)
    }
  }

  stage('Build') {
    build(
      name: 'tds',
      buildVersion: buildVersion,
      gitCommitId: gitCommitId
    )
  }

  stage('Test') {
    test(
      name: 'tds',
      buildVersion: buildVersion
    )
  }

  stage('Deploy Staging') {
    deploy(
      buildVersion: buildVersion,
      environment: 'staging',
      numReplicas: 1
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

// No deploy to production yet... :)

//  stage('Deploy Production') {
//    deploy(
//      buildVersion: buildVersion,
//      environment: 'production',
//      uiNewRelicId: '24442164',
//      bffNewRelicId: '24534533',
//      numReplicas: 3
//    )
//  }

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
      message: "Build successful",
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
    String dockerRegistry = sh(
      returnStdout: true,
      script: "oc get imagestream tds -o='jsonpath={.status.dockerImageRepository}'"
    ).trim()

    sh("""
      # workaround for https://github.com/kubernetes/kubernetes/issues/34413
      if oc get hpa/tds-${attrs.environment} > /dev/null 2>&1
      then
        oc delete hpa/tds-${attrs.environment}
      fi

      oc new-app \
        --template='tds' \
        -p VERSION='${attrs.buildVersion}' \
        -p ENVIRONMENT='${attrs.environment}' \
        -p DOCKER_REGISTRY='${dockerRegistry}:${attrs.buildVersion}' \
        -p NUM_REPLICAS='${attrs.numReplicas}' \
        -o yaml | oc apply -f -

      oc autoscale dc/tds-${attrs.environment} --min ${attrs.numReplicas} --max 5 --cpu-percent=80
    """)

    openshiftVerifyDeployment(
      deploymentConfig: "tds-${attrs.environment}",
      waitTime: '1800000'
    )
  }
}

def notifyBuild(Map attrs) {
  node {
    slackSend(
      color: attrs.color,
      message: "${env.JOB_NAME} [${attrs.buildVersion}]\n${attrs.message}",
      teamDomain: 'telusdigital',
      channel: 'tds-updates',
      token: env.SLACK_TOKEN
    )
  }
}
