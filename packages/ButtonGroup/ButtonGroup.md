```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/button-group">
        ButtonGroup
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Minimal usage

Button Groups are sets of radio inputs styled to look like buttons.

### Usage criteria

- Use `ButtonGroup` when one selection needs to be made from multiple options
- Use when there can only be exactly one choice from multiple options
- Use when there are 2-6 options to choose from
- Use when options are similar in format or category, and also short (eg. 1GB, 3GB, 5GB)
- Use [Radio](#/Forms?id=radio) when options are more than than 10-12 characters in length

`ButtonGroup` is a stateless component; a button within `ButtonGroup` appears selected when the parent `ButtonGroup` component's `value` prop matches a `ButtonGroup.Item`'s `value` prop. This can be managed by a callback function passed into the `onChange` prop. Additionally, `onFocus` and `onBlur` callback functions are available. All callbacks are assigned to the `ButtonGroup` parent and then passed to all children.

The `label` prop on the parent `ButtonGroup` component will add a label to the whole group. This value will be read by assistive technology when the group is focused.

### Controlled ButtonGroup

If it is required that the state of the `ButtonGroup` be controlled by the application or other external methods, `value` and `onChange` props must be passed to the `ButtonGroup`.

If the `ButtonGroup` should not be changed by user input, a `readOnly` prop must be provided.

If none of the `ButtonGroup.Item` should be pre-selected then the `ButtonGroup` value must be `null`.

```js
initialState = {
  choice: null,
}

const onChange = event => {
  setState({ choice: event.target.value })
}

;<ButtonGroup
  name="storageSize"
  onChange={onChange}
  value={state.choice}
  label="Please select a storage size"
>
  <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>
  <ButtonGroup.Item value="128gb">128 GB</ButtonGroup.Item>
  <ButtonGroup.Item value="256gb">256 GB</ButtonGroup.Item>
</ButtonGroup>
```

### Uncontrolled ButtonGroup

If it is not necessary to control `ButtonGroup` state. You can create a `ButtonGroup` without a `value` prop, in this case the `ButtonGroup` will act as a collection HTML `input` with the type of `radio`. Its value can be accessed by referencing the element via a `ref`.

#### Default values

Due to the nature of uncontrolled components, you cannot set an initial `checked` property on the component. If you need to set a default state for your uncontrolled `ButtonGroup`, you can use the `defaultChecked` property on the default `ButtonGroup.Item` as described [in the react documentation](https://reactjs.org/docs/uncontrolled-components.html#default-values).

```js
<ButtonGroup name="tv" label="Choose your TV">
  <ButtonGroup.Item defaultChecked value="Optik TV">
    Optik TV
  </ButtonGroup.Item>
  <ButtonGroup.Item value="Pik TV">Pik TV</ButtonGroup.Item>
</ButtonGroup>
```

### Using A11yContent

Use the `A11yContent` component to create invisible text that is read out loud by screen readers. It is accepted as a child of `ButtonGroup.Item`.

```js
initialState = {
  choice: 'buy',
}

const onChange = event => {
  setState({ choice: event.target.value })
}

;<ButtonGroup
  name="purposeOfVisit"
  onChange={onChange}
  value={state.choice}
  label="What was the purpose of your visit?"
>
  <ButtonGroup.Item value="buy">
    Buy<A11yContent> mobile phones</A11yContent>
  </ButtonGroup.Item>
  <ButtonGroup.Item value="inquiry">
    Inquiry <A11yContent> about mobile phones</A11yContent>
  </ButtonGroup.Item>
  <ButtonGroup.Item value="tradeIn">
    Trade-In <A11yContent> mobile phones</A11yContent>
  </ButtonGroup.Item>
</ButtonGroup>
```
