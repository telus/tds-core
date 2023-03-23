```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/flex-grid">
        FlexGrid
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

**Use the "Open isolated" button above to view this component in full-width mode.**

The `FlexGrid` system is a thin wrapper over [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid),
which implements [flexboxgrid.css](http://flexboxgrid.com/). It uses a series of rows and columns to layout and align
content 2-dimensionally.

**If you are new to or unfamiliar with flexbox, read this [CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for background, terminology, guidelines, and code snippets.**

### Accessibility

- `FlexGrid` helps with building responsive interfaces and provide first-class support to customers using any screen size. Use the `FlexGrid`’s responsive props to help achieve responsive content
- By default, `FlexGrid` implements `limitWidth` in order to keep all content aligned on the left and right sides of a page. It uses rem units to grow in width and respond to browser font size configurations

Below is a quick example of how the components fit together. See the [FlexGrid.Row](#/Layout?id=row) and [FlexGrid.Col](#/Layout?id=col)
components below for a more in-depth look.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>1/3</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>2/3</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>3/3</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### How it works

- `FlexGrid` is the top-level container. It centers and horizontally pads your site’s contents
- `FlexGrid.Row`s are wrappers for columns. Columns have horizontal padding (called a gutter) for controlling the space between them
- Place content inside `FlexGrid.Col` components. These should be the immediate children of rows
- Columns without a specified width will automatically layout as equal width columns
- Column widths can be made responsive by using the responsive props, which match the props used in `Responsive`: `xs`, `sm`,
  `md`, `lg` and `xl`
- The responsive column widths are based on minimum width media queries, so they apply to the specified breakpoint and all
  those above it

### Removing the gutter

Remove the 16px gutter surrounding columns by passing `gutter={false}` to the `FlexGrid` container. This removes the
horizontal padding from all child columns.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid gutter={false}>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>1/3 no gutter</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>2/3 no gutter</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>3/3 no gutter</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Removing the outside gutter

In some layouts, there might be the need to remove the gutter from the left and right of the row.
For example, if the layout requires a `FlexGrid` to be nested under another `FlexGrid` Column,
the child `FlexGrid`'s columns will not line up with the parent `FlexGrid`'s columns due to the additional gutter between the child columns.

It is possible to avoid this situation while keeping the gutters between the columns,
to do so, pass `outsideGutter={false}` to the child `FlexGrid`.
This will remove the gutter on the left and the right of the `FlexGrid`.

`outsideGutter` should not be false if parent `FlexGrid` has `gutter={false}`.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>Parent Column</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>Parent Column</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <FlexGrid outsideGutter={false}>
        <FlexGrid.Row>
          <FlexGrid.Col>
            <Box vertical={2}>
              <Text>Child Column</Text>
            </Box>
          </FlexGrid.Col>
          <FlexGrid.Col>
            <Box vertical={2}>
              <Text>Child Column</Text>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Working with full-width and limited-width content

Pages should have multiple instances of `FlexGrid` to separate full-width content and regular limited-width content.
See expanded example by clicking the full-screen icon below.

```jsx { "props": { "className": "docs_full-width-playground" } }
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Paragraph>
          This is page content that has a fixed width.
        </Paragraph>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>

<Notification>This is a notification that has a full-width background, and fixed-width content.</Notification>

<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Paragraph>
          This is more page content that has a fixed width.
        </Paragraph>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Reversing item order

On certain layouts, the order of items within the `FlexGrid` may need to be reversed. To do this, set the corresponding prop for the target breakpoint range as `true`. If a breakpoint is defined as `true`, it will affect all other breakpoints after it until a latter breakpoint assigned as `false` is found.

In the following example, the items are set to reverse until the `md` breakpoint. Then, at the `xl` breakpoint, the items will reverse again.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<FlexGrid xsReverse={true} mdReverse={false} xlReverse={true}>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>1</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>2</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>3</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>4</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>5</Text>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Box vertical={2}>
        <Text>6</Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
