#!/usr/bin/env sh

changelog_entry () {
  echo "## ${2}\n"
  git log -1 --pretty=format:"%ad" --date=format:"%d %B %Y" ${2}
  echo "\n\nhttps://github.com/telusdigital/telus-thorium-core/releases/tag/${2}\n"
  git log ${1}..${2} --pretty=format:"- %s" --reverse | while read COMMIT_MSG; do
    sed 's/\([[(]\)\([A-Z][A-Z]*-[0-9][0-9]*\)\([])]\)/\1[\2](https:\/\/telusdigital.atlassian.net\/browse\/\2)\3/'
  done
  echo ""
}

CURR_REF=""
git for-each-ref --sort=-taggerdate --format '%(tag)' refs/tags | ( while read REF; do
  if [[ "$CURR_REF" != "" ]]; then
    changelog_entry $REF $CURR_REF
  fi
  CURR_REF=$REF
done

changelog_entry "10057350760898cb81fdc4c2019832077e2fc7af" $CURR_REF )

