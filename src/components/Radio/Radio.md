```
initialState = {
  choice: undefined
};

const setChoice = (event) => setState({choice: event.target.value});

<Box tag="fieldset" between={3}>
  <Text size="small">
    Choose one combination of area code and first 3 digits to see the available numbers in that range:
  </Text>
  <Box tag="fieldset" between={2}>
    <Text bold size="small">
      Area code (416)
    </Text>
    <Radio label="(416) 547" name="area-code" value="547" checked={state.choice === "547"} onChange={setChoice} />
    <Radio label="(416) 871" name="area-code" value="871" checked={state.choice === "871"} onChange={setChoice} />
    <Radio label="(416) 321" name="area-code" value="321" checked={state.choice === "321"} onChange={setChoice} />
    <Radio label="(416) 384" name="area-code" value="384" checked={state.choice === "384"} onChange={setChoice} />
  </Box>
</Box>
```
