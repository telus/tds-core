<!-- TODO: split into sections: Workflow, Contributing Code, Contributing Designs -->

# Contributing to TDS

The TELUS Design System (TDS) is a platform that contains tools, practices, assets, components, and guidelines. As such, there are several ways you can contribute to TDS.

## How to contribute to TDS

<!-- TODO move to support/contact -->
We’re so glad you’re thinking about contributing to the TELUS Design System! If you’re unsure about anything, just ask —
or submit your issue or pull request anyway. The worst that can happen is we’ll politely ask you to change something. We
appreciate all friendly contributions.

If you have any questions, ping us on the #tds-tech-support or the #tds-guild Slack channel.

### Did you find a bug?

* Ensure the bug was not already reported by searching the GitHub [Issues](https://github.com/telusdigital/tds/issues)
* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/telusdigital/tds/issues/new)
* Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behaviour that is not occurring

### Did you fix a bug?
<!-- TODO: do we want people to go straight to PR, or to open an issue first? -->

* First, thanks! :)
* Open a new GitHub issue with the patch's details or reach out to the TDS team to help expedite the contribution process
* Before submitting a pull request, please refer to the [Getting Started](getting-started.md) guide for coding standards
* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable

### Do you have a suggestion for a new component or feature?

**We are not currently accepting pull requests for new components or features.** For details on when you can expect to create your own components or contribute to those found in TDS, please refer to our [roadmap](roadmap.md).
<!-- TODO: ensure the roadmap link works -->

* Ensure the component/feature is not already requested by searching the GitHub [Issues](https://github.com/telusdigital/tds/issues).
* If you're unable to find a feature request, open a new one by [creating an issue](https://github.com/telusdigital/tds/issues/new) to start a discussion.

When in doubt, please consult a TDS team member on brand alignment, reusable components, or new ideas.

## Contributing to the TDS code

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

### Make a Pull Request

When your branch is ready for review, create a [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
to the main TDS repository.
