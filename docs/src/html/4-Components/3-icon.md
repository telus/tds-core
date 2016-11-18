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

<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"spyglass" }'
  class='inline-component'>
</span>

```js
<Icon glyph='spyglass' />
```

### Icons with color variants:

<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"spyglass" }'
  class='inline-component'>
</span>
<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"spyglass", "variant": "secondary" }'
  class='inline-component'>
</span>
<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"spyglass", "variant": "disabled" }'
  class='inline-component'>
</span>
<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"spyglass", "variant": "error" }'
  class='inline-component'>
</span>

```js
<Icon glyph='spyglass' />
<Icon glyph='spyglass' variant='secondary' />
<Icon glyph='spyglass' variant='disabled' />
<Icon glyph='spyglass' variant='error' />
```

### Fixed Width Icons

<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"spyglass", "fixedWidth": true }'
  class='inline-component'>
</span>
Hello
<div></div>
<span
  data-thorium-component='Icon'
  data-props='{ "glyph":"chevron", "variant": "secondary", "fixedWidth": true }'
  class='inline-component'>
</span>
Goodnight

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
