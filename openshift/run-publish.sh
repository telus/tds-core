#!/bin/sh

## Runs `npm publish` against a container on OpenShift. Used by the Release stage of the Jenkinsfile.
## Usage: ./run-publish.sh tds latest

NAME=${1}
VERSION=${2:-latest}
IMAGESTREAM=`oc get imagestream ${NAME} -o='jsonpath={.status.dockerImageRepository}'`

oc run ${NAME}-${VERSION} \
  --image=${IMAGESTREAM}:${VERSION} \
  --rm=true \
  --attach=true \
  --restart=Never \
  --overrides='{
    "apiVersion":"v1",
    "spec":{
      "containers":[{
        "name": "'${NAME}'-'${VERSION}'",
        "image": "'${IMAGESTREAM}':'${VERSION}'",
        "command":["npm", "run", "deploy:package"]
      }]
    }
  }'
