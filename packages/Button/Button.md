### Minimal usage

Provide a function as the `onClick` prop to perform an action when clicked. **Avoid using a button if navigation
is the primary action, as a [Link](#link) is more appropriate.**

### Usage criteria

- Use buttons to move through a transaction
- Aim to use only one primary button per page
- Keep the text short and able to fit on a single line (our recommendation is 2-24 characters)
- Make sure the button text describes an action
- Buttons should not be disabled. Use inline (on blur) error messaging to provide feedback when the form is invalid

By default, Buttons will be displayed in the `primary` variant. Use primary buttons for the main action on a page or
in a form.

```jsx
<Button>Submit</Button>
```

Specify the `variant` to create a button for secondary actions.

```jsx
<Button variant="secondary">Find out more</Button>
```

### Sizes

All buttons are inline, with a minimum width of 180px for screens larger than 768px. They will occupy 100% width of their
parent's width at the small viewport and below. Resize your browser window to see this behaviour.

### Placing buttons on dark backgrounds

Use the `inverted` button on top of a dark background (TELUS approved colours or images).

Use this variant with caution. There will be accessibility issues if the colour contrast of the image and the button
text is too low in the hover state.

```jsx { "props": { "className": "docs_purple-block" } }
<Button variant="inverted">Get started</Button>
```

### Using A11yContent

Use the `A11yContent` component to create invisible text that is read out loud by screen readers.

```jsx
<Button>
  Shop <A11yContent>iPhone</A11yContent>
</Button>
```
