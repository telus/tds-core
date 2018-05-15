**Use the "Open isolated" button above to view this component in full-width mode.**

The `FlexGrid` system is a thin wrapper over [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid),
which implements [flexboxgrid.css](http://flexboxgrid.com/). It uses a series of rows and columns to layout and align
content 2-dimensionally.

**If you are new to or unfamiliar with flexbox, read this [CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
for background, terminology, guidelines, and code snippets.**

Below is a quick example of how the components fit together. See the [FlexGrid.Row](#row) and [FlexGrid.Col](#col)
components below for a more in-depth look.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}><Text>1/3</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}><Text>2/3</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}><Text>3/3</Text></Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### How it works

* `FlexGrid` is the top-level container. It centers and horizontally pads your site’s contents
* `FlexGrid.Row`s are wrappers for columns. Columns have horizontal padding (called a gutter) for controlling the space between them
* Place content inside `FlexGrid.Col` components. These should be the immediate children of rows
* Columns without a specified width will automatically layout as equal width columns
* Column widths can be made responsive by using the responsive props, which match the props used in `Responsive`: `xs`, `sm`,
  `md`, `lg` and `xl`
* The responsive column widths are based on minimum width media queries, so they apply to the specified breakpoint and all
  those above it

### Removing the gutter

Remove the 16px gutter surrounding columns by passing `gutter={false}` to the `FlexGrid` container. This removes the horizontal padding
from all children columns.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid gutter={false}>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}><Text>1/3 no gutter</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}><Text>2/3 no gutter</Text></Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}><Text>3/3 no gutter</Text></Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
