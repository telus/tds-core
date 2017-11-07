```jsx
<Card>
  <Box below={3}>
    <Heading level="h1">Our latest and greatest</Heading>
  </Box>
  <Box below={3}>
    <Paragraph>Everything you would expect, without conditions.</Paragraph>
  </Box>
  <ButtonLink href="//telus.com">Learn more</ButtonLink>
</Card>
```

## Spacing matrix

The Box component contains props that accept values from `1` to `8`. These numbered values correspond to our spacing system. Numbers `4` and above feature responsive spacing, as detailed in this table:

| Number | Default value | Value in viewports above or equal to `768px` | 
| ------ | ------------: | -------------------------------------------: |
| 1 | 0.25rem | _unchanged_ |
| 2 | 0.5rem | _unchanged_ |
| 3 | 1rem | _unchanged_ |
| 4 | 1.5rem | 2rem |
| 5 | 2rem | 3rem |
| 6 | 2.5rem | 4rem |
| 7 | 3rem | 4.5rem |
| 8 | 4rem | 6rem |

### Usage tips

- Numbers `1` to `3` are suitable for spacing inline content such as [Typography](#typography), [Button](#button), and [ButtonLink](#buttonlink) components
- Numbers `4` to `8` are suitable for spacing major types of content, usually with the `below` prop wrapping [Cards](#card) and [Dividers](#dividers)
- Numbers `5`, `7`, and `8` are exclusively used to separating blocks vertically

### Example separating blocks

```jsx noeditor static
<Box tag="section" below={5} inset={4}>
  <Box below={3}>
    <Heading level="h2">Lots to discover</Heading>
  </Box>
</Box>
```
