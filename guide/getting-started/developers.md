# Getting started guide for developers

The TELUS Design System (TDS) includes the resources needed to build consistent user interfaces within the TELUS Digital Platform.

The components in TDS include:
* semantic and accessible component markup
* cross-browser compatible styling and animations

These components free developers up to focus on solving unique application challenges, rather than having to reinvent standard interface elements.

This guide assumes that you are building user experiences on the [TELUS Digital Platform](https://github.com/telusdigital/telus-isomorphic-starter-kit), which TDS is part of and provides the [UI foundational elements](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/ui) needed to get started.

## Installing

To install the latest version:

```sh
yarn add @telusdigital/tds
```

Don't have yarn? Learn how to install yarn [here](https://yarnpkg.com/en/docs/install).

```sh
# Or, with npm :)
npm install @telusdigital/tds --save
```

## Usage

**1. Import the TDS styles**

  Import the TDS stylesheet into the main entry point of your application. This stylesheet contains all the global TDS styles. Webpack will bundle the TDS styles with your application specific styles.

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

**2. Use TDS Components**

  Now, use TDS components in your application

  ```js 
  // MyBanner.jsx
  import React from 'react';

  import { Box, DisplayHeading, Paragraph, Button } from '@telusdigital/tds';

  const BannerText = () => (
    <Box between={5}>
      <DisplayHeading>Pay your bills and monitor internet usage on the go</DisplayHeading>
      <Paragraph>Download the new and improved My Account app today.</Paragraph>
      <Button>Download now</Button>
    </Box>
  );
  ```

**3. Use TDS colour sass variables**

  Use TDS colour Sass variables in your Sass files to ensure that only brand approved colours are used within your application. 
  
  Only add this import into files that need to use the provided colour variables.

  ```scss 
  // MyBanner.scss
  @import '~@telusdigital/tds/dist/scss/colours';

  .banner{
    background-color: $color-purple;
  }
  ```
