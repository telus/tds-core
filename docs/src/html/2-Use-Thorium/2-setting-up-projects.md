---
title: Setting Up Projects
template: doc.jade
---

## For designers

---

The thorium.sketch file contains the latest styles, symbols, and artboards.

**Step 1.**

Explore the Foundations to learn the Thorium design patterns and principles.

**Step 2.**

Review the Components section, to familiarize yourself with the existing components which you can incorporate into your designs.

**Step 3.**

Download [thorium.sketch](/assets/downloads/thorium.sketch) and fonts.

**Step 4.**

Identify your needs by considering the user and outcome you're designing for—these considerations will help inform scope and the milestones and/or deliverables required.

## thorium.sketch

---

The thorium.sketch file contains the latest pre-defined styles, symbols, and artboards. Design is encouraged to stay within Thorium.sketch as copying, merging, and cross file consistency can be lost. Elements and component within artboards are stripped of written metrics and measurements as they have been codified and need not be changed.

## Design resources

---

- Download [thorium sketch file](/assets/downloads/thorium.sketch)
- Download thorium fonts

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

If you'd like to know more about the release process, you can read about it on the [administration page](/2-Use-Thorium/hold-6-administration.html).

## Setup your local environment

---

### Install development tools

* [Node.js](https://nodejs.org/en/) latest stable version (4.6.0 at the time of this writing).
* [Git](https://git-scm.com/downloads)

### Clone the Thorium repo

```bash
git clone git@github.com:telusdigital/telus-thorium-core.git
cd telus-thorium-core
```

Symlink the core & enriched modules so changes are immediately picked up by your local documentation site instance.

```bash
npm run setup:links
```

Install the rest of the projects' dependencies and start up the dev server.

```bash
npm install
npm run build
npm run start
```

Thorium's documentation site will now be available in the browser at [http://localhost:8081](http://localhost:8081) with Webpack Hot Module Reloading enabled.