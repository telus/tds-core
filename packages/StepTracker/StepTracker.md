As the user progresses through the steps, tell `StepTracker` which step is active with the `current` prop. `StepTracker`
will indicate both the active step and the completed steps.

This component is not interactive, so the user can not use it to navigate through the steps. The application will
need to provide its own navigation mechanism.

`StepTracker` adjusts to accommodate smaller screens by hiding the labels, displaying only a summary. Resize your browser
window to see this behavior.

```jsx
initialState = {
  current: 0,
}
;<div>
  <StepTracker
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
