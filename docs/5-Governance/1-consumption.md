---
title: Consumption
template: doc.jade
---

Welcome to the TELUS Design System - Thorium Core. We're glad you're planning on using Thorium in your project! This page describes where you can get the library, and how you can control which version is used by your project.

## Getting Thorium
---

There are two official ways to include Thorium Core in your TELUS project:

1. Install the `telus-thorium-core` NPM module.
2. Retrieve Thorium from the TELUS CDN.

### NPM Module

Change into your project's root directory (where `package.json` is located), and use the NPM command line utility to install Thorium Core.

```bash
cd /path/to/your/project
npm install --save telus-thorium-core
```

<p class="subhead">Import Thorium</p>

```scss
/* File: my-project.scss */

@import "thorium";
```

<p class="subhead">Compile your SCSS</p>

Make sure the include path(s) include Thorium's scss directory.

```bash
node-sass --include-path node_modules/telus-thorium-core/scss my-project.scss > my-project.css
```

### Content Delivery Network

Add a link to the CDN-hosted thorium.css file into the `<head>` of your page.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.telus.digital/thorium/core/v0.4.0/thorium.min.css">
```

## Versioning

---

Thorium uses <a href="http://semver.org/" target="_blank">semantic versioning</a> to number its releases. Basically, a number like `0.4.0` has three parts from left to right:

<ol>
<li>The **MAJOR** version - increments when backwards-incompatible changes are released.</li>
<li>The **MINOR** version - increments when backwards-compatible changes are released.</li>
<li>The **PATCH** version - increments when backwards-compatible bug fixes are released.</li>
</ol>

You're in control of which Thorium version is included in your project.

### Choosing a CDN-hosted version

Files published to the Thorium CDN will have their version number in the URL. Simply construct your stylesheet link tag with the versioned address, as shown in the [example above](#content-delivery-network).

### Choosing an NPM module version

The version constraints in your package.json file control which version of Thorium gets pulled in. NPM by default will choose a constraint like `^0.4.0` when the `--save` command line flag is used. This allows major version changes (bug fixes and new backwards-compatible features).

Try out the <a href="http://jubianchi.github.io/semver-check/" target="_blank">online semver checker</a> if you'd like to experiment with adjusting your project's constraints.
