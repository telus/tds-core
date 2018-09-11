#!/bin/bash

# TODO: check the count of args; if count == 0, show help
# TODO: validate 1 required arg; package name

# Publish with lerna. Lerna will prompt for confirmation then will generate changelogs, generate versions, generate tags, and publish the package(s) to npm. You can also selectively deploy packages.

# yarn lerna:publish   # use the lerna updated results
# yarn lerna:publish @tds/core-select  # only publish core-select


# If another component was merged in and released before you, the publish command may not detect any changes in your package. If that happens, you can use “--since” to tell lerna how far back in history to search for changes to the package(s).

# yarn lerna:publish @tds/core-select --since @tds/core-select@1.0.2


# You may run into the case where we have made in mistake in our commit messages, which means conventional commits may get the new version wrong. In that case you will have to specify which packages lerna should publish.

# yarn lerna publish --force-publish=@tds/core-component,@tds/core-component-2
