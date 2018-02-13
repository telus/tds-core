As the user progresses through the steps, tell `Steps` which step is active with the `current` prop. `Steps`
will indicate both the active step and the completed steps.

This component is not interactive, so the user can not use it to navigate through the steps. The application will
need to provide its own navigation mechanism.

`Steps` adjusts to accommodate smaller screens by hiding the labels, displaying only a summary. Resize your browser
window to see this behavior.

```
initialState = {
  current: 1
};

<div>
  <Steps current={state.current}>
    <Steps.Step label="Plans & addons" />
    <Steps.Step label="Account creation" />
    <Steps.Step label="Phone information" />
    <Steps.Step label="Payment setup" />
    <Steps.Step label="Submit" />
  </Steps>

  <Button variant="secondary" onClick={() => setState({ current: state.current-1 })}>
    Previous Step
  </Button>
  <Button variant="secondary" onClick={() => setState({ current: state.current+1 })}>
    Next Step
  </Button>
</div>
```
