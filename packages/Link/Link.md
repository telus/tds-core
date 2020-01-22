### Usage criteria

- Inherit the font size of surrounding text
- Available as Default (Shark Grey) or Invert (White)
- May include an icon, see **Links with icons**
- May open link in a new window/tab
  - Use Links with icons; use the `LinkExternal` icon to support recognition
  - Provide appropriate text as part of the label or visually hidden text to anticipate user expectation
  - Recommend to limit use when the source will direct the user away from critical or focused user flow

### Minimal usage

```jsx
<Box between={3} inset={3}>
  <Paragraph size="large">
    <Link href="#">Go to the TDS homepage</Link>
  </Paragraph>

  <Paragraph size="medium">
    <Link href="#">Go to the TDS homepage</Link>
  </Paragraph>

  <Paragraph size="small">
    <Link href="#">Go to the TDS homepage</Link>
  </Paragraph>
</Box>
```

### Inverted

```jsx { "props": { "className": "docs_purple-block" } }
<Box between={3} inset={3}>
  <Paragraph size="large" invert>
    <Link href="#" invert>
      Go to the TDS homepage
    </Link>
  </Paragraph>

  <Paragraph size="medium" invert>
    <Link href="#" invert>
      Go to the TDS homepage
    </Link>
  </Paragraph>

  <Paragraph size="small" invert>
    <Link href="#" invert>
      Go to the TDS homepage
    </Link>
  </Paragraph>
</Box>
```

### Using with React Router Links

When using Link with React Router, you must pass in the React Router Link component as a prop. Our intention is to have developers supply the React Router Link component whether they are on version 3 of React Router, or are using the latest React Router DOM package on version 4. This way, we avoid deep dependency conflicts.

It is recommended to set up a component wrapper in your project to avoid repetition, like so:

**LinkWrapper.jsx**

```jsx noeditor static
import React from 'react'

// React Router version 3
import { Link as ReactRouterLink } from 'react-router'

// React Router version 4
// import { Link as ReactRouterLink } from 'react-router-dom'

import TdsLink from '@tds/core-link'

// If you're importing from @telusdigital/tds, write this as:
// import { Link as TdsLink } from '@telusdigital/tds';

const LinkWrapper = ({ children, ...rest }) => (
  <TdsLink {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </TdsLink>
)

export default LinkWrapper
```

**App.js**

```js noeditor static
import Link from './LinkWrapper'

const MyApp = () => (
  <main>
    ...
    <Link to="/more">Read More</Link>
    <Link href="https://www.telus.com/">Telus Website</Link>
  </main>
)
```

This way, you can output normal anchors or react router links using a single component.

### <a name="linksWithIcons"></a>Links with icons

```jsx
<div>
  <Box between={3}>
    <span>
      <Link href="#" icon={Delete} iconPosition="left">
        Delete
      </Link>
    </span>
    <span>
      <Link href="#" icon={Download} iconPosition="left">
        Download records
      </Link>
    </span>

    <span>
      <Link href="#" icon={DownloadPDF} iconPosition="left">
        January <A11yContent>PDF</A11yContent>
      </Link>
    </span>

    <span>
      <Link href="#" icon={DownloadPDFs} iconPosition="left">
        Download all 2019 bills
      </Link>
    </span>

    <span>
      <Link href="#" icon={Edit} iconPosition="left">
        Edit
      </Link>
    </span>

    <span>
      <Link href="#" icon={LinkExternal} iconPosition="left" target="_blank">
        Find My Device <A11yContent>Opens in a new window</A11yContent>
      </Link>
    </span>

    <span>
      <Link href="#" icon={Print} iconPosition="left">
        Print
      </Link>
    </span>

    <span>
      <Link href="#" icon={Profile} iconPosition="left">
        Profile
      </Link>
    </span>

    <span>
      <Link href="#" icon={Settings} iconPosition="left">
        Settings
      </Link>
    </span>

    <span>
      <Link href="#" icon={Search} iconPosition="left">
        Search
      </Link>
    </span>
  </Box>
</div>
```

#### Grouping icons

```jsx
<Box between={4}>
  <Box between={3}>
    <span>
      <Link href="#" icon={DownloadPDF} iconPosition="left">
        January (PDF)
      </Link>
    </span>
    <span>
      <Link href="#" icon={DownloadPDF} iconPosition="left">
        February (PDF)
      </Link>
    </span>
    <span>
      <Link href="#" icon={DownloadPDF} iconPosition="left">
        March (PDF)
      </Link>
    </span>
  </Box>
  <span>
    <Link href="#" icon={DownloadPDFs} iconPosition="left">
      Download all available 2019 bills (PDFs)
    </Link>
  </span>
</Box>
```

#### Links with icons usage criteria

- Inherit colour from parent
- Icon visual size will depend on parent
- May align icon to the left or right
  - Recommend to align icon to the right when used as an inline text link
  - Recommend to align icon to the left when used as
    - Single independent link with icon
    - Group of independent links with icon
- Recommend to include 16px space between independent links with icons
- Recommend to include 32px bottom margin for a group of independent links (small/medium text)
- Recommend to include 48px bottom margin for a group of independent links (large text)
- Don’t use in headings
- The following icons are available for use in Links:
  - Delete
  - Download
  - DownloadPDF
  - DownloadPDFs
  - Edit
  - LinkExternal
  - Print
  - Profile
  - Settings
  - Search
