---
title: Getting Started
template: doc.jade
---

Welcome to the TELUS Design System - Thorium Core. We're glad you're planning on using Thorium in your project! This page describes where you can get the library, and how you can control which version is used by your project.

## Getting Thorium
---

There are two official ways to include Thorium in your TELUS project:

1. Install the `telus-thorium-core` and `telus-thorium-enriched` NPM modules
2. Load either Thorium Core or Thorium Enriched from the CDN

## The Thorium tech stack

---

As a front-end framework, Thorium's static CSS and JavaScript assets are compatible with a variety of platforms.

For contributors, and projects that integrate deeply, Thorium is powered by these familiar tools:

* [SCSS](http://sass-lang.com/) for stylesheets
* [Node.js](https://nodejs.org/en/) under the hood
* [ES6](https://github.com/lukehoban/es6features) for JavaScript
* [React](https://facebook.github.io/react/) for views
* [ESLint](http://eslint.org/) and [stylelint](http://stylelint.io/) for linting

The Thorium Team is currently evaluating [Jest](https://facebook.github.io/jest/) + [Enzyme](http://airbnb.io/enzyme/) for its testing needs. A final decision on testing frameworks will be documented here in a future release.

## Choosing CDN vs. NPM

---

How should a project consume Thorium? CDN and NPM delivery have different advantages.

### CDN advantages

* Fastest way to get up and running
* Delivers the pre-built, pre-minified files
* End users benefit from caching as they move between TELUS web properties

Projects that will primarily leverage Thorium's core foundations and built-in elements can rely on the CDN-hosted assets to quickly start composing web pages.

### NPM advantages

* More customizable
* Offers reusable SCSS -- variables, mixins, and placeholders
* Developers can pick & choose which Enriched Components they need

Projects that will build custom components may prefer having direct access to Thorium's source code by using the NPM module.

## Using Thorium Core

---

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
  href="https://cdn.telus.digital/thorium/core/!!THORIUM_VERSION!!/thorium.min.css">
```

## Using Thorium Enriched (CDN)

---

* The CDN-hosted Thorium Enriched CSS also includes Thorium Core styles
* `<link>` the Thorium Enriched stylesheet in `<head>`
* Include React, ReactDOM, and the Thorium Enriched JavaScripts at the end of `<body>`
* Use the `React`, `ReactDOM`, and `Thorium` variables, which are exposed on the `window`

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Thorium Enriched Example</title>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.telus.digital/thorium/enriched/!!THORIUM_VERSION!!/thorium-enriched.min.css">
</head>
<body>

<div id="mount"></div>

<script
    src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
<script
    src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
<script
    src="https://cdn.telus.digital/thorium/enriched/!!THORIUM_VERSION!!/thorium-enriched.min.js"></script>

<script>
ReactDOM.render(
  React.createElement(
    Thorium.SelectorCounter,
    {
      defaultValue: 5,
      min: 1
    }
  ),
  document.getElementById('mount')
);
</script>
```

## Using Thorium Enriched (NPM)

---

Install both the Thorium Core & Enriched modules:

```bash
npm i --save telus-thorium-core telus-thorium-enriched
```

Import the Core styles somewhere in your main SCSS:

```scss
@import '~telus-thorium-core/scss/thorium';
```

Use individual Enriched Components throughout your JavaScript:

```javascript
import React from 'react';
import { SelectorCounter } from 'telus-thorium-enriched';

const MyForm = () => (<form><SelectorCounter /></form>);

export default MyForm;
```

### Client-side rendering

Use ReactDOM to render components client-side:

```javascript
import React from 'react';
import { render } from 'react-dom';
import MyForm from './MyForm';

render(
    <MyForm>,
    document.getElementById('mount')
);
```

### Server-side rendering

Use ReactDOMServer to render components server-side:

```javascript
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Thorium = require('telus-thorium-enriched');

var markup = ReactDOMServer.renderToString(
  React.createElement(Thorium.SelectorCounter, {})
);
```

## Bundling an Enriched project

---

[Webpack](https://webpack.github.io/) is the preferred tool for preparing client-side code.
It does a great job handling React, ES6, styles, and more.

Internally, Enriched Components will `require()` their scss when `process.env.BROWSER` is `true`.

See the [Webpack file of this documentation site](https://github.com/telusdigital/telus-thorium-core/blob/master/docs/webpack.config.js) for an example configuration.

## Versioning

---

Thorium uses <a href="http://semver.org/" target="_blank">semantic versioning</a> to number its releases. A number like `!!THORIUM_VERSION!!` has three parts from left to right:

1. The **MAJOR** version - increments when backwards-incompatible changes are released.
2. The **MINOR** version - increments when backwards-compatible changes are released.
3. The **PATCH** version - increments when backwards-compatible bug fixes are released.

You're in control of which Thorium version is included in your project.

### Choosing a CDN-hosted version

Files published to the Thorium CDN will have their version number in the URL. Simply construct your stylesheet link tag with the versioned address, as shown in the [example above](#content-delivery-network).

### Choosing an NPM module version

The version constraints in your package.json file control which version of Thorium gets pulled in. NPM by default will choose a constraint like `^0.4.0` when the `--save` command line flag is used. This allows major version changes (bug fixes and new backwards-compatible features).

Try out the <a href="http://jubianchi.github.io/semver-check/" target="_blank">online semver checker</a> if you'd like to experiment with adjusting your project's constraints.

## Usage criteria

---

1. Must be comfortable using Thorium aesthetic (B4YB).
2. Created to support new builds (greenfield). The new tech stack may clash with your existing architecture. It requires:
    * Using Thorium build pipeline
    * Core:
        * Leverage Thorium typestack
        * Leverage React as a Javascript framework
            1. Thorium requires ES6 javascript syntax.
        * Leverage SCSS for stylesheets in order to use Thorium’s NPM module.
            1. If not, the CDN version of Thorium should be used.
    * Enriched:
        * All of core
        * Leverage Thorium's testing frameworks (TBD).
3. Design team should be ramped up and comfortable working in Sketch
4. Plan for technical debt to contribute site elements and incorporate feedback from the Design Guild/Thorium System.