```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/list">
        List
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- Try to keep lists consistent: either all fragments or all sentences
- Start each bullet with a capital letter
- All bullet points should be simple, limited to one statement per bullet and use sentence case
- Points should not include ending punctuation
- We recommend applying the following spacing after an Unordered List or Ordered List
  - For `small` lists: use a 16px (Box spacing `3`) bottom margin
  - For `medium` lists: use a 16px (Box spacing `3`) bottom margin
  - For `large` lists: use a 32px (Box spacing `4`) bottom margin
- `UnorderedList` with mixed icons should only be used for password criteria. Typically, in an [InputFeedback](#/Forms?id=inputfeedback) component

### Sizing lists

Lists can be sized using the `size` prop.

```html
<OrderedList size="large">
  <OrderedList.Item>Select the edition with the features that meet your needs</OrderedList.Item>
  <OrderedList.Item>Purchase a plan for the primary user</OrderedList.Item>
  <OrderedList.Item>Next, add users as needed</OrderedList.Item>
  <OrderedList.Item>
    Purchase additional services such as IP phones, wireless backup and installation services
  </OrderedList.Item>
</OrderedList>
```
