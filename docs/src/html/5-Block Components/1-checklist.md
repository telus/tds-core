---
title: Checklist
template: doc.jade
---

## Overview

---

A ComponentChecklist is a container that has a header and leverages the checklist element.

A ComponentChecklist will take on the full width of its parent.

<div class="grid-row">
  <div class='small-12 medium-6 large-4'>
    <div id="checkListExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlockComponents.ComponentChecklistExample />,
    document.getElementById('checkListExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import ComponentChecklist from 'telus-thorium-enriched/lib/blocks/components/ComponentChecklist';

const ComponentChecklistEx = () => {
    return (
      <div className="grid-row">
        <div className='small-12 medium-6 large-4'>
          <ComponentChecklist listTitle='List of Numbers' listItems={['one', 'two', 'three']}/>
        </div>
      </div>
    );
}

export default ComponentChecklistEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  '' |
| `listTitle` | header for list | `string` |  '' |
| `listItems` | list of content | `array` |  [] |
