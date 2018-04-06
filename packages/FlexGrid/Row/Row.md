The `FlexGrid.Row` component can be used for Column alignment and distribution.

### Alignment

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="start">
    <FlexGrid.Col xs={2}>Left</FlexGrid.Col>
    <FlexGrid.Col xs={2}>aligned</FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row horizontalAlign="center">
    <FlexGrid.Col xs={2}>Center</FlexGrid.Col>
    <FlexGrid.Col xs={2}>aligned</FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row horizontalAlign="end">
    <FlexGrid.Col xs={2}>Right</FlexGrid.Col>
    <FlexGrid.Col xs={2}>aligned</FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="center" verticalAlign="top">
    <FlexGrid.Col xs={5}>
      <Input label="Given name" value="John" />
    </FlexGrid.Col>
    <FlexGrid.Col xs={5}>
      <Input label="Surname" value="Appleseed" />
    </FlexGrid.Col>
  </FlexGrid.Row>

  <Box tag="section" inset={2}>
    <FlexGrid.Row horizontalAlign="center" verticalAlign="bottom">
      <FlexGrid.Col xs={5} md={4} lg={3}>
        <Checkbox name="test" value="terms" label="I accept the ToS" />
      </FlexGrid.Col>
      <FlexGrid.Col xs={5} md={4} lg={3}>
        <Checkbox name="services" value="emails" label="I accept cookies" />
      </FlexGrid.Col>
    </FlexGrid.Row>
  </Box>

  <Box inset={3}>
    <FlexGrid.Row horizontalAlign="center" verticalAlign="bottom">
      <FlexGrid.Col xs={12}>
        <Button>Submit</Button>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </Box>
</FlexGrid>
```

### Distribution

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="center" distribute="around">
    <FlexGrid.Col xs={4} sm={3}>
      <Input label="Around 1" />
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} sm={3}>
      <Input label="Around 2" />
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} sm={3}>
      <Input label="Around 3" />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

```jsx
<FlexGrid>
  <FlexGrid.Row distribute="between">
    <FlexGrid.Col xs={4} sm={3}>
      <Input label="Between 1" />
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} sm={3}>
      <Input label="Between 2" />
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} sm={3}>
      <Input label="Between 3" />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
