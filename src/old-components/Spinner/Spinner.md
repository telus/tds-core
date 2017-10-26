## Minimal usage

```
<Spinner spinning />
```

## Custom message

Provide a `tip` to give more context about what is happening.

```
<Spinner spinning tip='Loading' />
```

## Embedded mode

The spinner can be overlaid on top of a section of content. This will prevent interactions with the content while it is active.

Wrap the `Spinner` around the content to use embedded mode.

```
<Spinner spinning>
  <section>
    <Heading level="h3">Current Bill</Heading>
    <Paragraph>View your latest bill here.</Paragraph>
  </section>
</Spinner>
```

## Full screen mode

To block the entire screen while waiting, use the full screen mode. This will disable scrolling and prevent any interactions
with the page while it is active.

```
initialState = {
  fullScreen: false
};

const goFullScreen = () => {
  setState({fullScreen: true});

  setTimeout(() => setState({fullScreen: false}), 2000);
};

<div>
  <Button onClick={goFullScreen}>
    Show full screen Spinner (2 seconds)
  </Button>

  <Spinner spinning={state.fullScreen} fullScreen={state.fullScreen} />
</div>
```
