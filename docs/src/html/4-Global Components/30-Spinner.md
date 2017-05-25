---
title: Spinner
template: doc.jade
---

## Overview

---

### Inside a container

<div class="tds-grid-row">
  <div id="spinnerExample">
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SpinnerExample />,
    document.getElementById('spinnerExample')
  );
</script>

```js
import { Spinner } from 'telus-thorium-enriched';
<div>
  <Spinner spinning={true} tip="Loading..." />
</div>
```


---

### Embedded mode

<div class="tds-grid-row">
  <div id="spinnerEmbedExample">
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SpinnerEmbedExample />,
    document.getElementById('spinnerEmbedExample')
  );
</script>

```js
import { Spinner } from 'telus-thorium-enriched';
<Spinner
  spinning={true}
  tip="Loading..."
  wrapperClassNames="test"
  >
  <p>content.....</p>
</Spinner>
```

---

### Full Screen mode


<div class="tds-grid-row">
  <div id="spinnerFullScreenExample">
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SpinnerFullScreenExample />,
    document.getElementById('spinnerFullScreenExample')
  );
</script>

```js
import { Spinner } from 'telus-thorium-enriched';
<Spinner
  spinning={true}
  tip="Loading..."
  fullScreen={true}
  />
```


## API


---
| Property |   Description   | Type | Default |
|:---------|:----------------|:-----|:--------|
| `spinning` | toggle of spinner | `boolean` |  - |
| `tip` | tip text (optional) | `boolean` |  - |
| `fullScreen` | full screen spinner mode | `boolean` |  false |
| `wrapperClassNames` | css classes for wrapped nodes | `string` |  '' |
| `children` | if children is available, spinner is in embedded mode | `react node` |  - |
