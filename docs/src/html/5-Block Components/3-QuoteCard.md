---
title: Quote Card
template: doc.jade
---

## Overview

---

A ComponentQuoteCard will take on the full width of its parent.

<div class="grid-row">
  <div class='small-12 medium-6 large-6'>
    <div id="quoteCardExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlockComponents.ComponentQuoteCardExample />,
    document.getElementById('quoteCardExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import ComponentQuoteCard from 'telus-thorium-enriched/lib/blocks/components/ComponentQuoteCard';

const ComponentQuoteCardEx = () => {
    return (
      <div className="grid-row">
        <div className='small-12 medium-6 large-6'>
          <ComponentQuoteCard
            quote="Dolor sit amet quote"
            author="The Author"
            clientName="Client Name"
            clientLogo= {{ url: "https://static.telus.com/common/images/nav/bundle-services.png", title: "Client Logo Title" }}
          />
        </div>
      </div>
    );
}

export default ComponentQuoteCardEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `quote` |  | `string` |  '' |
| `author` |  | `string` |  '' |
| `clientName` |  | `string` |  '' |
| `clientLogo.url`| | `string` | '' |
| `clientLogo.title`| | `string` | '' |
