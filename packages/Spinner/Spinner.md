### Minimal usage

```jsx
<Spinner spinning />
```

### Custom message

Provide a `tip` to give more context about what is happening.

```jsx
<Spinner spinning tip="Loading" />
```

### Overlaying content

The spinner can be overlaid on a section of content, which will prevent interactions with the content while active.
Please note, blocking interaction is often not a desirable user experience.

Avoid overlaying the entire window with the `Spinner`.

Wrap the `Spinner` around the content to overlay it.

```jsx
<Spinner spinning inline>
  <Button>Login</Button>
</Spinner>
```
