### Minimal usage

```jsx
<ChevronRight />
```

### Available Icons

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
