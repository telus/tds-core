```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/button">
        Button
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Minimal usage

Provide a function as the `onClick` prop to perform an action when clicked. **Avoid using a button if navigation is the primary action, as a [Link](#/Links?id=link) is more appropriate.**

### Usage criteria

- Use buttons to move through a transaction
- Aim to use only one primary button variant per page
- Keep the text short and precise. It should fit on a single line (our recommendation is 2-24 characters for French and English)
- Make use of the A11yContent core component to provide more written context for assistive technology users for when they navigate a page using only button landmarks
- Make sure the button text describes an action
- Buttons should not be disabled. Use inline (on blur) error messaging to provide feedback when the form is invalid

### OLD Button variants

**Deprecated:** New Button variants have been introduced. Future projects should adopt the new variants, as the older variants will be deprecated. Avoid using both new and old variants together within the same experience.

Currently, by default, Buttons will be displayed in the `Primary` variant.

```jsx
<Button>Submit</Button>
```

Specify the `variant` to create a button for secondary actions.

```jsx
<Button variant="secondary">Find out more</Button>
```

### NEW Button variants and ranks

New Buttons and their associated colours are meant for different purposes. Choose different variants according to their context and rank.

#### Ranks

By default, new Button variants will be displayed in the `Common` `rank`. Use Common `rank` for medium to low emphasis.

Use `Main` rank for the most emphasis and main action on a page or in a form.

#### StandardCommon + StandardMain

Used mainly for marketing pages for commerce actions where the direct/immediate action is to purchase. It can also be used for login or registration as these will lead a user to pay their bill or add services.

Examples: TELUS.com, TELUS International, My TELUS

```jsx
<Button variant="standard">Standard Common</Button>
```

```jsx
<Button variant="standard" rank="main">
  Standard Main
</Button>
```

#### BrandCommon + BrandMain

Used mainly for editorial, non-commerce-related actions where the direct/immediate action goes to a learn/info/editorial experience.

Examples: About TELUS, Annual Report, surveys, modals, Brand Resource Center, TELUS Blog

```jsx
<Button variant="brand">Brand Common</Button>
```

```jsx
<Button variant="brand" rank="main">
  Brand Main
</Button>
```

#### DangerCommon

Reserved for applications, native apps, and internal tools. Cancel of private/legal/monetary effect. If an action can be undone, do not use this.

Examples: MyTELUS web & app, CASA

```jsx
<Button variant="danger">Danger</Button>
```

### Sizes

All buttons are inline, with a minimum width of `180px` for screens larger than `768px`. They will occupy 100% width of their parent's width at the small viewport (≤ `767px`) and below. Resize your browser window to see this behaviour.

### Placing buttons on dark backgrounds

Use the `inverted` button on top of a dark background (TELUS approved colours or images).

Use this variant with caution. There will be accessibility issues if the colour contrast of the image and the button
text is too low in the hover state.

```jsx { "props": { "className": "docs_purple-block" } }
<Button variant="inverted">Get started</Button>
```

### Accessibility features

The Button component includes:

- High-contrast interactive states (default, active, focus) for all new button variants and ranks
- Makes use of the `<button>` element to provide contextual feedback to assistive technology
- Is compatible with the A11yContent core component to provide more written context to assistive technology without occupying too much visual space

```jsx
<Button variant="standard">Shop</Button>
```

### Disabled buttons

Buttons should not be disabled on TELUS experiences. The following is a list of reasons why:

- Disabled buttons fool users into thinking they can proceed with an action
- Disabled buttons are intentionally designed to be “hard to see”; however this is visually inaccessible
- Disabled buttons do not inherently give any feedback or reason why they are disabled
- They give design teams a reason to rush through error handling as opposed to providing the correct feedback to guide users to their next steps
- Disabled buttons may be cut off for low vision users who zoom-in on their devices causing confusion as to why they cannot proceed and important information to be missed
- Disabled buttons are usually not navigable with assistive technologies like screen readers and switches. This usually means that the disabled buttons will be skipped over

**What to do instead of using a disabled button:**

If you show the button in its disabled state with no explanation, there can be confusion as to why it is disabled. To avoid user confusion, implement full error handling and feedback to your interactive experiences.

To better express to a user that they cannot proceed with form submission, show the submit Button, but perform error validation when the user clicks it, and display all errors as a group within an InputFeedback component adjacent to the submit button.

This allows for clear actions laid out for the user to take and should include skip links for easy navigation to parts of the form that need action
