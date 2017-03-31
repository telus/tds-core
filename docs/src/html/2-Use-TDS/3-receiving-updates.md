---
title: Receiving Updates
template: doc.jade
---

* [Getting updates](#getting-updates)
* [Reviewing changes](#reviewing-changes)
* [Release Process](#release-process)
* [Getting Design Updates](#getting-design-updates)
* [How to handle defects](#how-to-handle-defects)
* [Design and Sketch issues](#design-and-sketch-issues)



## Getting updates

---

### CDN users

The CDN-hosted TDS has its complete version number in the path. For example, version 0.9.5 can be found at:

<p style="text-align: center;">
`https://cdn.telus.digital/thorium/core/v0.9.5/thorium.min.css`
</p>

To upgrade, change this URL in your project's `<link>` tag.

If you want to use our latest and greatest release you can include the following stylesheet in your project:

<p style="text-align: center;">
`https://cdn.telus.digital/thorium/core/v0-latest/thorium.min.css`
</p>

However, if you are already in production and don't want our releases to break your site, we recommend you use a fixed version until you have time to accommodate the tweaks needed to consume the latest version as per our [Upgrading Guide](https://github.com/telusdigital/telus-thorium-core/blob/master/UPGRADING.md).

### NPM module users

Run NPM's update command to get the latest published version. The NPM tool will choose a version number compatible with the [constraint](#versioning) in your package.json file.

```bash
npm update telus-thorium-core
```

See the [npm-update documentation on npmjs.com](https://docs.npmjs.com/cli/update) for an in-depth guide to using this command.

### Stay in the loop

* Check [Thorium's homepage](/) to find the latest version number
* Join us on Slack in **#nextlevel-tds**

[comment]: # (If only two lines separate this this headline and the preceeding list, the h2 will end up inside the last li tag)

## Reviewing changes

---

We use a few different files to document the TDS repository and its changes. All teams should examine these documents before applying updates.

* [README](https://github.com/telusdigital/telus-thorium-core/blob/master/README.md) file contains the most basic information a developer needs to get up and running. For further instructions, see the “Getting Started” section of the documentation site.
* [CHANGELOG](https://github.com/telusdigital/telus-thorium-core/blob/master/CHANGELOG.md) file describes what was added/updated/fixed in each version, with a new entry for every release
* [UPGRADING](https://github.com/telusdigital/telus-thorium-core/blob/master/UPGRADING.md) file has instructions for any code changes a user has to make when upgrading to a major new version
    * Breaking changes must be documented here in detail

Users should actively bump the version in a non-production environment, and ensure that this is fully smoke tested before being deployed.

* If NPM is being used, the version requirement for TDS can be set to allow automatic patch updating (patches = safe, generally bugfixing changes) while preventing automatic minor and major version updates. This gives the developers easy access to the latest bugfixes, while protecting their project from any breaking changes.
* CDN “latest” settings should only automatically update minor and patch releases
* If there is a new default, such as a class rename that almost ensures breaking some existing code, this should be considered a major version. It will be socialized prior to deployment (for those committed to automated updates). This should also be documented in the TDS UPGRADING file.

## Release Process

---

* TDS users must subscribe to the Slack channel and an Email blast, which will be set up to notify users about upcoming major or minor releases
* Upon the announcement of a release, users should review change log to understand updates
* For manual updates:
    * For NPM: Change version number inside your project, and run npm update
    * For CDN: Change version number in the URL path of the CSS and JS files you're pulling
* Users should apply updates in a local environment and have developer review the change log for affected code and then conduct a visual smoke test.
* The outcome squads’ local QA should execute testing. Defects should be logged in local project boards, and be reviewed by Product manager.
* Project Sponsors may need to be made aware of the changes and accept that visual changes will be happening, depending on business requirements
* For any issues that must be addressed immediately (and not in the next TDS), code overrides can be written locally by developers and logged as a comment on the local defect ticket.
* Breaking defects should immediately be filed with TDS [via an issue in Git](https://github.com/telusdigital/telus-thorium-core/issues).

## Getting Design Updates

---

Designers should [download the latest Master sketch file](/2-Use-TDS/5-downloads.html) and use TDS elements to create their page layouts.

In addition to the downloads page, the Sketch file is also found in the ["designs" folder of the Git repo](https://github.com/telusdigital/telus-thorium-core/tree/master/designs).

## How to handle defects

---

TDS repairs defects by releasing the bug fixes in new versions.

* Code that is released is not retracted
* The bug fix is published in a new “patch” version of Thorium
    * Ex: `v0.3.0` &rarr; `v0.3.1`
* Consumers are advised to update their TDS [version constraint](https://github.com/npm/node-semver#ranges) to get the patch release

If an issue exists, Users must do one of the following NPM/CDN procedures:

### NPM users

1. Modify their project’s package.json TDS dependency [version number](https://github.com/npm/node-semver#ranges)
2. Run NPM [install](https://docs.npmjs.com/cli/install)/[update](https://docs.npmjs.com/cli/update)
3. Deploy and test their project

### CDN users

1. Change the version number in the CDN files’ URL
2. Deploy and test their project

### CDN “latest file” users

1. Wait for the patch to be released, or change to a more specific (downgraded) version number than “latest”
2. Deploy and test their project

### File an issue

Open a [Github issue](https://github.com/telusdigital/telus-thorium-core/issues) describing the defect.

* If the issue is small and could likely be patched, contact the TDS team, so they can quickly patch and broadcast.
* If the issue is large/cannot a fix cannot be released quickly, the TDS team will broadcast that there has been a significant issue -- and that all teams should downgrade their version numbers, so their project will avoid the defective release

## Design and Sketch issues

---

Issues that are discovered with the master Sketch file should be escalated to the TDS scrum master, who will log a ticket in Github and add it to the TDS squad backlog. These will be prioritized and addressed according to team capacity.
