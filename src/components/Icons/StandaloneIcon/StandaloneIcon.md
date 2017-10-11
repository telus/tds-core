### Making interactive icons

Standalone icons can also be interactive elements. This example shows the preferred way of creating an interactive icon:

```
<button style={{appearance: 'none', background: 'none', border: 0, cursor: 'pointer'}} type="submit">
    <StandaloneIcon symbol="spyglass" size={48} a11yText="Search this site." />
</button>
```

This will be added as a built in feature in the future, until then follow the above example.
