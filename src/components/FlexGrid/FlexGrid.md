The `FlexGrid` component is a wrapper over [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid). 

### Basic usage

FlexGrid is handy for basic grid layouts or 1-dimensional positioning. It is used
in conjunction with the [FlexGrid.Row](#row) and [FlexGrid.Col](#col) components.

```jsx
<FlexGrid>
  <FlexGrid.Col>half</FlexGrid.Col>
  <FlexGrid.Col>half</FlexGrid.Col>
</FlexGrid>
```

### Responsive grid with a fixed width container

The following is a responsive layout that uses the Box component and its `horizontal` prop to horizontally space elements out. Note that the `Flex.Row` has been omitted since we don't need to align the position or distribute the space of the `FlexGrid.Col` columns because we are using the `limitWidth` prop.

```jsx
<Responsive minWidth="sm">
  {
    (matches) => {
      const columns = matches ? 4 : 12
      const text = matches ? 'Content for desktop example' : 'Content for mobile example'

      return (
        <FlexGrid limitWidth gutter={false}>
          <FlexGrid.Col span={12}>
            <Box horizontal={3}>
              <Paragraph>{text}</Paragraph>
            </Box>
          </FlexGrid.Col>

          <FlexGrid.Col span={columns}>
            <Box horizontal={3} vertical={3}>
              <Card>{text}</Card>
            </Box>
          </FlexGrid.Col>

          <FlexGrid.Col span={columns}>
            <Box horizontal={3} vertical={3}>
              <Card>{text}</Card>
            </Box>
          </FlexGrid.Col>

          <FlexGrid.Col span={columns}>
            <Box horizontal={3} vertical={3}>
              <Card>{text}</Card>
            </Box>
          </FlexGrid.Col>

          <FlexGrid.Col span={columns}>
            <Box horizontal={3} vertical={3}>
              <Card>{text}</Card>
            </Box>
          </FlexGrid.Col>
        </FlexGrid>
      )
    }
  }
</Responsive>
```


Alternatively, the same layout can be achieved by enabling/disabling the `gutter` prop on the FlexGrid component.
```jsx
<Responsive minWidth="sm">
  {
    (matches) => {
      const columns = matches ? 4 : 12
      const text = matches ? 'Content for desktop example' : 'Content for mobile example'

      return (
          <FlexGrid limitWidth>
            <FlexGrid.Col span={12}>
              <Box vertical={3}>
                <Paragraph>{text}</Paragraph>
              </Box>
            </FlexGrid.Col>

            <FlexGrid.Col span={columns}>
              <Box vertical={3}>
                <Card>{text}</Card>
              </Box>
            </FlexGrid.Col>

            <FlexGrid.Col span={columns}>
              <Box vertical={3}>
                <Card>{text}</Card>
              </Box>
            </FlexGrid.Col>

            <FlexGrid.Col span={columns}>
              <Box vertical={3}>
                <Card>{text}</Card>
              </Box>
            </FlexGrid.Col>

            <FlexGrid.Col span={columns}>
              <Box vertical={3}>
                <Card>{text}</Card>
              </Box>
            </FlexGrid.Col>
          </FlexGrid>
      )
    }
  }
</Responsive>
```
