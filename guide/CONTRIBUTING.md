<!-- 
  TODO: split into sections:
    Workflow, Contributing Code, Contributing Designs
  TODO: once this guide is deployed,
    slim down the repository CONTRIBUTING.md file
-->

# Contributing to TDS

<!-- TODO: update this after releasing v1 -->
**_At this time, the core TDS team is working to release version 1.0.0 of the React component library. We are currently not accepting contributions for new components. Submission of bug fixes and discussions are still welcome._ Learn more by reading our [roadmap](ROADMAP.md).**

Thank you for deciding to make a contribution! There are several ways you can contribute to TDS that includes designs, code, accessibility and usability improvements, and documentation.

**Note**: the TDS 'Core' React library undergoes a rigorous review process as we address several important characteristics that make up a 'core' React component, which includes but is not limited to:

* Is the component highly reusable?
* Is the component accessible?
* Does the component satisfy an immediate and ongoing outcome for multiple teams?
* Does the component comply with TELUS branding guidelines? <!-- TODO add link -->

We would appreciate your patience during this process. Once a cataloguing system has been released, there will be opportunities to self-govern your own components. learn more by reading our [roadmap](ROADMAP.md).

When in doubt, feel free to [reach out to us](SUPPORT.md).

## Contribution process (TDS Core) {#process}

### 1. Submit an issue {#1-submit-issue}

If you found a bug, fixed a bug, have a suggestion, or would like to begin a conversation, the first step is to open a new issue. If you would like to make a small adjustment to documentation, you may jump to [opening a pull request][PR].

* Ensure the issue was not already reported by searching the GitHub [issues](https://github.com/telusdigital/tds/issues)
* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/telusdigital/tds/issues/new)
* Be sure to include a title and clear description, as much relevant information as possible, and - if applicable - a code sample or executable test case demonstrating the expected behaviour that is not occurring

Learn [how to open an issue on GitHub](https://help.github.com/articles/creating-an-issue/).

### 2. Develop solution

Once an issue has been delegated to you, or if you are making an adjustment to documentation, you may develop your solution.

* Before submitting a pull request, please refer to the [Standards guide](STANDARDS.md) to comply with all our standards <!-- TODO: make this a CI linting thing as well -->

After completion, you may open a pull request.

### 3. Pull request {#3-pull-request}
<!-- 
  TODO: do we want people to go straight to PR, or to open an issue first? 
  Current assumption: issue/discussion first
-->

First, thanks for taking the time. :) 

* Ensure the pull request description clearly describes the problem and solution. Include the relevant issue number if applicable, and then submit your pull request
* Sit back and wait for the core team to get back to you

Learn [how to open a pull request on GitHub](https://help.github.com/articles/creating-a-pull-request/)

## Developer guide

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
yarn
```

### Development

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

<!-- TODO: consider using husky to install a git-push hook -->
```sh
# Run build, linting and tests
yarn precommit

# Make a commit using commitizen
git cz
```

<!-- META -->
[PR]: #3-pull-request
