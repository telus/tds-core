The `FlexGrid` component is a wrapper over [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid).

### Basic usage

FlexGrid is handy for basic grid layouts or 1-dimensional positioning. It is used
in conjunction with the [FlexGrid.Row](#row) and [FlexGrid.Col](#col) components. All three components must be
used together.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>half</FlexGrid.Col>
    <FlexGrid.Col>half</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
