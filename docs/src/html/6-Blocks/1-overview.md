---
title: Overview Block
template: doc.jade
---

## Overview

An Overview Block is a block that is composed of a [TextTitleBodyButton](../5-Block%20Components/2-textTitleBodyButton.html) and [CheckList](../5-Block%20Components/1-checklist.html).

---

### Example

<div class="grid-row">
  <div class='small-12'>
    <div id="overviewBlockExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.OverviewBlockExample />,
    document.getElementById('overviewBlockExample')
  );
</script>

```javascript
import React from 'react';
import OverviewBlock from 'telus-thorium-enriched/blocks/blocks/OverviewBlock';

const OverviewBlockExample = () => {
  const props = {
    className: 'class',
    overviewTitle: 'Overview',
    overviewDescription: 'Lorem ipsum dolor sit amet, modo scaevola pertinax ius no. Ut brute nobis intellegam duo, ullum fabulas fabellas quo at.',
    ctaLink: {
      target: '_blank',
      href: 'https://www.telus.com',
      text: 'Go Home'
    }
    sideContent: {
      listTitle: 'List of Numbers',
      listItems: ['one', 'two', 'three']
    }
  };

  return (
    <OverviewBlock {..props} />
  );
}

export default OverviewBlockExample;
```

## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  '' |
| `ctaLink` | object with target, href, and text  | `object` |  {target: '', href: '', text: ''} |
| `overviewDescription` | content for paragraph element | `string` |  '' |
| `overviewTitle` | header for content | `string` |  '' |
| `sideContent` | object with title and list of items | `object` |  {listTitle: '', listItems: []} |
