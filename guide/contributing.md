# Contributing to TDS

**_In early 2018, the TDS Platform team will be rolling out more robust architecture, tooling, and processes to better scale community 
component development and contribution._**

While we are not looking for direct contributions of new components to the main TDS codebase quite yet, there are many 
other ways you can contribute, including submission of bug fixes, documentation improvements, and participating in discussions.
Expect architectural changes and processes to be established soon, which will drive more maturity in the contribution
process. Thank you for your patience.

Learn more by reading our [roadmap](roadmap.md) or [reach out to us](support.md).


## How to contribute {#process}

### 1. Submit an issue {#1-submit-issue}

We use [Github Issues](https://github.com/telusdigital/tds/issues) to track all of our bugs and open discussions so that 
they are visible to the community. 

However, if you would like to make a small adjustment to documentation, you may jump straight to [opening a pull request](#3-pull-request). 
If you found a bug or would like to begin a conversation, follow these steps:

* Ensure the issue was not already reported by searching the [issues](https://github.com/telusdigital/tds/issues)
* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/telusdigital/tds/issues/new)
* Be sure to include a title and clear description, as much relevant information as possible, and - if applicable - a code 
sample or executable test case demonstrating the expected behaviour that is not occurring

Learn [how to open an issue on GitHub](https://help.github.com/articles/creating-an-issue/).

### 2. Develop a solution

To get started, fork [the repository](https://github.com/telusdigital/tds) and create your branch from master.

The [developer workflow](#dev-workflow) will help you set your environment up for TDS development. <br/>
The [codebase overview](codebase-overview.md) will help you understand the structure of the codebase and the conventions being followed.

After completion, you may open a pull request.

Learn [how to fork a repository on Github](https://help.github.com/articles/fork-a-repo/).

### 3. Make a pull request {#3-pull-request}

First, thanks for taking the time. :) 

* Ensure the pull request description clearly describes the problem and solution. Include the relevant issue number if 
applicable, and then submit your pull request
* The TDS Platform team is monitoring for pull requests. We will review your pull request and either merge it, request 
changes to it, or close it with an explanation.

Learn [how to open a pull request on GitHub](https://help.github.com/articles/creating-a-pull-request/)


## Developer workflow {#dev-workflow}

### Set up your environment

After forking TDS, the following steps will get you started:

```bash
# Install yarn
brew install yarn

# you can also use npm
# npm install -g yarn

# Install commitizen to write commit messages according to our preferred format.
yarn global add commitizen

# Clone your fork
git clone https://github.com/<your-username>/tds.git && cd tds

# Install dependencies
yarn
```

We use [Prettier](https://prettier.io/), an opinionated code formatter that integrates with your text editor. Configure [your
IDE or text editor](https://prettier.io/docs/en/editors.html) to format your code automatically on save, and Prettier will
adjust your syntax in accordance with the TDS conventions.

### Set up your dev environment

```bash
# Start the styleguidist dev server, check output for the location of the docs
yarn dev

# Open a new terminal window

# Start the test watcher
yarn test:watch
```

After this, you can open up a browser to view the documentation site (usually <http://localhost:6060>). The browser will 
automatically refresh when there are changes to any of the source files.

### When you are ready to make a commit

```bash
# Run linting, tests, and builds
yarn precommit

# Stage your files and then make a commit using commitizen
git cz
```
