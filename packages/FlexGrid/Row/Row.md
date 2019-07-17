### Alignment

Use flexbox alignment properties to vertically and horizontally align columns.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row horizontalAlign="start">
    <FlexGrid.Col xs={4} md={2}>
      <Box vertical={2}>
        <Text>Left</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} md={2}>
      <Box vertical={2}>
        <Text>aligned</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row horizontalAlign="center">
    <FlexGrid.Col xs={4} md={2}>
      <Box vertical={2}>
        <Text>Center</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} md={2}>
      <Box vertical={2}>
        <Text>aligned</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row horizontalAlign="end">
    <FlexGrid.Col xs={4} md={2}>
      <Box vertical={2}>
        <Text>Right</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} md={2}>
      <Box vertical={2}>
        <Text>aligned</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row verticalAlign="top">
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>Top vertical aligned</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <div style={{ height: 100 }} />
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row verticalAlign="middle">
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>Middle vertical aligned</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <div style={{ height: 100 }} />
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row verticalAlign="bottom">
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>Bottom vertical aligned</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <div style={{ height: 100 }} />
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Distribution

Use flexbox distribution properties to control the negative space around columns.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row distribute="around">
    <FlexGrid.Col xs={3}>
      <Box vertical={2}>
        <Text>Around</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3}>
      <Box vertical={2}>
        <Text>Around</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3}>
      <Box vertical={2}>
        <Text>Around</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row distribute="between">
    <FlexGrid.Col xs={3}>
      <Box vertical={2}>
        <Text>Between</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3}>
      <Box vertical={2}>
        <Text>Between</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3}>
      <Box vertical={2}>
        <Text>Between</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Reversing item order

On certain layouts, the order of items within the row may need to be reversed. To do this, set the corresponding prop for the target breakpoint range as `true`. If a breakpoint is defined as `true`, it will affect all other breakpoints after it until a latter breakpoint assigned as `false` is found.

In the following example, the items are set to reverse until the `md` breakpoint. Then, at the `xl` breakpoint, the items will reverse again.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row xsReverse={true} mdReverse={false} xlReverse={true}>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>1</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
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
