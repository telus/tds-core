
The TELUS Design System (TDS) includes the resources needed to build consistent user interfaces within the TELUS Digital Platform.

The components in TDS include:
* semantic and accessible component markup
* cross-browser compatible CSS

These components free developers up to focus on solving unique application challenges, rather than having to reinvent standard interface elements.

In order to build a new TELUS web property, it is strongly recommended to use the TELUS Digital Platform, and TDS is the default standard package that provides the UI foundational elements needed to get started.


## Installing

To install the latest version:

```sh
yarn add @telusdigital/tds

# Or, with npm :)
npm install @telusdigital/tds --save
```

## Usage

1. Import the TDS styles

Import the TDS stylesheet into the main entry point of your application. 

`// index.js

import React from 'react';
import { render } from 'react-dom';

import App from './App';

import '@telusdigital/tds/dist/tds.css'

render(
  <App />,
  document.getElementById("root")
);`

The `tds.css` stylesheet contains the following global styles:

* reset: to standardize the different way browsers render elements by default
* font: to map the different brand approved Helvetica Neue webfonts to their corresponding TELUS-Web font-weight
* border-box: to make iteasier to size elements by telling the browser to account for any border and padding in the value you specify for width and height
* default body styles: to render the default fonts size and color

Note that webpack will bundle the TDS styles with your application specific styles.

2. Use TDS Components

Now, use TDS components in your application

` // MyBanner.jsx
import React from 'react';

import { Box, DisplayHeading, Paragraph, Button } from '@telusdigital/tds';

const BannerText = () => (
  <Box between={5}>
    <DisplayHeading>Pay your bills and monitor internet usage on the go</DisplayHeading>
    <Paragraph>Download the new and improved My Account app today.</Paragraph>
    <Button>Download now</Button>
  </Box>
);`

3. Use TDS colour sass variables 

Use TDS colour Sass variables in your Sass files to ensure that only brand approved colours are used within your application. Only add this import into files that need to use the provided colour variables.

`// MyBanner.scss

@import '~@telusdigital/tds/dist/scss/colours';

.banner{
  background-color: $color-purple;
}`
