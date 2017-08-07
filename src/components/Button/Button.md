## Minimal Usage

Provide a function in the `onClick` prop to perform an action when clicked. **Avoid using a button if navigation 
is the primary action, as a link is more appropriate.**

### Recommendations

* Use buttons to move though a transaction.
* Aim to use only one button per page.
* Avoid excessively long button text.
* Make sure the button text describes an action.

By default, Buttons will be displayed in the `primary` variant.

```
<Button>Submit</Button>
```

Specify the `variant` to create a button for secondary actions.

```
<Button variant="secondary">Find out more</Button>
```

## On images or colors

Use the `outlined` variant when placing a button on top of a solid color other than white or on an image. Inverting the 
color scheme with the `invert` attribute is another option.

Edit the code block to try different combinations of `variant` and `invert`. 

```
const Hero = require('./__docs__/Hero').default;

<Hero>
  <Button variant="outlined" invert>Go back</Button>
</Hero>
```
