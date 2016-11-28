# Thorium

Thorium, the TELUS Design system is a set of living guidelines that communicates our brand promise through our digital’ experiences. It's a holistic platform that integrates documentation, guidelines and design management and that serves as single source for digital design guidelines, code patterns and UI elements.

## Contributor Quick Start

Clone this repository

    git clone git@github.com:telusdigital/telus-thorium-core.git
    cd telus-thorium-core

Symlink the core & enriched modules so changes are immediately picked up by your local documentation site instance.

    npm run setup:links

Install the rest of the projects' dependencies and start up your local documentation site.

    npm install
    npm run build
    npm run start

The documentation site will be available at `http://localhost:8081` with Webpack Hot Module Reloading enabled.

For more information about contributing, please see the [Governance - Contribution page](/docs/5-Governance/2-contributing.md).

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
3. Execute `npm run build:icons` in the `telus-thorium-core` module

This process creates EOT, TTF, and WOFF files from `./core/fonts/core-icons.otf` and saves them in the same directory. These should be committed to Git (including the source OTF) and sent to master via pull request.

The next time you run `npm build`, the re-generated icons will be picked up by the documentation site.

## Deploying a release

### Step 1: bump version numbers

[Bump the version](https://docs.npmjs.com/cli/version) in all package.json files:

    package.json
    core/package.json
    docs/package.json
    enriched/package.json

Commit this change to Git.

### Step 2: build assets

Run a fresh build to make sure all dist files are up to date:

    /path/to/telus-thorium-core $ npm run build

### Step 3: release to NPM

Use the [NPM publish command](https://docs.npmjs.com/cli/publish) to upload core & enriched to NPM:

    /path/to/telus-thorium-core/core $ npm publish
    /path/to/telus-thorium-core/enriched $ npm publish

In order for the NPM deployment to work, you must be logged in to NPM as a collaborator of each Node module. See ""[Publishing NPM Packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)".

### Step 4: release to CDN

Use the `deploy:cdn` script to upload each module's dist files to S3:

    npm run deploy:cdn

In order for the CDN deployment to succeed, your system must be [configured with valid AWS credentials](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)