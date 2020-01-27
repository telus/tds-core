The `Accordion` has the same design and behaviours as the `ExpandCollapse`, except that only one panel can be opened at
a time.

Note that the `Accordion`'s `open` prop accepts only a single string, while the `ExpandCollapse`'s `open` prop accepts an
array of strings.

### Minimal usage

This example looks visually similar to the `ExpandCollapse` one above, however, only one panel can be open at a time.

```jsx
<Accordion tag="h2">
  <Accordion.Panel id="features" header="Features">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Connected GPS</Heading>
        <Paragraph size="medium">Connect to your phone's GPS to see real-time run stats.</Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Notifications</Heading>
        <Paragraph size="medium">See call, text and calendar alerts on your wrist.</Paragraph>
      </Box>
    </Box>
  </Accordion.Panel>

  <Accordion.Panel id="specs" header="Specifications">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Display</Heading>
        <Paragraph size="medium">OLED</Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Battery Life</Heading>
        <Paragraph size="medium">Up to 5 days</Paragraph>
      </Box>
    </Box>
  </Accordion.Panel>
</Accordion>
```
