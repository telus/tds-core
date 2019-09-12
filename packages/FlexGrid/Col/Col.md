### Responsive column widths

Use the `xs`, `sm`, `md`, `lg` and `xl` props to set the number of column widths to span. When not specified,
columns will automatically span equal widths in their row. If the prop is set to `0`, the column at that breakpoint will be hidden.

The column span props correspond to their min-width breakpoints. For example, when `md` is defined as `6`, your column
width will be `6` from the `md` breakpoint and greater, unless you specify a value for `lg` or `xl`.

Refer to the table in the [**Responsive**](#/Layout?id=responsive) section for the breakpoints.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={6}>
      <Box vertical={2}>
        <Text>12 xs, 6 md</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={6}>
      <Box vertical={2}>
        <Text>12 xs, 6 md</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col xs={6} md={4}>
      <Box vertical={2}>
        <Text>6 xs, 4 md</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={4}>
      <Box vertical={2}>
        <Text>6 xs, 4 md</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={4}>
      <Box vertical={2}>
        <Text>6 xs, 4 md</Text>
      </Box>
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
      <Box vertical={2}>
        <Text>4 xs</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} xsOffset={4}>
      <Box vertical={2}>
        <Text>4 xs, offset 4</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Hiding Columns

Hide columns starting from certain breakpoints by setting the corresponding prop for the target breakpoint range as `0`. If a breakpoint is defined as `0`, it will affect all other breakpoints after it until a latter breakpoint assigned as not `0` nor `undefined` is found.

In the following example, the second column is set to hidden for `xs`, `sm`, and `xl` breakpoints. This column is not hidden for `md` and `lg` breakpoints.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>1</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={0} sm={0} md={4} xl={0}>
      <Box vertical={2}>
        <Text>2</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>3</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Aligning Column Content

Use the `horizontalAlign` prop to align the content of a column.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col horizontalAlign={{ xs: 'center', md: 'left' }}>
      <Box vertical={2}>
        <Text>Left on desktop, center on mobile</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col horizontalAlign="right">
      <Box vertical={2}>
        <Text>Always right</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
