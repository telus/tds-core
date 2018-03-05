Cards will stretch to fill their container. Wrap the card in another element to apply size.

```jsx
<Card>
  <Box between={4}>
    <Box between={3}>
      <Heading level="h2">Need a hand?</Heading>
      <Paragraph>
        Ready to order? Have a question? We'll get back to you, with volume discounts available to
        larger accounts.
      </Paragraph>
    </Box>

    <div>
      {/* We wrap ButtonLink in a div to prevent flex styling from applying to it */}
      <ButtonLink href="#">Request sales callback</ButtonLink>
    </div>
  </Box>
</Card>
```

### Coloured variants

Card also supports a 'grey' or 'lavender' `variant`. These appear flat, while the default white Card appears floating.

```jsx
<Box inline between={3}>
  <Card variant="lavender">
    <Box between={3}>
      <Heading level="h4">Holiday deal</Heading>

      <Paragraph size="medium">
        Get a new smartphone for $0<br />on a 2-year plan.
      </Paragraph>
    </Box>
  </Card>

  <Card variant="grey">
    <Box between={3}>
      <Heading level="h4">Holiday deal</Heading>

      <Paragraph size="medium">
        Get a new smartphone for $0<br />on a 2-year plan.
      </Paragraph>
    </Box>
  </Card>

  <Card>
    <Box between={3}>
      <Heading level="h4">Find the right gift</Heading>

      <Paragraph>
        Find something they'll love from our<br />selection of great devices.
      </Paragraph>

      <div>
        <ChevronLink variant="primary" href="#">
          Explore latest devices
        </ChevronLink>
      </div>
    </Box>
  </Card>
</Box>
```
