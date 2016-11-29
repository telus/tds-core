---
title: Receiving Updates
template: doc.jade
---

## Getting updates

---

Thorium will not automatically add its new releases to your project, and will not trigger new deployments unless you've specially configured your build environment to do so.

### CDN users

The CDN-hosted Thorium has its complete version number in the path. For example, the first release (version 0.2.0) can be found at:

<p style="text-align: center;">
`https://cdn.telus.digital/thorium/core/v0.2.0/thorium.min.css`
</p>

To upgrade, change this URL in your project's `<link>` tag.

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

 With each release, the [changelog](https://github.com/telusdigital/telus-thorium-core/blob/master/CHANGELOG.md) is updated with a rundown of features and bug fixes. It lives in the root directory of the repository.

 This website provides in-depth documentation of Thorium features, and is always powered by the latest release.

 The [upgrade guide](https://github.com/telusdigital/telus-thorium-core/blob/master/UPGRADING.md) describes how to adopt any backwards-incompatible changes a version may introduce.
