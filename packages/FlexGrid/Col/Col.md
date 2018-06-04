### Responsive column widths

Use the `xs`, `sm`, `md`, `lg` and `xl` props to set the number of column widths to span. When not specified,
columns will automatically span equal widths in their row.

The column span props correspond to their min-width breakpoints. For example, when `md` is defined as `6`, your column
width will be `6` from the `md` breakpoint and greater, unless you specify a value for `lg` or `xl`.

Refer to the table in the [**Responsive**](#responsive) section for the breakpoins.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={6}>
      <Box vertical={2}><Text>12 xs, 6 md</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={6}>
      <Box vertical={2}><Text>12 xs, 6 md</Text></Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col xs={6} md={4}>
      <Box vertical={2}><Text>6 xs, 4 md</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={4}>
      <Box vertical={2}><Text>6 xs, 4 md</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={4}>
      <Box vertical={2}><Text>6 xs, 4 md</Text></Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Offsetting columns

Move columns to the right using the responsive `offset` props.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={4}>
      <Box vertical={2}><Text>4 xs</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} xsOffset={4}>
      <Box vertical={2}><Text>4 xs, offset 4</Text></Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
