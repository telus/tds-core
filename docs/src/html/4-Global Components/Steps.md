---
title: Steps
template: doc.jade
---

## Overview

---
When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.

Example:
<div class="grid-row">
  <div id="stepsExample">
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.StepsExample />,
    document.getElementById('stepsExample')
  );
</script>

```javascript
import { Steps } from 'telus-thorium-enriched';

<Steps current={0}>
  <Steps.Step label="Login" />
  <Steps.Step label="Purchase" />
  <Steps.Step label="Checkout" />
</Steps>

```

## API

### Steps

| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  - |
| `current` | current step (default to 0) | `number` | 0|
| `currentStatus` | status of current step | `string` |  - |


### Step

| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `label` | Label of the step | `string` |  - |