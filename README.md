# TELUS Design System [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

The TELUS Design System (TDS) is a set of living guidelines that communicates our brand promise through our digital experiences.
It's a holistic platform that integrates documentation, guidelines and design management and that serves as single source for
digital design guidelines, code patterns and UI elements.

TDS component usage, documentation & examples: <http://tds.telus.com>
## Table of Contents

#### TELUS Design System

* [Getting Started](guide/getting-started/getting-started.md)
  * [Designers](guide/getting-started/designers.md)
  * [Developers](guide/getting-started/developers.md)
* [Components](http://tds.telus.com)
* [Contributing](guide/contributing/contributing.md)
  * [Designer guide](guide/contributing/designer-guide.md)
  * [Developer guide](guide/contributing/developer-guide.md)
  * [Codebase overview](guide/contributing/codebase-overview.md)
* [Roadmap](guide/roadmap.md)

#### Design principles &amp; guidelines

* [Design Principles](guide/design/principles.md)
* [Accessibility](guide/accessibility/accessibility.md)
  * [Colour and contrast](guide/accessibility/colour-contrast.md)
  * [Keyboard navigation](guide/accessibility/keyboard-nav.md)
  * [Screen readers](guide/accessibility/screen-readers.md)
  * [Content](guide/accessibility/content.md)
* [Colour](guide/design/colour.md)
* [Typography](guide/design/typography.md)
* [Iconography](guide/design/iconography.md)
* [Writing](guide/design/writing.md)
* [Layout](guide/design/layout.md)
* [Motion](guide/design/motion.md)
* [Depth](guide/design/depth.md)

#### Assets
* [Master Sketch file](https://github.com/telusdigital/tds/releases/latest)

#### Support &amp; links

* [Contact us](guide/contact.md)
* [FAQs](guide/getting-started/faq.md)
* [Report an issue](https://github.com/telusdigital/tds/issues/new?template=defect_template.md)
* [Suggest a feature](https://github.com/telusdigital/tds/issues/new?template=feature_template.md)
* [TDS on GitHub](https://github.com/telusdigital/tds)
* [npm package](https://www.npmjs.com/package/@telusdigital/tds)

## TDS Maintainers

The following group are the maintainers of this project, and have merge rights accordingly. Please reach out to them if you have questions or need support for your contribution to the TELUS Design System.

| Member | Role | Slack | Github | 
| --- | --- | --- | --- |
| Ryan Oglesby | Tech Lead | @roglesby | ryanoglesby08 |
| Enrico Sacchetti | Sr. Dev | @enrico | theetrain | 
| Laura Cabrera | Dev | @laura.cabrera | lzcabrera |
| Lucy List | Design Lead | @lucylist | lucylist |
| Stephen McGuinness | Design | @stephenmcg | |
| Alexandra Fedyk | Scrum Master | @alexandra.fedyk | |


## Installation

_If you are using the [isomorphic-starter-kit](https://github.com/telusdigital/telus-isomorphic-starter-kit), these steps should already be done._

```sh
yarn add @telusdigital/tds

# Or, with npm :)
npm install @telusdigital/tds --save
```

## Usage

### 1. Import the TDS styles

First, import the TDS stylesheet into the main entry point of your application. This stylesheet contains all the global TDS styles and the
component styles. Webpack will bundle the TDS styles with your application specific styles.

```js
// index.js

import React from 'react';
import { render } from 'react-dom';

import App from './App';

import '@telusdigital/tds/dist/tds.css'

render(
  <App />,
  document.getElementById("root")
);
```

### 2. Use TDS Components

Now, use TDS components in your application components.

```js
// MyLoadingCard.js

import React from 'react';

import { Card, Spinner } from '@telusdigital/tds';

const MyLoadingCard = ({loading, children}) => (
  <div>
    {loading && <Spinner spinning={true} tip="Loading..." />}

    <Card>
      {children}
    </Card>
  </div>
);
```

### 3. Use TDS Sass variables and mixins

Finally, use TDS Sass variables and mixins in your Sass files. Only add these imports into files that use the provided
variables, functions, or mixins.

```scss
// MyLoadingCard.scss

@import '~@telusdigital/tds/dist/scss/helpers';
@import '~@telusdigital/tds/dist/scss/mixins';
@import '~@telusdigital/tds/dist/scss/variables';

.my-loading-card {
  color: $color-accessible-green;
}
```

[license-url]: http://choosealicense.com/licenses/isc/

[npm-url]: https://www.npmjs.com/package/@telusdigital/tds
[npm-version]: https://img.shields.io/npm/v/@telusdigital/tds.svg?style=flat-square
[npm-license]: https://img.shields.io/npm/l/@telusdigital/tds.svg?style=flat-square
