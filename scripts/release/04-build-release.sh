#!/bin/bash

# Build the package(s) you want to release

# TODO: ask the user if they want to build all or just one

echo -e "\nWhat do you want to build?"
select buildTarget in "All packages" "A single package"
do
  if [ "$buildTarget" == "All packages" ]; then
    yarn build
    break
  elif [ "$buildTarget" == "A single package" ]; then
    # ask the user for what package they want to build
    echo -n -e "\nType the name of the package you would like to build (e.g. @tds/core-select): "
    read buildPackage
    yarn build $buildPackage
    break;
  fi
done
