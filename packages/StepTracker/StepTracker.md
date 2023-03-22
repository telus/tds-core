```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/step-tracker">
        StepTracker
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

As the user progresses through the steps, tell `StepTracker` which step is active with the `current` prop. `StepTracker`
will indicate both the active step and the completed steps.

`StepTracker` adjusts to accommodate smaller screens by hiding the labels, displaying only a summary. Resize your browser
window to see this behavior.

**Note** this component is not interactive, so the user cannot use it to navigate through the steps. The application will
need to provide its own navigation mechanism and state control. `StepTracker` also does not prevent the current step
from reaching integers beyond the number of steps provided; the application must prevent negative or exceeding
steps from being reached by the customer.

```jsx
initialState = {
  current: 0,
}
;<div>
  <StepTracker
    copy="en"
    current={state.current}
    steps={['Plans & Addons', 'Account Creation', 'Phone Information', 'Payment Setup', 'Submit']}
  />
  <br />
  <Button
    variant="secondary"
    onClick={() => {
      setState({ current: state.current - 1 })
    }}
  >
    Previous Step
  </Button>
  <Button
    variant="secondary"
    onClick={() => {
      setState({ current: state.current + 1 })
    }}
  >
    Next Step
  </Button>
</div>
```
