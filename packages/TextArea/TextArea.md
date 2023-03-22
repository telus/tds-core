```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/text-area">
        TextArea
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Minimal usage

Use the `TextArea` component to collect long-form information such as product feedback or support queries.

```jsx
const myTextArea = React.createRef()

;<TextArea label="Enter your feedback" ref={myTextArea} />
```

### Getting feedback for entered values

#### Usage criteria for feedback

- Keep `error` text as brief as possible, **should be limited to text and links**
  - Developers can use `React.Fragment` or `<span>` when supplying custom content to the `error` prop
  - Note that the `div` tag is not valid in a `p` tag

Use the `feedback` attribute to give the user feedback regarding their input. You can affirm that the user's input
was correct, or highlight errors that must be corrected.

TDS does not perform input validations, as that is an application level concern. You will need to track the value of your
`TextArea` fields and perform any required data validations either client side or server side, depending on the context.

Here is an example. Focus on this field and unfocus. If you leave the field blank you will receive an error message. Enter text into the field to display the `success` feedback.

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

  if (value.length < 1) {
    setState({
      status: 'error',
    })
  } else {
    setState({
      status: 'success',
    })
  }
}

;<TextArea
  label="Order instructions"
  id="order-validation"
  value={state.value}
  feedback={state.status}
  error="Field must be filled."
  onChange={updateValue}
  onBlur={validate}
/>
```

### Supplying a hint

#### Usage criteria for hint

- `hint` can be used beside the label
  - Label and hint text should not exceed 40 characters total
- The `hint` should **not** be longer than 85 characters
- The `hint` should **not** wrap more than 3 lines on all viewport sizes

Use a `hint` to succinctly clarify attributes of the expected input, such as the expected format, or an indicator
that the field is optional. It is a more usable and accessible option than the HTML `placeholder` attribute.

```jsx
<TextArea label="Special requests" hint="Please include order number" />
```

### Using Tooltip

When a more in-depth explanation is needed to fill out a `TextArea` properly, a [`Tooltip`](#/Forms?id=tooltip) may be provided to the `tooltip` prop.

```jsx
<TextArea
  label="Describe your inquiry"
  hint="Please include customer ID"
  tooltip={
    <Tooltip copy="en">
      Inquiries will be addressed by our staff ASAP. We will reach out if the query cannot be
      fulfilled. Please check your confirmation email for your customer ID.
    </Tooltip>
  }
/>
```
