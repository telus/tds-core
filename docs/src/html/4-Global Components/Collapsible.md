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
      <Collapsible.Group disabledKeys={["panel-3"]}>
        <Collapsible.Panel header="Panel #1">
          Panel #1 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #2">
          Panel #2 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #3 is disabled" panelKey="panel-3">
          Panel #3 Body
        </Collapsible.Panel>
      </Collapsible.Group>
    );
}

export default RegularCollapsibleEx;
```

We can control the collapsible component state.
<div id="controlledCollapsibleExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.ControlledCollapsibleExample />,
    document.getElementById('controlledCollapsibleExample')
  );
</script>

```javascript
...
    this.state = {
      activeKeys: []
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(panelKey) {
      if (this.state.activeKeys.indexOf(panelKey) > -1) {
          this.setState({
              activeKeys: this.state.activeKeys.filter(k => k !== panelKey)
          });
      } else {
          this.setState({
              activeKeys: this.state.activeKeys.concat([panelKey])
          });
      }
  }

  render() {
      return (
      <div>
        <button class="tds-button tds-button--secondary" onClick={()=>this.togglePanel('panel-1')}>Toggle panel #1</button>
        <button class="tds-button tds-button--secondary" onClick={()=>this.togglePanel('panel-2')}>Toggle panel #2</button>
        <Collapsible.Group activeKeys={this.state.activeKeys}>
            <Collapsible.Panel header="Panel #1" panelKey="panel-1">
            Panel #1 Body
            </Collapsible.Panel>
            <Collapsible.Panel header="Panel #2" panelKey="panel-2">
            Panel #2 Body
            </Collapsible.Panel>
        </Collapsible.Group>
      </div>  
    );
  }
```

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
| activeKeys | keys of active panels |   array |  - |
| disabledKeys | keys of disabled panels |   array |  - |
| className | additional css classes |   string |  - |
| onChange | switch panel callback function | function | -  |

### Panel

---
| Property |   Description   | Type | Default |
|:----|:--------|:---|:---|
| panelKey |  corresponds to the activeKeys | string |  - |
| header |    title of the panel   |   string |  - |
