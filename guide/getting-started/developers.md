!INCLUDE "../tds-sunset.html"

# Getting started - developer guide

As a developer, your primary interaction point with TDS is through React components. These components are independent, composable components distributed as individual packages.

TDS components include:

- Semantic and accessible markup
- Cross-browser compatible styling
- Responsive behaviour
- Small, contained bits of UI logic

TDS components do not include:

- Business logic, such as application-specific validations or API calls
- External margins or global side effects

## Installing

If you are using the latest version of [Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit), TDS is already installed and configured. You can jump straight to [using the components](#3-use-tds-components).

To install the latest version of a component:

```sh
npm install @tds/core-<component-name> --save
```

Note, most TDS components require some `peerDependencies` including `react`, `react-dom`, and `styled-components`.

```json
// Example from @tds/core-text/package.json
...
"peerDependencies": {
  "react": "^16.8.2 || ^17.0.0",
  "react-dom": "^16.8.2 || ^17.0.0",
  "styled-components": "^4.1.3 || ^5.1.0"
},
```

## Usage

### 1. Configure webpack to load CSS

_Note: While still required for a small percentage of TDS components, this step will no longer be necessary in the future._

Add an entry to the `module.rules` array to load CSS. You may also provide other configuration such as the [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) to extract all styles into a separate stylesheet file.

```js
// webpack.config.js
{
  module: {
    rules: [
      // other rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
```

### 2. Import the TDS css-reset styles

The css reset stylesheet contains a small amount of page level styles.

You will not use these styles directly. Webpack will bundle the TDS styles with your application-specific styles, and they will be consumed by the TDS components.

Before importing the css-reset stylesheet into the main entry point of your application, you need to install the css-reset package as a dependency.

```sh
# install the core-css-reset package as a dependency in `ui/package.json`
npm install @tds/core-css-reset --save
```

```js
// index.js
import React from 'react'
import { render } from 'react-dom'

import App from './App'

import CSSReset from '@tds/core-css-reset'

render(
  <>
    <CSSReset />
    <App />
  </>,
  document.getElementById('root')
)
```

### 3. Include the required polyfills

In order to support Internet Explorer 11, the following polyfills should be included in your application.

- `es6`
- `Array.prototype.includes`
- `Set`

```html
<html>
  <head>
    ...
    <link
      rel="preload"
      as="script"
      href="https://polyfill.io/v3/polyfill.min.js?features=es6%2CArray.prototype.includes%2CSet"
    />
    ...
  </head>
  <body>
    ...
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6%2CArray.prototype.includes%2CSet"></script>
    ...
  </body>
</html>
```

### 4. Use TDS Components

TDS components are made to be composed. Each one accomplishes a specific purpose. Combine them to create more complex components for your application.

```js
// BannerText.jsx

import React from 'react'

import Box from '@tds/core-box'
import Button from '@tds/core-button'
import DisplayHeading from '@tds/core-display-heading'
import Paragraph from '@tds/core-paragraph'

const BannerText = ({ onDownloadClick }) => (
  <Box between={5}>
    <DisplayHeading>Pay your bills and monitor internet usage on the go</DisplayHeading>
    <Paragraph>Download the new and improved My Account app today.</Paragraph>

    <div>
      <Button onClick={onDownloadClick}>Download now</Button>
    </div>
  </Box>
)

export default BannerText
```

### 5. Use TDS colours

While the TDS components already have colour baked in, you may use the TDS colour variables to add style to your own components such as setting background colours or border colours. These are delivered via named exports from `@tds/core-colours`.

A list of the available colours and their use cases can be found [in the Design section](../design/colour.md).

```sh
# install the @tds/core-colours package as a dependency in `app/package.json`
npm install @tds/core-colours --save
```

```jsx
/* CustomButton.jsx */
import { colorTelusGreen, colorTelusPurple } from '@tds/core-colours'

const StyledButton = styled.button({
  backgroundColor: colorTelusPurple,
  color: colorTelusGreen,
})
```
