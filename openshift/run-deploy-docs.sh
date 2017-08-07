#!/bin/sh

## Runs `yarn deploy:docs` against a container on OpenShift. Used by the Deploy stage of the Jenkinsfile.
## Usage: ./run-deploy-docs.sh tds latest staging

NAME=${1}
VERSION=${2:-latest}
ENV=${3:-staging}
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
        "env":[{
          "name":"AWS_ACCESS_KEY_ID",
          "valueFrom":{
            "secretKeyRef":{
              "key": "aws.client",
              "name":"aws-client-secret"
            }
          }
        },{
          "name":"AWS_SECRET_ACCESS_KEY",
          "valueFrom":{
            "secretKeyRef":{
              "key": "aws.secret",
              "name":"aws-secret-key-secret"
            }
          }
        }],
        "command":["yarn", "deploy:docs", "--", "'${ENV}'"]
      }]
    }
  }'
