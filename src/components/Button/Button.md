### Minimal usage

Provide a function as the `onClick` prop to perform an action when clicked. **Avoid using a button if navigation
is the button's primary action, as a [Link](#link) is more appropriate.**

### Usage criteria

* Use buttons to move through a transaction.
* Aim to use only one button per page.
* Avoid excessively long button text.
* Make sure the button text describes an action.
* Buttons should not be disabled.
* For buttons used in forms, use inline error messaging to provide feedback.

By default, Buttons will be displayed in the `primary` variant. Use primary buttons for the main action on a page or
in a form.

```
<Button>Submit</Button>
```

Specify the `variant` to create a button for secondary actions.

```
<Button variant="secondary">Find out more</Button>
```

### Sizes

All buttons are inline, with a minimum width of 180px for screens larger than 768. They will occupy 100% width of their parent's at the small viewport and below. Resize your browser window to see this behaviour.


### Placing buttons on dark backgrounds

Use the `inverted` button on top of a dark background (TELUS approved colours or images).

Use this variant with caution. There will be accessibility issues if the colour contrast of the image and the button text is too low in the hover state.

```
const PurpleBlock = require('../__docs__/PurpleBlock').default;

<PurpleBlock>
  <Button variant="inverted">Get started</Button>
</PurpleBlock>
```
