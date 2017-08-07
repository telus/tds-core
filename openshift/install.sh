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

# NPM
oc create secret generic npmrc-secret --from-literal=.npmrc=$(vault read -field=npmrc secret/common/npm) --dry-run -o yaml | oc apply -f -

# NPM publish
oc create secret generic npmrc-publish-secret --from-literal=.npmrc=$(vault read -field=npmrc secret/projects/npm-libraries/npm) --dry-run -o yaml | oc apply -f -

# AWS
oc create secret generic aws-client-secret --from-literal=aws.client=$(vault read -field=client secret/projects/o-design-outcomes/tds-s3) --dry-run -o yaml | oc apply -f -
oc create secret generic aws-secret-key-secret --from-literal=aws.secret=$(vault read -field=secret secret/projects/o-design-outcomes/tds-s3) --dry-run -o yaml | oc apply -f -

# Install templates
oc apply -f openshift-template.yml

# Configure build pipeline against the defined branch
oc process tds-pipeline BRANCH=${BRANCH} | oc apply -f -

# Trigger initial build
oc start-build tds-pipeline
