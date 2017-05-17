---
title: Headline Block
template: layout-blocks.jade
---

## Headline

A Headline Block is a block that is composed of a page title and, optionally, an eyebrow.

---

<div id="headlineBlockExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.HeadlineBlockExample />,
    document.getElementById('headlineBlockExample')
  );
</script>

```javascript
import React from 'react';
import { HeadlineBlock } from 'telus-thorium-enriched/lib/blocks';

const HeadlineBlockExample = () => {
  const props = {
    title: 'Headline title',
    eyebrow: 'Eyebrow'
  };

  return (
    <HeadlineBlock {...props} />
  );
};

export default HeadlineBlockExample;
```

## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `title` | page title | `string` |  <p style='color: red'>required</p> |
| `eyebrow` | optional string rendered above page title  | `string` |  '' |
