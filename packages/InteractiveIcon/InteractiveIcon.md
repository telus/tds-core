### Minimal usage

`InteractiveIcon` are icons that have either motion/hover and/or active states to visually indicate that by interacting with it, a reaction will happen. Interactive icons must be accessible and announced by assistive technology.

```jsx
<Close a11yText="Close" />
```

### Accessibility

Each `InteractiveIcon` must have a minimum click/tap area of **40px** to ensure that they can be touched easily on mobile devices. Take care not to place other elements too close to an `InteractiveIcon`, as the touch area could overlap.

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<>
  <IconTable
    heading="Icons"
    icons={[
      {
        name: 'Add',
        Component: Add,
        usageCriteria: 'Used to add items',
        props: {
          a11yText: 'Add',
        },
      },
      {
        name: 'Close',
        Component: Close,
        usageCriteria: 'Used to close',
        props: {
          a11yText: 'Close',
        },
      },
      {
        name: 'PlayVideo',
        Component: PlayVideo,
        usageCriteria:
          'Used to indicate that a video is available, used with text link to bring to another page or window',
        props: {
          a11yText: 'Play',
        },
      },
      {
        name: 'Subtract',
        Component: Subtract,
        usageCriteria: 'Used to reduce items',
        props: {
          a11yText: 'Remove',
        },
      },
    ]}
  />
</>
```

### Making InteractiveIcons interactive

Use the `onClick` property to add interactivity to an `InteractiveIcon`.

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
  <Subtract onClick={reduceCount} a11yText="Reduce" />
  <Text size="medium">{state.count}</Text>
  <Add onClick={addCount} a11yText="Add" />
</Box>
```
