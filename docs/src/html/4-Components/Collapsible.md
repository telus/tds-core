---
title: Collapsible
template: doc.jade
---

## Overview

---

A content area which can be collapsed and expanded.
<div id="regularCollapsibleExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.RegularCollapsibleExample />,
    document.getElementById('regularCollapsibleExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { Collapsible } from 'telus-thorium-enriched';

const RegularCollapsibleEx = () => {
    return (
      <Collapsible.Group>
        <Collapsible.Panel header="Panel #1">
          Panel #1 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #2">
          Panel #2 Body
        </Collapsible.Panel>
      </Collapsible.Group>
    );
}

export default RegularCollapsibleEx;
```

We can controll the collapsible component state.
<div id="controlledCollapsibleExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.ControlledCollapsibleExample />,
    document.getElementById('controlledCollapsibleExample')
  );
</script>


## Accordion

---

Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.

<div id="accordionCollapsibleExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.AccordionCollapsibleExample />,
    document.getElementById('accordionCollapsibleExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { Collapsible } from 'telus-thorium-enriched';

const AccordionCollapsibleEx = () => {
    return (
      <Collapsible.Group accordion>
        <Collapsible.Panel header="Panel #1">
          Panel #1 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #2">
          Panel #2 Body
        </Collapsible.Panel>
      </Collapsible.Group>
    );
}

export default AccordionCollapsibleEx;
```
## API
### Group

---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| accordion | is this panel group accordion? | boolean |  false |
| activeKeys | key of the active panel |   array |  - |
| className | additional css classes |   string |  - |
| onChange | switch panel callback function | function | -  |

### Panel

---
| Property |   Description   | Type | Default |
|:----|:--------|:---|:---|
| panelKey |  corresponds to the activeKeys | string |  - |
| header |    title of the panel   |   string |  - |
