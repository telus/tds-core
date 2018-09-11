#!/bin/bash
clear
echo -e "Setting up environment...\n"

# Change the present working directory to the root, if currently in script/release/
if [[ "$PWD" =~ .*scripts\/release$ ]]
then
  echo "Changing directory to root of repository"
  cd ../../
fi

# Update the git repository
# git checkout master && git pull && git fetch origin --tags && yarn
git fetch origin --tags && yarn

# Upon successful completion of all these tasks (error level 0), execute the next script
if [ $? -eq 0 ]
then
  echo -e "\nDone. Environment setup for release.\n"
  source ./scripts/release/02-get-npm-token.sh
else
  echo -e "\nExiting due to error"
fi
