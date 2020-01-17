## Dependent Icons

### Usage criteria

These icons indicate interactivity, but are not interactive on their own. They depend on the Link component. They depend on the [Link](#link) component.

- Must include accessible hidden text using `A11yContent` when label does not explicitly indicate use or action
  - Be mindful of using `A11yContent` appropriately as it may appear before or after the label
- Must not be used in headings
- Must not be used as an independent interactive component or render as independent SVG
- Should depend on other interactive components with a visible label as part of the wrapper component

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<IconTable
  heading="Icons"
  icons={[
    {
      name: 'Delete',
      Component: Delete,
      usageCriteria:
        'Delete or edit an item. Use for authenticated or internal applications. Don’t use on marketing pages.',
    },
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
      name: 'LinkExternal',
      Component: LinkExternal,
      usageCriteria:
        'Indicate a reference to an external source; will direct away from the TELUS experience or the primary flow ',
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
