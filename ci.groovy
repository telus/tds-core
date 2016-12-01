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
 */

/**
 * telus-thorium--configure is the first job in the build pipeline. It's
 * responsible for retrieving the code from Github and installing
 * all dependencies.
 */
createJenkinsJob('telus-thorium--configure') {
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
	shell '''
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
  }

  publishers {
    archiveArtifacts {
      pattern('**/*')
      onlyIfSuccessful()
    }

    downstream 'telus-thorium--test'
  }
}

/**
 * telus-thorium--test verifies the integrity of the code by executing
 * linters and tests.
 */
createJenkinsJob('telus-thorium--test') {
  steps {
    copyArtifacts('telus-thorium--configure') {
      buildSelector {
        latestSuccessful(true)
      }
    }
    shell("npm run lint")
    shell("npm test")
  }

  publishers {
    downstream 'telus-thorium--build'
  }
}

/**
 * telus-thorium--build takes tested/verified Thorium source code and builds
 * the documentation site's static HTML, CSS, JS, and assets.
 */
createJenkinsJob('telus-thorium--build') {
  steps {
    copyArtifacts('telus-thorium--configure') {
      buildSelector {
        latestSuccessful(true)
      }
    }
    shell("npm run build")
  }

  publishers {
    archiveArtifacts {
      pattern('docs/dist/docs/**/*')
      onlyIfSuccessful()
    }
  }
}

/*
 *
 * Jobs to deploy files.
 *
 */

/**
 * telus-thorium--deploy-dev copies the static documentation site to the
 * development environment web server. It takes those files from its
 * upstream job, which is telus-thorium--build.
 */
createJenkinsDeployJob('telus-thorium--deploy-dev', 'jenkins@example.com:/var/www/versions/dev/', 'telus-thorium--build') {
  triggers {
    upstream('telus-thorium--build')
  }
}

/**
 * telus-thorium--deploy-qa copies the static site contents to the QA
 * web server. It takes those artifacts from its upstream job, which
 * is dev.
 */
createJenkinsDeployJob('telus-thorium--deploy-qa', 'jenkins@example.com:/var/www/versions/qa/', 'telus-thorium--deploy-dev') {
  triggers {
    upstream('telus-thorium--deploy-dev')
  }
}

/**
 * telus-thorium--deploy-stage copies the static site contents to the Staging
 * web server. It takes those artifacts from its upstream job, which is QA.
 */
createJenkinsDeployJob('telus-thorium--deploy-stage', 'jenkins@example.com:/var/www/versions/stage/', 'telus-thorium--deploy-qa')

/**
 * telus-thorium--deploy-prod copies the static site contents to the production
 * web server. It takes those artifacts from the last successful staging
 * deployment.
 */
createJenkinsDeployJob('telus-thorium--deploy-prod', 'jenkins@example.com:/var/www/docs/', 'telus-thorium--deploy-stage')

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

def createJenkinsDeployJob(String name, String target, String artifactsSource = 'upstream', Closure closure = {}) {
  job(name) {
    wrappers {
      colorizeOutput()
      /*
       * TODO: configure actual credentials for SSH/rsync when instances are ready
       */
      sshAgent('thorium-deployment-key')
    }
    steps {
      copyArtifacts(artifactsSource) {
        buildSelector {
          latestSuccessful(true)
        }
      }
      /*
       * TODO: configure actual credentials for SSH/rsync when instances are ready
       */
      shell("rsync --delete -acvz docs/dist/docs/ ${target}")
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