```jsx static
// App.jsx

import CSSReset from '@tds/core-css-reset'
;<div>
  <CSSReset />
  {children}
</div>
```

```jsx noeditor
const { version } = require('./package.json')
const PackageVersion = require('../../docs/components/custom/PackageVersion/PackageVersion').default
;<PackageVersion version={version} />
```

### CSS reset

This package includes a [global styled component](https://www.styled-components.com/docs/api#createglobalstyle) that adds page-level styles to establish a common baseline:

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

### Global styled components

#### Flexible `<main />` tag

When a TELUS page has content too short to fill the browser's height, empty space appears between the footer and the bottom of the viewport. The `<GlobalFlexMain />` styled component helps by creating enough minimum height for the `<main />` element to fill the entire viewport height along with the global header and footer.

```jsx static
import { GlobalFlexMain } from '@tds/core-css-reset'
;
<React.Fragment>
  <Head />
  <PageContianer>
    <GlobalFlexMain />
    {children}
  </PageContainer>
</React.Fragment>
```

| Before                                                                                                           | After                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <img src="css-reset_footer-before.png" alt="footer at the end of content with white space below" width="100%" /> | <img src="css-reset_footer-after.png" alt="footer fixed to the bottom of page with white space above" width="100%" /> |
