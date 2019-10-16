#!/bin/bash

/sauce/sc-4.5.4-linux/bin/sc -u $SAUCELABS_USERNAME -k $SAUCELABS_ACCESS_KEY &>/dev/null &

npm run dev:e2e-direct
