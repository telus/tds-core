---
title: Contribution
template: doc.jade
---

## Welcome!

---

We're so glad you're thinking about contributing to the TELUS Design System - Thorium-Core project! If you're unsure about anything, just ask — or submit your issue or pull request anyway. The worst that can happen is we'll politely ask you to change something. We appreciate all friendly contributions.

If you have any questions or want to read more, check out the [Design System website](http://thorium.telus.hugeops.com/), or [shoot us an email](mailto:sebastian.krumhausen@telus.com).

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

## Development process

---

Thorium follows a [trunk-based development](http://paulhammant.com/2013/04/05/what-is-trunk-based-development/) model. This process simplifies the development and release cycle by having all teams contribute to one mainline. Thorium admins can then move changes from that mainline to versions which are affected by bugs, or are under active feature development.

The following diagram illustrates the Thorium development process.

<figure class="doc-figure">
    <img src="/assets/images/dev-timeline.svg" alt="Diagram showing pull requests to the master branch, and code being deployed via release branches">
</figure>

### Key features

* Contributors make pull requests to `master`
* Thorium admins merge pull requests to master
* Thorium admins move new features to the version branch currently under development
* Thorium admins move bug fixes to affected version branches
* Official releases are cut from version branches
* `master` contains the bleeding-edge code

## Working branches

---

Working branches are a temporary place for contributors to change Thorium, and then create a pull request to get those changes back into `master`. Working branches are...

* **Isolated** -- a place for individual contributors to locally build and test features, fixes, and other code changes.
* **Temporary** -- code isn't deployed from working branches
* **Short-lived** -- the longer a working branch hangs around, the hard it gets to reconcile with master.

## Working branch naming

---

Since pull requests originate from working branches, it's helpful to name them according to this pattern:

<p style="text-align: center;">`changetype/issue-id_short-description`</p>

### Change types

The most common change types are:

* `feature` -- code that directly implements a user story
* `task` -- might be a subtask of a story that makes sense to contribute as it's own diff, or a non user-facing change like updating a build script
* `bugfix` -- code that resolves a defect

### Issue ID

The issue id is a JIRA ticket number such as `DSR-1`. This identifies both the project and the individual ticket which is introducing the change. If there's no relevant JIRA ticket, use the project abbreviation such as `DSR`.

### Short description

The short description is one or two words identifying what changed.

Please use all lowercase characters.

### Example branch names

* `feature/DSR-1_typography`
* `task/DSR-112_rearrange-nav-menu`
* `task/DSR_update-headlines`
* `bugfix/DSR-25_button-spacing`
* `bugfix/DSR_subhead-weight`

## Versioning

---

Release numbers adhere to <a href="http://semver.org/" target="_blank">semantic versioning</a>.

* A major version increment accompanies backwards-incompatible changes, such as removing a feature or changing an API.
* The minor version increments when new features are added.
* The patch version changes when backwards-compatible bug fixes are released.

## Code review

---

Thorium is a design system that reaches across all TELUS properties. In order to ensure a high level of quality, the change introduced by a pull request&hellip;

* must pass all automated code style checks ("linting").
* must be accompanied by automated tests, wherever applicable.
* should either be backwards-compatible, or target the appropriate [semantically versioned](#versioning) release.

## Tags &amp; releases

---

Don't worry about tagging your commits, changing version numers, or creating release branches. Thorium administrators are responsible for these parts of the process. Most of the time, contributing to Thorium means making a change in a working branch and submitting a pull request to master.

If you'd like to know more about the release process, you can read about it on the [administration page](/5-Governance/3-administration.html).

## Setup your local environment

---

### Install development tools

* [Node.js](https://nodejs.org/en/) latest stable version (4.6.0 at the time of this writing).
* [Git](https://git-scm.com/downloads)

### Clone the Thorium repo

```bash
git clone git@github.com:telusdigital/thorium.git
```

Symlink the core module so changes are immediately picked up by your local documentation site instance.

```bash
cd thorium/core
npm link
cd ../docs
npm link telus-thorium-core
cd ..
```

Install the rest of the projects' dependencies and start up the Wintersmith dev server.

```bash
npm install
npm run start
```

Thorium's documentation site will now be available in the browser at [http://localhost:8080](http://localhost:8080).

### Auto-rebuild

Run the doc site's watch command to rebuild stylesheets whenever a change is made.

```bash
cd docs
npm run watch:css
```

The paths watched are:

* `core/scss/**/*.scss`
* `docs/src/assets/scss/**/*.scss`


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

Thorium admins are also able to consolidate the commits from a PR via Github, by clicking the [squash and merge](https://github.com/blog/2141-squash-your-commits) button.

Consolidating changes makes for a clean, readable history in master, and neatly-packaged changes which can be moved to release branches.
