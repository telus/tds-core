---
title: Expand Collapse
template: doc.jade
---

## Overview

---

A content area which can be collapsed and expanded.
<div id="regularExpandCollapseExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Tds.RegularExpandCollapseExample />,
    document.getElementById('regularExpandCollapseExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { ExpandCollapse } from 'telus-thorium-enriched';

const RegularExpandCollapseEx = () => {
    return (
      <ExpandCollapse.Group disabledKeys={["panel-3"]}>
        <ExpandCollapse.Panel header="Panel #1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet at lacus vel fringilla.">
          Panel #1 Body
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel header="Panel #2">
          Panel #2 Body
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel header="Panel #3 is disabled" panelKey="panel-3">
          Panel #3 Body
        </ExpandCollapse.Panel>
      </ExpandCollapse.Group>
    );
}

export default RegularExpandCollapseEx;
```

We can control the Expand/Collapse component state.
<div id="controlledExpandCollapseExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Tds.ControlledExpandCollapseExample />,
    document.getElementById('controlledExpandCollapseExample')
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
        <button class="tds-button tds-button--secondary tds-button--link" onClick={(e)=>this.togglePanel(e, 'panel-1')}>Toggle panel #1</button>
        <button class="tds-button tds-button--secondary tds-button--link" onClick={(e)=>this.togglePanel(e, 'panel-2')}>Toggle panel #2</button>
        <ExpandCollapse.Group activeKeys={this.state.activeKeys}>
            <ExpandCollapse.Panel header="Panel #1" panelKey="panel-1">
            Panel #1 Body
            </ExpandCollapse.Panel>
            <ExpandCollapse.Panel header="Panel #2" panelKey="panel-2">
            Panel #2 Body
            </ExpandCollapse.Panel>
        </ExpandCollapse.Group>
      </div>  
    );
  }
```

## Accordion

---

Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.

<div id="accordionExpandCollapseExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Tds.AccordionExpandCollapseExample />,
    document.getElementById('accordionExpandCollapseExample')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { ExpandCollapse } from 'telus-thorium-enriched';

const AccordionExpandCollapseEx = () => {
    return (
      <ExpandCollapse.Group accordion>
        <ExpandCollapse.Panel header="Panel #1">
          Panel #1 Body
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel header="Panel #2">
          Panel #2 Body
        </ExpandCollapse.Panel>
      </ExpandCollapse.Group>
    );
}

export default AccordionExpandCollapseEx;
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
