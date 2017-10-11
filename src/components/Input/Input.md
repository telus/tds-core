### Minimal usage

By default, a "text" input field will be rendered, but other
[HTML5 input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
are also supported.

However, the basic Input is limited to a subset of the possible input types. More complex types such as dates
will be available as additional components.

Supply additional HTML input attributes as normal.

```
<div>
  <Input label="First name" value="Lucy" />

  <Input type="tel" label="Mobile phone" pattern="[0-9]{10}" maxLength="10" />
  <Input type="password" label="Tax ID" value="123456789" autoComplete="on" />
</div>
```

### Getting feedback for entered values

Use the `feedback` attribute to give the user feedback regarding their input. You can affirm that the user's input
was correct, or highlight errors that must be corrected.

```
<div>
  <Input label="Username" value="guest12345" feedback="success" />
  <Input
    label="Email" value="guest@telus.com" feedback="error"
    error="That email is already associated with another account. Choose another one."
  />
</div>
```

TDS does not perform input validations, as that is an application level concern. You will need to track the value of your
input fields and perform any required data validations either client side or server side, depending on the context.

Here is an example. Enter a value into the field below, then click away to lose focus. If you enter less than 10
characters you will receive an error message. Enter 10 or more characters to receive the success feedback.

```
initialState = {
  value: '',
  status: undefined,
  errorMessage: undefined
};

const updateValue = (event) => {
  setState({ value: event.target.value })
}

const validate = (event) => {
  const value = event.target.value

  if (value.length < 10) {
    setState({
      status: 'error',
      errorMessage: 'Your name must be greater than 10 characters'
    })
  }
  else {
    setState({
      status: 'success',
      errorMessage: undefined
    })
  }
};

<div>
  <Input
    label="Name" value={state.value}
    feedback={state.status} error={state.errorMessage}
    onChange={updateValue} onBlur={validate}
  />
</div>
```

### Supplying extra information

Use a `hint` to succinctly clarify attributes of the expected input data, such as the expected format, or an indicator 
that the field is optional. It is a more usable and accessible option than the HTML `placeholder` attribute.

<span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.24.0</span>

```
<Input label="Transit number" hint="5 digits" type="number" />
```

Use a `helper` message to show additional context that will guide the user while completing the form field.

```
const creditCards = (
  <Text>
    We accept the following credit cards: <Text bold>Visa, Mastercard, Discover</Text>.
  </Text>
);

<Input label="Credit Card Number" helper={creditCards} />
```

The helper will also receive the feedback state and will be styled accordingly in response to user input. Use the
typography components to ensure any color changes are inherited.

Here is an example. Enter a value into the field below, then click away to lose focus. If you enter less than the 16
character minimum the helper will show as an error. Enter 16 or more characters to receive the success feedback.

```
initialState = {
  value: '',
  status: undefined,
}

const updateValue = (event) => {
  setState({ value: event.target.value })
}

const validate = (event) => {
  const value = event.target.value

  if (value.length < 16) {
    setState({ status: 'error' })
  }
  else {
    setState({ status: 'success' })
  }
}

const passwordRequirements = (feedback) => {
  let listType

  switch(feedback) {
    case 'success': listType = 'list--checked'; break;
    case 'error': listType = 'list--error'; break;
    default: listType = 'list--compact'
  }

  return (
    <Input.Helper feedback={feedback}>
      <Paragraph size="small" bold>Your password must be:</Paragraph>

      <ul className={`list ${listType}`}>
        <li className="list__item">16 characters or longer</li>
        <li className="list__item">Not repeated from previous password</li>
      </ul>
    </Input.Helper>
  );
};

<div>
  <Input
    label="Password" type="password" id="password-2"
    value={state.value} feedback={state.status}
    onChange={updateValue} onBlur={validate}
    helper={passwordRequirements}
  />
</div>
```
