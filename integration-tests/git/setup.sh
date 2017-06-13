#!/bin/bash
set -e

git config commit.template ./git/commit.template

#ln -f ./git/pre-commit ./.git/hooks/pre-commit
ln -f ./git/commit-msg ./.git/hooks/commit-msg
