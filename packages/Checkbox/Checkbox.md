```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/checkbox">
        Checkbox
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Minimal usage

Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others.

A stand-alone checkbox is used for a single option that the user can turn on or off.

For information on how to use disabled Checkboxes, please refer to the [disabled form component](#/Forms?id=form-disabled-state) guidelines.

[Reference](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

### Controlled Checkbox

If it is required that the state of the `Checkbox` be controlled by the application or other external methods, a `checked` prop must be passed to each `Checkbox` that needs to be controlled. Additionally, if the user is meant to select a `Checkbox`, an `onChange` must be provided. If the `Checkbox` should not be changed by user input, a `readOnly` prop must be provided.

```jsx
initialState = {
  consumerSelected: true,
  businessSelected: false,
}

const handleCheck = event => {
  if (event.target.value === 'consumer') {
    setState({ consumerSelected: event.target.checked })
  } else if (event.target.value === 'business') {
    setState({ businessSelected: event.target.checked })
  }
}
;<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      Filter products:
    </Text>
  </legend>
  <Checkbox
    checked={state.consumerSelected}
    onChange={handleCheck}
    name="products"
    value="consumer"
    label="Consumer"
  />
  <Checkbox
    checked={state.businessSelected}
    onChange={handleCheck}
    name="products"
    value="business"
    label="Business"
  />
</Box>
```

### Uncontrolled Checkbox

If it is not necessary to control `Checkbox` state. You can create a `Checkbox` without a `checked` prop, in this case the `Checkbox` will act as an HTML `input` with the type of `checkbox`. Its value can be accessed by referencing the element via a `ref`.

#### Default values

Due to the nature of uncontrolled components, you cannot set an initial `checked` property on the component. If you need to set a default state for your uncontrolled `Checkbox`, you can use the `defaultChecked` property as described [in the react documentation](https://reactjs.org/docs/uncontrolled-components.html#default-values).

_Note:_ If no `id` is provided, a default `id` will be generated in the format of: "`name`\_`value`"

```jsx
<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      Show me deals for:
    </Text>
  </legend>
  <Checkbox name="services" value="mobility" label="Mobility" />
  <Checkbox name="services" value="internet" label="Internet" />
  <Checkbox name="services" value="tv" label="TV" />
  <Checkbox name="services" value="home-phone" label="Home Phone" defaultChecked />
</Box>
```

### Getting feedback for an unchecked checkbox

Use the feedback and error props to give the user feedback regarding a missed checkbox by highlighting the label, checkbox element and adding an error message stating how to proceed.

```jsx
const message = 'Please agree to the terms and conditions'

initialState = {
  feedback: 'error',
  message: message,
}

const handleCheck = event => {
  if (event.target.checked) {
    setState({ feedback: undefined, message: undefined })
  } else {
    setState({ feedback: 'error', message: message })
  }
}

;<Checkbox
  name="terms"
  value="agree"
  label="I agree to the terms and conditions"
  feedback={state.feedback}
  error={state.message}
  onChange={handleCheck}
/>
```
