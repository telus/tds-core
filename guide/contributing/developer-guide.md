!INCLUDE "../tds-sunset.html"

# Contributing to TDS - developer guide

## Contents

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Set up your dev environment](#set-up-your-dev-environment)
- [Write some code](#write-some-code)
- [Using lerna](#using-lerna)
  - [How lerna works within TDS](#how-lerna-works-within-tds)
  - [Helpful lerna commands](#helpful-lerna-commands)
- [Make a commit](#make-a-commit)
  - [Versioning via commits](#versioning-via-commits)
  - [Commit format](#commit-format)
  - [Commit types](#commit-types)
  - [Use commitizen](#use-commitizen)
  - [Example commit messages](#example-commit-messages)
- [Quality checklist](#quality-checklist)
  - [Accessibility](#accessibility)
  - [Unit tests](#unit-tests)
  - [e2e tests](#e2e-tests)
  - [Documentation](#documentation)
  - [npm package](#npm-package)
  - [Manual tests](#manual-tests)
- [Make a pull request](#make-a-pull-request)
- [Releasing and deploying](#releasing-and-deploying)
  - [Deploying coded components to npm](#deploying-coded-components-to-npm)
  - [Deploying documentation to the TDS website](#deploying-documentation-to-the-tds-website)
- [References](#references)

## Setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.JS](https://nodejs.org) v12

To get started, clone [the TDS repository](https://github.com/telusdigital/tds-core) and create your branch from master.
TELUS Digital developers and partners can push branches to the repository directly. If you do not have write access, you may create a fork instead.

GitHub has primers on [how to fork a repository](https://help.github.com/articles/fork-a-repo/) and [how to clone a repository](https://help.github.com/articles/cloning-a-repository/).

#### Codebase

After setting up TDS locally, the following steps will get you started:

```bash
# Bootstrap your dev environment
# This will install node and Gitbook dependencies,
# set up symlinks for lerna, and build components for tests
npm run bootstrap
```

**Note**: Please commit any changes to the lockfile using the `deps` scope. For instance:

```text
chore(deps): update lockfile
```

For more information on commits and commit scopes, see [make a commit](#make-a-commit).
For information on using lerna while developing for TDS, see [using lerna](#using-lerna).

#### Text editor

We use [Prettier](https://prettier.io/), an opinionated code formatter that integrates with your text editor. Configure [your
IDE or text editor](https://prettier.io/docs/en/editors.html) to format your code automatically on save, and Prettier will
adjust your syntax in accordance with the TDS conventions.

For Visual Studio Code users, we have a config file **.vscode/settings.json** checked in. It connects the Prettier extension
to our ESLint config file to automatically format files when saved.

### Set up your dev environment

When developing components, we recommend using our documentation (built with [React Styleguidist][react-styleguidist]) as a testing sandbox.

```bash
# Start the styleguidist dev server, check output for the location of the docs
npm run dev

# Open a new terminal window

# Start the test watcher, it will rerun tests based on the files you modify
npm run test:watch
```

After this, you can open up a browser to view the documentation site:

- TDS Core: <http://localhost:6060>
- TDS Community: <http://localhost:6061>

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

Component packages are versioned automatically based on [conventional commits][conventional-commits]. To ensure appropriate versions are applied,
follow our guide on how to [make a commit](#make-a-commit).

- To preview which components will get published: `npx lerna updated`
- To preview what the next version bump for changed components will be: `npm run prepr`
  - **Note:** this command will be run automatically in pull requests, and TDS Bot will add a comment to the pull request showing what version bumps will occur on publish

#### Publishing components

Components are published via our continuous integration pipeline. Do not try publishing components yourself. TDS Core components are the responsibility
of the TDS Core team, and TDS Community components are the responsibility of the [Digital Platform Ambassadors][tds-community-dpa].

```sh
# Ran in pipeline
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

## Make a commit

To view a guide on how TDS components are versioned, see our [FAQ](../faq.md#how-is-tds-versioned).
To view TELUS standards for commit format, see our [contribution model][ra-contribute] on the Reference Architecture.

We use [commitizen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/marionebl/commitlint) to
ensure conventional commit messages, which supports our publishing workflow and versioning scheme.

[husky](https://github.com/typicode/husky) is used to run precommit tasks on staged files, which includes code formatting, linting, and tests.
You will not be able to make a commit until the precommit tasks pass. We also have a prepush hook to run a full build before pushing your code.

### Versioning via commits

Automated component versioning is facilitated by the [Conventional Commits specification][conventional-commits],
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

Use the `scope` field when referring to an area in the codebase, such as a package name (e.g. `core-button-link`), or
a directory (e.g. `e2e`), or somewhere in the project root (e.g. `deps` for changes to **package.json** or **package-lock.json**).

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

## Quality checklist

Be sure to fulfill all items in this quality checklist for TDS components:

- [Accessibility](#accessibility): is the component accessible, or makes direct suggestions to building accessible experiences?
- [Unit tests](#unit-tests): is the component's functionality and rendering tested?
- [e2e tests](#e2e-tests): is there an accurate baseline image?
- [Documentation](#documentation): is the component documented with examples? Are there usage criteria for designers, and accessibility considerations clearly written?
- [npm package](#npm-package): is the package manifest appropriately set up? Does it build? Is the distributable build lean?
- [Manual tests](#manual-tests): has the component been tested in [supported browsers][faq-browsers]?
  - **Mobile first**: does it work properly in mobile browsers, on mobile devices? Is the component responsive?
- User story: are acceptance criteria fulfilled, and coded component matches designs?

The following sections go into greater detail on how to fulfill the component quality checklist.

### Accessibility

Accessibility mindfulness is essential when building design system components. There are several experiences developers must
take into account when developing components, such as:

- Choosing which [semantic HTML elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML) to use
- Using `aria-` attributes only when absolutely necessary
- Providing visible labels and visual focus states for interactive elements
- Adapting spacing or font appearance to browser font settings
- Animations are reduced or omitted when environments are configured for [reduced motion][css-tricks-reduced-motion]
- Whether assistive technology should be able to read intentionally hidden content
- Keyboard navigation is possible, passing through elements in a consistent order (typically from top to bottom, left to right)
- Screen reader tools can announce content or actions appropriately, such as when an action toggles an adjacent element opened or closed, signalled by `aria-expanded`
- Desirable areas of interactive elements can be focused using a screen magnifier; the focus area should not be a small corner of an element that isn't a clear label or actionable affordance

There are many considerations and experiences outside the component's control, and they are within the scope of the consuming application.
For this reason, it is important to provide accessibility guides since consuming the component alone does not guarantee the
consuming application is accessible. Consider the following when writing helpful documentation:

- Content supplied to the component in various languages, particularly English and French, should be within a recommended character length
- If handling asynchronous content, ensure loaded content is within close proximity to the initiating action area
- Props that modify the component in ways that directly affect assistive technology, such as heading levels, labels, or
  disabling of elements should be explicitly documented

Read more about accessibility at TELUS at:

- [TDS Foundational Principles: Accessibility][accessibility]
- [Reference Architecture: Accessibility][ra-accessibility]

### Unit tests

All TDS components use a combination of [Jest](https://jestjs.io/) tests and [Nightwatch](http://nightwatchjs.org/)
visual regression tests. As part of our Git hooks, these tests are run automatically on commit and on push. However,
there are cases where you may want to run these tests manually, or require the ability to update test snapshots that
are no longer up to date with the component you're working on.

TDS follows the [Reference Architecture standard on writing unit tests](ra-unit).

#### Writing unit tests with Jest

Jest unit tests are integrated into all TDS React components. These are run to ensure that a component's functionality
has not been compromised by a change. These unit tests will check the component's different states by providing
different sets of prop values, and compare them to a set of pre-defined criteria. It is important to create new unit
tests whenever a feature is added or significantly modified to ensure the stability of the component.

If a component's structure has significantly changed, it may require a snapshot update with the update command listed
below. However, it is important to use discretion here, as a failing snapshot may be the symptom of a larger problem
with the component. (Such as unexpected extra/missing classes or unintended shuffling of the component's DOM structure)
_Always review the log of a snapshot failure before running the update command._ When in doubt, [reach out to
us][contact].

```bash
# Manually run unit tests on modified components
npm run test -- [opts]

# Options:
# -a: Run tests on all components regardless of if they were recently modified.
# -u: Update test snapshots. (Useful if the component's structure has changed)
```

### e2e tests

Nightwatch e2e tests are run to ensure that no unexpected visual regressions were made to a component. These tests
are run automatically via GitHub Actions on all components with no test writing required on the developer's part. Currently, cartesian components are uploaded to an S3 bucket, which is then tested against via Saucelabs.

Updating screenshots currently requires a token. Please contact the TDS team if your contribution needs its screenshots updated for next steps.

```bash
# Manually run visual regression tests on modified components
npm run test:e2e -- [opts]

# Options:
# -a, --all                 Run tests on all components regardless of if they were recently modified.
# -u, --update-screenshots  Update test screenshots. (Useful if the component was purposefully changed visually)
# -n, --name                REQUIRED - e2e slug name (usually branch name) This will point the script to the directory in the S3 bucket that it will be tested against. In most cases, this is the exact name of the branch.
# -e, --environment         specify the test environment(s) to use, i.e. "firefox, ie11". Defaults to all environments. Chrome will always run for accessibility tests.
```

### Documentation

TDS uses [React Styleguidist][react-styleguidist] to generate documentation. In general, components
should have a combination of the following:

- A **ComponentName.md** to complement its **ComponentName.jsx**
- Use of doclet tags to document the component's version and props. Visit the React Styleguidist page on [documenting components][react-styleguidist-jsdoc] to learn more

  - Use the `@version` doclet tag to extract the component's version from **package.json**. For example:

  ```jsx
  /**
   * Pilter example
   * @version ./package.json
   */

  const SamplePilter = ({ children, a11yText, ...rest }) => (
  ```

  - Add comments above prop names to provide a brief explanation. For example:

  ```jsx
  /**
   * Label to be read by screen readers
   */
  a11yText: PropTypes.string,
  ```

### npm package

Being a component library shipped to npm, proper configuration to the file **package.json** is critical to its successful consumption. Please ensure the following:

- An appropriate `name` is configured. Core components begin with `@tds/core-` and community components begin with `@tds/community-`
- `peerDependencies` includes key value pairs for the following dependencies (if using styled components)
  ```json
  "peerDependencies": {
    "react": "^16.8.2 || ^17.0.0",
    "react-dom": "^16.8.2 || ^17.0.0",
    "styled-components": "^4.1.3 || ^5.1.0"
  }
  ```
- `dependencies` only contains what is required for the package to run, and they should be publicly available on npm.
  Private or erroneous dependencies should be omitted
- `devDependencies` only contains what is required for testing or building into the final distributable

#### Inspecting builds

Every components' distributable code is ignored by git in every packages' respective **dist** directory. They must be built by Rollup
before they can be inspected. Once built, view the code within either **index.es.js** (ECMAScript) or **index.cjs.js** (CommonJS) and
assure none of the package's dependencies were unintentionally included. If they were, there may be an issue with how **package.json**
or **rollup.config.js** is configured.

<!-- TODO: add summary of how we name things -->

### Manual tests

To ensure all consumers of TDS will be able to consume and build their applications with a component, it must be compatible with a
TELUS starter kit application. To test a yet-released component in your own application, we recommend the following techniques:

#### Option 1: npm link

`npm link` allows you to rapidly test a package via symlinks. To test with npm link, run these commands:

```sh
# TDS root directory
npm run build -- @tds/your-component-name
cd packages/ComponentName
npm link
```

Once you have a package linked, it needs to be linked within your project. You will also need to manually add the component's
package name to your project's **package.json**. Run these commands to add symlinks within your project's **node_modules** directory:

```sh
# Your project
cd ~/path/to/your/project
npm link @tds/component-name
```

Learn more about [npm link on npm](https://docs.npmjs.com/cli/link).

#### Option 2: npm pack

`npm pack` builds a tarball that can be installed in project via `npm install`; it also represents the final package that gets shipped to the npm registry. To set up a package tarball, run these commands:

```sh
# TDS root directory
npm run build -- @tds/your-component-name
cd packages/ComponentName
npm pack
```

Once your tarball is built, install it directly within your project's **node_modules** directory:

```sh
# Your project
npm install ~/path/to/tds/packages/ComponentName/tds-tarball.tgz
```

Learn more about [npm pack on npm](https://docs.npmjs.com/cli/pack).

#### Testing in browsers

Once your project is set up, be sure to test in all [supported browsers][faq-browsers] including:

- Safari and Chrome on iOS
- Chrome on Android
- Internet Explorer 11

Always test mobile devices first. While testing, perform the following checks at least:

- Tests in [aXe][axe] or [Wave][wave] pass
- Component renders fully in viewports from 320px width or greater
- Component renders legibly when browser font size is adjusted from 16px to 32px
- Interactive elements are keyboard navigable
- Assistive technology can parse copy in a reasonable order
- Animations are slowed or removed when [reduced motion][css-tricks-reduced-motion] is enabled

## Make a pull request

Before making your Pull Request, please be sure the following items were addressed:

- New component code has corresponding unit tests
- Any changes to component functionality has corresponding documentation

You can also check to make sure appropriate version bumps will be assigned to components affected by your work.

```bash
npm run prepr:quick
```

The "pre-pull request" task will show you the version change that will result from your changeset. If the output is unexpected, you may need
to adjust your commit messages before making your PR. See the [Conventional Commits spec FAQ][conventional-commits-faq] for more info on correcting mistakes.

## Releasing and deploying

TDS component releases and deployments are handled by lerna and CircleCI. The TDS Core team governs the deploy process for TDS Core,
and the Digital Platform Ambassadors perform deployments for TDS Community.

Before deploying, ensure the following actions were taken:

- Components were fully tested, following our [quality checklist](#Quality-checklist)
- Pull requests that need to be deployed have been rebased and merged to master
- Related design assets are deployed to InVision DSM
- For TDS Community, all outputs have been fulfilled in the [backlog practice][tds-community-backlog-practice]

<!-- TODO: Link to design deployment docs -->

### Deploying coded components to npm

When releasing via CircleCI, lerna parses conventional commits to determine version bumps, creates tags and changelogs,
and deploys affected components to npm.

When deploying [TDS Core on CircleCI](https://circleci.com/gh/telus/workflows/tds-core/tree/master):

1. Rebase and merge your pull request into `master`, and delete the branch
2. Go to the pipeline in CircleCI
3. Check the `prepr-log` job to ensure package bumps are desirable
4. Approve the `approve-release` job to deploy affected components to npm
5. After deploying, add release notes to the component's respective tag on GitHub (you can copy them from the component's CHANGELOG.md file)

The same steps can be used for [TDS Community on CircleCI](https://circleci.com/gh/telus/workflows/tds-community/tree/master).

### Deploying documentation to the TDS website

Documentation deployment for TDS Core and Community is orchestrated by an OpenShift pipeline. Before deploying documentation, ensure
all CircleCI jobs on the `master` branch have fully run. This is necessary to build the documentation with the
latest component versions.

To deploy documentation:

1. Go to the [Design Outcomes project on OpenShift][tds-openshift]
2. After all jobs in CircleCI have completed, and components were deployed to npm, start a pipeline in OpenShift
3. Verify all changes are satisfactory on staging
4. Manually trigger the job to deploy to production

If you are a Digital Platform Ambassador and do not have access, please [contact us][contact].

## References

### Related pages

- [TDS Foundational Principles: Accessibility][accessibility]
- [Contact TDS][contact]

### TELUS Reference Architecture articles

- [Contributing][ra-contribute]
- [Unit tests][ra-unit]
- [Accessibility][ra-accessibility]
- [OpenShift][ra-openshift]

### Related articles and tools

- [React Styleguidist][react-styleguidist]
- [lerna](https://github.com/lerna/lerna/issues)
- [Conventional Commits][conventional-commits]
- [Commitizen](https://github.com/commitizen/cz-cli)
- [CSS-Tricks.com: An introduction to the reduced motion media query][css-tricks-reduced-motion]

[ra-contribute]: https://github.com/telusdigital/reference-architecture/blob/f9d0670a8303351ed80589ea09fddb4f7757d19a/process/contribution-model.md
[ra-unit]: https://github.com/telus/reference-architecture/blob/61520d0e05da6fe8d78247fef3ecc6d266b7b186/testing/functional/unit.md
[ra-accessibility]: https://github.com/telus/reference-architecture/blob/61520d0e05da6fe8d78247fef3ecc6d266b7b186/development/accessibility.md
[ra-openshift]: https://github.com/telus/reference-architecture/blob/61520d0e05da6fe8d78247fef3ecc6d266b7b186/delivery/openshift.md
[tds-community-dpa]: https://github.com/telus/tds-community/blob/02341a13529f1ef162e19485488cf6ab3d1ebd45/guide/DigitalPlatformAmbassadors.md
[tds-community-backlog-practice]: https://github.com/telus/tds-community/blob/02341a13529f1ef162e19485488cf6ab3d1ebd45/guide/CommunityBacklog.md
[tds-openshift]: https://console.telusdigital.openshift.com/console/project/o-design-outcomes/browse/pipelines
[accessibility]: ../accessibility/accessibility.md
[faq-browsers]: ../faq.md#what-browsers-does-tds-support
[contact]: ../contact.md
[react-styleguidist]: https://react-styleguidist.js.org
[react-styleguidist-jsdoc]: https://react-styleguidist.js.org/docs/documenting.html#code-comments-and-proptypes
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0-beta.4/
[conventional-commits-faq]: https://www.conventionalcommits.org/en/v1.0.0-beta.4/#faq
[css-tricks-reduced-motion]: https://css-tricks.com/introduction-reduced-motion-media-query/
[axe]: https://www.deque.com/axe/
[wave]: https://wave.webaim.org/
