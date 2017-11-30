```
initialState = {
  choice: undefined
};

const setChoice = (value) => setState({choice: value});

<Box tag="fieldset" between={2}>
  <Radio label="Choice A" name="group1" value="a" checked={state.choice === "a"} onChange={e => setChoice(e.target.value)} />
  <Radio label="Choice F" name="group2" value="f" checked={state.choice === "f"} onChange={e => setChoice(e.target.value)} />
</Box>
```

```
<Radio label="Choice B" name="group3" value="b" feedback="error" />
```


```
<Radio label="Choice C" name="group4" value="c" checked />
```

```
<Radio label="Choice D" name="group5" value="d" disabled />
```


```
<Radio label="Choice E" name="group6" value="e" disabled checked />
```
