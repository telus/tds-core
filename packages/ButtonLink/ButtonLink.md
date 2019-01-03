### Minimal usage

A Button Link is a navigational element that styles itself as a button. Clicking one should navigate to a new "page".

By default, Buttons will be displayed in the `primary` variant. Use primary Button Links for the main call to action on a page.

```jsx
<ButtonLink href="#">Find out how</ButtonLink>
```

### Usage criteria

- Use Buttons Links to navigate to a new "page"
- Aim to use only one button per page
- Keep the text short and able to fit on a single line (our recommendation is 2-24 characters)
- Make sure the button text describes an action
- Buttons should not be disabled

### Placing buttons on dark backgrounds

Use the `inverted` button link on top of a dark background (TELUS approved colours or images).

Use this variant with caution. There will be accessibility issues if the colour contrast of the image and the button text is too low in the hover state.

```jsx { "props": { "className": "docs_hero" }}
<ButtonLink href="#" variant="inverted">
  Advanced solutions
</ButtonLink>
```

### Using A11yContent

Use the `A11yContent` component to create invisible text that is read out loud by screen readers.

```jsx
<Button href="#">
  Shop <A11yContent>iPhone</A11yContent>
</Button>
```
