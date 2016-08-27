---
title: Contributing
template: doc.jade
---

#### Development Process

---

Thorium follows a trunk-based development model. This process simplies the development and release cycle by having all teams contribute to one mainline. Thorium admins can then move changes from that mainline to versions which are affected by bugs, or are under active feature development.

In summary, the key features of Thorium's trunk-based contribution model are:

* Contributors make pull requests to `master`.
* Thorium admins merge pull requests.
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

#### Git Workflow

----

At its core, contributing with Git involves:

1. Pulling the latest changes from `master`.
2. Creating a feature branch, from master, in which to do your work.
3. Opening a pull request from your branch to master.

When a branch is ready for a PR, it's helpful to consolidate many small commits into a single change with a descriptive commit message (i.e. [rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)).

Github also makes it possible to combine changes before merging with their [squash and merge](https://github.com/blog/2141-squash-your-commits) option.

Consolidating changes makes for a clean, readable history in master, and neatly-packaged changes which can be moved to release branches.