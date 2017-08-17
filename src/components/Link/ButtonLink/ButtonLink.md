### Minimal Usage

A Button Link is a navigational element that styles itself as a button. Clicking one should navigate to a new "page".

By default, Buttons will be displayed in the `primary` variant. Use primary buttons for the main call to action on a page.

```
<Link.Button href="http://www.telus.com">Find out how</Link.Button>
```

### Using Button Links

All Button Links have the same visual appearance as [Button](#button), but are applied differently in certain contexts. Unlike the Button component, Button Link is more appropriate for:

- Call to action
- Placement atop a complex background such as an image

#### Placing Button Links on images

Use the `outlined` variant when placing a button on top of an image, which will cause the image to show through. You can
also `invert` the colour scheme.

Use this variant with caution. There will be accessibility issues if the colour contrast of the image and the button text
is too low, including the hover state.

```
const Hero = require('../../__docs__/Hero').default;

<Hero>
  <Link.Button variant="outlined" invert>Advanced solutions</Link.Button>
</Hero>
```
