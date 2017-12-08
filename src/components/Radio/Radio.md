```
initialState = {
  choice: undefined
};

const setChoice = (value) => setState({choice: value});

<Box tag="fieldset" between={3}>
	<Text size="small">
    Choose one combination of area code and first 3 digits to see the available numbers in that range:
  </Text>
  <Box tag="fieldset" between={2}>
    <Text bold size="small">
      Area code (416)
    </Text>
    <Radio label="(416) 547" name="group1" value="a" checked={state.choice === "a"} onChange={e => setChoice(e.target.value)} />
    <Radio label="(416) 871" name="group1" value="b" checked={state.choice === "b"} onChange={e => setChoice(e.target.value)} />
    <Radio label="(416) 321" name="group1" value="b" checked={state.choice === "b"} onChange={e => setChoice(e.target.value)} />
    <Radio label="(416) 384" name="group1" value="b" checked={state.choice === "b"} onChange={e => setChoice(e.target.value)} />
  </Box>
</Box>
```
