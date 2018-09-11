#!/bin/bash
clear

echo -e "\nDisplaying packages lerna *thinks* have been updated:\n"
yarn lerna updated

echo -e "\nIs the package you intend to publish listed above?"
OPTIONS="Yes No"
select foundPackage in $OPTIONS
do
  if [ "$foundPackage" == "Yes" ]; then
    source ./scripts/release/04-build-release.sh
    break
  elif [ "$foundPackage" == "No" ]; then
    echo -e "\nExiting due to missing package\n"
    exit
  fi
done
