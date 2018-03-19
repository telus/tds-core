As the user progresses through the steps, tell `StepTracker` which step is active with the `current` prop. `StepTracker`
will indicate both the active step and the completed steps.

This component is not interactive, so the user can not use it to navigate through the steps. The application will
need to provide its own navigation mechanism.

`StepTracker` adjusts to accommodate smaller screens by hiding the labels, displaying only a summary. Resize your browser
window to see this behavior.

```
initialState = {
  current: 1
};

<div>
  <StepTracker current={state.current}>
    <StepTracker.Step label="Plans & addons" />
    <StepTracker.Step label="Account creation" />
    <StepTracker.Step label="Phone information" />
    <StepTracker.Step label="Payment setup" />
    <StepTracker.Step label="Submit" />
  </StepTracker>

  <Button variant="secondary" onClick={() => setState({ current: state.current-1 })}>
    Previous Step
  </Button>
  <Button variant="secondary" onClick={() => setState({ current: state.current+1 })}>
    Next Step
  </Button>
</div>
```
