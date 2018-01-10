The `FlexGrid` component is a wrapper over [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid). 

### Basic usage

FlexGrid is handy for basic grid layouts or 1-dimensional positioning. It is used
in conjunction with the [Col](#col) and [Row](#row) components.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>half</FlexGrid.Col>
    <FlexGrid.Col>half</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Responsive example

```jsx
<FlexGrid>
  <Responsive minWidth="sm">
  {
    matches => {
      var desktopSpan = matches ? undefined : 12
      var text = matches ? 'half width on desktop' : 'full width on mobile'

      return (
        <FlexGrid.Row>
          <FlexGrid.Col span={desktopSpan}>{text}</FlexGrid.Col>
          <FlexGrid.Col span={desktopSpan}>{text}</FlexGrid.Col>
        </FlexGrid.Row>
      )
    }
  }
  </Responsive>
</FlexGrid>
```
