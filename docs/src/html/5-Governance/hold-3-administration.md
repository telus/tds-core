---
title: Administration
template: doc.jade
---

## Release checklist

---

<ul class="list list--checked">
    <li class="list__item">Update `version` in all package.json files</li>
    <li class="list__item">Tag the commit being released</li>
</ul>

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
