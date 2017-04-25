---
title: Utility Mixins
template: doc.jade
---

If you are consuming the TDS SCSS files you can use the mixins below to build your styles.

Remember to build mobile first and the utilities here are to override the default mobiles styles.

The breakpoint parameters that can be used on these mixins are: `xs`, `small`, `medium`, `large`, `xl`.

```css
@import '~telus-thorium-core/scss/settings/variables';
@import '~telus-thorium-core/scss/utility/mixins';

@include from-breakpoint(medium) {
  /* add styles to be used on the medium view and above */
}

@include at-breakpoint(large) {
  /* add styles for large view only*/
}
```
