```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/ordered-list">
        OrderedList
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

_Note: An `OrderedList` should not be used adjacent to an `UnorderedList`._

```jsx
<OrderedList>
  <OrderedList.Item>
    Up to $400 credit available for new activations on select 2-year plans. Offer applies to new
    TELUS Business customer activations. Not available for Consumer accounts. Ask a TELUS
    representative for other eligibility requirements
  </OrderedList.Item>
  <OrderedList.Item>
    350 nationwide minutes share with other TELUS shareable mobility plans on the same account
  </OrderedList.Item>
  <OrderedList.Item>Unlimited nationwide minutes do not share</OrderedList.Item>
</OrderedList>
```
