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

Card also supports an 'alternative' or 'branded' `variant`. These appear flat, while the default Card appears floating.

```jsx
<Box inline between={3}>
  <Card variant="branded">
    <Box between={3}>
      <Heading level="h4">Holiday deal</Heading>

      <Paragraph size="medium">
        Get a new smartphone for $0
        <br />
        on a 2-year plan.
      </Paragraph>
    </Box>
  </Card>

  <Card variant="alternative">
    <Box between={3}>
      <Heading level="h4">Holiday deal</Heading>

      <Paragraph size="medium">
        Get a new smartphone for $0
        <br />
        on a 2-year plan.
      </Paragraph>
    </Box>
  </Card>

  <Card>
    <Box between={3}>
      <Heading level="h4">Find the right gift</Heading>

      <Paragraph>
        Find something they'll love from our
        <br />
        selection of great devices.
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

### Cards with borders

Teams can use the `defaultWithBorder` variant to add a border to the `Card` for comparison, horizontal plan, and My TELUS account overview cards.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={5}>
      <Card variant="defaultWithBorder">
        <Box between={3}>
          <Heading level="h3">Internet 15 - Special Offer</Heading>
          <PriceLockup
            size="medium"
            price="55"
            rateText="per month"
            bottomText="for 24 months, then $75 per month"
            signDirection="left"
          />
          <HairlineDivider />
          <Text size="medium">Good for basic browsing, and posting to social media.</Text>
          <BenefitWithHeading>
            <BenefitWithHeading.Item icon={Speed} heading="15 mbps">
              download speed
            </BenefitWithHeading.Item>
            <BenefitWithHeading.Item icon={Speed} heading="1 mbps">
              upload speed
            </BenefitWithHeading.Item>
            <BenefitWithHeading.Item icon={DataLimit} heading="Unlimited">
              Monthly data
            </BenefitWithHeading.Item>
          </BenefitWithHeading>
          <Notification variant="branded">
            <Text bold>Offer:</Text> Order Internet online on a 2 year term and get a $150 bill
            credit.
          </Notification>
          <Button>Add to cart</Button>
          <ChevronLink href="#">Learn more</ChevronLink>
        </Box>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
