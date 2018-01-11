The `FlexGrid` component is a wrapper over [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid). 

### Basic usage

FlexGrid is handy for basic grid layouts or 1-dimensional positioning. It is used
in conjunction with the [FlexGrid.Col](#col) component.

```jsx
<FlexGrid>
  <FlexGrid.Col>half</FlexGrid.Col>
  <FlexGrid.Col>half</FlexGrid.Col>
</FlexGrid>
```

### Responsive example

```jsx
<Responsive minWidth="sm">
{
  matches => {
    var desktopSpan = matches ? undefined : 12
    var text = matches ? 'small width on desktop' : 'full width on mobile'

    return (
      <FlexGrid>
        <FlexGrid.Col span={desktopSpan}>{text}</FlexGrid.Col>
        <FlexGrid.Col span={desktopSpan}>{text}</FlexGrid.Col>
      </FlexGrid>
    )
  }
}
</Responsive>
```
