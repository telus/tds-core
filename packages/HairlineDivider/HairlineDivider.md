### Usage

`HairlineDivider` is used to help separate content. Use `Box` to add space between the `HairlineDivider` and content.

```jsx
<Box between={4}>
  <HairlineDivider />
  <HairlineDivider gradient />
</Box>
```

```jsx
<Box inline between={4}>
  <HairlineDivider vertical />
  <HairlineDivider vertical gradient />
  <Box vertical={7} />
</Box>
```

```jsx
<Box inline between={3}>
  <Box between={0}>
    <Paragraph>
      <Text size="large" bold>
        500
      </Text>{' '}
      Users per month
    </Paragraph>
  </Box>
  <HairlineDivider vertical />
  <Box between={0}>
    <Paragraph>
      <Text size="large" bold>
        400
      </Text>{' '}
      Winners
    </Paragraph>
  </Box>
</Box>
```
