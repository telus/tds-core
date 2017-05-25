---
title: Grid
template: doc.jade
---

* [Overview](#overview)
* [Baseline](#baseline)
* [Breakpoints](#breakpoints)
* [Responsiveness](#responsiveness)
* [Columns](#columns)
* [Column Classes](#column-classes)
* [Examples](/examples/grid.html)
* [Examples - color](/examples/grid-test.html)


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

TDS will have five viewports over four breakpoints:

| Viewport name | Lower boundary (px) | Upper boundary (px) | Max width &ast; (px) |
|:---|:---|:---|:---|
| xs | 0 | 575 | auto |
| small | 576 | 767 | 544 |
| medium | 768 | 991 | 736 |
| large | 992 | 1199 | 960 |
| xl | 1200 | *none* | 1168 |

---

## Containers


* `.tds-container`:
centers a block-element horizontally

* `.tds-container--limited-width`: sets a max-width from the table above on your wrapper, to be used together with `.tds-container` so it is centered

* `.tds-container--fluid`: use this class to add gutter when adding a full-width container



## Responsiveness

---

Responsiveness should be considered when creating layouts or elements. The column grid is flexible enough for variation while ensuring consistency across layouts. For optimal user experience, layout design should adapt and be tested against the breakpoint system prior to, during, and after any development.

## Columns

---

TDS uses 12 columns for each breakpoint. This creates visual consistency between pages on various display sizes while allowing for design flexibility within a large variety of page templates.

The building blocks of a responsive grid layout are containers, rows, and columns.  A container wraps an entire grid layout. It applies left and right padding by default, and could also be styled with a maximum width. Rows surround hoziontal groups of columns, and each column is meant to contain your content.

Putting these three building blocks together, we can mark up a simple grid with two equal-width columns:

```html
<div class="tds-container">
  <div class="tds-grid-row">
      <div class="tds-small-6">Hello</div>
      <div class="tds-small-6">World</div>
  </div>
</div>
```

---

<div class="tds-grid-row">
    <div class="tds-small-6">Hello</div>
    <div class="tds-small-6">World</div>
</div>

---

### Column Classes

The `tds-small-*` grid classes allow you to lay out all twelve columns in a variety of combinations.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-small-12"><code>.tds-small-12</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	    <div class="tds-small-1"><code>.tds-small-1</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-small-2"><code>.tds-small-2</code></div>
	    <div class="tds-small-2"><code>.tds-small-2</code></div>
	    <div class="tds-small-2"><code>.tds-small-2</code></div>
	    <div class="tds-small-2"><code>.tds-small-2</code></div>
	    <div class="tds-small-2"><code>.tds-small-2</code></div>
	    <div class="tds-small-2"><code>.tds-small-2</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-small-3"><code>.tds-small-3</code></div>
	    <div class="tds-small-3"><code>.tds-small-3</code></div>
	    <div class="tds-small-3"><code>.tds-small-3</code></div>
	    <div class="tds-small-3"><code>.tds-small-3</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-small-6"><code>.tds-small-6</code></div>
	    <div class="tds-small-3"><code>.tds-small-3</code></div>
	    <div class="tds-small-3"><code>.tds-small-3</code></div>
	</div>
    </div>
</div>

It's also possible to use `tds-medium-*` and `tds-large-*` column helpers to create layouts that target larger viewports, and collapse at smaller ones.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-medium-12"><code>.tds-medium-12</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-medium-6"><code>.tds-medium-6</code></div>
	    <div class="tds-medium-6"><code>.tds-medium-6</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-medium-2"><code>.tds-medium-2</code></div>
	    <div class="tds-medium-10"><code>.tds-medium-10</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-large-12"><code>.tds-large-12</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-large-9"><code>.tds-large-9</code></div>
	    <div class="tds-large-3"><code>.tds-large-3</code></div>
	</div>
    </div>
</div>

The `tds-xs-*` helpers are available when you need to lay out columns at the smallest screen sizes.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-xs-12"><code>.tds-xs-12</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-xs-3"><code>.tds-xs-3</code></div>
	    <div class="tds-xs-3"><code>.tds-xs-3</code></div>
	    <div class="tds-xs-3"><code>.tds-xs-3</code></div>
	    <div class="tds-xs-3"><code>.tds-xs-3</code></div>
	</div>
	<div class="tds-grid-row">
	    <div class="tds-xs-9"><code>.tds-xs-9</code></div>
	    <div class="tds-xs-3"><code>.tds-xs-3</code></div>
	</div>
    </div>
</div>

### Offset Columns

Offset column classes make it possible to add negative space alongside columns.

```html
<div class="tds-container">
  <div class="tds-grid-row">
    <div class="tds-small-3">Normal col.</div>
    <div class="tds-small-6 tds-offset-small-3">Offset col.</div>
  </div>
</div>
```

This example lays out two content blocks, each spanning 3 columns, with the final block also offset by 3 columns in small viewport only.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-small-3">Normal col.</div>
	    <div class="tds-small-6 tds-offset-small-3">Offset col.</div>
	</div>
    </div>
</div>

### Combining columns

Column helpers can also be combined to customize the width at each breakpoint. The following example creates equal width columns in the large viewport, un-even columns in the medium viewport, and two separate rows at the smallest viewport.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-xs-12 tds-medium-3 tds-large-6">.tds-xs-12 .tds-medium-3 .tds-large-6</div>
	    <div class="tds-xs-6 tds-medium-9 tds-large-6">.tds-xs-6 .tds-medium-9 .tds-large-6</div>
	</div>
    </div>
</div>

Notice that the `tds-xs-*` columns add up to more than 12 columns, causing the second column to move below the first in small &amp; xs viewports.

### Nesting columns

Grid rows can be placed inside columns, in order to nest more columns (no need to repeat the container). Since the grid is fluid, each of the nested columns' widths will still be calculated as a percentage of 12 columns.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-small-8">
		<div class="tds-grid-row">
		    <div class="tds-small-4"><code>.tds-small-4</code></div>
		    <div class="tds-small-4"><code>.tds-small-4</code></div>
		</div>
	    </div>
	    <div class="tds-small-4"><code>.tds-small-4</code></div>
	</div>
    </div>
</div>

### Ordering columns

The `tds-push-*` and `tds-pull-*` helpers can be used to re-arrange column order.

```html
<div class="tds-container">
    <div class="tds-grid-row">
	<div class="tds-small-4 tds-push-medium-8"></div>
	<div class="tds-small-8 tds-pull-medium-4"></div>
    </div>
</div>
```

In this example, the 4-column box will appear first in small &amp; extra small screens. At the medium breakpoint and above, the order is reversed.

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-small-4 tds-push-medium-8">.tds-small-4 .tds-push-medium-8</div>
	    <div class="tds-small-8 tds-pull-medium-4">.tds-small-8 .tds-pull-medium-4</div>
	</div>
    </div>
</div>

### Utility classes

The `tds-hidden-*` classes prevents content from displaying at a certain breakpoint. The `tds-hidden-*-up` classes hide content at a certain breakpoint and all those above.

```html
<div class="tds-container">
    <div class="tds-grid-row">
	<div class="tds-small-4">Always visible</div>
	<div class="tds-tds-small-4 tds-hidden-medium">Hidden at medium</div>
	<div class="tds-small-4 tds-hidden-medium-up">Hidden at medium+</div>
    </div>
</div>
```

<div class="example">
    <div class="tds-container">
	<div class="tds-grid-row">
	    <div class="tds-small-4">Always visible</div>
	    <div class="tds-small-4 hidden-medium">Hidden at medium</div>
	    <div class="tds-small-4 hidden-medium-up">Hidden at medium+</div>
	</div>
    </div>
</div>

## Examples

---

See this feature in action on the [grid examples page](/examples/grid.html) and [grid in colours](/examples/grid-test.html).
