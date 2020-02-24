### Minimal usage

```jsx
<Text>Tell us what you think</Text>
```

### Usage criteria

- Should only be used to modify text in `Paragraph`.
- Never used standalone outside of a `Paragraph`.

### Alternate text styles

By default, the `Text` component will inherit font properties from `Paragraph`. Use its props to override this behaviour.

```jsx
<Paragraph>
  <Text bold>
    Get Optik TV
    <sup>®</sup> and Internet for $85 per month for 12 months.
  </Text>
  <br />
  <Text size="small">Sign up for 2 years and save BIG on your first 12 months.</Text>
</Paragraph>
```

### Using superscript copy within Text

```jsx
<Paragraph>
  <Text>
    Enjoy buffer-free streaming any time of day
    <sup>2</sup>.
  </Text>
</Paragraph>
```

## Text.Sup

**Deprecated, please use a `<sup>` element documented above instead.**

```jsx
<Paragraph>
  <Text>
    Enjoy buffer-free streaming any time of day
    <Text.Sup>2</Text.Sup>.
  </Text>
</Paragraph>
```
