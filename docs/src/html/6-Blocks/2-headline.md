---
title: Hero Wave Title Eyebrow
template: layout-blocks.jade
---

## Headline

A BlockHeroWaveTitleEyebrow is a block that is composed of a page title and, optionally, an eyebrow.

---

<div id="headlineBlockExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.BlockHeroWaveTitleEyebrowExample />,
    document.getElementById('headlineBlockExample')
  );
</script>

```javascript
import React from 'react';
import BlockHeroWaveTitleEyebrow from 'telus-thorium-enriched/lib/blocks/BlockHeroWaveTitleEyebrow';

const BlockHeroWaveTitleEyebrowExample = () => {
  const props = {
    title: 'Headline title',
    eyebrow: 'Eyebrow'
  };

  return (
    <BlockHeroWaveTitleEyebrow {...props} />
  );
};

export default BlockHeroWaveTitleEyebrowExample;
```

## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `title` | page title | `string` |  <p style='color: red'>required</p> |
| `eyebrow` | optional string rendered above page title  | `string` |  '' |
