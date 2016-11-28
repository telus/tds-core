---
title: Icon
template: doc.jade
---

## Overview

---

```js
import React from 'react';
import { Icon } from 'telus-thorium-enriched';

const MyComponent = (props => <Icon name='spyglass' />);
```

---

| Property   | Type     | Default     | Description                             |
|------------|----------|-------------|-----------------------------------------|
| glyph      | `string` | required    | Name of an icon glyph                   |
| variant    | `string` | `undefined` | Colour variant, e.g. primary, secondary |
| fixedWidth | `bool`   | `false`     | Display icon with a preset width        |

---

_See the [Utility Icons](/3-Foundations/7-icons.html) page for more details about glyph names, variants, and other icon traits._

---

## Usage

---

### Plain icon:

<span id="icon-spyglass"></span>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.Icon glyph="spyglass" />,
    document.getElementById('icon-spyglass')
  );
</script>

```js
<Icon glyph='spyglass' />
```

### Icons with color variants:

<span id="icon-spyglass-noVariant"></span>
<span id="icon-spyglass-secondary"></span>
<span id="icon-spyglass-disabled"></span>
<span id="icon-spyglass-error"></span>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.Icon glyph="spyglass" />,
    document.getElementById('icon-spyglass-noVariant')
  );
  ReactDOM.render(
    <Thorium.Icon glyph="spyglass" variant="secondary" />,
    document.getElementById('icon-spyglass-secondary')
  );
  ReactDOM.render(
    <Thorium.Icon glyph="spyglass" variant="disabled" />,
    document.getElementById('icon-spyglass-disabled')
  );
  ReactDOM.render(
    <Thorium.Icon glyph="spyglass" variant="error" />,
    document.getElementById('icon-spyglass-error')
  );
</script>

```js
<Icon glyph='spyglass' />
<Icon glyph='spyglass' variant='secondary' />
<Icon glyph='spyglass' variant='disabled' />
<Icon glyph='spyglass' variant='error' />
```

### Fixed Width Icons

<span id="icon-spyglass-fixedWidth"></span>Hello
<br>
<span id="icon-chevron-secondary-fixedWidth"></span>Goodnight
<script type="text/babel">
  ReactDOM.render(
    <Thorium.Icon glyph="spyglass" fixedWidth="true" />,
    document.getElementById('icon-spyglass-fixedWidth')
  );
  ReactDOM.render(
    <Thorium.Icon glyph="chevron" variant="secondary" fixedWidth="true" />,
    document.getElementById('icon-chevron-secondary-fixedWidth')
  );
</script>

```js
<Icon glyph='spyglass' fixedWidth />
<Icon glyph='chevron' variant='secondary' fixedWidth />
```

## Accessibility

---

Any extra props on an `Icon` component will be passed to the underlying DOM node.  You can use the same techniques as normal HTML to make Icons accessible:

```js
<Icon glyph='plus' title='Expand section' role='button' aria-pressed='false' />
```

Icons also accept children, if you'd like to add screen-readable content:

```js
<Icon glyph='plus'>
  <span className='accessible-hide'>button to add more</span>
</Icon>
```
