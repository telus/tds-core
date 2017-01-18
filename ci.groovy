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

createJenkinsJob('telus-thorium--build', 'Pull latest code from Github then install dependencies, lint, unit test, and build artifacts') {
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

createJenkinsJob('telus-thorium--release', 'Create changelog, version tag, release branch, bump the version and publish to S3 and NPM') {
   wrappers {
    credentialsBinding {
      usernamePassword('AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'aws-thorium-deployment')
      string('THORIUM_NPM_TOKEN', 'npm-thorium-deployment')
    }
  }
  parameters {
    stringParam('THORIUM_RELEASE_VERSION', '', 'New version to create (without "v"). Ex: 1.2.3')
  }
  scm {
    git {
      remote {
        github('telusdigital/telus-thorium-core', 'ssh')
        credentials('jenkins')
        branch 'master'
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
      npm run prerelease -- \${THORIUM_RELEASE_VERSION}
      git commit -am "Changelog and version bump for v\${THORIUM_RELEASE_VERSION}"
      echo "//registry.npmjs.org/:_authToken=\\\${THORIUM_NPM_TOKEN}" | tee \${WORKSPACE}/core/.npmrc \${WORKSPACE}/enriched/.npmrc
      cd \${WORKSPACE}/core
      npm publish
      cd \${WORKSPACE}/enriched
      npm publish
      rm \${WORKSPACE}/core/.npmrc \${WORKSPACE}/enriched/.npmrc
   '''.stripIndent().trim()
  }
  publishers {
    git {
      pushOnlyIfSuccess()
      tag('origin', "v\$THORIUM_RELEASE_VERSION") {
        message("Releasing v\$THORIUM_RELEASE_VERSION")
        create()
      }
      branch('origin', "release/v\$THORIUM_RELEASE_VERSION")
    }
  }
}

createJenkinsJob('telus-thorium--redeploy-cdn', 'Deploy an existing, tagged release to S3') {
  job('telus-thorium--redeploy-cdn') {
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
          branch 'refs/tags/\$THORIUM_RELEASE_VERSION'
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

createJenkinsJob('telus-thorium--redeploy-npm', 'Deploy an existing, tagged release to NPM') {
  job('telus-thorium--redeploy-npm') {
    wrappers {
      credentialsBinding {
        string('THORIUM_NPM_TOKEN', 'npm-thorium-deployment')
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
          branch 'refs/tags/\$THORIUM_RELEASE_VERSION'
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
        echo "//registry.npmjs.org/:_authToken=\\\${THORIUM_NPM_TOKEN}" | tee \${WORKSPACE}/core/.npmrc \${WORKSPACE}/enriched/.npmrc
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

def createJenkinsJob (String name, String desc, Closure closure) {
  job(name) {
    description(desc)
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
    description("Deploy the TDS documentation website to ${target}")
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

