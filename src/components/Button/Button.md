## Minimal Usage

Provide a function as the `onClick` prop to perform an action when clicked. **Avoid using a button if navigation 
is the primary action, as a link is more appropriate.**

### Recommendations

* Use buttons to move though a transaction.
* Aim to use only one button per page.
* Avoid excessively long button text.
* Make sure the button text describes an action.

By default, Buttons will be displayed in the `primary` variant. Use primary buttons for the main action on a page or 
in a form.

```
<Button>Submit</Button>
```

Specify the `variant` to create a button for secondary actions.

```
<Button variant="secondary">Find out more</Button>
```

## Placing buttons on solid colors

Use the `secondary` `invert` button on top of the solid TELUS purple.

```
const PurpleBlock = require('./__docs__/PurpleBlock').default;

<PurpleBlock>
  <Button variant="secondary" invert>Go back</Button>
</PurpleBlock>
```

## Placing buttons on images

Use the `outlined` variant when placing a button on top of an image, which will cause the image to show through. You can 
also `invert` the color scheme.

Use this variant with caution. There will be accessibility issues if the color contrast of the image and the button text is too low.

```
const Hero = require('./__docs__/Hero').default;

<Hero>
  <Button variant="outlined" invert>Go back</Button>
</Hero>
```
