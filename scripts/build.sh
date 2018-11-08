#!/bin/sh

# Only run rollup on packages that have a rollup config
if [ -e config/rollup.config.js ]
then
  rollup -c
fi
