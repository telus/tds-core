---
title: CheckList
template: doc.jade
---

## Overview

---

A CheckList is a container that has a header and leverages the checklist element.

A CheckList will take on the full width of its parent.
<div class="grid-row">
  <div class='small-12 medium-6 large-4'>
    <div id="checkListExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.CheckListExample />,
    document.getElementById('checkListExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { CheckList } from 'telus-thorium-enriched';

const CheckListEx = () => {
    return (
      <div className="grid-row">
        <div className='small-12 medium-6 large-4'>
          <CheckList header='List of Numbers' list={['one', 'two', 'three']}/>
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
| `header` | header for list | `string` |  '' |
| `list` | list of content | `array` |  [] |
