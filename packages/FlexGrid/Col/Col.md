### Span

When not supplied a `span` prop, Col components automatically expand to fill the width of their container. You can specify a span amount from 1 to 12.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col span={3}>
      <Text>3 column</Text>
    </FlexGrid.Col>
    <FlexGrid.Col span={3}>
      <Text>3 columns</Text>
    </FlexGrid.Col>
    <FlexGrid.Col span={6}>
      <Text>6 columns</Text>
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
