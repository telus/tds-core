```
initialState = {
  choice: '',
}


const onChange = (event) => {
  setState({choice: event.target.value})
}

<ButtonGroup name="storageSize" onChange={onChange} value={state.choice} label="Please select a storage size">
  <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>
  <ButtonGroup.Item value="128gb">128 GB</ButtonGroup.Item>
  <ButtonGroup.Item value="256gb">256 GB</ButtonGroup.Item>
</ButtonGroup>
```
