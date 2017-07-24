# TELUS Design System [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

TDS, the TELUS Design system is a set of living guidelines that communicates our brand promise through our digital experiences. 
It's a holistic platform that integrates documentation, guidelines and design management and that serves as single source for 
digital design guidelines, code patterns and UI elements.

TDS usage, documentation & examples: <http://tds.telus.digital>


## Installation

_If you are using the [isomorphic-starter-kit](https://github.com/telusdigital/telus-isomorphic-starter-kit), these steps should already be done._ 

```sh
yarn add @telusdigital/tds

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

import {Card, Spinner} from '@telusdigital/tds';

const MyLoadingCard = ({loading, children}) => (
  <div>
    {loading && <Spinner spinning={spinning} tip="Loading..." />}
    
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
# MyLoadingCard.scss

@import '~@telusdigital/tds/dist/helpers';
@import '~@telusdigital/tds/dist/mixins';
@import '~@telusdigital/tds/dist/variables';

.my-loading-card {
  color: $color-accessible-green;
}
```
