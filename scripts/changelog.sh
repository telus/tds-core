#!/usr/bin/env bash

###############################################################################
# Script to automatically construct a changelog from Git commit messages and
# semantic versioning tags. Expects to be executed within a Git repository.
#
# Tags should be formatted like "vX.Y.Z" where X is the major version number,
# Y is the minor version number, and Z is the patch version number.
#
# Commit messages should be nicely formatted with a single, informative
# sentence on the first line. That string will appear in the changelog.
#
# JIRA id numbers can be included using parenthesis or square brackets. They'll
# automatically be linked to the JIRA issue page. Example commit msg:
#
#     Automate changelog generation [BCM-211]
#
#     - Add a shell script to generate a changelog from Git history
#     - Document how to use the script
#
# You can optionally pass a version for HEAD as the first CLI parameter, in
# order to generate a changelog for the most recent commits before actually
# tagging the release.
#
# Changelog contents are directed to STDOUT.
#
###############################################################################

# changelog_entry is a function to build the markdown for one version's
# entry in the changelog. Takes all commit messages for the ending ref
# which aren't also available in the starting ref.
#
# Param 1: Starting ref
# Param 2: Ending ref
# Param 3: Entry version
changelog_entry () {
  echo -e "## ${3}\n"
  # Format the release date like 01 January 2017
  git log -1 --pretty=format:"%ad" --date=format:"%d %B %Y" ${2}
  echo -e "\n\nhttps://github.com/telusdigital/telus-thorium-core/releases/tag/${3}\n"
  # Take all commits in ref 2 which aren't in ref 1.
  git log ${1}..${2} --pretty=format:"- %s" --reverse | while read COMMIT_MSG; do
    # Convert JIRA ids to links
    sed 's/\([[(]\)\([A-Z][A-Z]*-[0-9][0-9]*\)\([])]\)/\1[\2](https:\/\/telusdigital.atlassian.net\/browse\/\2)\3/'
  done
  echo ""
}

CURR_REF=""
CURR_VER="$1"
if [[ "$CURR_VER" != "" ]]; then
  # Optionally pass a version for HEAD via CLI. Useful if you want to generate a changelog before
  # tagging a release.
  CURR_REF=$(git rev-parse HEAD)
fi

# Process tags in reverse-chronological order
git for-each-ref --sort=-taggerdate --format '%(tag)' refs/tags | ( while read REF; do
  if [[ "$CURR_REF" != "" ]]; then
    changelog_entry $REF $CURR_REF $CURR_VER
  fi
  CURR_REF=$REF
  CURR_VER=$REF
done

# Generate an entry for the changes from the initial commit to the first tag.
changelog_entry "10057350760898cb81fdc4c2019832077e2fc7af" $CURR_REF $CURR_VER)

