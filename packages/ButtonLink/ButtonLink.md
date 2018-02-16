### Minimal usage

A Button Link is a navigational element that styles itself as a button. Clicking one should navigate to a new "page".

By default, Buttons will be displayed in the `primary` variant. Use primary Button Links for the main call to action on a page.

```
<ButtonLink href="#">Find out how</ButtonLink>
```

### Usage criteria

* Use Buttons Links to navigate to a new "page".
* Aim to use only one button per page.
* Avoid excessively long button text.
* Make sure the button text describes an action.
* Buttons should not be disabled.

### Placing buttons on dark backgrounds

Use the `inverted` button link on top of a dark background (TELUS approved colours or images).

Use this variant with caution. There will be accessibility issues if the colour contrast of the image and the button text is too low in the hover state.

```jsx { "props": { "className": "docs_hero" }}
<ButtonLink href="#" variant="inverted">Advanced solutions</ButtonLink>
```
