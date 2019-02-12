# Contributing to TDS - developer guide

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.JS](https://nodejs.org) >= 8.0
- [Docker and Docker Compose](https://www.docker.com/get-started)

## Set up your environment

To get started, clone [the repository](https://github.com/telusdigital/tds-core) and create your branch from master.
If you are not part of the TELUS digital organization, you may fork the repository instead.

GitHub has primers on [how to fork a repository](https://help.github.com/articles/fork-a-repo/) and [how to clone a repository](https://help.github.com/articles/cloning-a-repository/).

Before getting started, you should also install [Docker](https://github.com/telus/reference-architecture/blob/master/delivery/docker.md). This facilitates our e2e tests to ensure they are tested in a reproducible environment, and having all tests pass is essential to a successful TDS contribution. If Docker is not installed, the following steps will not complete successfully.

After setting up TDS locally, the following steps will get you started:

```bash
# Bootstrap your dev environment
npm run bootstrap
```

We use [Prettier](https://prettier.io/), an opinionated code formatter that integrates with your text editor. Configure [your
IDE or text editor](https://prettier.io/docs/en/editors.html) to format your code automatically on save, and Prettier will
adjust your syntax in accordance with the TDS conventions.

## Set up your dev environment

```bash
# Start the styleguidist dev server, check output for the location of the docs
npm run dev

# Open a new terminal window

# Start the test watcher, it will rerun tests based on the files you modify
npm run test:watch
```

After this, you can open up a browser to view the documentation site (usually <http://localhost:6060>). The browser will
automatically refresh when there are changes to any of the source files.

## Write some code

Read the [codebase overview](./codebase-overview.md) to understand the structure of the codebase and the conventions being followed.

If you need to create a new component, run the scaffolding script to generate the basic folder structure, React component,
documentation, and base unit tests for a new component.

```bash
npm run scaffold MyComponent
```

## Running and updating tests

All TDS components use a combination of [Jest](https://jestjs.io/) tests and [Nightwatch](http://nightwatchjs.org/) visual regression tests. As part of our Git hooks, these tests are run automatically on commit and on push. However, there are cases where you may want to run these tests manually, or require the ability to update test snapshots that are no longer up to date with the component you're working on.

### Jest (unit tests)

Jest unit tests are integrated into all TDS React components. These are run to ensure that a component's functionality has not been compromised by a change. These unit tests will check the component's different states by providing different sets of prop values, and compare them to a set of pre-defined criteria. It is important to create new unit tests whenever a feature is added or significantly modified to ensure the stability of the component.

If a component's structure has significantly changed, it may require a snapshot update with the update command listed below. However, it is important to use discretion here, as a failing snapshot may be the symptom of a larger problem with the component. (Such as unexpected extra/missing classes or unintended shuffling of the component's DOM structure) _Always review the log of a snapshot failure before running the update command._ When in doubt, reach out to our support avenues.

```bash
# Manually run unit tests on modified components
npm run test -- [opts]

# Options:
# -a: Run tests on all components regardless of if they were recently modified.
# -u: Update test snapshots. (Useful if the component's structure has changed)
```

### Nightwatch (e2e)

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
To view TELUS standards for commit format, see our [contribution model][contribution-model] on the Reference Architecture.

We use [commitizen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/marionebl/commitlint) to
ensure conventional commit messages, which supports our publishing workflow and versioning scheme.

[husky](https://github.com/typicode/husky) is used to run precommit tasks on staged files, which includes code formatting, linting, and tests.
You will not be able to make a commit until the precommit tasks pass. We also have a prepush hook to run a full build before pushing your code.

Automated component versioning is facilitated by the [Conventional Commits specification](https://conventionalcommits.org/), so you must
be deliberate when choosing the type of commit.

### Commit format

Given the commit format:

```git
    type(scope): subject

    body

    footer
```

Use the `type` field to inform lerna what Conventional Commit you intend to use:

- For breaking changes, use the **feat** commit type with body text that begins with the phrase "BREAKING CHANGE:"
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

#### Commit types

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

Before making your Pull Request, we have a pre-pr tasks as a final verification step. You may make your PR only after its successful
completion.

Paste the full output of the pre-pr task into the body of your PR so that a maintainer/publisher can verify when publishing.

```bash
npm run prepr
```

The pre-pr task will show you the version change that will result from your changeset. If the output is unexpected, you may need
to adjust your commit messages before making your PR. See the [Conventional Commits spec FAQ](https://conventionalcommits.org/#faq) for more info on correcting mistakes.

[contribution-model]: https://github.com/telusdigital/reference-architecture/blob/f9d0670a8303351ed80589ea09fddb4f7757d19a/process/contribution-model.md
