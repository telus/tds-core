#!/usr/bin/env expect

#
# Usage: npm run prepr
#
# This script will give insight into the result of publishing given the current commit history. It is intended to be run
# before making a Pull Request to ensure its integrity.

log_user 0
spawn npx lerna version --conventional-commits --amend
log_user 1

set PROMPT [ expect "Are you sure you want to create these versions?"]
if { $PROMPT != "" } {
  send "n\r"
}

puts "\nIf this is not what you expected, ensure that your commit messages follow the TDS commit types guide on this page: https://tds.telus.com/contributing/developer-guide.html and try again."
