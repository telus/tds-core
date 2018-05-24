### Minimal usage

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list. Radio groups allow users to easily compare and see options.

<a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" target="_blank">Reference</a>

### Usage criteria

* Use when there can only be exactly one choice from mulitple options
* Use there are 2-6 options to choose from
* Use [`Select`](#select) (dropdown) when there are over 6 options

```
const setChoice = event => {
  setState({ choice: event.target.value })
}

initialState = {
  choice: "e.bill"
};

<Box tag="fieldset" between={2}>
  <legend>
    <Text bold size="medium">
      How would you like to recieve your monthly bill?
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
