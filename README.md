[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


# TDS

TDS, the TELUS Design system is a set of living guidelines that communicates our brand promise through our digital’ experiences. It's a holistic platform that integrates documentation, guidelines and design management and that serves as single source for digital design guidelines, code patterns and UI elements.

*TDS usage, documentation & examples:* http://cdn.telus-thorium-doc-production.s3-website-us-east-1.amazonaws.com/


## Table of Contents

* [Contributor Quick Start](#contributor-quick-start)
* [Building and Maintaining the Icon Font](#building-and-maintaining-the-icon-font)
* [Deploying a release](#deploying-a-release)


## Contributor Quick Start

Install [commitizen](https://github.com/commitizen/cz-cli) globally to be prompted to fill in any required fields to properly identify the type of commit and write a proper commit message.

    npm install -g commitizen

Clone this repository

    git clone git@github.com:telusdigital/tds.git
    cd telus-thorium-core

Symlink the core & enriched modules so changes are immediately picked up by your local documentation site instance.

    npm run setup:links

Run `init-npm.sh` so you can properly use the `redux-contentful` private package for legals

    ./enriched/scripts/init-npm.sh

Install the rest of the projects' dependencies and start up your local documentation site.

    npm install
    npm start

The documentation site will be available at [http://localhost:8081](http://localhost:8081) with Webpack Hot Module Reloading enabled.

Ready to commit changes? Validate your code by running the linters & tests:

    npm run lint
    npm test

Or even better, setup a [pre-commit git hook](https://github.com/telusdigital/tds/wiki/pre-commit-hook-for-linting).

To commit your changes use the command

    git cz

## Building and Maintaining the Icon Font

Core icons are implemented as an icon font. The source file is at `./designs/core-icons.glyphs`

The webfont build process requires [ttfautohint](https://www.freetype.org/ttfautohint/#download).

### Install ttfautohint on OS X

    brew install ttfautohint --with-python

### Install ttfautohint on Linux

    sudo apt-get install ttfautohint

### Install ttfautohint on Windows

Download the [Windows Binary](https://www.freetype.org/ttfautohint/#download) from Free Type's website.

### Icon webfont change process

1. Make a change or addition to `./designs/core-icons.glyphs`
2. Export an OTF file to `./core/fonts/core-icons.otf`
3. Execute `npm install` in the `./icons` module
4. Execute `npm run build:icons` in the `./icons` module

This process creates EOT, TTF, WOFF and WOFF2 files from `./core/fonts/core-icons.otf` and saves them in the same directory. These should be committed to Git (including the source OTF) and sent to master via pull request.

## Deploying a release

1. Use the `telus-thorium--release` Jenkins job
2. Enter the new version number (ex: 0.7.0) as a build parameter, when prompted
3. Execute the job

Jenkins will then...

* Get the latest code from `master`
* Run the linter and unit tests
* Build the project
* Generate the changelog
* Update `package.json` versions to the number you gave
* Commit those changes
* Create a version tag and release branch in Git
* Upload the CDN artifact(s) to S3
* Publish the NPM module
