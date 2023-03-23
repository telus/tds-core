```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/radio">
        Radio
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Minimal usage

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list. Radio groups allow users to easily compare and see options.

### Usage criteria

- Use when there can only be exactly one choice from multiple options
- Use there are 2-6 options to choose from
- Use [`Select`](#select) (dropdown) when there are over 6 options
- Use the `description` prop under special circumstances where the normal label cannot be descriptive enough
- If there are 2-6 optional variables, one of them should be "None" or "No selection"

For information on how to use disabled Radio buttons, please refer to the [disabled form component](#/Forms?id=form-disabled-state) guidelines.

[Reference](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

### Controlled Radio

If it is required that the state of the `Radio` be controlled by the application or other external methods, a `checked` prop must be passed to each `Radio` that needs to be controlled. Additionally, if the user is meant to select a `Radio`, an `onChange` must be provided. If the `Radio` should not be changed by user input, a `readOnly` prop must be provided.

```jsx
initialState = {
  choice: 'e.bill',
}

const setChoice = event => {
  setState({ choice: event.target.value })
}

;<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      How would you like to receive your monthly bill?
    </Text>
  </legend>
  <Radio
    label="e.Bill"
    name="monthly-bill"
    value="e.bill"
    checked={state.choice === 'e.bill'}
    onChange={setChoice}
  />
  <Radio
    label="Paper bill"
    name="monthly-bill"
    value="paper bill"
    checked={state.choice === 'paper bill'}
    onChange={setChoice}
  />
</Box>
```

### Uncontrolled Radio

If it is not necessary to control `Radio` state. You can create a `Radio` without a `checked` prop, in this case the `Radio` will act as an HTML `input` with the type of `radio`. Its value can be accessed by referencing the element via a `ref`.

#### Default values

Due to the nature of uncontrolled components, you cannot set an initial `checked` property on the component. If you need to set a default state for your uncontrolled `Radio`, you can use the `defaultChecked` property as described [in the react documentation](https://reactjs.org/docs/uncontrolled-components.html#default-values).

```jsx
<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      Show me deals for:
    </Text>
  </legend>
  <Radio name="deals" value="mobility" label="Mobility" />
  <Radio name="deals" value="internet" label="Internet" />
  <Radio name="deals" value="tv" label="TV" />
  <Radio name="deals" value="home-phone" label="Home Phone" />
</Box>
```

### Radio descriptions

In special circumstances, it may be impossible for the radio label to be descriptive enough for the user to make an informed choice. In these cases, use the `description` prop. This prop can be used to add descriptive text under a radio input.

```jsx
initialState = {
  choice: 'personal',
}

const setChoice = event => {
  setState({ choice: event.target.value })
}

;<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      What will this account be used for?
    </Text>
  </legend>
  <Radio
    label="Personal Use"
    description="You will be shown TELUS services designed for personal use."
    name="account-type"
    value="personal"
    checked={state.choice === 'personal'}
    onChange={setChoice}
  />
  <Radio
    label="Business Use"
    description="You will be put in touch with a TELUS Business Solutions representative."
    name="account-type"
    value="business"
    checked={state.choice === 'business'}
    onChange={setChoice}
  />
</Box>
```
