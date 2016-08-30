---
title: Grids
template: doc.jade
---

## Overview

---

Grids give order to the vertical and horizontal positioning of content. Grids are meant to be used in conjunction with one another, allowing designers and developers to place content efficiently and confidently. This results in a consistent and cohesive end user and brand experience.

## Baseline

---

A baseline grid creates vertical rhythm. Rhythm is the systematic arrangement of elements that help establish a visual pattern. Visual patterns provide users with a navigable terrain, which becomes familiar through repetition. This allows users to confidently and comfortably visually consume content as they were intended to.

A baseline is a mathematical solution that reinforces the consistent positioning of elements on a page. Establishing a baseline grid accelerates the design and development process.Foundational elements, components, and the elements within align to a 2 px. baseline grid.

## Breakpoints

---

Breakpoints are the points at which your site's layout and content will respond to provide the user with the best possible way to consume the information. Responsive properties include an element’s size, arrangement, and visibility. The breakpoint triggers are based on the width of the browser window.

Thorium will have five viewports over four breakpoints:

* X-Small: (0-544)
* Small: (544 - 768)
* Medium: (768 - 992)
* Large: (992 - 1200)
* X-Large: (1200+)

## Responsiveness

---

Responsiveness should be considered when creating layouts or elements. The column grid is flexible enough for variation while ensuring consistency across layouts. For optimal user experience, layout design should adapt and be tested against the breakpoint system prior to, during, and after any development.

## Fluidity

---

The grid will be Fluid instead of Fixed. This means that the majority of the components inside have percentage widths, and thus adjust to the user’s screen resolution.

## Columns

---

Thorium uses 12 columns for each breakpoint. This creates visual consistency between pages on various display sizes while allowing for design flexibility within a large variety of page templates.

The building blocks of a responsive grid layout are containers, rows, and columns.  A container wraps an entire grid layout. It applies left and right padding by default, and could also be styled with a maximum width. Rows surround hoziontal groups of columns, and each column is meant to contain your content.

Putting these three building blocks together, we can mark up a simple grid with two equal-width columns:

```html
<div class="container">
  <div class="grid-row">
      <div class="small-6">Hello</div>
      <div class="small-6">World</div>
  </div>
</div>
```

---

<div class="grid-row">
    <div class="small-6">Hello</div>
    <div class="small-6">World</div>
</div>

---

### Columns Classes

The `small-*` grid classes allow you to lay out all twelve columns in a variety of combinations.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="small-12"><code>.small-12</code></div>
        </div>
        <div class="grid-row">
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
            <div class="small-1"><code>.small-1</code></div>
        </div>
        <div class="grid-row">
            <div class="small-2"><code>.small-2</code></div>
            <div class="small-2"><code>.small-2</code></div>
            <div class="small-2"><code>.small-2</code></div>
            <div class="small-2"><code>.small-2</code></div>
            <div class="small-2"><code>.small-2</code></div>
            <div class="small-2"><code>.small-2</code></div>
        </div>
        <div class="grid-row">
            <div class="small-3"><code>.small-3</code></div>
            <div class="small-3"><code>.small-3</code></div>
            <div class="small-3"><code>.small-3</code></div>
            <div class="small-3"><code>.small-3</code></div>
        </div>
        <div class="grid-row">
            <div class="small-6"><code>.small-6</code></div>
            <div class="small-3"><code>.small-3</code></div>
            <div class="small-3"><code>.small-3</code></div>
        </div>
    </div>
</div>

It's also possible to use `medium-*` and `large-*` column helpers to create layouts that target larger viewports, and collapse at smaller ones.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="medium-12"><code>.medium-12</code></div>
        </div>
        <div class="grid-row">
            <div class="medium-6"><code>.medium-6</code></div>
            <div class="medium-6"><code>.medium-6</code></div>
        </div>
        <div class="grid-row">
            <div class="medium-2"><code>.medium-2</code></div>
            <div class="medium-10"><code>.medium-10</code></div>
        </div>
        <div class="grid-row">
            <div class="large-12"><code>.large-12</code></div>
        </div>
        <div class="grid-row">
            <div class="large-9"><code>.large-9</code></div>
            <div class="large-3"><code>.large-3</code></div>
        </div>
    </div>
</div>

The `xs-*` helpers are available when you need to lay out columns at the smallest screen sizes.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="xs-12"><code>.xs-12</code></div>
        </div>
        <div class="grid-row">
            <div class="xs-3"><code>.xs-3</code></div>
            <div class="xs-3"><code>.xs-3</code></div>
            <div class="xs-3"><code>.xs-3</code></div>
            <div class="xs-3"><code>.xs-3</code></div>
        </div>
        <div class="grid-row">
            <div class="xs-9"><code>.xs-9</code></div>
            <div class="xs-3"><code>.xs-3</code></div>
        </div>
    </div>
</div>

### Offset Columns

Offset column classes make it possible to add negative space alongside columns.

```html
<div class="container">
  <div class="grid-row">
    <div class="small-3">Normal col.</div>
    <div class="small-6 offset-small-3">Offset col.</div>
  </div>
</div>
```

This example lays out two content blocks, each spanning 3 columns, with the final block also offset by 3 columns.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="small-3">Normal col.</div>
            <div class="small-6 offset-small-3">Offset col.</div>
        </div>
    </div>
</div>

### Combining columns

Column helpers can also be combined to customize the width at each breakpoint. The following example creates equal width columns in the large viewport, un-even columns in the medium viewport, and two separate rows at the smallest viewport.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="xs-12 medium-3 large-6">.xs-12 .medium-3 .large-6</div>
            <div class="xs-6 medium-9 large-6">.xs-6 .medium-9 .large-6</div>
        </div>
    </div>
</div>

Notice that the `xs-*` columns add up to more than 12 columns, causing the second column to move below the first in small &amp; xs viewports.

### Nesting columns

Grid rows can be placed inside columns, in order to nest more columns (no need to repeat the container). Since the grid is fluid, each of the nested columns' widths will still be calculated as a percentage of 12 columns.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="small-8">
                <div class="grid-row">
                    <div class="small-4"><code>.small-4</code></div>
                    <div class="small-4"><code>.small-4</code></div>
                </div>
            </div>
            <div class="small-4"><code>.small-4</code></div>
        </div>
    </div>
</div>

### Ordering columns

The `push-*` and `pull-*` helpers can be used to re-arrange column order.

```html
<div class="container">
    <div class="grid-row">
        <div class="small-4 push-medium-8"></div>
        <div class="small-8 pull-medium-4"></div>
    </div>
</div>
```

In this example, the 4-column box will appear first in small &amp; extra small screens. At the medium breakpoint and above, the order is reversed.

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="small-4 push-medium-8">.small-4 .push-medium-8</div>
            <div class="small-8 pull-medium-4">.small-8 .pull-medium-4</div>
        </div>
    </div>
</div>

### Utility classes

The `hidden-*` classes prevents content from displaying at a certain breakpoint. The `hidden-*-up` classes hide content at a certain breakpoint and all those above.

```html
<div class="container">
    <div class="grid-row">
        <div class="small-4">Always visible</div>
        <div class="small-4 hidden-medium">Hidden at medium</div>
        <div class="small-4 hidden-medium-up">Hidden at medium+</div>
    </div>
</div>
```

<div class="example">
    <div class="container">
        <div class="grid-row">
            <div class="small-4">Always visible</div>
            <div class="small-4 hidden-medium">Hidden at medium</div>
            <div class="small-4 hidden-medium-up">Hidden at medium+</div>
        </div>
    </div>
</div>

## Examples

---

See this feature in action on the [grid examples page](/examples/grid.html).
