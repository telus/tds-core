## Minimal usage

The primary way to configure the width of the column are the "size" props, which correspond to the available viewport 
sizes: `xs`, `sm`, `md`, `lg`, and `xl`.
 
This example shows 3 rows divided into various column widths that are targeted at the medium viewport size and above. Below
medium, each column will span it's entire container. Resize your browser window to see.

```
const GridBox = require('../__docs__/GridBox/GridBox').default;

<Container>
  <Row>
    <Column md={2}><GridBox>span 2</GridBox></Column>
    <Column md={2}><GridBox>span 2</GridBox></Column>
    <Column md={2}><GridBox>span 2</GridBox></Column>
    <Column md={2}><GridBox>span 2</GridBox></Column>
    <Column md={2}><GridBox>span 2</GridBox></Column>
    <Column md={2}><GridBox>span 2</GridBox></Column>
  </Row>
  <Row>
    <Column md={3}><GridBox>span 3</GridBox></Column>
    <Column md={4}><GridBox>span 4</GridBox></Column>
    <Column md={5}><GridBox>span 5</GridBox></Column>
  </Row>
  <Row>
    <Column md={6}><GridBox>span 6</GridBox></Column>
    <Column md={6}><GridBox>span 6</GridBox></Column>
  </Row>
</Container>
```

## Combining viewport sizes

Change the column width at each viewport size by using multiple sizes.

This example creates equal width columns at the medium viewport, un-even columns in the small viewport, and two separate 
rows at the smallest viewport.

```
const GridBox = require('../__docs__/GridBox/GridBox').default;

<Container>
  <Row>
    <Column xs={12} sm={3} md={6}><GridBox>span 12,3,6</GridBox></Column>
    <Column xs={12} sm={9} md={6}><GridBox>span 12,9,6</GridBox></Column>
  </Row>
</Container>
```

## Nesting rows and columns

Grid rows can be placed inside columns, in order to nest more columns (no need to repeat the container). Since the 
grid is fluid, each of the nested columns’ widths will still be calculated as a percentage of 12 columns.

```
const GridBox = require('../__docs__/GridBox/GridBox').default;

<Container>
  <Row>
    <Column sm={8}>
      <GridBox>
        <Row>
          <Column sm={4}><GridBox>span 4</GridBox></Column>
          <Column sm={4}><GridBox>span 4</GridBox></Column>
        </Row>
      </GridBox>
    </Column>
    <Column sm={4}><GridBox>span 4</GridBox></Column>
  </Row>
</Container>
```


## Offsetting columns

Use the `<size>Offset` props to add negative space alongside columns.

This example lays out 2 content blocks with the final block also offset by 3 columns at small screen size and above.

```
const GridBox = require('../__docs__/GridBox/GridBox').default;

<Container>
  <Row>
    <Column sm={3}><GridBox>span 3</GridBox></Column>
    <Column sm={6} smOffset={3}><GridBox>span 6, offset 3</GridBox></Column>
  </Row>
</Container>
```

## Re-arranging columns

Use the `<size>Push` and `<size>Pull` props to re-arrange columns at the specified viewport size.

In this example, the 8-column box will appear first in large viewports and above. Below large, the order is reversed.

```
const GridBox = require('../__docs__/GridBox/GridBox').default;

<Container>
  <Row>
    <Column md={4} lgPush={8}><GridBox>first at medium</GridBox></Column>
    <Column md={8} lgPull={4}><GridBox>first at large</GridBox></Column>
  </Row>
</Container>
```

## Hiding content

Use the `<size>Hidden` and `<size>HiddenUp` props to hide content at the specified viewport sizes.

Resize your browser window the show and hide the content in this example.

```
const GridBox = require('../__docs__/GridBox/GridBox').default;

<Container>
  <Row>
    <Column sm={4}><GridBox>Always visible</GridBox></Column>
    <Column sm={4} mdHidden><GridBox>Hidden at medium</GridBox></Column>
    <Column sm={4} mdHiddenUp><GridBox>Hidden at medium+</GridBox></Column>
  </Row>
</Container>
```
