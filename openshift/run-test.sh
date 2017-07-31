#!/bin/sh

## Runs `yarn run test` against a container on OpenShift. Used by the Test stage of the Jenkinsfile.
## Usage: ./run-test.sh telus-isomorphic-starter-kit-ui latest

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
        "command":["yarn", "run", "test:sonarqube"],
        "env":[{
          "name":"SONARQUBE_TOKEN",
          "valueFrom":{
            "secretKeyRef":{
              "key": "sonar.login",
              "name":"sonarqube-token-secret"
            }
          }
        }]
      }]
    }
  }'
