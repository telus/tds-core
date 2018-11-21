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
    <Text.Sup>®</Text.Sup> and Internet for $85 per month for 12 months.
  </Text>
  <br />
  <Text size="small">Sign up for 2 years and save BIG on your first 12 months.</Text>
</Paragraph>
```
