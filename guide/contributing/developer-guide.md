# Contributing to TDS - developer guide

## Contents

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Set up your dev environment](#set-up-your-dev-environment)
- [Write some code](#write-some-code)
- [Using lerna](#using-lerna)
  - [How lerna works within TDS](#how-lerna-works-within-TDS)
  - [Helpful lerna commands](#helpful-lerna-commands)
- [Building with quality](#building-with-quality)
  - [Accessibility](#accessibility)
  - [Unit tests](#unit-tests)
  - [Running end-to-end (e2e) tests with Nightwatch](#running-end-to-end-e2e-tests-with-Nightwatch)
- [Make a commit](#make-a-commit)
  - [Versioning via commits](#versioning-via-commits)
  - [Commit format](#commit-format)
  - [Commit types](#commit-types)
  - [Use commitizen](#use-commitizen)
  - [Example commit messages](#example-commit-messages)
- [Make a Pull Request](#make-a-Pull-Request)
- [References](#references)

## Setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.JS](https://nodejs.org) v8
- [Docker and Docker Compose](https://www.docker.com/get-started)

To get started, clone [the TDS repository](https://github.com/telusdigital/tds-core) and create your branch from master.
TELUS Digital developers and partners can push branches to the repository directly. If you do not have write access, you may create a fork instead.

GitHub has primers on [how to fork a repository](https://help.github.com/articles/fork-a-repo/) and [how to clone a repository](https://help.github.com/articles/cloning-a-repository/).

Before getting started, you should also install [Docker](https://github.com/telus/reference-architecture/blob/master/delivery/docker.md). This facilitates our e2e tests to ensure they are tested in a reproducible environment, and having all tests pass is essential to a successful TDS contribution. If Docker is not installed, the following steps will not complete successfully.

#### Codebase

After setting up TDS locally, the following steps will get you started:

```bash
# Bootstrap your dev environment
# This will install node and Gitbook dependencies,
# set up symlinks for lerna, build components for tests,
# and build docker containers
npm run bootstrap

# If pulling in changes on an outdated repository, or after rebasing,
# we recommend bootstrapping again. This will install node dependencies,
# set up symlinks for lerna, and build components for tests
npm run bootstrap:quick
```

For more information on lerna, see [using lerna](#using-lerna).

#### Text editor

We use [Prettier](https://prettier.io/), an opinionated code formatter that integrates with your text editor. Configure [your
IDE or text editor](https://prettier.io/docs/en/editors.html) to format your code automatically on save, and Prettier will
adjust your syntax in accordance with the TDS conventions.

For Visual Studio Code users, we recommend saving the following config in **.vscode/settings.json**

```json
{
  "eslint.enable": true,
  "eslint.options": {
    "configFile": "config/eslint.config.js"
  },
  "editor.formatOnSave": true
}
```

### Set up your dev environment

When developing components, we recommend using our documentation (React Styleguidist) as a testing sandbox.

```bash
# Start the styleguidist dev server, check output for the location of the docs
npm run dev

# Open a new terminal window

# Start the test watcher, it will rerun tests based on the files you modify
npm run test:watch
```

After this, you can open up a browser to view the documentation site:

- TDS Core: <http://localhost:6060>
- TDS Community <http://localhost:6061>

The browser will automatically refresh when there are changes to any of the source files.

## Write some code

Read the [codebase overview](./codebase-overview.md) to understand the structure of the codebase and the conventions being followed.

If you need to **create a new component**, run the scaffolding script to generate the basic folder structure, React component,
documentation, and base unit tests for a new component.

```bash
npm run scaffold MyComponent
```

## Using lerna

TDS uses [lerna](https://github.com/lerna/lerna/) to build and publish component packages, and manage dependencies throughout the project. It's important to have
an understanding of lerna's essential features in order to write code for components for tds-core or tds-community.

### How lerna works within TDS

When you clone tds-core or tds-community and run `npm run bootstrap`, it runs an important command: `npx lerna bootstrap --hoist` that scans all the packages in the repository
and sets up symbolic links to them within `node_modules`, treating the repository as a local registry for all linked packages. `npm run bootstrap` includes a build step for
Rollup to build all packages into their respective `dist` directories. Building is important in order for tests to pass, for example, `core-expand-collapse` has `core-text` as
a dependency; `core-text` must be built locally in order for `core-expand-collapse` to consume it.

It is normal to have multiple packages in tds-core reuse dependencies, such as `@tds/core-text` being a dependency of
`@tds/core-expand-collapse` and `@tds/core-radio`. On publish, lerna assures all dependents of `@tds/core-text` are using
its latest version since it is part of the same [monorepo](https://en.wikipedia.org/wiki/Monorepo).

### Helpful lerna commands

#### Adding dependencies to component packages

- Use lerna to add dependencies by specifying a scope for the target component package
- Using the command regularly will add packages as `dependencies`
- Using the command with `--dev` will add packages as `devDependencies`
  - **Note:** if adding a private module in this monorepo, add it as a devDependency, otherwise consumers of the component won't be able to download unpublished dependencies

```sh
npx lerna add package-to-add --scope @tds/core-component-name [--dev]
```

#### Seeing which packages will get published

Component packages are versioned automatically based on [conventional commits](https://conventionalcommits.org/). To ensure appropriate versions are applied,
follow our guide on how to [make a commit](#make-a-commit).

- To preview which components will get published: `npx lerna updated`
- To preview what the next version bump for changed components will be: `npm run prepr`
  - **Note:** this command will be run automatically in pull requests, and TDS Bot will add a comment to the pull request showing what version bumps will occur on publish

#### Publishing components

Components are published via our continuous integration pipeline. Do not try publishing components yourself. TDS Core components are the responsibility
of the TDS Core team, and TDS Community components are the responsibility of the [Digital Platform Ambassadors][dpa].

```sh
npx lerna publish --conventional-commits
```

#### Troubleshooting build issues

If you see several errors related to components not building, it could be that lerna had set up `node_modules` directories within each package during `npm install`.
Try clearing those directories and build again.

```sh
npx lerna clean --yes
npm run build
```

If this does not resolve your issue, there could be an issue with duplicate dependencies throughout the repository with mismatched versions.
To solve this, we use [lerna-update-wizard](https://www.npmjs.com/package/lerna-update-wizard) using the command `npx lernaupdate --dedupe` to
assure duplicate packages are on the same version.

## Building with quality

Here is a TDS Component quality checklist:

- Is the component accessible, or makes direct suggestions to building accessible experiences?
- Is the component's functionality and rendering tested? Are there unit tests and end-to-end tests?
- Does it work properly in mobile browsers, on mobile devices?
- Is the component documented?
- Are acceptance criteria and de

The following sections go into greater detail on how to fulfill the component quality checklist.

### Accessibility

Accessibility mindfulness is essential when building design system components.

<!-- TODO: complete section -->

### Unit tests

All TDS components use a combination of [Jest](https://jestjs.io/) tests and [Nightwatch](http://nightwatchjs.org/) visual regression tests. As part of our Git hooks, these tests are run automatically on commit and on push. However, there are cases where you may want to run these tests manually, or require the ability to update test snapshots that are no longer up to date with the component you're working on.

TDS follows the [Reference Architecture standard on writing unit tests](ra-unit).

#### Writing unit tests with Jest

Jest unit tests are integrated into all TDS React components. These are run to ensure that a component's functionality has not been compromised by a change. These unit tests will check the component's different states by providing different sets of prop values, and compare them to a set of pre-defined criteria. It is important to create new unit tests whenever a feature is added or significantly modified to ensure the stability of the component.

If a component's structure has significantly changed, it may require a snapshot update with the update command listed below. However, it is important to use discretion here, as a failing snapshot may be the symptom of a larger problem with the component. (Such as unexpected extra/missing classes or unintended shuffling of the component's DOM structure) _Always review the log of a snapshot failure before running the update command._ When in doubt, reach out to our support avenues.

```bash
# Manually run unit tests on modified components
npm run test -- [opts]

# Options:
# -a: Run tests on all components regardless of if they were recently modified.
# -u: Update test snapshots. (Useful if the component's structure has changed)
```

### Running end-to-end (e2e) tests with Nightwatch

Nightwatch e2e tests are run to ensure that no unexpected visual regressions were made to a component. These tests are run automatically on all components with no test writing required on the developer's part.

```bash
# Manually run visual regression tests on modified components
npm run test:e2e -- [opts]

# Options:
# -a: Run tests on all components regardless of if they were recently modified.
# -u: Update test screenshots. (Useful if the component was purposefully changed visually)
```

## Make a commit

To view a guide on how TDS components are versioned, see our [FAQ](../faq.md#how-is-tds-versioned).
To view TELUS standards for commit format, see our [contribution model][ra-contribute] on the Reference Architecture.

We use [commitizen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/marionebl/commitlint) to
ensure conventional commit messages, which supports our publishing workflow and versioning scheme.

[husky](https://github.com/typicode/husky) is used to run precommit tasks on staged files, which includes code formatting, linting, and tests.
You will not be able to make a commit until the precommit tasks pass. We also have a prepush hook to run a full build before pushing your code.

### Versioning via commits

Automated component versioning is facilitated by the [Conventional Commits specification](https://conventionalcommits.org/),
**it is important to be deliberate when choosing the type of commit** as commits will determine version bumps and
changelogs.

The commit type determines what version a component will bump towards, and will be included in changelogs. Use the `feat`
and `fix` types sparingly as these two types will appear in changelogs. For most other commits such as fixups or configurations,
use the `chore` type.

For example, the [changelog for core-button](https://github.com/telus/tds-core/blob/3aa8d4e8ed4bfa480cb9cc205fa6d5b5b733b861/packages/Button/CHANGELOG.md) has an entry under version 2.1.0 that reads:

> Features  
> core-button: add forwardRef (fd8f181)

This was parsed from a [commit](https://github.com/telus/tds-core/commit/fd8f181) using the `feat` type.

### Commit format

Given the commit format:

```sh
type(scope): subject

body

footer
```

Use the `type` field to inform lerna what Conventional Commit you intend to use:

- For breaking changes, use the **feat** commit type with body text that begins with the phrase `BREAKING CHANGE:` (see [commit example](https://github.com/telus/tds-core/commit/0ff9dba))
- For minor changes, use the **feat** commit type
- For patches, use the **fix** commit type

Follow these guidelines to determine the type of your commit:

- **Breaking changes** are removals of features such as props, changes that affect the [box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), or dramatic changes in branding or appearance
- **Minor changes** are new features, animations, props, or visual options
- **Patches** are defect fixes that do not remove features, alter pixel dimensions related to the box model, nor add new features. If an intended feature was not working in a previous release, changing that feature to match the original design counts as a patch even if it affects the box model

Use the `scope` field when referring to an area in the codebase, such as a package name (e.g. `core-button-link`) or
a directory (e.g. `e2e`).

Use the `subject` field to write a succinct description of the change. The first word is often a verb using present
imperative tense such as 'change' or 'remove'.

The `body` field can include more detailed notes regarding the change. If there is a breaking change, it must begin with
the phrase 'BREAKING CHANGE:'.

The `footer` field can be used to reference a commit hash or issue number on GitHub.

### Commit types

| Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| feat     | Indicates a **minor, public-facing change**. A change is considered minor if it adds new functionality in a backwards-compatible manner. It must also be perceivable by consumers of TDS Core, and not just a change that only impacts developers of TDS Core. Additionally, it may be used if functionality is being **deprecated**. If a commit of this type contains a public-facing **breaking change**, add the text `BREAKING CHANGE:` to your commit’s body, followed by a description of what the breaking change is. |
| fix      | Indicates a patch level, **public-facing** change. Generally, this is used for backwards-compatible bug fixes. There should be no consumer-facing API changes at all in patches. It must also be perceivable by consumers of TDS, and not just a change that only impacts developers of TDS Core.                                                                                                                                                                                                                             |
| test     | Used for commits that only modify/add **unit tests** or anything test related, such as **snapshots**, **screenshots**, or **test scripts**.                                                                                                                                                                                                                                                                                                                                                                                   |
| refactor | Used if code has been refactored **without any modifications to functionality or behaviour**. If your refactor also fixes a bug, please use the `fix` type. A common scenario for using this type would be “preventative maintenance” to code. This is also useful when iterating on changes due to PR reviews or other factors. Only one commit may be labeled as a `fix` or `feat` for any one change, so commits following that to iterate on the same feature will either be a `chore` or `refactor`.                     |
| docs     | Indicates a modification to **documentation**. Changes to the .md files of components, or changes to the documentation site use this type.                                                                                                                                                                                                                                                                                                                                                                                    |
| chore    | A type for **miscellaneous** changes. Anything not covered here is considered a chore. Additionally, this is useful when iterating on changes due to PR reviews or other factors. Only one commit may be labeled as a `fix` or `feat` for any one change, so commits following that to iterate on the same feature will either be a `chore` or `refactor`.                                                                                                                                                                    |

### Use commitizen

The TDS codebase includes a script to run commitizen for a streamline commit-making experience:

```bash
# Stage your files and make a commit using commitizen
npm run cz

## At the `type` and `scope` prompts, you can press TAB to view options
```

### Example commit messages

```git
feat(core-flex-grid): remove center prop

BREAKING CHANGE: deprecated `center` prop is removed

fix(core-button-link): adjust hover animation speed
```

## Make a Pull Request

Before making your Pull Request, please be sure the following items were addressed:

- New component code has corresponding unit tests
- Any changes to component functionality has corresponding documentation

Paste the full output of the pre-pr task into the body of your PR so that a maintainer/publisher can verify when publishing.

```bash
npm run prepr
```

The pre-pr task will show you the version change that will result from your changeset. If the output is unexpected, you may need
to adjust your commit messages before making your PR. See the [Conventional Commits spec FAQ](https://conventionalcommits.org/#faq) for more info on correcting mistakes.

## References

- [React Styleguidist](https://react-styleguidist.js.org/)
- [lerna](https://github.com/lerna/lerna/issues)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)

[dpa]: https://github.com/telus/tds-community/blob/02341a13529f1ef162e19485488cf6ab3d1ebd45/guide/DigitalPlatformAmbassadors.md
[ra-contribute]: https://github.com/telusdigital/reference-architecture/blob/f9d0670a8303351ed80589ea09fddb4f7757d19a/process/contribution-model.md
[ra-unit]: https://github.com/telus/reference-architecture/blob/61520d0e05da6fe8d78247fef3ecc6d266b7b186/testing/functional/unit.md
