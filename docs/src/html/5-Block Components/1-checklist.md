---
title: CheckList
template: doc.jade
---

## Overview

---

A CheckList is a container that has a header and leverages the checklist element.

A CheckList will take on the full width of its parent.

<div class="tds-grid-row">
  <div class='tds-small-12 tds-medium-6 tds-large-4'>
    <div id="checkListExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlockComponents.CheckListExample />,
    document.getElementById('checkListExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import CheckList from 'telus-thorium-enriched/lib/blocks/components/CheckList';

const CheckListEx = () => {
    return (
      <div className="tds-grid-row">
        <div className='tds-small-12 tds-medium-6 tds-large-4'>
          <CheckList listTitle='List of Numbers' listItems={['one', 'two', 'three']}/>
        </div>
      </div>
    );
}

export default CheckListEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  '' |
| `listTitle` | header for list | `string` |  '' |
| `listItems` | list of content | `array` |  [] |
