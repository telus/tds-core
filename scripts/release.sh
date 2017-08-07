#!/bin/sh

set -e

VERSION_NUM="$1"
VERSION_TAG="v$1"

#
# Validate the given semantic version number.
#
if ! [[ "$VERSION_NUM" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Please give a semantic version number, such as 1.2.3. "
  echo "Usage: yarn release -- <version>"

  exit 1
fi

#
# Scan git tags to ensure the given semantic version number doesn't already exist.
#
if [[ `git tag | grep $VERSION_TAG` ]]; then
  echo "Version ${VERSION_TAG} already exists."
  echo "Usage: yarn release -- <version>"

  exit 1
fi

#
# Make sure there are no uncommitted local changes.
#
if [[ `git status --porcelain` ]]; then
  echo "You have uncommitted changes. Either commit them, revert them, or stash them and then try again."
  exit 1
fi

#
# Make sure codebase is in working order.
#
yarn precommit

#
# Bump the version. Don't create a tag yet so that we can add the Changelog into the commit.
#
yarn version --no-git-tag-version --new-version $VERSION_NUM

#
# Update the Changelog.
#
yarn release:changelog

#
# Prompt before pushing to give you a chance to make any manual corrections.
#
read -p "Are you ready to make the release? (y/n) " -r
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  exit 1
fi

#
# Create a commit and tag and push!
#
git add CHANGELOG.md package.json

git commit -m "$VERSION_TAG"
git tag $VERSION_TAG

git push origin master
git push origin $VERSION_TAG
