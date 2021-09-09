#!/bin/sh
set -o nounset -o errexit

## Installs the build pipeline for a given branch (default: master) in your currently selected OpenShift project
## See: README.md

BRANCH=${1:-master}

cd `dirname $0`

# Github Token
shippy get secret github --common --field=ssh-key > id_rsa
oc create secret generic github-secret --from-file=ssh-privatekey=id_rsa --dry-run -o yaml | oc apply -f -
rm id_rsa

# NPM Read and Publish Token
shippy project npm-libraries
oc create secret generic npmrc-secret --from-literal=.npmrc=$(shippy get secret npm --field=npmrc) --dry-run=client -o yaml | oc apply -f -

# AWS
shippy project o-design-outcomes
oc create secret generic aws-client-secret --from-literal=aws.client=$(shippy get secret tds-s3 --field=client) --dry-run=client -o yaml | oc apply -f -
oc create secret generic aws-secret-key-secret --from-literal=aws.secret=$(shippy get secret tds-s3 --field=secret) --dry-run=client -o yaml | oc apply -f -

# Install templates
oc apply -f openshift-template.yml

# Configure build pipeline against the defined branch
oc process tds-pipeline BRANCH=${BRANCH} | oc apply -f -

# Trigger initial build
oc start-build tds-pipeline
