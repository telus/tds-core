---
title: Administration
template: doc.jade
---

## Release overview

---

1. Update the `version` field in all package.json files
2. Update [CHANGELOG.md](https://github.com/telusdigital/telus-thorium-core/blob/master/CHANGELOG.md) and copy your new entry to the [changelog page](/6-About/2-changelog.html)
3. Update the [Upgrading Guide](https://github.com/telusdigital/telus-thorium-core/blob/master/UPGRADING.md)
4. Tag the commit being released
5. Create a release branch

[Continue reading below](#updating-the-version-number) for more detailed descriptions of each task in the release process.

## Updating the version number

---

Thorium follows [semantic versioning](/5-Contribution/2-contributing.html#versioning):

* If the new version adds backwards-compatible bug fixes, increment the patch version
    * Ex: change 0.3.0 to 0.3.1
* If the new version adds new features, increment the minor version
    * Ex: change 0.3.1 to 0.4.0
* If the new version has backwards-incompatible changes, increment the major version
    * Ex: change 0.4.0 to 1.0.0

### Where to change the version

The version number needs to be changed in each module's package.json file:

* package.json
* core/package.json
* docs/package.json
* enriched/package.json

The [npm version command](https://docs.npmjs.com/cli/version) is useful for updating these files.

Parts of the documentation site use the current version number in examples.
E.g. the [For Developers](/1-Getting%20started/2-for-developers.html) page includes it in sample URLs.
This documentation doesn't need to be manually edited - it will automatically pick up the new version number from package.json.

## Changelog maintenance

---

The [changelog](https://github.com/telusdigital/telus-thorium-core/blob/master/CHANGELOG.md) is a record of changes made to Thorium.
It describes features, bug fixes, removals, and any other changes that a user of the system needs to know about when adopting the new release.
Each entry in the changelog should include the following parts:

* **Version number** of the Thorium release whose changes are being documented
* **Date** of the release
* **Tag URL** where developers can find this release on Github
* **List of changes** that have been made, grouped by the affected library (Core/Enriched/Documentation).

### Changelog entry Markdown template

```markdown
## vX.Y.Z

19 October 2016

[https://github.com/telusdigital/telus-thorium-core/releases/tag/vX.Y.Z](https://github.com/telusdigital/telus-thorium-core/releases/tag/vX.Y.Z)

### Thorium Core

* Added: chevron links
* Updated: body font size from 20px to 19px
* Fixed: alert icon no longer persists when an invalid field receives focus

### Thorium Enriched

* Added: scaffolding for this new module
* Added: SelectorCounter React component

### Thorium Documentation

* Fixed: hamburger menu alignment
```

## Upgrading guide maintenance

---

The [upgrading guide](https://github.com/telusdigital/telus-thorium-core/blob/master/CHANGELOG.md) informs developers of the specific changes they need to make when upgrading to a new version of Thorium.
This is the place to document backwards-incompatible changes, and how users should handle them. Examples include:

* Removing or renaming something that's a documented part of Thorium's feature set, such as variables, mixins, functions, CSS classes
* Removing or renaming a React component
* Removing or renaming a React component's props

Not every single change needs to be described here - the primary place to for developers to read about how to use *backwards-compatible* changes is the Thorium website.

### Upgrading guide entry template

Entries should be written in Markdown. The heading should call out the versions you're documenting. The body of an entry should be a detailed description of what steps a developer should take in order to successfully upgrade to the new version.

```markdown
## Upgrading from vX to vY

The `isInvalid` prop of the "FooBar" React component has been renamed to `invalid`. Parent components should pass a boolean value for `invalid`. It should be true when the "FooBar" component is in the error state, and false when it's successful.

"Foo" styles are no longer applied to HTML <foo> elements by default. In order to make an element with Thorium's foundational styles, use the `.foo` CSS class.
```

## Tagging

---

Tags are used bookmark important points in the history of the codebase -- usually releases. They should include the complete version with the major, minor and patch numbers, prefixed by `v`.

### Do:

* `v1.0.0`
* `v2.0.1`
* `v3.2.0`

### Don't:

* `v3.2` -- patch number is missing
* `v.2.0.1` -- unnecessary punctuation after `v`
* `1.0.0` -- missing `v`

Thorium administrators will add tags as part of the release process.

## Release branches

---

Release branches are a way to support the past few releases, while master moves forward with new features for future versions. Unreleased code stays in the master branch, while a hotfix can be cherry picked to a release branch and deployed as a patch version.

Release branches are named according to the pattern `release/vX.X` where X.X are the major and minor version. Example: `release/v1.0`.

Thorium administrators will create release branches as part of the release process.

## Hosting the documentation

---

This documentation site is powered by the [Wintersmith](http://wintersmith.io/) static site generator. It can be hosted on any infrastructure that supports static HTML, CSS, and JavaScript.

### Build environment

Install [Git](https://git-scm.com/downloads) the latest stable version of [Node.js](https://nodejs.org/en/).

### Deployment

1. Install Thorium's dependencies
2. Build static assets
3. Copy the contents of `./docs/dist/docs/` to the server's root public directory

```bash
npm install
npm run build
rsync --delete -acvz ./docs/dist/docs/ user@example.com:/var/www/public_html/
```
