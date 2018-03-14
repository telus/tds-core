#!/bin/sh

PACKAGES="$@" nightwatch -c ./config/nightwatch.conf.js --env headless
