#!/usr/bin/env bash

CHANGELOG_FILE="CHANGELOG.md"
CHANGELOG_PAGE="docs/src/html/1-About/4-changelog.md"
VERSION_NUM="$1"
VERSION_TAG="v$1"

#
# Validate the given semantic version number
#
if ! [[ "$VERSION_NUM" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Please give a semantic version number like 1.2.3"
  exit 1
fi

#
# Scan Git tags to ensure the given semantic version number doesn't already
# exist.
#
git tag | grep $VERSION_TAG | while read EXISTING_TAG; do
  echo "Version ${VERSION_TAG} already exists"
  exit 1
done

#
# Update the changelog markdown file and HTML page
#
echo "" > $CHANGELOG_FILE
echo "---\ntitle: Changelog\ntemplate: doc.jade\n---\n" > $CHANGELOG_PAGE
scripts/changelog.sh $VERSION_NUM | tee -a $CHANGELOG_FILE $CHANGELOG_PAGE

#
# Bump the version in all package.json files.
#
npm version --no-git-tag-version $VERSION_NUM
cd core
npm version --no-git-tag-version $VERSION_NUM
cd ../docs
npm version --no-git-tag-version $VERSION_NUM
cd ../enriched
npm version --no-git-tag-version $VERSION_NUM

cd ..
npm run editjson -- -i enriched/package.json process \
  "data.peerDependencies['telus-thorium-core']=\"^${VERSION_NUM}\"; data.devDependencies['telus-thorium-core']=\"^${VERSION_NUM}\"; data;" \
  -o enriched/package.json --outfmt stringify

npm run editjson -- -i docs/package.json process \
  "data.devDependencies['telus-thorium-core']=\"^${VERSION_NUM}\"; data.devDependencies['telus-thorium-enriched']=\"^${VERSION_NUM}\"; data" \
  -o docs/package.json --outfmt stringify
