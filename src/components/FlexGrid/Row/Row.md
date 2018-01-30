The `FlexGrid.Row` component can be used for Column alignment and distribution.

### Alignment

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="center">
    <FlexGrid.Col span={3}>Have a nice day</FlexGrid.Col>
    <FlexGrid.Col span={3}>You seem healthy</FlexGrid.Col>
    <FlexGrid.Col span={3}>Take care</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="center" verticalAlign="bottom">
    <FlexGrid.Col span={3}>Hello, have a nice day!</FlexGrid.Col>
    <FlexGrid.Col span={3}>You seem healthy</FlexGrid.Col>
    <FlexGrid.Col span={3}>Take care</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Distribution

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="center" distribute="around">
    <FlexGrid.Col span={3}>Hello</FlexGrid.Col>
    <FlexGrid.Col span={3}>You seem healthy</FlexGrid.Col>
    <FlexGrid.Col span={3}>Take care</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

```jsx
<FlexGrid gutter={false}>
  <FlexGrid.Row distribute="between">
    <FlexGrid.Col span={3}>Hello</FlexGrid.Col>
    <FlexGrid.Col span={3}>You seem healthy</FlexGrid.Col>
    <FlexGrid.Col span={3}>Take care</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
