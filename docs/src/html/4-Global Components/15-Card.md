---
title: Card
template: doc.jade
---

## Overview

---

A card is a container that serves as an entry point to more detailed information.

A card will take on the full width of its parent.
<div class="grid-row">
  <div class="small-12 medium-6 large-4">
    <div id="cardExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <Tds.CardExample />,
    document.getElementById('cardExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { Card } from 'telus-thorium-enriched';

const CardEx = () => {
    return (
      <div className="grid-row">
        <div className="small-12 medium-6 large-4">
          <Card>
            </h2>Hello World</h2>
            <p>This is the content...</p>
          </Card>
        </div>
      </div>
    );
}

export default CardEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  - |
