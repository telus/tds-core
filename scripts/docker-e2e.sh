#!/bin/sh

## Used by package.json to pass arguments into the docker-compose up command.
mode=$@ docker-compose up --abort-on-container-exit e2e
