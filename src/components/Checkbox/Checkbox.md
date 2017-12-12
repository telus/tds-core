```
<Box tag="fieldset" between={2}>
  <legend>Show me deals for...</legend>
  <Checkbox name="services" value="mobility" label="Mobility" />
  <Checkbox name="services" value="internet" label="Internet" />
  <Checkbox name="services" value="tv" label="TV" />
  <Checkbox name="services" value="home-phone" label="Home Phone" />
</Box>
```


### Getting feedback for an unchecked checkbox

Use the feedback and error props to give the user feedback regarding a missed checkbox by highlighting the label, checkbox element and adding an error message stating how to proceed.

```
const message = "Please confirm you have read the terms and conditions";

initialState = {
  checked: false,
  feedback: 'error',
  message: message,
};

const handleCheck = (event) => {
  if (event.target.checked) {
    setState({ checked: false, feedback: undefined, message: undefined});
  } else {
    setState({ checked: true, feedback: 'error', message: message});
  }
};

<Checkbox name="terms" value="agree" label="I agree to the terms and conditions" feedback={state.feedback} error={state.message} onChange={handleCheck} checked={state.checked} />
```
