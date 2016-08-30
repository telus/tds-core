---
title: Contributing
template: doc.jade
---

#### Welcome!

---

We're so glad you're thinking about contributing to the TELUS Design System - Thorium-Core project! If you're unsure about anything, just ask — or submit your issue or pull request anyway. The worst that can happen is we'll politely ask you to change something. We appreciate all friendly contributions.

If you have any questions or want to read more, check out the [Design System website](http://thorium.telus.hugeops.com/), or [shoot us an email](mailto:sebastian.krumhausen@telus.com).

#### Types of Contributions

---

##### Report Bugs

If you find a bug please [create an issue through GitHub](https://github.com/telusdigital/telus-thorium-core/issues). Please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

##### Contribute code

Fix [bugs](https://github.com/telusdigital/telus-thorium-core/issues?q=is%3Aissue+is%3Aopen+label%3Abug) and/or implement [features](https://github.com/telusdigital/telus-thorium-core/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Afeature) by choosing an open task from the [Github issues list](https://github.com/telusdigital/telus-thorium-core/issues). See the [contributor workflow](#contributor-workflow) section for a more detailed description of how to get code into Thorium.

##### Author documentation

The TELUS Design System could always use better documentation, whether as part of the official documentation site, in comments, or even on the web as blog posts or articles.

Documentation lives in the [docs directory](https://github.com/telusdigital/telus-thorium-core/tree/master/docs) and follows just a few simple rules:

* Each category of documentation is a folder named like *1-Introduction* where "Introduction" is the name of the category, and 1 is its position in the navigation menu.
* Within each category folder are markdown files documenting Thorium.
* Those markdown files follow the same naming convention as their parent folders.
* Changing documentation follows the same [contributor workflow](#contributor-workflow) as committing code.

##### Submit Feedback

The best way to send feedback is to [file an issue on GitHub](https://github.com/telusdigital/telus-thorium-core/issues).

If you're proposing a feature:

* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that this is a volunteer-driven project, and that contributions are welcome.

#### Development Process

---

Thorium follows a [trunk-based development](http://paulhammant.com/2013/04/05/what-is-trunk-based-development/) model. This process simplifies the development and release cycle by having all teams contribute to one mainline. Thorium admins can then move changes from that mainline to versions which are affected by bugs, or are under active feature development.

The key features of Thorium's trunk-based contribution model are:

* Contributors make pull requests to `master`.
* Thorium admins merge pull requests to master.
* Thorium admins move new features to the version branch currently under development.
* Thorium admins move bug fixes to affected version branches.
* Official releases are cut from version branches.
* `master` contains the bleeding-edge code, and is therefore generally unsafe.

#### Versioning

---

Release numbers adhere to <a href="http://semver.org/" target="_blank">semantic versioning</a>. In short:

* A major version increment accompanies backwards-incompatible changes, such as removing a feature or changing an API.
* The minor version increments when new features are added.
* The patch version changes when backwards-compatible bug fixes are released.

#### Requirements

---

Thorium is a design system that reaches across all TELUS properties. In order to ensure a high level of quality, the change introduced by a pull request&hellip;

* must pass all automated code style checks ("linting").
* must be accompanied by automated tests, wherever applicable.
* should either be backwards-compatible, or target the appropriate [semantically versioned](#versioning) release.

#### Contributor Workflow

----

At its core, contributing with Git involves:

1. Pulling the latest changes from `master`.
2. Creating a feature branch, from master, in which to do your work.
3. Opening a pull request from your branch to master.

##### Walk-through

If this is your first time contributing to Thorium, clone the repository (this is a one-time step).

```bash
git clone git@github.com:telusdigital/telus-thorium-core.git
cd telus-thorium-core
```

Next, create a place to work on your contribution by pulling the latest code and branching off master.

```bash
git checkout master
git pull origin master
git checkout -b feature/adding-a-widget master
```

Now it's time to make some changes and commit them! When you're done, push up your branch:

```bash
git commit
git push -u origin feature/adding-a-widget
```

Once the branch is sent to Github, [create a pull request](https://github.com/telusdigital/telus-thorium-core/pulls) from your branch to `master`. It's at this point that others may offer feedback and suggestions.

##### Tips &amp; Troubleshooting

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