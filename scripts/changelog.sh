#!/usr/bin/env sh

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
# Changelog contents are directed to STDOUT.
#
###############################################################################

# changelog_entry is a function to build the markdown for one version's
# entry in the changelog. Takes all commit messages for the ending ref
# which aren't also available in the starting ref. Usually those refs
# are 2 version tags in chronological commit order.
#
# Param 1: Starting tag, ex: vA.B.C
# Param 2: Ending tag, ex: vX.Y.Z
changelog_entry () {
  echo "## ${2}\n"
  # Format the release date like 01 January 2017
  git log -1 --pretty=format:"%ad" --date=format:"%d %B %Y" ${2}
  echo "\n\nhttps://github.com/telusdigital/telus-thorium-core/releases/tag/${2}\n"
  # Take all commits in ref 2 which aren't in ref 1.
  git log ${1}..${2} --pretty=format:"- %s" --reverse | while read COMMIT_MSG; do
    # Convert JIRA ids to links
    sed 's/\([[(]\)\([A-Z][A-Z]*-[0-9][0-9]*\)\([])]\)/\1[\2](https:\/\/telusdigital.atlassian.net\/browse\/\2)\3/'
  done
  echo ""
}

# Process tags in reverse chronological order.
CURR_REF=""
git for-each-ref --sort=-taggerdate --format '%(tag)' refs/tags | ( while read REF; do
  if [[ "$CURR_REF" != "" ]]; then
    changelog_entry $REF $CURR_REF
  fi
  CURR_REF=$REF
done

changelog_entry "10057350760898cb81fdc4c2019832077e2fc7af" $CURR_REF )

