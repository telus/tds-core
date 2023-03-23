```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/select">
        Select
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- Include a `placeholder` to provide instructions such as "Please select…" as an unselectable option (recommended)
- Use when options are between 7-15 (recommended)
- For options are 6 and under, use [`Radio`](/#!/radio) groups or [`ButtonGroup`](/#!/ButtonGroup).
- For options 15 and above, look for alternatives (e.g grouping into categories, or input field with auto-complete etc.)

For information on how to use disabled Selects, please refer to the [disabled form component](#/Forms?id=form-disabled-state) guidelines.

[Reference](https://baymard.com/blog/drop-down-usability)

```jsx
<Select
  label="Province"
  placeholder="Please select..."
  options={[
    { text: 'Alberta', value: 'AB' },
    { text: 'British Columbia', value: 'BC' },
    { text: 'Ontario', value: 'ON' },
    { text: 'Quebec', value: 'QC' },
  ]}
/>
```

### Controlled Select

If it is required that the state of the `Select` be controlled by the application or other external methods, `value` and `onChange` props must be passed to the `Select`. If the `Select` should not be changed by user input, a `readOnly` prop must be provided.

```jsx
initialState = {
  value: '',
}
const onChange = evt => {
  setState({ value: evt.target.value })
}
;<Box between={2}>
  <Select
    label="Cities"
    placeholder="Please select..."
    options={[
      { text: 'Toronto', value: 'TOR' },
      { text: 'Vancouver', value: 'VAN' },
      { text: 'Quebec City', value: 'QC' },
    ]}
    value={state.value}
    onChange={onChange}
  />
</Box>
```

### Uncontrolled Select

If it is not necessary to control `Select` state. You can create an `Select` without a `value` prop, in this case the `Select` will act as an HTML `select`. Its value can be accessed by referencing the element via a `ref`.

#### Default values

Due to the nature of uncontrolled components, you cannot set an initial `value` property on the component. If you need to set a default state for your uncontrolled `Select`, you can use the `defaultValue` property as described [in the react documentation](https://reactjs.org/docs/uncontrolled-components.html#default-values).

```jsx
<Select
  label="Favourite Joke Type"
  placeholder="Please select..."
  options={[
    { text: 'Stand Up', value: 'standup' },
    { text: 'Knock Knock Jokes', value: 'knockknock' },
    { text: 'Slapstick', value: 'slapstick' },
  ]}
  defaultValue="standup"
/>
```

### Getting feedback for entered values

#### Usage criteria for feedback

- Keep `error` text as brief as possible, **should be limited to text and links**
  - Developers can use `React.Fragment` or `<span>` when supplying custom content to the `error` prop
  - Note that the `div` tag is not valid in a `p` tag

Use the `feedback` attribute to give the user feedback regarding their selection. You can affirm that the user's selection
was correct, or highlight errors that must be corrected.

In this example, select "React" to trigger a success state, and select any other option to trigger an error state.

```jsx
initialState = {
  value: '',
  feedback: undefined,
}
const onChange = evt => {
  setState({
    value: evt.target.value,
    feedback: verifySelection(evt.target.value),
  })
}

const verifySelection = value => {
  if (value === '') {
    return undefined
  } else if (value === 'react') {
    return 'success'
  }
  return 'error'
}

const frameworkSelect = React.createRef()

;<Select
  label="Installed Framework"
  placeholder="Please select..."
  options={[
    { text: 'React', value: 'react' },
    { text: 'VueJS', value: 'vue' },
    { text: 'Angular', value: 'angular' },
  ]}
  ref={frameworkSelect}
  feedback={state.feedback}
  error={'The selected framework is not the one being currently used.'}
  value={state.value}
  onChange={onChange}
/>
```

### Using Tooltip

When a more in-depth explanation is needed to fill out a `Select` properly, a [`Tooltip`](#/Forms?id=tooltip) may be provided to the `tooltip` prop.

```jsx
<Select
  label="Favourite Colour"
  placeholder="Please select..."
  options={[
    { text: 'Blue', value: 'AB' },
    { text: 'Green', value: 'BC' },
    { text: 'Red', value: 'ON' },
    { text: 'Purple', value: 'QC' },
  ]}
  tooltip={<Tooltip copy="en">Used to decide which theme to apply.</Tooltip>}
/>
```

### Grouping options

`Select` supports option groups. By passing an array of options to a top-level `options` key, the component will render
an `<optgroup>` element along with its respective options.

```jsx
<Select
  label="Cities"
  placeholder="Please select..."
  options={[
    {
      text: 'Ontario',
      options: [{ text: 'Toronto', value: 'TOR' }, { text: 'Ottawa', value: 'OTT' }],
    },
    {
      text: 'British Columbia',
      options: [{ text: 'Vancouver', value: 'VAN' }, { text: 'Victoria', value: 'VIC' }],
    },
    {
      text: 'Quebec',
      options: [{ text: 'Quebec City', value: 'QC' }, { text: 'Montreal', value: 'MTL' }],
    },
  ]}
/>
```
