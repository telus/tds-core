```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/button-link">
        ButtonLink
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Minimal usage

A Button Link is a navigational element that styles itself as a button. Clicking one should navigate to a new "page".

```jsx
<ButtonLink href="#">Find out how</ButtonLink>
```

### Usage criteria

- Use Buttons Links to navigate to a new "page"
- Aim to use only one button per page
- Keep the text short and able to fit on a single line (our recommendation is 2-24 characters)
- Make sure the button text describes an action
- Buttons should not be disabled

### OLD and NEW ButtonLink variants

**Deprecated:** New ButtonLink variants have been introduced. Future projects should adopt the new variants, as the older variants will be deprecated. Avoid using both new and old variants together within the same experience.

Please refer to the [Button](#/Forms?id=button) documentation for more details.

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
<ButtonLink href="#">
  <span>
    Shop <A11yContent>iPhone</A11yContent>Now
  </span>
</ButtonLink>
```

### Full width option

The full width button option is available to be used in Cards where the button should fill the full width of the Card. Please use this only where it makes sense visually to do so.
