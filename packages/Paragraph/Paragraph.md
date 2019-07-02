### Minimal usage

```jsx
<Paragraph>Our commitment to service is demonstrated in everything we do.</Paragraph>
```

### Usage criteria

- All body text should be contained in a `Paragraph`, regardless of length.
- If the `Paragraph` is on a dark background, the `invert` prop must be used to maintain sufficient colour contrast.
- If other modifications must be made to the text inside a `Paragraph` such as size or font weight, use the `Text`, `Small`, and `Strong` components.

### Modifying text appearance

```jsx
<Paragraph>
  Enjoy your choice of <Link href="#">5 channels</Link>, and up to{' '}
  <Link href="#">23 local and regional channels</Link>. Plus, add{' '}
  <Text bold>premium channel packs</Text> like HBO, TMN &amp; Crave TV for just $20/mo. All
  delivered via TELUS Internet through the Pik TV media box and Pik TV app.<sup>2</sup>
</Paragraph>
```

### Placing text on dark colours

Use the `invert` prop.

```jsx { "props": { "className": "docs_purple-block" } }
<Paragraph invert>Order online and save an extra $150.</Paragraph>
```
