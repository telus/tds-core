---
title: Contributing
template: doc.jade
---

## Welcome!

---

We're so glad you're thinking about contributing to the TELUS Design System! If you're unsure about anything, just ask — or submit your issue or pull request anyway. The worst that can happen is we'll politely ask you to change something. We appreciate all friendly contributions.

If you have any questions or want to read more, check out the [Design System website](http://tds.telus.digital/), or [shoot us an email](mailto:alexandra.fedyk@telus.com).

## Types of contributions

---

### Report Bugs

If you find a bug please [create an issue through GitHub](https://github.com/telusdigital/telus-thorium-core/issues). Please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

### Contribute code

Fix [bugs](https://github.com/telusdigital/telus-thorium-core/issues?q=is%3Aissue+is%3Aopen+label%3Abug) and/or implement [features](https://github.com/telusdigital/telus-thorium-core/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Afeature) by choosing an open task from the [Github issues list](https://github.com/telusdigital/telus-thorium-core/issues). See the [contributor workflow](#contributor-workflow) section for a more detailed description of how to get code into Thorium.

### Author documentation

The TELUS Design System could always use better documentation, whether as part of the official documentation site, in comments, or even on the web as blog posts or articles.

Documentation lives in the [docs directory](https://github.com/telusdigital/telus-thorium-core/tree/master/docs) and follows just a few simple rules:

* Each category of documentation is a folder named like *1-Introduction* where "Introduction" is the name of the category, and 1 is its position in the navigation menu.
* Within each category folder are markdown files documenting Thorium.
* Those markdown files follow the same naming convention as their parent folders.
* Changing documentation follows the same [contributor workflow](#contributor-workflow) as committing code.

### Submit Feedback

The best way to send feedback is to [file an issue on GitHub](https://github.com/telusdigital/telus-thorium-core/issues).

If you're proposing a feature:

* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that this is a volunteer-driven project, and that contributions are welcome.

## Start contributing

----

At its core, contributing with Git involves:

1. Pulling the latest changes from `master`.
2. Creating a working branch, from master, in which to make changes.
3. Opening a pull request from your branch to master.

### Create a working branch

Pulling the latest code branching from master.

```bash
git checkout master
git pull origin master
git checkout -b feature/DSR-1_adding-a-widget master
```

<small>The branch is named according to [Thorium's branch naming conventions](#working-branch-naming)</small>

Now it's time to make some changes and commit them! Edit some files. When you're done, push up your branch to Github:

```bash
git commit
git push -u origin feature/adding-a-widget
```

Once the branch is sent to Github, [create a pull request](https://github.com/telusdigital/telus-thorium-core/pulls) from your branch to `master`. It's at this point that others may offer feedback and suggestions.

### Commit message requirements

Thorium's changelog is automatically generated from the master branch's commit messages. Individual contributors should write an informative commit message:

- The first line appears in the changelog - write a short sentence summarizing the change
- Any bracketed or parenthesized JIRA id will be automatically linked to the issue page
- Skip a line then use the rest of the commit message to detail your changes

Here's an example:

```bash
Automate changelog generation [BCM-211]

- Add a bash script to build the changelog entries from Git tags and commits
- Document how to use the changelog script
- Document how to format commit messages for the changelog
```

If you like to work in small chunks and make many commits along the way, feel free to do so in your feature branch. When the feature is ready for master, you can compose the final message by editing the Pull Request description on Github.

### Tips &amp; Troubleshooting

Git will let you know if a PR can't be automatically merged. When this is the case, you should update your branch with the latest changes from master, fix any merge conflicts, then push those changes up to Github.

```bash
git checkout master
git pull origin master
git checkout feature/adding-a-widget
git merge master

... edit any files that have reported merge conflicts ...

git commit
git push origin feature/adding-a-widget
```

When a branch is ready for a PR, it's helpful to consolidate many small commits into a single change with a descriptive commit message. This is done by [rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) your branch on master, then squashing all its commits into one, at which point you can amend the final commit message.

TDS admins are also able to consolidate the commits from a PR via Github, by clicking the [squash and merge](https://github.com/blog/2141-squash-your-commits) button.

Consolidating changes makes for a clean, readable history in master, and neatly-packaged changes which can be moved to release branches.

## Contribution criteria

---

### Design Criteria

* Proposed **solution** (i.e.; element/component) must meet the below criteria to be considered for contribution. Please document and explain how the **solution** meets the following criteria:
    * Improves the experience
    * Fulfills a business requirement(s)
    * Modification validated by end-user testing (please map to KPIs)
    * Other

<p><em>**Note:** Before submitting, please ensure proposed **solution** has been vetted by development team(s), meets all accessibility requirements and is validated by end-user testing (if applicable).</em></p>

* Submit standalone Sketch file of proposed **solution** ("Sketch fragment") including:
    * All required states of **solution** (inactive, active, disabled, error, etc)
    * Definition of **solution** (What it is)
    * Design Rationale for usage of **solution** (How it's used)

Please refer to the [TDS Design contribution process](https://docs.google.com/a/telus.com/drawings/d/1MQ1fxF5SHEFLmatWzmthpHPu-DPuEohZCz6zeu6C-BA/edit?usp=sharing) when considering a component/block contribution.

### Development Criteria:

* Code for proposed solution must meet the below criteria to be considered for contribution:
    * Code passes all automated quality checks, such as linting and unit testing
    * Code is accompanied by automated tests wherever applicable
    * Changes are either backwards-compatible, or target the appropriate [semantically versioned](/2-Use-TDS/1-getting-started.html#versioning) release
    * CSS follows [BEM naming conventions](https://en.bem.info/methodology/)
    * JavaScript follows [AirBnB style guidelines](https://github.com/airbnb/javascript) and is written as ES2015

### Process

1. Team raises issue or need to Design Guild or dedicated team liaison
2. Design Guild identifies whether a viable **solution** already exists or not
    * If **solution** already exists:
        * Design Guild points team to **solution** (distribution)
    * If **solution** does not exist:
        * Design Guild provides mentorship, consultation and education around standardization requirements for design and/or build of **solution** (consumption)
        * Team designs and/or builds **solution**
            * Team is responsible for taking and incorporating Design Guild feedback into designs and builds
            * Team is encouraged to surface issues and/or blockers to the Design Guild
        * Team submits designed and/or coded **solution** to Design Guild with all criteria fulfilled
3. Design Guild reviews submitted **solution** and approves, or recommends more iteration.
4. If **solution** is approved:
    * Design Guild evaluates the following and provides recommendations for consumption into TDS
        * Impact on customers and their users
        * Level of effort to refactor and implement existing solution vs implement new **solution** (based on timing, available resources, etc)
        * Global impact across site (style, experience packages, etc)
    * TDS consumes **solution**
        * Sketch fragment is added into master Sketch file
        * Pull request for coded **solutions** is made on Git; code is reviewed, commented and ultimately incorporated into TDS master.
5. If **solution** is not approved (does not meet above criteria):
    * Team responsible for updating solution based on Design Guild Feedback
    * Team resubmits **solution** to Design Guild for review

<p><em>**Note:** While the Design Guild should have continuous visibility into a team’s design and code, they are not to be considered as a blocker, but as a facilitator.</em></p>
