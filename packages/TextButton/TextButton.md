### Minimal usage

Provide a function as the `onClick` prop to perform an action when clicked.

### Usage criteria

- Text Buttons are buttons that visually look like links but react to a user's action.
- They are only available in the common variant.
- Like regular Buttons, text should be kept short and precise (recommended 2-24 characters)
- Make use of the A11yContent core component to provide more written context for assistive technology users for when they navigate a page using only button landmarks
- Make sure the TextButton text describes an action (for example, 'Remove Address')

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
<TextButton onClick={() =>
    alert(
      'This is where you could launch a modal, make an api call to delete or update something, etc.'
    )>
  <A11yContent>testing</A11yContent>
  With A11y Content
</TextButton>
```
