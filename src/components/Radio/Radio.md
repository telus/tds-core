### Minimal usage

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list.

<a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/" target="_blank">Reference</a>

```
initialState = {
  choice: "e.bill"
};

const setChoice = (event) => setState({choice: event.target.value});

<Box tag="fieldset" between={2}>
  <Text bold size="medium">
    How would you like to recieve your monthly bill?
  </Text>
  <Radio label="e.Bill" name="monthly-bill" value="e.Bill" checked={state.choice === "e.bill"} onChange={setChoice} />
  <Radio label="Paper bill" name="monthly-bill" value="paper bill" checked={state.choice === "paper bill"} onChange={setChoice} />
</Box>
```
