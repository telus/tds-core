### Usage criteria

```jsx
<Card>
  <Heading level="h4">For Non TELUS mobility customers</Heading>

  <Paragraph>$30 per month</Paragraph>

  <Paragraph>
    Includes unlimited nationwide calling and 5 voice features.{' '}
    <FootnoteLink
      number={[1, 2, 3]}
      onClick={(number, ref) => {
        console.log(number, ref)
      }}
    />
  </Paragraph>
</Card>
```
