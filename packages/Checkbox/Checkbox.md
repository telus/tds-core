### Minimal usage

Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others.

A stand-alone checkbox is used for a single option that the user can turn on or off.

<a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" target="_blank">Reference</a>

```
<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      Show me deals for:
    </Text>
  </legend>
  <Checkbox name="services" value="mobility" label="Mobility" />
  <Checkbox name="services" value="internet" label="Internet" />
  <Checkbox name="services" value="tv" label="TV" />
  <Checkbox name="services" value="home-phone" label="Home Phone" />
</Box>
```

### Getting feedback for an unchecked checkbox

Use the feedback and error props to give the user feedback regarding a missed checkbox by highlighting the label, checkbox element and adding an error message stating how to proceed.

```
const message = "Please agree to the terms and conditions";

initialState = {
  checked: false,
  feedback: 'error',
  message: message,
};

const handleCheck = (event) => {
  if (event.target.checked) {
    setState({ checked: true, feedback: undefined, message: undefined })
  } else {
    setState({ checked: false, feedback: 'error', message: message })
  }
};

<Checkbox name="terms" value="agree" label="I agree to the terms and conditions" feedback={state.feedback} error={state.message} onChange={handleCheck} checked={state.checked} />
```
