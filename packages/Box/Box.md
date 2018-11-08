<div style="text-align: center;">
  <img src="box_inset.png" alt="box inset example"/>
  <img src="box_between.png" alt="box between example" />
</div>

### Spacing levels

The spacing system defines 8 levels of spacing. Levels `4` and above are responsive, as detailed below:

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

- Use levels `1` - `3` to space inline content, such as [Typography](#typography), [Buttons](#button), or [Icons](#icons)
- Use levels `4` - `8` to space block content, such as [Cards](#card) or [Dividers](#dividers)
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
