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

### Controlling the Expand/Collapse component state

Emit events to change the state of individual Panels.

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
        <button class="button button--secondary button--link" onClick={(e)=>this.togglePanel(e, 'panel-1')}>Toggle panel #1</button>
        <button class="button button--secondary button--link" onClick={(e)=>this.togglePanel(e, 'panel-2')}>Toggle panel #2</button>
        <ExpandCollapse.Group activeKeys={this.state.activeKeys}>
            <ExpandCollapse.Pane l header="Panel #1" panelKey="panel-1">
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

### Numbered Panels
You can pass a function to the `header` prop instead of a string. This is especially convenient if you want conditionally render numbered panels. The (1-indexed) position of the Panel is passed to the function as the `ordinal` property. Note that null elements will not affect the position of subsequent elements.

Currently, `panelKey` and `ordinal` are passed to this function. See the example below for more details.

```javascript
import React, { Component, PropTypes } from 'react';
import { ExpandCollapse } from 'telus-thorium-enriched';

const numberHeader = title => ({ ordinal }) => `${ordinal}. ${title}`;

// Render the React element if the predicate is true.
const renderIf = predicate => elem => predicate ? elem : null;

const NumberedExpandCollapseEx = () => {
    const condition = 3 > 4;

    return (
        <div>
            <ExpandCollapse.Group>
                <ExpandCollapse.Panel header={numberHeader('Visible content')}>
                    Panel #1 Body
                </ExpandCollapse.Panel>

                {renderIf(condition)(<ExpandCollapse.Panel header={numberHeader('Hidden content')}>
                    Hidden Panel Body
                </ExpandCollapse.Panel>)}

                <ExpandCollapse.Panel header={numberHeader('More visible content')}>
                    Panel #2 Body
                </ExpandCollapse.Panel>
            </ExpandCollapse.Group>
        </div>
    );
}
```

The code above will produce the following:

<div id="numberedExpandCollapseExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <Tds.NumberedExpandCollapseExample />,
    document.getElementById('numberedExpandCollapseExample')
  );
</script>

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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia fermentum nisl, id lobortis nunc porta sed. Vestibulum quis tortor non nisl vulputate varius. Vivamus euismod congue mi, quis ultricies dolor viverra at.</p>
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel header="Panel #2">
          <p>Ut fermentum, turpis vel tincidunt volutpat, diam est vehicula leo, sed convallis dolor ante aliquet nisi. Nunc nisi erat, pulvinar quis lectus eget, tristique suscipit lectus. Maecenas non erat semper, tristique odio euismod, pulvinar metus.</p>
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
