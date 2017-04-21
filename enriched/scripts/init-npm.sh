#!/bin/sh
set -o nounset -o errexit

## Copy shared .npmrc read token for pulling TelusDigital NPM libraries

cd `dirname $0`

if test -e ../.npmrc
then
  exit 0
fi

git clone git@github.com:telusdigital/npm-environment-scripts.git
cp npm-environment-scripts/resources/npmrc ../.npmrc
rm -rf npm-environment-scripts
