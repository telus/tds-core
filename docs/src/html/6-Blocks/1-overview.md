---
title: Overview
template: layout-blocks.jade
---

## Overview

An Overview Block is a block that is composed of a [ComponentTextTitleBodyButton](../5-Block%20Components/2-textTitleBodyButton.html) and [ComponentCheckList](../5-Block%20Components/1-checklist.html).

---

<div id="overviewBlockExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.BlockOverviewExample />,
    document.getElementById('overviewBlockExample')
  );
</script>

```javascript
import React from 'react';
import BlockOverview from 'telus-thorium-enriched/lib/blocks/BlockOverview';

const BlockOverviewExample = () => {
  const props = {
    className: 'class',
    overviewTitle: 'Lorem Ipsum',
    overviewDescription: 'Lorem ipsum dolor sit amet, modo scaevola pertinax ius no. Ut brute nobis intellegam duo, ullum fabulas fabellas quo at.',
    ctaLink: {
      target: '_blank',
      href: 'https://www.telus.com',
      text: 'Go Home'
    },
    sideContent: {
      listTitle: 'List of Numbers',
      listItems: ['one', 'two', 'three']
    }
  };

  return (
    <BlockOverview {...props} />
  );
}

export default BlockOverviewExample;
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
