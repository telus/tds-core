# Contributing to TDS - developer guide

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.JS](https://nodejs.org), >= 6.0
* [Yarn](https://yarnpkg.com) (We use yarn for dependency management instead of npm.)

## Set up your environment

To get started, fork [the repository](https://github.com/telusdigital/tds-core) and create your branch from master.  
Learn [how to fork a repository on GitHub](https://help.github.com/articles/fork-a-repo/).

After forking TDS, the following steps will get you started:

```bash
# Clone your fork
git clone <your fork> && cd tds

# Bootstrap your dev environment
yarn bootstrap
```

We use [Prettier](https://prettier.io/), an opinionated code formatter that integrates with your text editor. Configure [your
IDE or text editor](https://prettier.io/docs/en/editors.html) to format your code automatically on save, and Prettier will
adjust your syntax in accordance with the TDS conventions.

## Set up your dev environment

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

Read the [codebase overview](./codebase-overview.md) to understand the structure of the codebase and the conventions being followed.

If you need to create a new component, run the scaffolding script to generate the basic folder structure, React component,
documentation, and base unit tests for a new component.

```bash
yarn scaffold MyComponent
```

## Make a commit

We use [commitizen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/marionebl/commitlint) to
ensure conventional commit messages, which supports our publishing workflow and versioning scheme.

[husky](https://github.com/typicode/husky) is used to run precommit tasks on staged files, which includes code formatting, linting, and tests.
You will not be able to make a commit until the precommit tasks pass. We also have a prepush hook to run a full build before pushing your code.

Automated component versioning is facilitated by the [Conventional Commits specification](https://conventionalcommits.org/), so you must
be deliberate when choosing the type of commit. For example, only use the "feat" type if you are adding a backwards-compatible feature
to a component.

```bash
# Stage your files and make a commit using commitizen
yarn cz
```

## Make a Pull Request

Before making your Pull Request, we have a pre-pr tasks as a final verification step. You may make your PR only after its successful
completion.

Paste the full output of the pre-pr task into the body of your PR so that a maintainer/publisher can verify when publishing.

```bash
yarn prepr
```

The pre-pr task will show you the version change that will result from your changeset. If the output is unexpected, you may need
to adjust your commit messages before making your PR. See the [Conventional Commits spec FAQ](https://conventionalcommits.org/#faq) for more info on correcting mistakes.
