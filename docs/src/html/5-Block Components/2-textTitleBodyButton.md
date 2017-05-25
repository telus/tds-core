---
title: TextTitleBodyButton
template: doc.jade
---

## Overview

A TextTitleBodyButton is a component composed of an header, paragraph, and a call to action link.

---

### Example

<div class="tds-grid-row">
  <div class='tds-small-12'>
    <div id="textTitleBodyButtonExample">
    </div>
  </div>
</div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlockComponents.TextTitleBodyButtonExample />,
    document.getElementById('textTitleBodyButtonExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import TextTitleBodyButton from 'telus-thorium-enriched/lib/blocks/components/TextTitleBodyButton';

const TextTitleBodyButtonEx = () => {
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
    <div className="tds-grid-row">
      <div className='tds-small-12'>
        <TextTitleBodyButton {...props}/>
      </div>
    </div>
  );
}

export default TextTitleBodyButtonEx;
```


## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `className` | additional css classes | `string` |  '' |
| `ctaLink` | object with target, href, and text  | `object` |  {target: '', href: '', text: ''} |
| `description` | content for paragraph element | `string` |  '' |
| `title` | header for content | `string` |  '' |
