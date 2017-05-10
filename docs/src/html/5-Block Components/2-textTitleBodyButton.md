---
title: Text Title Body Button
template: doc.jade
---

## Overview

A ComponentTextTitleBodyButton is a component composed of an header, paragraph, and a call to action link.

---

### Example

<div class="grid-row">
  <div class='small-12'>
    <div id="componentTextTitleBodyButtonExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlockComponents.ComponentTextTitleBodyButtonExample />,
    document.getElementById('componentTextTitleBodyButtonExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import ComponentTextTitleBodyButton from 'telus-thorium-enriched/lib/blocks/components/ComponentTextTitleBodyButton';

const ComponentTextTitleBodyButtonEx = () => {
  const props = {
    className: 'class',
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, modo scaevola pertinax ius no. Ut brute nobis intellegam duo, ullum fabulas fabellas quo at.',
    ctaLink: {
      target: '_blank',
      href: 'https://www.telus.com',
      text: 'Go Home'
    }
  };

  return (
    <div className="grid-row">
      <div className='small-12'>
        <ComponentTextTitleBodyButton {...props}/>
      </div>
    </div>
  );
}

export default ComponentTextTitleBodyButtonEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  '' |
| `ctaLink` | object with target, href, and text  | `object` |  {target: '', href: '', text: ''} |
| `description` | content for paragraph element | `string` |  '' |
| `title` | header for content | `string` |  '' |
