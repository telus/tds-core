#!/bin/bash

clear
echo -e "Retreiving npm token...\n"

# Ensure shippy is installed and up to date
yarn global add @telusdigital/shippy-cli

shippy login &&
shippy environment main &&
shippy project npm-libraries &&
shippy get secret npmrc-dev --common --field npmrc > .npmrc

if [ $? -eq 0 ]
then
  echo -e "Success!"
else
  echo -e "\nExiting due to error"
fi

echo -e "\nDone."
