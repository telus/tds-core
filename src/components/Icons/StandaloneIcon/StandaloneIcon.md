### Making interactive icons

Use the `onClick` prop to create an accessible interactive icon.

```
<StandaloneIcon 
  symbol="spyglass" 
  size={48}
  a11yText="Search this site." 
  onClick={() => console.log("searching...")}
/>
```
