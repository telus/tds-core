```
initialState = {
  choice: undefined
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
