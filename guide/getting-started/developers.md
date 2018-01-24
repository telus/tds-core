# TDS Getting Started

A Guide for Developers

As a developer, your primary interaction point with TDS is through React components. Though the components are currently distributed in a single bundle, you should conceptualize them as independent, composable components.

TDS components include:

* Semantic and accessible markup
* Cross-browser compatible styling
* Responsive behaviour
* Small, contained bits of UI logic

TDS components do not include:

* Business logic, such as validations or API calls
* External margins or global side effects


## Installing

If you are using the [Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit), TDS is already installed and configured. You can jump straight to [using the components](#3-use-tds-components).

To install the latest version:

```sh
yarn add @telusdigital/tds

# or with npm
npm install @telusdigital/tds --save
```

That's it! You don't need any other dependencies to use the TDS.

Don't have yarn? Learn [how to install it](https://yarnpkg.com/en/docs/install).

## Usage

### 1. Configure webpack to load CSS

Add an entry to the `module.rules` array to load CSS. You may also provide other configuration such as the [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) to extract all styles into a separate stylesheet file.


```js
// webpack.config.js
{
  module: {
    rules: [
      // other rules
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
```

### 2. Import the TDS styles

Import the TDS stylesheet into the main entry point of your application. It contains a small amount of page level styles and the pre-compiled components' styles. We use CSS Modules to generate unique class names, which guarantees that TDS component styles will not conflict with your application's class names.

You will not use these styles directly. Webpack will bundle the TDS styles with your application-specific styles, and they will be consumed by the TDS components.

See the FAQ for [more info about the specific global styles that are applied](faq.md#global-styles).

```js
// index.js
import React from 'react';
import { render } from 'react-dom';

import App from './App';

import '@telusdigital/tds/dist/tds.css';

render(
  <App />,
  document.getElementById("root")
);
```

### 3. Use TDS Components

TDS components are made to be composed. Each one accomplishes a specific purpose. Combine them to create more complex components for your application.

```js
// BannerText.jsx

import React from 'react'

import { Box, Button, DisplayHeading, Paragraph } from '@telusdigital/tds'

const BannerText = ({ onDownloadClick }) => (
  <Box between={5}>
    <DisplayHeading>Pay your bills and monitor internet usage on the go</DisplayHeading>
    <Paragraph>Download the new and improved My Account app today.</Paragraph>

    <Button onClick={onDownloadClick}>Download now</Button>
  </Box>
)

export default BannerText
```

### 4. Use TDS colours

Colour is the one exception, as the colour palette is available as Sass variables. While the TDS components already have colour baked in, you may use the TDS colour variables to add style to your own components such as setting background colours or border colours.

A list of the available colours and their use cases can be found [in the Design section](../design/colour.md).

```scss
// BannerText.scss

@import '~@telusdigital/tds/dist/scss/colours';

.banner {
  background-color: $color-purple;
}
```
