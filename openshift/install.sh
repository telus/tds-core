#!/bin/sh
set -o nounset -o errexit

## Installs the build pipeline for a given branch (default: master) in your currently selected OpenShift project
## See: README.md

BRANCH=${1:-master}

cd `dirname $0`

# Github Token
vault read -field=ssh-key secret/common/github > id_rsa
oc create secret generic github-secret --from-file=ssh-privatekey=id_rsa --dry-run -o yaml | oc apply -f -
rm id_rsa

# Newrelic
oc create secret generic newrelic-license-secret --from-literal=newrelic-license=$(vault read -field=license-key secret/common/newrelic) --dry-run -o yaml | oc apply -f -

# NPM
oc create secret generic npmrc-secret --from-literal=.npmrc=$(vault read -field=npmrc secret/common/npm) --dry-run -o yaml | oc apply -f -

# SonarQube
oc create secret generic sonarqube-token-secret --from-literal=sonar.login=$(vault read -field=sonar_token secret/common/sonarqube) --dry-run -o yaml | oc apply -f -

# Install templates
oc apply -f openshift-template.yml

# Configure build pipeline against the defined branch
oc process telus-isomorphic-starter-kit-pipeline BRANCH=${BRANCH} | oc apply -f -

# Trigger initial build
oc start-build telus-isomorphic-starter-kit-pipeline
