!INCLUDE "../tds-sunset.html"

# Contributing to TDS

Role-specific guides and resources:

- [Contributing standards](./contributing-standards.md)
- [Designer guide](./designer-guide.md)
- [Developer guide](./developer-guide.md)
- [Codebase overview](./codebase-overview.md)

## Introduction

There are many ways you can contribute to the design system, including submission of bug fixes, documentation improvements,
and participation in discussions.

We welcome contributions to the currently available components. Check the [component documentation](ref://../components/index.html)
to see what is on the roadmap for each one. If you would like to contribute to any of the available TDS components,
see [how to contribute](#how-to).

## Component criteria

Before designing or contributing new components, confirm the following criteria in order to qualify
a viable community component. If the suggestion you would like to raise does not perfectly match the criteria below, don't
be too discouraged from opening an issue anyway. The Digital Platform Ambassadors and TDS Core team will discuss opportunities with your proposal.

<!-- TODO: add document for digital platform ambassadors -->

A TDS component:

<!-- prettier-ignore-start -->

1. **Must** have an identified use case in at least 2 unique applications
  - Community components have the most impact when shared across multiple situations in many experiences
  - Core components have the most impact when shared across the majority of TELUS experiences
2. **Must** be brand aligned and assessed by Design Direction (if applicable)
  - New user experience patterns must involve Design Direction to preserve a high-quality and consistent end customer experience.
3. **Must** not include business logic or proprietary information
  - The presence of these things limits the breadth of reuse for a component
  - Design system components are focused on reusable user experience patterns; they should act as a view that can accept predictable data types
  - Keep business logic, API calls, content, or other application-specific behaviour in the application.
4. **Must** be sufficiently different than other available shared components
  - Community components reduce duplication by promoting flexibility and reuse of existing code
  - Before creating a new component, consider whether an existing pattern and component is sufficient. If not, consider extending or adding features to an existing component before creating a new one
5. **Should** be sufficiently granular to promote reuse - Design system components should encapsulate a single pattern or user experience "element." Seek to find the most granular, standalone, reusable pattern

<!-- prettier-ignore-end -->

<!-- TODO: remove duplicate information on tds-community -->

## How to contribute {#how-to}

### 1. Submit an issue {#1-submit-issue}

We use [Github Issues](https://github.com/telusdigital/tds-core/issues) to track all of our bugs and open discussions so that
they are visible to all consumers of the design system.

However, if you would like to make a small adjustment to documentation, you may jump straight to [opening a pull request](#3-make-a-pull-request).
If you found a bug or would like to begin a conversation, follow these steps:

- Ensure the issue was not already reported by searching the [issues](https://github.com/telusdigital/tds-core/issues)
- If you're unable to find an open issue addressing your concern, either:
  - [Report an issue](https://github.com/telusdigital/tds-core/issues/new?template=defect_template.md)
  - [Suggest a feature](https://github.com/telusdigital/tds-core/issues/new?template=feature_template.md)
  - [Pitch a new Community component](https://github.com/telus/tds-community/issues/new?template=new_component_request.md)
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
