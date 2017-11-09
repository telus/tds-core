```jsx
<Card>
  <Box between={3}>
    <Heading level="h1">Our latest and greatest</Heading>
    <Paragraph>Everything you would expect, without conditions.</Paragraph>
    <ButtonLink href="//telus.com">Learn more</ButtonLink>
  </Box>
</Card>
```

## Spacing matrix

The Box component contains props that accept values from `1` to `8`. These numbered values correspond to our spacing system. Numbers `4` and above feature responsive spacing, as detailed in this table:

| Number | Default value | Value in viewports greater or equal to `768px` | 
| ------ | ------------: | -------------------------------------------: |
| 1 | 0.25rem (4px) | _unchanged_ |
| 2 | 0.5rem (8px) | _unchanged_ |
| 3 | 1rem (16px) | _unchanged_ |
| 4 | 1.5rem (24px) | 2rem (32px) |
| 5 | 2rem (32px) | 3rem (48px) |
| 6 | 2.5rem (40px) | 4rem (64px) |
| 7 | 3rem (48px) | 4.5rem (72px) |
| 8 | 4rem (64px) | 6rem (96px) |

### Usage tips

- Numbers `1` to `3` are suitable for spacing inline content such as [Typography](#typography), [Button](#button), and [ButtonLink](#buttonlink) components
- Numbers `4` to `8` are suitable for spacing major types of content such as [Cards](#card) and [Dividers](#dividers)
- Numbers `5`, `7`, and `8` are exclusively used to separating blocks vertically

### Example separating blocks

```jsx
<Box between={5}>
  <Box tag="section" inset={4} between={3}>
    <Heading level="h2">Lots to discover</Heading>
    <Paragraph>See our collection of home electronics.</Paragraph>
  </Box>

  <DimpleDivider/>

  <Box tag="section" inset={4} between={3}>
    <Heading level="h2">Something for everyone</Heading>
    <Paragraph>For you, your family and even your dog.</Paragraph>
  </Box>
</Box>
```

## Spacing in between elements

When wrapping a Box element around a series of elements, use the `between` prop to add either `margin-right` for inline elements or `margin-bottom` for stacked elements. Spacing will be applied to all directly-descending children except the last in the series.

### Stacked

```jsx 
<Box between={3}>
  <Box between={2}>
    <Heading level="h4">Wi-Fi Enabled</Heading>

    <Paragraph>Control any device connected to your SmartPlug from any location with internet access.</Paragraph>
  </Box>

  <Box between={2}>
    <Heading level="h4">Create ‘Scenes’</Heading>

    <Paragraph>Create your own scenes and rooms such as 'Kitchen' and manage all SmartPlugs in that scene.</Paragraph>
  </Box>

  <Box between={2}>
    <Heading level="h4">Compatibility</Heading>

    <Paragraph>Works with Google Assistant, Amazon Alexa, Apple HomeKit, and Nest.</Paragraph>
  </Box>
</Box>
```

### Inline

```jsx
<Box inline between={3}>
  <Link href="//telus.com">Phones</Link>
  <span>|</span>
  <Link href="//telus.com">Pre-Owned</Link>
  <span>|</span>
  <Link href="//telus.com">Prepaid</Link>
  <span>|</span>
  <Link href="//telus.com">Sale</Link>
</Box>
```
