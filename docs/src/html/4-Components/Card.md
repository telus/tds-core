---
title: Card
template: doc.jade
---

## Overview

---

A card is a container that serves as an entry point to more detailed information.
<div id="cardExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.CardExample />,
    document.getElementById('cardExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { Card } from 'telus-thorium-enriched';

const CardEx = () => {
    return (
      <Card>
        </h2>Hello World</h2>
        <p>This is the content...</p>
      </Card>
    );
}

export default CardEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| className | additional css classes |   string |  - |
