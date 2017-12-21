### Minimal usage

InputFeedback displays a feedback box. Its primary use is to facilitate feedback states for other Form components such as [Input](#input) or [Checkbox](#checkbox). Rather than basic text, you may utilise [Typography](#typography) components as well as other components to customise your feedback message.

```jsx
<InputFeedback>
  <Paragraph>Provide a brief description of your issue</Paragraph>
</InputFeedback>
```

```jsx
<InputFeedback>
  <Text block size="small">
    <Box between={2}>
      <Paragraph size="small" bold>Be sure to include your:</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Name</UnorderedList.Item>
        <UnorderedList.Item>Address</UnorderedList.Item>
        <UnorderedList.Item>Country</UnorderedList.Item>
      </UnorderedList>
    </Box>
  </Text>
</InputFeedback>
```
