# DEPRECATED

**This package has been deprecated and is no longer supported.**

The SelectorCounter component is no longer recommended due to it being inaccessible
on small displays. We recommend you use either the [Select](#select) or [Input](#input) components instead.

## Minimal usage

```jsx
<Box between={2}>
  <label htmlFor="docs_example-1" className="docs_selcounter-label">
    Simple example
  </label>
  <SelectorCounter id="docs_example-1" />
</Box>
```

## Disabled

Use the `disabled` prop to disable the input.

```jsx
<Box between={2}>
  <label htmlFor="docs_example-2" className="docs_selcounter-label">
    Disabled example
  </label>
  <SelectorCounter id="docs_example-2" disabled />
</Box>
```

## Displaying feedback

Use the `successful` or `invalid` props to style the input appropriately.

In this example, any number greater than 5 is a success.

```jsx
initialState = {
  value: 5,
}
;<Box between={2}>
  <label htmlFor="docs_example-3" className="docs_selcounter-label">
    Feedback example
  </label>
  <SelectorCounter
    id="docs_example-3"
    defaultValue={state.value}
    onChange={value => setState({ value: value })}
    successful={state.value > 5}
    invalid={state.value <= 5}
  />
</Box>
```

## Accessibility

Customizing the incrementor and decrementor labels is a helpful way to accurately describe a Selector Counter’s controls, especially when there are more than one present on the page.

The component exposes a `focus()` method that you can call to place the cursor in the number field.

### Contextual prefix and suffix

The `contextPrefix` and `contextSuffix` props can be used to define text that helps the user understand changes in the field’s value. For example, this code produces a field whose value is announced as “You chose <number> smartphone plans” whenever the number changes.

The contextual prefix & suffix can be used together or separately. They’re also optional - if an accessible field can be built using the standard label/description/aria markup, then use those first.

```jsx
initialState = {
  succeeded: false,
  curr: 0,
}

const handleNumber = curr => {
  setState({ curr, succeeded: false })
}

const handleSubmit = e => {
  e.preventDefault()

  state.invalid = state.curr === 5
  setState({ succeeded: !invalid })

  if (state.invalid) {
    this.counter.focus()
  }
}

const successful = state.succeeded
const invalid = state.curr === 5

const listType = invalid ? 'x' : 'checkmark'

const fieldError = invalid ? 'field--error' : ''
const fieldSuccess = successful ? 'field--success' : ''

const helperError = invalid ? 'helper--error' : ''
const helperSuccess = successful ? 'helper--success' : ''
;<form onSubmit={handleSubmit}>
  <div className={`field ${fieldError} ${fieldSuccess}`}>
    <label htmlFor="ex-selcounter" className="docs_selcounter-label">
      How many smartphone plans?
    </label>
    <div id="ex-selcounter-desc">
      <Paragraph size="small">Instructions</Paragraph>
      <UnorderedList listStyle={listType}>
        <UnorderedList.Item>Do not pick 5</UnorderedList.Item>
      </UnorderedList>
    </div>
    <SelectorCounter
      ref={counter => (this.counter = counter)}
      id="ex-selcounter"
      incrementorLabel="Add a plan"
      decrementorLabel="Remove a plan"
      onChange={handleNumber}
      invalid={invalid}
      successful={successful}
      aria-described-by="ex-selcounter-desc"
      contextPrefix="You chose"
      contextSuffix="smartphone plans"
    />
  </div>
  <Button>Submit</Button>
</form>
```
