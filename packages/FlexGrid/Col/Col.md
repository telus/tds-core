### Responsive Props

When not supplied an `xs`, `sm`, `md`, `lg`, `xl` or `span` prop, Col components automatically expand to fill the width of their container. You can specify a column amount from 1 to 12.

The `xs`, `sm`, `md`, `lg` or `xl` props correspond to their min-width breakpoints. For example, when `md` is defined as `6`, your column width will be `6` from the `md` breakpoint and greater, unless you specify a value for `lg` or `xl`.

The `span` prop is now deprecated. Please use the `xs` prop for identical functionality.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={3}>
      <Text>3 column</Text>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3} sm={4} md={5} lg={6} xl={7}>
      <Text>3-7 columns, depending on window size</Text>
    </FlexGrid.Col>
    <FlexGrid.Col md={2}>
      <Text>2 columns</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Offset

Supplying an `offset` prop will add a left margin to your Col.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col offset={3}>
      <Text>3 columns away</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
