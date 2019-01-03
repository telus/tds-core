```js static
// App.jsx

import '@tds/core-css-reset/dist/index.css'
```

```jsx noeditor
const { version } = require('./package.json')
const PackageVersion = require('../../docs/components/custom/PackageVersion/PackageVersion').default
;<PackageVersion version={version} />
```

### CSS reset

This package includes a small amount of page-level styles to establish a common baseline:

- A CSS reset to standardize default styling of HTML5 elements across browsers, using the popular Eric Meyer Reset
- `@font-face` declarations to load the TELUS web fonts
- Set box sizing to border-box to make it easier to size elements
- Default body styles to establish the base font settings

Please do not override these global styles. Doing so will likely produce non-deterministic behaviour and UI defects.

### Web font URLs

This package also provides access to the Web font URLs. For example, you can use this to preload them for improved page rendering performance.

```js static
import { fonts } from '@tds/core-css-reset'

// convert fonts array to <link rel="preload"> tags in the page <head>
```
