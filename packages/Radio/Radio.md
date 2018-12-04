### Minimal usage

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list. Radio groups allow users to easily compare and see options.

For information on how to use disabled Radio buttons, please refer to the [disabled form component](#form-disabled-state) guidelines.

<a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" target="_blank">Reference</a>

### Usage criteria

- Use when there can only be exactly one choice from mulitple options
- Use there are 2-6 options to choose from
- Use [`Select`](#select) (dropdown) when there are over 6 options

```jsx
initialState = {
  choice: 'e.bill',
}

const setChoice = event => {
  setState({ choice: event.target.value })
}

<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      How would you like to receive your monthly bill?
    </Text>
  </legend>
  <Radio
    label="e.Bill"
    name="monthly-bill"
    value="e.bill"
    description="View your bill offline."
    checked={state.choice === 'e.bill'}
    onChange={setChoice}
  />
  <Radio
    label="Paper bill"
    name="monthly-bill"
    value="paper bill"
    description="Receive your bill in the mail on a monthly basis."
    checked={state.choice === 'paper bill'}
    onChange={setChoice}
  />
</Box>
```
