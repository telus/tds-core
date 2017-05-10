---
title: Spinner
template: doc.jade
---

## Overview

---

### Inside a container

<div class="grid-row">
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

<div class="grid-row">
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