```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/box">
        Box
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

<div style="text-align: center;">
  <img src="box_inset.png" alt="box inset example"/>
  <img src="box_between.png" alt="box between example" />
</div>

### Spacing levels

The spacing system defines 8 levels of spacing. Levels `4` and above are always responsive by default, as detailed below:

<div style="text-align: center;">
  <img src="box_spacing-levels.png" style="width: 100%;" alt="box spacing levels example"/>
</div>

| Level | Default value | Value in viewports greater or equal to `768px` |
| ----- | ------------: | ---------------------------------------------: |
| 1     | 0.25rem (4px) |                                    _unchanged_ |
| 2     |  0.5rem (8px) |                                    _unchanged_ |
| 3     |   1rem (16px) |                                    _unchanged_ |
| 4     | 1.5rem (24px) |                                    2rem (32px) |
| 5     |   2rem (32px) |                                    3rem (48px) |
| 6     | 2.5rem (40px) |                                    4rem (64px) |
| 7     |   3rem (48px) |                                  4.5rem (72px) |
| 8     |   4rem (64px) |                                    6rem (96px) |

### Recommended usage

- Use levels `1`-`3` to space inline content, such as [Typography](#/Typography), [Buttons](#/Forms?id=button), or [Icons](#/Icons)
- Use levels `4`-`8` to space block content, such as [Cards](#/Content?id=card) or [Dividers](#/Layout?id=section-dividers)
- Use levels `5`, `7`, and `8` to vertically stack full-width Blocks

This annotated example highlights the different `Box` properties and sizes used to create the spacing in a `Card`.

<div style="text-align: center;">
  <img src="box_annotated.png" alt="box annotated example" />
</div>

These examples showcase all of the `Box` properties working together to control both inset (padding) and stacking (margin).
Note the compositional nature of `Box`. Use multiple Boxes to achieve complex layouts.

```jsx
<Box between={5}>
  <Box tag="section" inset={4} between={3}>
    <Heading level="h2">Mobile internet plans</Heading>
    <Paragraph>
      Take your business out of the office. All across Canada businesses use TELUS mobile phones to
      go where their customers are and stay connected.
    </Paragraph>
  </Box>

  <DimpleDivider />

  <Box tag="section" inset={4} between={3}>
    <Heading level="h3">Bundle and save</Heading>
    <Paragraph>
      Save up to $200 on any new Smartphone when you add TELUS Mobility to your TELUS PureFibre home
      services account.
    </Paragraph>
    <ChevronLink href="#">Learn more</ChevronLink>
  </Box>
</Box>
```

```jsx
<Box inline between={3}>
  <Link href="#">Phones</Link>
  <span>|</span>
  <Link href="#">Pre-Owned</Link>
  <span>|</span>
  <Link href="#">Prepaid</Link>
  <span>|</span>
  <Link href="#">Sale</Link>
</Box>
```

### Responsiveness

The `Box` component is also capable of setting certain box sizes at specific viewport breakpoints. Designers should use best practices and recommended spacing if the current behaviour of `Box` levels does not solve a design's needs.

In the following example, resize your browser window to see different `Box` sizing at different viewport widths:

```jsx { "props": { "className": "docs_box-coloring" } }
<Box
  inset={{ xs: 2, md: 3, lg: 7 }}
  between={{ xs: 2, md: 3, xl: 8 }}
  inline={{ xs: false, lg: true }}
>
  <Button>1st Button</Button> <Button variant="secondary">2nd Button</Button>
  <Button>3rd Button</Button>
</Box>
```

This will do the following:

- Padding on all sides will increase as the viewport size increases to take advantage of the extra space
- Spacing between the buttons will increase as the viewport size increases to make things look less dense on larger screens
- Below the `lg` viewport (≤992px), `inline` will be set to `false`, making the buttons stack. On `lg` and larger, the buttons will appear side to side

To learn more about responsive props see [`@tds/util-prop-types`](#/Utilities?id=section-proptypes). The following `Box` props support responsive props: `vertical`, `horizontal`, `inset`, `between`, `inline`, and `below`.

### Using space-between

This prop implements `justify-content: space-between;` in CSS. With `space-between`, the space is dynamically determined based on the size of the box, and the elements inside are distributed evenly from the start to the end.

#### Without space-between

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box className="docs_full-height-box">
        <Paragraph>This is the first line</Paragraph>
        <Paragraph>This is the second line</Paragraph>
        <Paragraph>This is the third line</Paragraph>
      </Box>
    </FlexGrid.Col>

    <FlexGrid.Col>
      <Box between={3} className="docs_full-height-box">
        <Paragraph>
          This first line is much larger than the others to demonstrate the effects of space-between
        </Paragraph>
        <Paragraph>This is the second line</Paragraph>
        <Paragraph>This is the third line</Paragraph>
      </Box>
    </FlexGrid.Col>

    <FlexGrid.Col>
      <Box className="docs_full-height-box">
        <Paragraph>This is the first line</Paragraph>
        <Paragraph>This is the second line</Paragraph>
        <Paragraph>This is the third line</Paragraph>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

#### With space-between

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box between="space-between" className="docs_full-height-box">
        <Paragraph>This is the first line</Paragraph>
        <Paragraph>This is the second line</Paragraph>
        <Paragraph>This is the third line</Paragraph>
      </Box>
    </FlexGrid.Col>

    <FlexGrid.Col>
      <Box between={3} className="docs_full-height-box">
        <Paragraph>
          This first line is much larger than the others to demonstrate the effects of space-between
        </Paragraph>
        <Paragraph>This is the second line.</Paragraph>
        <Paragraph>This is the third line</Paragraph>
      </Box>
    </FlexGrid.Col>

    <FlexGrid.Col>
      <Box between="space-between" className="docs_full-height-box">
        <Paragraph>This is the first line</Paragraph>
        <Paragraph>This is the second line</Paragraph>
        <Paragraph>This is the third line</Paragraph>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

Use `space-between` to space elements inside of `Box` evenly, dynamically fitted to the `Box`'s size.

### Below

```jsx { "props": { "className": "docs_full-width-playground docs_full-width-footer" } }
<div>
  <Box below={8}>
    <FlexGrid>
      <FlexGrid.Row>
        <FlexGrid.Col>
          <Box inset={4} between={3}>
            <Heading level="h2">Mobile internet plans</Heading>
            <Paragraph>
              Take your business out of the office. All across Canada businesses use TELUS mobile
              phones to go where their customers are and stay connected.
            </Paragraph>
            <ChevronLink href="#">Learn more</ChevronLink>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  </Box>
  <div style={{ 'background-color': 'rgb(42, 44, 46)' }}>
    <FlexGrid>
      <FlexGrid.Row>
        <FlexGrid.Col xs={3}>
          <Box between={3} vertical={3}>
            <Link href="#" invert>
              About us
            </Link>
            <Link href="#" invert>
              Accessibility
            </Link>
            <Link href="#" invert>
              Careers
            </Link>
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={3}>
          <Box between={3} vertical={3}>
            <Link href="#" invert>
              Support
            </Link>
            <Link href="#" invert>
              Contact Us
            </Link>
            <Link href="#" invert>
              Neighbourhood
            </Link>
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={3}>
          <Box between={3} vertical={3}>
            <Link href="#" invert>
              TELUS & CRTC Internet Code
            </Link>
            <Link href="#" invert>
              Internet Code, SimplifiedAccessibility
            </Link>
            <Link href="#" invert>
              TELUS & CRTC Wireless Code
            </Link>
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={3}>
          <Box between={3} vertical={3}>
            <Link href="#" invert>
              TELUS Digital
            </Link>
            <Link href="#" invert>
              TELUS International
            </Link>
            <Link href="#" invert>
              TELUS Partner Solutions
            </Link>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  </div>
</div>
```
