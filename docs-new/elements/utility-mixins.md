If you are consuming the TDS SCSS files you can use the mixins below to build your styles.

Remember to build mobile first and the utilities here are to override the default mobiles styles.

The breakpoint parameters that can be used on these mixins are: `xs`, `small`, `medium`, `large`, `xl`.

```scss
@import '~@telusdigital/tds/dist/scss/variables';
@import '~@telusdigital/tds/dist/scss/mixins';

@include from-breakpoint(medium) {
  /* add styles to be used on the medium view and above [768px +] */
}

@include at-breakpoint(large) {
  /* add styles for large view only [992-1199px] */
}
```
