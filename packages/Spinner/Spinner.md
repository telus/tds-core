### Minimal usage

```
<Spinner spinning />
```

### Custom message

Provide a `tip` to give more context about what is happening.

```
<Spinner spinning tip='Loading' />
```

### Overlaying content

The spinner can be overlaid on a section of content, which will prevent interactions with the content while active.
Use this feature judiciously, as blocking interaction is often not a desirable user experience.

Avoid overlaying the entire window with the `Spinner`.

Wrap the `Spinner` around the content to overlay it.

```
<Spinner spinning>
  <section>
    <Heading level="h3">Current Bill</Heading>
    <Paragraph>View your latest bill here.</Paragraph>
  </section>
</Spinner>
```
