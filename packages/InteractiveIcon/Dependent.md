### Usage criteria

These icons indicate interactivity, but are not interactive on their own. They depend on the [Link](#/Links?id=link) component.

- Must include accessible hidden text using `A11yContent` when label does not explicitly indicate use or action
  - Be mindful of using `A11yContent` appropriately as it may appear before or after the label
- Must not be used in headings
- Must not be used as an independent interactive component or render as independent SVG
- Should depend on other interactive components with a visible label as part of the wrapper component
- When used with [Link](#/Links?id=link), Dependent icons are 20x20 when wrapped by small Paragraph or Text sizes (14px), or 24x24 when wrapped with medium or large Paragraph or Text sizes. See Links with icons for more details

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<Box between={4}>
  <IconTable
    heading="Icons for use with Links"
    icons={[
      {
        name: 'LinkExternal',
        Component: LinkExternal,
        usageCriteria:
          'Indicate a reference to an external source; will direct away from the TELUS experience or the primary flow ',
      },
    ]}
  />
  <IconTable
    heading="Icons for use with Buttons"
    icons={[
      {
        name: 'Add',
        Component: Add,
        usageCriteria: (
          <>
            Used to add items. Works well with <Link href="#/Icons?id=iconbutton">IconButton</Link>
          </>
        ),
        props: {
          a11yText: 'Add',
        },
      },
      {
        name: 'Close',
        Component: Close,
        usageCriteria: (
          <>
            Used to close. Works well with <Link href="#/Icons?id=iconbutton">IconButton</Link>
          </>
        ),
        props: {
          a11yText: 'Close',
        },
      },
      {
        name: 'PlayVideo',
        Component: PlayVideo,
        usageCriteria: (
          <>
            Used to indicate that a video is available, used with text link to bring to another page
            or window. Works well with <Link href="#/Icons?id=iconbutton">IconButton</Link>
          </>
        ),
        props: {
          a11yText: 'Play',
        },
      },
      {
        name: 'Subtract',
        Component: Subtract,
        usageCriteria: (
          <>
            Used to reduce items. Works well with{' '}
            <Link href="#/Icons?id=iconbutton">IconButton</Link>
          </>
        ),
        props: {
          a11yText: 'Remove',
        },
      },
      {
        name: 'Delete',
        Component: Delete,
        usageCriteria:
          'Delete or edit an item. Use for authenticated or internal applications. Don’t use on marketing pages.',
        props: {
          a11yText: 'Delete',
        },
      },
    ]}
  />
  <IconTable
    heading="Icons for use with Links or Buttons"
    icons={[
      {
        name: 'Download',
        Component: Download,
        usageCriteria: 'Indicate download function',
      },
      {
        name: 'DownloadPDF',
        Component: DownloadPDF,
        usageCriteria: 'Indicate download of a single PDF',
      },
      {
        name: 'DownloadPDFs',
        Component: DownloadPDFs,
        usageCriteria: 'Indicate download of multiple PDFs',
      },
      {
        name: 'Edit',
        Component: Edit,
        usageCriteria:
          'Indicate ability to edit. Use for authenticated or internal applications. Don’t use on marketing pages',
      },
      {
        name: 'Print',
        Component: Print,
        usageCriteria: 'Prompt native print module',
      },
      {
        name: 'Profile',
        Component: Profile,
        usageCriteria: 'Direct to, or indicate user profile',
      },
      {
        name: 'Search',
        Component: Search,
        usageCriteria: 'Direct to, or indicate search functions',
      },
      {
        name: 'Settings',
        Component: Settings,
        usageCriteria: 'Direct to, or indicate available settings',
      },
    ]}
  />
  <IconTable
    heading="Icon for use with Tooltip"
    icons={[
      {
        name: 'QuestionMarkCircle',
        Component: QuestionMarkCircle,
        usageCriteria: 'To be used in the TDS Tooltip component ',
      },
    ]}
  />
</Box>
```

### Minimal usage

```jsx
<Link href="#" icon={Print} iconPosition="left">
  Print
</Link>
```

### Inverted

To invert a `DependentIcon`, set invert on the parent `Link`

```jsx
<Box inset={3} style={{ background: '#4b286d' }}>
  <Link href="#" icon={Print} iconPosition="left" invert>
    Print
  </Link>
</Box>
```
