#!/usr/bin/env expect

#
# Usage: yarn prepr
#
# This script will give insight into the result of publishing given the current commit history. It is intended to be run
# before making a Pull Request to ensure its integrity.

log_user 0
spawn npx lerna version --conventional-commits
log_user 1

expect "Are you sure you want to create these versions?"
send "n\r"

spawn echo "\nIf this is not what you expected, ensure that your commit messages follow the Conventional Commits specification 'https://conventionalcommits.org' and try again.`"
