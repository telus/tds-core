### Standalone usage

While its primary use is to facilitate feedback states for other form components such as [Input](#/Forms?id=input), you may use it standalone.

```jsx
<InputFeedback>
  <Paragraph>Provide a brief description of your issue</Paragraph>
</InputFeedback>
```

### Advanced use with form components

Passing a function that returns an `InputFeedback` to the `helper` prop of form components gives you more control over the
contents of the `InputFeedback` component by giving you access to the `feedback` state of the form field and the current `value`.

As an example, enter a value into the field below, then click away to lose focus. If you enter less than the 16
character minimum the helper will show as an error. Enter 16 or more characters to receive the success feedback.

```jsx
initialState = {
  value: '',
  status: undefined,
}

const updateValue = event => {
  setState({ value: event.target.value })
}

const validate = event => {
  const value = event.target.value

  if (value.length === 0) {
    setState({ status: null })
  } else if (value.length < 16) {
    setState({ status: 'error' })
  } else {
    setState({ status: 'success' })
  }
}

const passwordRequirements = feedback => {
  let listStyle

  switch (feedback) {
    case 'success':
      listStyle = 'checkmark'
      break
    case 'error':
      listStyle = 'x'
      break
    default:
      listStyle = 'circle'
  }

  return (
    <InputFeedback feedback={feedback}>
      <Box between={2}>
        <Paragraph size="small" bold>
          Your password must be:
        </Paragraph>

        <UnorderedList listStyle={listStyle}>
          <UnorderedList.Item>16 characters or longer</UnorderedList.Item>
        </UnorderedList>
      </Box>
    </InputFeedback>
  )
}

;<Input
  label="Password"
  type="password"
  id="password-2"
  value={state.value}
  feedback={state.status}
  onChange={e => {
    updateValue(e)
    validate(e)
  }}
  onBlur={validate}
  helper={passwordRequirements}
/>
```
