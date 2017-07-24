## Contributing Guide

### Setting up your environment

After forking tds, do the following steps to get started.

```sh
# Install yarn
brew install yarn

# Install commitizen to write commit messages according to our preferred format.
yarn global add commitizen

# Clone your fork
git clone https://github.com/<your-username>/tds.git && cd tds

# Install dependencies
yarn install
```

## Developing Components

This codebase uses [react-styleguidist](https://react-styleguidist.js.org) to document components, and 
[jest](https://facebook.github.io/jest/)/[enzyme](http://airbnb.io/enzyme/) for unit testing.

```sh
# Start the docs server, check output for the location of the docs
yarn start:styleguide

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

## Pull Request Guidelines

When your branch is ready for review create a [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) 
to the main TDS repository.
