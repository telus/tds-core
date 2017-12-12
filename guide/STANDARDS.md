<!-- 
  NOTE: this is a temporary location for coding standards
  TODO: add design standards and tooling
-->

# Standards at TDS

When it comes to writing code, documentation, or Sketch assets, we have internal standards that help keep everything consistent and highly maintainable.

## Documentation standards

<!-- 
  TODO: include markdown, code snippet rules (spaces over tabs, etc)
  language, bevity, etc
-->

## Design standards

<!-- TODO: make these -->

## Coding standards

### Set up your environment

After forking TDS, do the following steps to get started.

```sh
# Install yarn
brew install yarn # alternatively: npm i -g yarn

# Install commitizen to write commit messages according to our preferred format.
yarn global add commitizen

# Clone your fork
git clone https://github.com/<your-username>/tds.git && cd tds

# Install dependencies
yarn install
```

### Develop Components

This codebase uses [react-styleguidist](https://react-styleguidist.js.org) to document components, and
[jest](https://facebook.github.io/jest/)/[enzyme](http://airbnb.io/enzyme/) for unit testing.

See the [Coding Standards](https://github.com/telusdigital/tds/wiki/Coding-Standards) guide to know more about coding
conventions.

```sh
# Start the docs server, check output for the location of the docs
yarn dev

# Open a new terminal window

# Start the test watcher
yarn test:watch
```

After this, you can open up a browser to view the documentation site (usually <http://localhost:6060>). The browser will
automatically refresh when there are changes to any of the source files.

### When you are ready to make a commit

```sh
# Run build, linting and tests
yarn precommit

# Make a commit using commitizen
git cz
```
