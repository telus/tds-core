/*
 *
 * Jobs to configure, lint, test, build, and deploy Thorium.
 *
 * Plugins required:
 *   Copy Artifacts
 *   Credentials
 *   Git
 *   Slack
 *
 * Plugins suggested:
 *   ansicolor
 *
 * System requirements:
 *   Node.js 6+
 *   AWS CLI
 */

String cmdSetupWorkspace = '''
  cd \${WORKSPACE}/core
  npm install
  npm rebuild node-sass
  cd \${WORKSPACE}/enriched
  rm -rf node_modules/telus-thorium-core
  npm install \${WORKSPACE}/core
  npm install
  npm rebuild node-sass
  npm run build:lib
  cd \${WORKSPACE}/docs
  rm -rf node_modules/telus-thorium-core
  rm -rf node_modules/telus-thorium-enriched
  npm install \${WORKSPACE}/core
  npm install \${WORKSPACE}/enriched
  npm install
  npm rebuild node-sass
'''.stripIndent().trim()

/**
 * telus-thorium--seed configures the build pipeline via the Job DSL plugin.
 */
createJenkinsJob('telus-thorium--seed-jenkins-jobs') {
  scm {
    git {
      remote {
        github('telusdigital/telus-thorium-core', 'ssh')
        credentials('jenkins')
        branch 'master'
      }
      extensions {
        cleanBeforeCheckout()
      }
    }
  }

  steps {
	dsl(['ci.groovy'])
  }
}

/**
 * telus-thorium--build is the first job in the build pipeline. It will
 * install, test, and build the latest code from master on Github.
 */
createJenkinsJob('telus-thorium--build') {
  triggers {
    githubPush()
  }

  scm {
    git {
      remote {
        github('telusdigital/telus-thorium-core', 'ssh')
        credentials('jenkins')
        branch 'master'
      }
      extensions {
        cleanBeforeCheckout()
      }
    }
  }

  steps {
	shell cmdSetupWorkspace
	shell '''
	  cd \${WORKSPACE}
	  npm run lint
	  npm test
	  npm run build
    '''.stripIndent().trim()
  }

  publishers {
    archiveArtifacts {
      pattern('docs/dist/docs/**/*')
      onlyIfSuccessful()
    }

    downstream 'telus-thorium--deploy-qa'
  }
}

/*
 *
 * Jobs to deploy files.
 *
 */

/**
 * telus-thorium--deploy-qa copies the static site contents to the QA
 * web server. It takes those artifacts from its upstream job, which
 * is dev.
 */
createJenkinsDeployJob('telus-thorium--deploy-qa', 's3://cdn.telus-thorium-doc-qa/', 'telus-thorium--build')

/**
 * telus-thorium--deploy-stage copies the static site contents to the Staging
 * web server. It takes those artifacts from its upstream job, which is QA.
 */
createJenkinsDeployJob('telus-thorium--deploy-stage', 's3://cdn.telus-thorium-doc-staging/', 'telus-thorium--deploy-qa')

/**
 * telus-thorium--deploy-prod copies the static site contents to the production
 * web server. It takes those artifacts from the last successful staging
 * deployment.
 */
createJenkinsDeployJob('telus-thorium--deploy-prod', 's3://cdn.telus-thorium-doc-production/', 'telus-thorium--deploy-stage')

createJenkinsJob('telus-thorium--deploy-cdn') {
  job('telus-thorium--deploy-cdn') {
    wrappers {
      credentialsBinding {
        usernamePassword('AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'aws-thorium-deployment')
      }
    }
    parameters {
      stringParam('THORIUM_RELEASE_VERSION', 'v0.6.0', 'Version to release. Corresponds to a Git tag of the same name, which must exist. Ex: v0.6.0')
    }
    scm {
      git {
        remote {
          github('telusdigital/telus-thorium-core', 'ssh')
          credentials('jenkins')
          branch 'refs/tags/\${THORIUM_RELEASE_VERSION}'
        }
      }
    }
    steps {
      shell cmdSetupWorkspace
      shell '''
        cd \${WORKSPACE}
        npm run lint
        npm test
        npm run build
        npm run deploy:cdn
      '''.stripIndent().trim()
    }
  }
}

createJenkinsJob('telus-thorium--deploy-npm') {
  job('telus-thorium--deploy-npm') {
    parameters {
      stringParam('THORIUM_RELEASE_VERSION', 'v0.6.0', 'Version to release. Corresponds to a Git tag of the same name, which must exist. Ex: v0.6.0')
    }
    scm {
      git {
        remote {
          github('telusdigital/telus-thorium-core', 'ssh')
          credentials('jenkins')
          branch 'refs/tags/\${THORIUM_RELEASE_VERSION}'
        }
      }
    }
    steps {
      shell cmdSetupWorkspace
      shell '''
        cd \${WORKSPACE}
        npm run lint
        npm test
        npm run build
        cd \${WORKSPACE}/core
        npm publish
        cd \${WORKSPACE}/enriched
        npm publish
      '''.stripIndent().trim()
    }
  }
}

/*
 *
 * Helper functions
 *
 */

def createJenkinsJob (String name, Closure closure) {
  job(name) {
    wrappers {
      colorizeOutput()
    }
    logRotator {
      numToKeep(5)
      artifactNumToKeep(1)
    }
    publishers {
      /*
       * TODO: add actual slack auth
       */
      slackNotifier {
        room('#nextlevel-tds')
        authToken('someAuthToken')
        authTokenCredentialId('someCredentialId')
        notifyFailure(true)
        notifyAborted(false)
        notifyNotBuilt(false)
        notifyUnstable(false)
        notifyBackToNormal(true)
        notifySuccess(false)
        notifyRepeatedFailure(false)
        startNotification(false)
        includeTestSummary(false)
        includeCustomMessage(false)
        customMessage(null)
        sendAs(null)
        commitInfoChoice('NONE')
        teamDomain('telusdigital')
      }
    }
  }.with closure
}

/**
 * Creates a job which syncs the documentation site's static files to a given s3 bucket & path.
 *
 * @param name for the deploy job
 * @param target s3 bucket & prefix to sync. Value should have a trailing slash.
 *   Ex: s3://my-bucket/path/to/www-root/
 * @param artifactsSource archited Jenkins job from which to copy static site files
 * @param closure any additional Jenkins Job DSL
 */
def createJenkinsDeployJob(String name, String target, String artifactsSource, Closure closure = {}) {
  job(name) {
    wrappers {
      colorizeOutput()
      credentialsBinding {
        usernamePassword('AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'aws-thorium-deployment')
      }
    }
    steps {
      copyArtifacts(artifactsSource) {
        includePatterns('**/*')
        buildSelector {
          latestSuccessful(true)
        }
      }
      shell("aws s3 sync ./docs/dist/docs/ ${target} --delete --acl public-read")
	}

    publishers {
      archiveArtifacts {
        pattern('docs/dist/docs/**/*')
        onlyIfSuccessful()
      }
      /*
       * TODO: add actual slack auth
       */
      slackNotifier {
        room('#nextlevel-tds')
        authToken('someAuthToken')
        authTokenCredentialId('someCredentialId')
        notifyFailure(true)
        notifyAborted(false)
        notifyNotBuilt(false)
        notifyUnstable(false)
        notifyBackToNormal(true)
        notifySuccess(false)
        notifyRepeatedFailure(false)
        startNotification(false)
        includeTestSummary(false)
        includeCustomMessage(false)
        customMessage(null)
        sendAs(null)
        commitInfoChoice('NONE')
        teamDomain('telusdigital')
      }
    }

    logRotator {
      numToKeep(5)
      artifactNumToKeep(1)
    }
  }.with closure
}

