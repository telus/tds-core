### Minimal usage

Button Groups are sets of radio inputs styled to look like buttons.

Buttons know they are selected when the parent `ButtonGroup` component's `value` prop matches a `ButtonGroup.Item`'s `value` prop. This can be managed by a callback function passed into the `onChange` prop.

The `label` prop on the parent `ButtonGroup` component will add a label to the whole group. This value will be read out loud when the group is selected via a screen reader.

### Usage criteria

- Teams can set a selection to be selected on default
- Use button group when one selection needs to be made from multiple options
- Use when there can only be exactly one choice from mulitple options
- Use there are 2-6 options to choose from
- Use when options are similar in format or category and short (eg. 1GB, 3GB, 5GB)
- Use radio when options are more than than 10-12 characters in length

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
