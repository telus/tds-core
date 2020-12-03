### Minimal usage

Provide a function as the `onClick` prop to perform an action when clicked.

### Usage criteria

- Text Buttons are buttons that visually look like links but react to a user's action.

### Sample Usage

```jsx
<TextButton
  onClick={() =>
    alert(
      'This is where you could launch a modal, make an api call to delete or update something, etc.'
    )
  }
>
  Click this
</TextButton>
```

#### Using A11yContent

Use the `A11yContent` component to create invisible text that is read out loud by screen readers.

```jsx
<TextButton
  onClick={() =>
    alert(
      'This is where you could launch a modal, make an api call to delete or update something, etc.'
    )
  }
>
  <A11yContent>testing</A11yContent>
  With A11y Content
</TextButton>
```
