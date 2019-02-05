### Minimal usage

By default, a "text" input field will be rendered, but other
[HTML5 input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
are also supported.

However, the basic Input is limited to a subset of the possible input types. More complex types such as dates
will be available as additional components.

Supply additional HTML input attributes as normal.

For information on how to use disabled Inputs, please refer to the [disabled form component](#form-disabled-state) guidelines.

```jsx
<Box between={2}>
  <Input label="First name" value="Harry" />
  <Input type="tel" label="Mobile phone" pattern="[0-9]{10}" maxLength="10" />
  <Input type="password" label="Tax ID" value="123456789" autoComplete="on" />
</Box>
```

### Usage criteria

- Use `hintPosition` to re-position the `hint` below the `label` if the inline `hint` wraps
  - The `hint` should **not** be longer than 85 characters
  - The `hint` should **not** wrap more than 3 lines on all viewport sizes
- Keep `error` text as brief as possible, should be limited to text and links
  - We recommend `React.Fragment` when supplying custom content to the `error` prop
  - Note that the `div` tag is not valid in a `p` tag

### Getting feedback for entered values

Use the `feedback` attribute to give the user feedback regarding their input. You can affirm that the user's input
was correct, or highlight errors that must be corrected.

```jsx
<Box between={2}>
  <Input label="Username" value="guest12345" feedback="success" />
  <Input
    label="Email"
    value="guest@telus.com"
    feedback="error"
    error={
      <React.Fragment>
        That email is already associated with another account.
        <Link href="#">Choose another one.</Link>
      </React.Fragment>
    }
  />
</Box>
```

TDS does not perform input validations, as that is an application level concern. You will need to track the value of your
input fields and perform any required data validations either client side or server side, depending on the context.

Here is an example. Enter a value into the field below, then click away to lose focus. If you enter less than 10
characters you will receive an error message. Enter 10 or more characters to receive the success feedback.

```jsx
initialState = {
  value: '',
  status: undefined,
  errorMessage: undefined,
}

const updateValue = event => {
  setState({ value: event.target.value })
}

const validate = event => {
  const value = event.target.value

  if (value.length < 10) {
    setState({
      status: 'error',
      errorMessage: 'Your name must be greater than 10 characters',
    })
  } else {
    setState({
      status: 'success',
      errorMessage: undefined,
    })
  }
}

;<Input
  label="Name"
  value={state.value}
  feedback={state.status}
  error={state.errorMessage}
  onChange={updateValue}
  onBlur={validate}
/>
```

### Supplying extra information

Use a `hint` to succinctly clarify attributes of the expected input data, such as the expected format, or an indicator
that the field is optional. It is a more usable and accessible option than the HTML `placeholder` attribute.

```jsx
<Input label="Transit number" hint="5 digits" type="number" />
```

Use the `hintPosition` in conjunction with `hint` to display a larger hint text below the label.

```jsx
<Input
  label="Quick view"
  hintPosition="below"
  hint="Enter the account number in the box below to go to the overview page for that account."
/>
```

### Default values

Use a `defaultValue` to prefill the input with human readable data. To handle any input changes use `onChange` prop.

_NOTE:_ Only one of `defaultValue` or `value` can be set. To learn more, see <a href="https://reactjs.org/docs/uncontrolled-components.html" target="_blank">React uncontrolled components</a>.

```jsx
initialState = {
  value: 'Not set yet',
}
const onChange = evt => {
  setState({ value: evt.target.value })
}
;<Box between={2}>
  <Text>Value: {state.value}</Text>
  <Input label="Last name" type="text" defaultValue="Potter" onChange={onChange} />
</Box>
```
