---
title: Selector Counter
template: doc.jade
---

## Overview

---

<div data-thorium-component="SelectorCounter" data-props="{}" class="inline-component"></div>

```javascript
import React from 'react';
import { SelectorCounter } from 'telus-thorium-enriched';

const SelectorCounterEx = () => (<SelectorCounter />);

export default SelectorCounterEx;
```

| Property | Type | Default | Description |
|---|---|---|---|
| decrementorLabel | `string` | `"Decrease value"` | Accessible text |
| defaultValue | `number` | `0` | Initial value |
| disabled | `bool` | `false` | Prevents changes |
| incrementorLabel | `string` | `"Increase value"` | Accessible text |
| invalid | `bool` | `false` | Value fails validation |
| min | `number` | `0` | Minimum possible value |
| onChange | `func` | n/a | `onChange(newValue)` |
| successful | `bool` | `false` | Value passes validation |

### Disabled selector counter
<div data-thorium-component="SelectorCounter" data-props="{&#034;disabled&#034;:true}" class="inline-component"></div>

### Successful selector counter
<div data-thorium-component="SelectorCounter" data-props="{&#034;successful&#034;:true}" class="inline-component"></div>

### Invalid selector counter
<div data-thorium-component="SelectorCounter" data-props="{&#034;invalid&#034;:true}" class="inline-component"></div>

## Selector Counter Example

---

<div data-thorium-component="SelectorCounterExample" data-props="{}"></div>