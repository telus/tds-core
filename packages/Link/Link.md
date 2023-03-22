```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/link">
        Link
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- Inherit the font size of surrounding text
- Available as Default (Shark Grey) or Invert (White)
- May include an icon, see **Links with icons** below
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

### Links with icons

The [Dependent](#dependent) InteractiveIcon group can be used within Link.

#### Guidelines

- May align icon to the left or right
- Don’t use in headings
- Recommend to align icon to the right when used as an inline text link
- Recommend to align icon to the left when used as
  - Single independent link with icon
  - Group of independent links with icon
- The icon will default to its 24px size, or adapt to the font size of the wrapping `Paragraph` or `Text` component
  - On `large` or `medium` `Paragraph` or `Text` sizes, the icon will be 24px
  - On `small` `Paragraph` or `Text` sizes, the icon will be 20px
  - Use `@tds/core-paragraph@^2.1.0` or `@tds/core-text@^3.1.0` to have `Link` inherit the size of the wrapping component

The following icons are available for use in Links:

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

#### Setting Link and Icon size using Paragraph or Text

```jsx
<Box between={3}>
  <Paragraph size="large">
    <Link href="#" icon={Settings}>
      Go to Settings
    </Link>
  </Paragraph>

  <Text size="small">
    <Link href="#" icon={Print}>
      See print-friendly version
    </Link>
  </Text>
</Box>
```

#### Grouping icons

- Recommend to include Box 3 space between independent links with icons
- Recommend to include Box 4 bottom margin for a group of independent links (small/medium text)
- Recommend to include Box 5 bottom margin for a group of independent links (large text)

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
