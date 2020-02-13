**Deprecated, please use [InteractiveIcon](#/Icons?id=section-interactive-icons) instead.**

### Making interactive icons

Use the `onClick` prop to create an accessible interactive icon.

Interactive icons will have a minimum click/tap area of about 32px, or 8-10mm, to ensure that they can be touched easily on
mobile devices. Take care not to place other elements too close to interactive icons, as the touch area could overlap.

```jsx
<StandaloneIcon
  symbol="spyglass"
  size={24}
  a11yText="Search this site."
  onClick={() => console.log('searching...')}
/>
```
