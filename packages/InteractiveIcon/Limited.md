### Limited interactive icons

These icons indicate interactivity but not themselves function as independent interactive components. They depend on other interactive components, such as ExpandCollapse and ChevronLink. They’re not to be used or displayed on their own.

- Must depend on other interactive components
- Must appear with a visible label as part of the wrapper component
- May include additional accessible but hidden text
- Visual icon is 24px height and width
- Additional colour variants (green) are available to limited icons
- Do not function as independent interactive components

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<IconTable
  heading="Icons"
  icons={[
    {
      name: 'Caret Down',
      Component: CaretDown,
      usageCriteria: 'Indicate downward action',
      props: {
        a11yText: 'Expand',
      },
    },
    {
      name: 'Caret Up',
      Component: CaretUp,
      usageCriteria: 'Indicate upward action',
      props: {
        a11yText: 'Collapse',
      },
    },
    {
      name: 'Chevron Left',
      Component: ChevronLeft,
      usageCriteria: 'Indicate left action',
      props: {
        a11yText: 'Open link',
      },
    },
    {
      name: 'Chevron Right',
      Component: ChevronRight,
      usageCriteria: 'Indicate right action',
      props: {
        a11yText: 'Open link',
      },
    },
  ]}
/>
```

These interactive icons have a default colour of Accessible Green with the following colour variants available:

```jsx
<Box between={2}>
  <Heading level="h4">Default: Accessible Green (#2B8000)</Heading>
  <ChevronRight />
  <Heading level="h4">Alternative: TELUS purple (#4B286D)</Heading>
  <ChevronRight variant="alternative" />
  <Heading level="h4">Basic: Shark Grey (#2A2C2E)</Heading>
  <ChevronRight variant="basic" />
  <Heading level="h4">Inverted: White (#FFFFFF)</Heading>
  <div style={{ backgroundColor: '#4B286D', display: 'inline-block' }}>
    <ChevronRight variant="inverted" />
  </div>
</Box>
```
