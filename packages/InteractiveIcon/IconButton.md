`IconButton` can be used to contain universally-recognizable icons that do not require accompanying text. It can be used with the `Add`, `Close`, `PlayVideo`, and `Subtract` [Dependent icons](#/Icons?id=dependent).

```js
initialState = {
  count: 0,
}

const addCount = () => {
  setState({ count: state.count + 1 })
}
const reduceCount = () => {
  setState({ count: state.count - 1 })
}
;<Box inline between={3} style={{ alignItems: 'center' }}>
  <IconButton icon={Subtract} onClick={reduceCount} a11yText="Reduce" />
  <Text size="medium">{state.count}</Text>
  <IconButton icon={Add} onClick={addCount} a11yText="Add" />
</Box>
```
