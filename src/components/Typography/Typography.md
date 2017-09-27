Typography components replace standard HTML dom (`<Paragraph>` instead of `<p>`) in order to provide maintainable
font styles.

## Spacing system

Typography components **do not** have built-in padding or margin. For the interim, designers are strongly
advised to follow TDS Sketch assets for spacing rules in order for developers to properly apply the correct spacing between
related components.

For example, a `<Paragraph>` component immediately following a `<Heading>` component would require `1rem` spacing between
them. For this case, we recommend:

```
<div>
  <Heading level="h2">Great Deals</Heading>

  <div style={{paddingTop: '1rem'}}>
    <Paragraph>
      See how this great deal can benefit you and your shared lines.
    </Paragraph>
  </div>
</div>
```
