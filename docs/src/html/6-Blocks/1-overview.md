---
title: Overview Block
template: layout-blocks.jade
tagExample: TDSBlocks.OverviewBlockExample
---

<div id="example"></div>

<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.OverviewBlockExample />,
    document.getElementById('example')
  );
</script>

```javascript
import React, { Component, PropTypes } from 'react';
import { OverviewBlock } from 'telus-thorium-enriched/lib/blocks/blocks/OverviewBlock';

const OverviewExample = () => {
    return (
      <OverviewBlock header="test" />
    );
}

export default OverviewExample;
```

<div class="container container--limited-width">

    <h1>Overview Block</h1>

    <h2>Overview</h2>

    <p>(when to use)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <h2>Props Table</h2>

    <h2>Contentful Content Model Name</h2>

</div>
