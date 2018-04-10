The `FlexGrid.Row` component can be used for Column alignment and distribution.

### Alignment

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="start">
    <FlexGrid.Col xs={4} md={2}>
      <div className="docs_coloured-box">
        <Text>Left</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} md={2}>
      <div className="docs_coloured-box">
        <Text>aligned</Text>
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row horizontalAlign="center">
    <FlexGrid.Col xs={4} md={2}>
      <div className="docs_coloured-box">
        <Text>Center</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} md={2}>
      <div className="docs_coloured-box">
        <Text>aligned</Text>
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row horizontalAlign="end">
    <FlexGrid.Col xs={4} md={2}>
      <div className="docs_coloured-box">
        <Text>Right</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4} md={2}>
      <div className="docs_coloured-box">
        <Text>aligned</Text>
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

```jsx
<FlexGrid>
  <FlexGrid.Row horizontalAlign="center" verticalAlign="top">
    <FlexGrid.Col xs={6} md={5} lg={4}>
      <div className="docs_coloured-box">Centered, Top Vertical Alignment</div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={5} lg={4}>
      <div className="docs_coloured-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget magna at tellus
        consectetur pretium. Nulla ut vulputate leo, a.
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row horizontalAlign="center" verticalAlign="middle">
    <FlexGrid.Col xs={6} md={5} lg={4}>
      <div className="docs_coloured-box">Centered, Middle Vertical Alignment</div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={5} lg={4}>
      <div className="docs_coloured-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget magna at tellus
        consectetur pretium. Nulla ut vulputate leo, a.
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row horizontalAlign="center" verticalAlign="bottom">
    <FlexGrid.Col xs={6} md={5} lg={4}>
      <div className="docs_coloured-box">Centered, Bottom Vertical Alignment</div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={6} md={5} lg={4}>
      <div className="docs_coloured-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget magna at tellus
        consectetur pretium. Nulla ut vulputate leo, a.
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Distribution

```jsx
<FlexGrid>
  <FlexGrid.Row distribute="around">
    <FlexGrid.Col xs={3} sm={3}>
      <div className="docs_coloured-box">
        <Text>Around</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3} sm={3}>
      <div className="docs_coloured-box">
        <Text>Around</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3} sm={3}>
      <div className="docs_coloured-box">
        <Text>Around</Text>
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row distribute="between">
    <FlexGrid.Col xs={3} sm={3}>
      <div className="docs_coloured-box">
        <Text>Between</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3} sm={3}>
      <div className="docs_coloured-box">
        <Text>Between</Text>
      </div>
    </FlexGrid.Col>
    <FlexGrid.Col xs={3} sm={3}>
      <div className="docs_coloured-box">
        <Text>Between</Text>
      </div>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
