
The typography components depend on the following globally scoped font-face styles in `tds.min.css` to set the webfonts:

- Helvetica Neue LT Std 35 Thin
  * css: `font-weight: 300`
  * sass mixin: `@include helvetica-neue-thin-35`
- Helvetica Neue LT Std 45 Light
  * css: `font-weight: 400`
  * sass mixin: `@include helvetica-neue-light-45`
- Helvetica Neue LT Std 55 Roman
  * css: `font-weight: 500`
  * sass mixin: `@include helvetica-neue-roman-55`
- Helvetica Neue LT Std 65 Medium
  * css: `font-weight: 700`
  * sass mixin: `@include helvetica-neue-medium-65`

To use the above sass mixins in your app, import the following file on any sass file where you want to use to use the mixins:

```scss
@import '~@telusdigital/tds/dist/scss/typography';
```

### Spacing system

Typography components **do not** have built-in padding or margin. See the [Box](#box) component for the spacing interface add padding and margin to typography components.
