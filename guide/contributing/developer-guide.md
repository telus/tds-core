# Developer guide

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.JS](https://nodejs.org), >= 6.0
* [Yarn](https://yarnpkg.com) (We use yarn for dependency management instead of npm.)

## Set up your environment

After forking TDS, the following steps will get you started:

```bash
# Clone your fork
git clone <your fork> && cd tds

# Install dependencies
yarn
```

Learn more about [commitizen](https://github.com/commitizen/cz-cli).

We use [Prettier](https://prettier.io/), an opinionated code formatter that integrates with your text editor. Configure [your
IDE or text editor](https://prettier.io/docs/en/editors.html) to format your code automatically on save, and Prettier will
adjust your syntax in accordance with the TDS conventions.

## Set up your TDS dev environment

```bash
# Start the styleguidist dev server, check output for the location of the docs
yarn dev

# Open a new terminal window

# Start the test watcher, it will rerun tests based on the files you modify
yarn test:watch
```

After this, you can open up a browser to view the documentation site (usually <http://localhost:6060>). The browser will 
automatically refresh when there are changes to any of the source files.

## Write some code

Read the [codebase overview](/codebase-overview.md) to understand the structure of the codebase and the conventions being followed.

If you need to create a new component, run the scaffolding script to generate the basic folder structure, React component, 
documentation, and base unit tests for a new component. 

```bash
yarn scaffold MyComponent
```

## Make a commit

```bash
# Run linting, tests, and builds
yarn precommit

# If the precommit is successful, you are good to make your commit!

# Stage your files and then make a commit using commitizen
git cz
```
