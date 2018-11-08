# Contributing to TDS

- [Designer guide](./designer-guide.md)
- [Developer guide](./developer-guide.md)
- [Codebase overview](./codebase-overview.md)

## Community

**_In early 2018, the TDS Platform team will be rolling out more robust architecture, tooling, and processes to better scale community
component development and contribution._**

While we are not looking for direct contributions of _new_ components to the main TDS codebase quite yet, there are many
other ways you can contribute, including submission of bug fixes, documentation improvements, and participation in discussions.

That being said, we welcome contributions of _enhancements_ to the currently available components in accordance with
the component roadmaps. Check the [component documentation](ref://../components/index.html) to see what is on the roadmap
for each one. If you'd like to contribute to any of the available TDS components, [follow the steps below](#1-submit-an-issue).

Expect architectural changes and governance processes to be established soon that will drive a more mature contribution
process. Thank you for your patience.

Learn more by reading the [TELUS Design Platform roadmap](../roadmap.md) or by [reaching out to us](../contact.md).

## How to contribute {#how-to}

### 1. Submit an issue {#1-submit-issue}

We use [Github Issues](https://github.com/telusdigital/tds-core/issues) to track all of our bugs and open discussions so that
they are visible to the community.

However, if you would like to make a small adjustment to documentation, you may jump straight to [opening a pull request](#3-make-a-pull-request).
If you found a bug or would like to begin a conversation, follow these steps:

- Ensure the issue was not already reported by searching the [issues](https://github.com/telusdigital/tds-core/issues)
- If you're unable to find an open issue addressing your concern, either:
  - [Report an issue](https://github.com/telusdigital/tds-core/issues/new?template=defect_template.md)
  - [Suggest a feature](https://github.com/telusdigital/tds-core/issues/new?template=feature_template.md)
- Be sure to include a title and clear description, as much relevant information as possible, and - if applicable - a code
  sample or executable test case demonstrating the expected behaviour that is not occurring

Learn [how to open an issue on GitHub](https://help.github.com/articles/creating-an-issue/).

### 2. Develop a solution

There are different paths to developing a solution depending on your goal:

- **Making documentation changes within GitHub**: you can make changes to TDS documentation from GitHub without having
  to write code. You can follow this guide on [how to edit files within GitHub](https://help.github.com/articles/editing-files-in-your-repository/).
  When making commits, be sure to follow the [TELUS commit standards](https://github.com/telusdigital/reference-architecture/blob/0767e3450ee630bb6c8eb54a83c73f8ffa1576ab/process/contribution-model.md#commit-template).
  There is no need to create an issue first, you may edit documentation and create a pull request anytime.
- **Designers producing assets or symbols**: follow the [designer guide](./designer-guide.md) to contributing Sketch files.
- **Developers making changes to components**: follow the [developer guide](./developer-guide.md) to set up your environment for TDS development and read the [codebase overview](./codebase-overview.md) to understand the structure of the codebase and
  the conventions being followed

### 3. Make a pull request {#3-make-a-pull-request}

First, thanks for taking the time. :)

- Ensure the pull request description clearly describes the problem and the solution. Include the relevant issue number
  when you submit your pull request
- The TDS Platform team is monitoring for pull requests. We will review your pull request and either merge it, request
  changes to it, or close it with an explanation

Learn [how to open a pull request on GitHub](https://help.github.com/articles/creating-a-pull-request/)
