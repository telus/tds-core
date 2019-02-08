#!/bin/sh
set -o nounset -o errexit

# Start a container build against a container on OpenShift. Used by the Build stage of the Jenkinsfile.
# Usage: ./run-build.sh telus-isomorphic-starter-kit my-tag

NAME=${1}
VERSION=${2}
COMMIT=${3:-''}

if oc get istag ${NAME}:${VERSION} > /dev/null 2>&1
then
  echo "Image tag ${NAME}:${VERSION} exists... skipping build"
  exit 0
fi

oc start-build ${NAME} --follow --commit=${COMMIT}

oc tag ${NAME}:latest ${NAME}:${VERSION}
