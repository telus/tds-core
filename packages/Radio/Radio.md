### Minimal usage

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list. Radio groups allow users to easily compare and see options.

### Usage criteria

- Use when there can only be exactly one choice from multiple options
- Use there are 2-6 options to choose from
- Use [`Select`](#select) (dropdown) when there are over 6 options
- Use the `description` prop under special circumstances where the normal label cannot be descriptive enough

For information on how to use disabled Radio buttons, please refer to the [disabled form component](#form-disabled-state) guidelines.

[Reference](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

### Uncontrolled Radio

By default, `Radio` will act just as an HTML `input` with the type of `checkbox` will act. It will be uncontrolled by the app itself, and its value can be accessed by referencing the element.

_Note:_ If no `id` is provided, a default `id` will be generated in the format of: "`name`\_`value`"

```jsx
<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      Show me deals for:
    </Text>
  </legend>
  <Radio name="services" value="mobility" label="Mobility" />
  <Radio name="services" value="internet" label="Internet" />
  <Radio name="services" value="tv" label="TV" />
  <Radio name="services" value="home-phone" label="Home Phone" />
</Box>
```

### Controlled Radio

If it is required that the `Radio` be controlled by application state or other external methods, that can be done as well. A `checked` prop must be passed to each `Radio` that needs to be controlled. Additionally, if the user is meant to select the `Radio` by hand, an `onChange` must be provided. If the `Radio` should not be changed by user input, a `readOnly` prop must be provided.

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
