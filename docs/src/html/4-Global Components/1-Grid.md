---
title: Grid
template: doc.jade
---

## Overview

---

The Grid is made up of a few components that you can use to create your own layouts:

```js
import React from 'react';
import { Grid } from 'telus-thorium-enriched';
const { Container, Row, Column } = Grid;

const MyComponent = (props) => {
  return (
    <Container>
      <Row>
        <Column xs={ 12 } lg={ 8 }></Column>
        <Column xs={ 12 } lg={ 4 }></Column>
      </Row>
    </Container>
  );
};

```

---

_See the docs on [TDS' CSS grid](/3-Foundational-Elements/4-grid.html) to learn more
about grid structure and attributes._

---

## Container

---

Containers are basic components that wrap grid elements. They don't do much on
their own, but `Row` and `Column` elements need to be inside a `Container`
to display correctly.

```js
// Attributes on containers will be passed to the underlying div node.
<Container className='cool-container' id='hello'>
  // You can put anything you want inside a container.
</Container>
```

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `limitWidth` | `bool` | `false` | Give containers a max width at each breakpoint |

## Row

---

Rows divide your content horizontally. They should be direct descendants of
`Container` elements and typically contain only `Column` elements.

```js
<Container>
  // Rows also pass attributes to the div.
  <Row className='row-override'>
    // ...
  </Row>
</Container>
```

Rows don't have any special props.

## Column

---

Columns are the real movers and shakers of the grid system. You can set their
layout properties across multiple viewport sizes by passing in various props.
Reading the TDS [CSS grid documentation](/3-Foundations/3-grid.html) is
recommended if you're not sure about certain props.

```js
<Container>
  <Row>
    <Column xs={ 12 } lg={ 6 } lgOffset={ 3 }>
      <p>Hello world!</p>
    </Column>
  </Row>
</Container>
```

Props for Columns have variants for each screen size. Specifying a prop for a
smaller screen size will apply to all larger screen sizes, unless overridden.

The different screen sizes are as follows:

- `xs`: extra small
- `sm`: small
- `md`: medium
- `lg`: large
- `xl`: extra large

---

| Property     | Type     | Default     | Description                             |
|--------------|----------|-------------|-----------------------------------------|
| `xs`         | `number` |             | Columns this element should span. |
| `sm`         | `number` |             |
| `md`         | `number` |             |
| `lg`         | `number` |             |
| `xl`         | `number` |             |
| -            |
| `xsOffset`   | `number` |             | Number of offset columns to the left. |
| `smOffset`   | `number` |             |
| `mdOffset`   | `number` |             |
| `lgOffset`   | `number` |             |
| `xlOffset`   | `number` |             |
| -            |
| `xsPush`     | `number` |             | Number of columns to push the element to the right |
| `smPush`     | `number` |             |
| `mdPush`     | `number` |             |
| `lgPush`     | `number` |             |
| `xlPush`     | `number` |             |
| -            |
| `xsPull`     | `number` |             | Number of columns to pull the element to the left |
| `smPull`     | `number` |             |
| `mdPull`     | `number` |             |
| `lgPull`     | `number` |             |
| `xlPull`     | `number` |             |
| -            |
| `xsHidden`   | `bool`   |             | Hide the element for the given screen size. |
| `smHidden`   | `bool`   |             |
| `mdHidden`   | `bool`   |             |
| `lgHidden`   | `bool`   |             |
| `xlHidden`   | `bool`   |             |
| -            |
| `xsHiddenUp` | `bool`   |             | Hide the element for the given screen size, and all screen sizes above. |
| `smHiddenUp` | `bool`   |             |
| `mdHiddenUp` | `bool`   |             |
| `lgHiddenUp` | `bool`   |             |
| `xlHiddenUp` | `bool`   |             |


---
