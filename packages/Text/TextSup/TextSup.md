Only use `Text.Sup` as a child of `Paragraph` or `Text`. Use [`Heading.Sup`](#headingsup) for superscript within headings.

```jsx
<Paragraph>
  <Text>
    Enjoy buffer-free streaming any time of day
    <Text.Sup>2</Text.Sup>.
  </Text>
</Paragraph>
```
