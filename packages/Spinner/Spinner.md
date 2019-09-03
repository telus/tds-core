### Usage criteria

- Avoid using a spinner whenever possible. Make content available to the user as soon as possible
- User feedback should be present when a user action takes longer than 0.1 seconds
- A Spinner is most appropriate for providing feedback for actions that last between 2 and 10 seconds
- Actions that take longer than 10 seconds ideally provide feedback with relative progress, such as a progress bar
- Recommend not to use for full page loading
- Label should be short and concise. Spinner label should accurately explain the state of the requested action along with relevant items being loaded, "Loading page content", "Logging in", "Processing payment"
- Use the small spinner when applied on a button or other small interactive elements such as toggles or links
  - When overlaying buttons, the spinner’s colour should match the button's colour (green spinner for green buttons, and purple spinner for purple buttons)
- Use the large spinner when affecting an entire web page or content block, whose content has not finished loading, such as paginated content
- Both the small and large spinner have an overlay background to visually indicate content behind it is inaccessible.
  Use the standalone spinner (small/large) as an interstitial placeholder for loading content

### Minimal usage

- To make the `Spinner` visible, set the `spinning` prop to `true`
- Provide a `label` to give more context about what is happening
  - The `label` prop is a `string` or `node` that acts as both a line of text under the `Spinner` as well as text that is communicated to assistive technology
  - Use `A11yContent` to provide information to assistive technology that should not appear in the `Spinner`'s visible label. This content must be wrapped with a `React.Fragment` or `span` if `A11yContent` is being used. In the next major update, the `label` prop will be required in code

#### Standard `label`

```jsx
<Spinner spinning label="Loading addresses" />
```

#### `label` with `A11yContent`

When using `<A11yContent />` inside the `label` prop, wrap your content with a `<span/>` or React Fragment.

```jsx
<Spinner
  spinning
  label={
    <>
      Loading <A11yContent>the address list. Please wait.</A11yContent>
    </>
  }
/>
```

### Overlaying the spinner and the `inline` prop

- The spinner can be overlaid on a section of content, which will prevent interactions with the content while active
  - Please note, blocking interaction is often not a desirable user experience
- Avoid overlaying the entire window with the `Spinner` when possible
- Wrap the `Spinner` around the content to overlay it
  - If the `Spinner` should only cover its children, set the `inline` prop to `true`. If the `Spinner` should cover the full width of its parent regardless of the size of its children, `inline` should be set to `false`

#### Overlaying buttons

- When overlaying a TDS `Button`, the `Spinner` must have a `size` of `small`
- The `Spinner`'s `variant` must match that of the the `Button`
- The `Spinner` should have `inline` set to `true` to fully cover each individual button

```jsx
<Box between={2}>
  <Box>
    <Spinner spinning size="small" label="Request is processing." inline>
      <Button>Login</Button>
    </Spinner>
  </Box>
  <Box>
    <Spinner spinning size="small" variant="secondary" label="Request is processing." inline>
      <Button variant="secondary">Login</Button>
    </Spinner>
  </Box>
</Box>
```

#### Overlaying all other content

- When overlaying general page content, the `Spinner` must have its `size` set to `large` and `variant` set to `primary`
- A `label` should also be provided, as it is required for using the large `Spinner`

```jsx
initialState = {
  contentLoading: false,
}

const loadContent = () => {
  setState({ contentLoading: true })

  setTimeout(() => setState({ contentLoading: false }), 2000)
}

;<Box between={2}>
  <Spinner
    label={
      <span>
        Loading <A11yContent>the page content.</A11yContent>
      </span>
    }
    spinning={state.contentLoading}
    inline
  >
    <Card>
      <Box between={4}>
        <Box between={3}>
          <Heading level="h2">Availability Check</Heading>
          <Paragraph>Ready to order? Click here to check if the product is available.</Paragraph>
        </Box>
        ​<div>
          <Button onClick={loadContent}>Check Availability</Button>
        </div>
      </Box>
    </Card>
  </Spinner>
</Box>
```

### Accessibility and focus

- By default, focus will remain on the triggering element unless overridden

  - If focus is overridden, you **must** return focus back to the triggering element when the spinner is no longer active.

  See the **Overlaying a full layout** example below for how to properly manage `Spinner` focus

#### Overlaying a button

- When overlaying a single button, a container with `aria-live` set to `assertive` should be used _near the overlaid Button_
- When the process is complete, `A11yContent` can be used to trigger a message indicating that the task has been completed
- The added content must be close to the spinner's location when it appears
  - For example, do not have a spinner from the main body modify content in the page's footer
- When the content is done loading, focus on the content to allow magnifiers to move to it

```jsx
initialState = {
  contentLoading: false,
  loadedMessage: '',
  loadedContent: '',
}

const loadContent = () => {
  setState({ contentLoading: true })

  setTimeout(
    () =>
      setState({
        contentLoading: false,
        loadedMessage: 'Product stock found',
        loadedContent: '5 products available',
      }),
    2000
  )
}

;<Box between={2}>
  <Card>
    <Box between={4}>
      <Box between={3}>
        <Heading level="h2">Availability Check</Heading>
        <Paragraph>Ready to order? Click here to check if the product is available.</Paragraph>
      </Box>
      <div>
        <Spinner label="Loading address" size="small" spinning={state.contentLoading} inline>
          <Button onClick={loadContent}>Check Availability</Button>
        </Spinner>
      </div>
      <div aria-live="assertive">
        <A11yContent>{state.loadedMessage}</A11yContent>
        {state.loadedContent}
      </div>
    </Box>
  </Card>
</Box>
```

#### Overlaying a full layout

Overlaying a full layout is similar to overlaying a single Button. The same methods to achieve accessibility apply, including the important rule of having content that is the result of the spinner appear close to the spinner when complete. Visually, the spinner `size` must be set to `large` and the `variant` set to `primary`.

To manage focus, we create a blank ref that is then passed to the `labelRef` property of `Spinner`. Spinner applies this ref to its label. We then use an effect that calls `focus()` on our `labelRef`. We do this in an effect to ensure that the DOM has finished updating after our content starts loading. Once the content has finished loading, we must return the focus to the `Button` that initiated the `Spinner`.

```jsx
const Component = props => {
  const labelRef = React.useRef()
  const buttonRef = React.useRef()
  const [contentLoading, setContentLoading] = React.useState(false)
  const [loadedMessage, setLoadedMessage] = React.useState('')
  const [loadedContent, setLoadedContent] = React.useState('')

  React.useEffect(() => {
    if (contentLoading) {
      labelRef.current.focus()
    }
  }, [contentLoading])

  const loadContent = () => {
    setContentLoading(true)

    setTimeout(() => {
      setContentLoading(false)
      setLoadedMessage('Products found')
      setLoadedContent(
        <UnorderedList>
          <UnorderedList.Item>iPhone XS</UnorderedList.Item>
          <UnorderedList.Item>Galaxy S10</UnorderedList.Item>
          <UnorderedList.Item>Pixel 3</UnorderedList.Item>
        </UnorderedList>
      )
      buttonRef.current.focus()
    }, 2000)
  }

  return (
    <Box between={2}>
      <Heading level="h2">Available products:</Heading>
      <Card>
        <Spinner label="Submitting Information" spinning={contentLoading} labelRef={labelRef}>
          <Box between={3} vertical={2}>
            <div>
              <Button onClick={loadContent} ref={buttonRef}>
                Check Availability
              </Button>
            </div>
            <div aria-live="assertive">
              <A11yContent>{loadedMessage}</A11yContent>
              {loadedContent}
            </div>
          </Box>
        </Spinner>
      </Card>
    </Box>
  )
}
;<Component />
```

### Displaying a full screen spinner

To block the entire screen while waiting, do not wrap any children and use the `fullScreen` prop. This will disable scrolling and prevent any interactions with the page while it is active. It is recommended to avoid this pattern where possible, as this takes control completely away from the user.

```jsx
initialState = {
  contentLoading: false,
  loadedMessage: '',
  loadedContent: <Paragraph>Page 1</Paragraph>,
}

const loadContent = () => {
  setState({ contentLoading: true })

  setTimeout(
    () =>
      setState({
        contentLoading: false,
        loadedMessage: 'Page 2 Loaded',
        loadedContent: <Paragraph>Page 2</Paragraph>,
      }),
    2000
  )
}

;<Box between={2}>
  <Card>
    <Spinner
      fullScreen={state.contentLoading}
      label="Loading page"
      spinning={state.contentLoading}
    />
    <Box between={3} vertical={2}>
      <div>
        <Button onClick={loadContent}>Load Page 2</Button>
      </div>
      <div aria-live="assertive">
        <A11yContent>{state.loadedMessage}</A11yContent>
        {state.loadedContent}
      </div>
    </Box>
  </Card>
</Box>
```
