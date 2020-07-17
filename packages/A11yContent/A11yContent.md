Allows content to be hidden from sight, but still visible to screen readers. This can be used to give context to users using screen readers without revealing unnecessary extra text to sighted users.

```jsx
    <Text>The screen reader says:</Text><A11yContent>This is accessible content</A11yContent>
```

If `A11yContent` has to go between two separate text components, considering wrapping the whole text in a `<span>` to persist leading and trailing space.

```jsx
<ButtonLink href="#">
  <span>
    Shop <A11yContent>iPhone</A11yContent> Now
  </span>
</ButtonLink>
```
