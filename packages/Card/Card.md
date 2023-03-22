```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/card">
        Card
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

Cards will stretch to fill the width of their container. Wrap the card in another element to apply size.

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

#### Without shadows

Cards with the `defaultOnlyBorder` variant are to be used to create less visual emphasis than other variants of cards with a border or shadow. It also matches the same z-index as other coloured variant cards without shadow. It should be used near forms, but not containing forms.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={7}>
      <Card spacing="compact" variant="defaultOnlyBorder">
        <FlexGrid gutter={false}>
          <FlexGrid.Row verticalAlign="middle" horizontalAlign="center">
            <FlexGrid.Col md={2} xs={0}>
              <Bank size="48" />
            </FlexGrid.Col>
            <FlexGrid.Col md={6} xs={12} horizontalAlign="left">
              <Box horizontal={2}>
                <Text>Chequing account number</Text>
                <Heading level="h3">**********1234</Heading>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col md={1} xs={12} horizontalAlign="left">
              <Box inline between={1}>
                <HairlineDivider vertical />
                <Box vertical={4}>
                  <div />
                </Box>
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col md={3} xs={12} horizontalAlign="left">
              <Box between={2}>
                <Link href="#">Update Card</Link>
                <Link href="#">Delete Card</Link>
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Full Height Cards

In some cases you want cards to match the height of their parent so that the bottom edge of the cards are aligned. This is usually needed when using cards in a `FlexGrid`. Use the `fullHeight` prop to achieve this.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={4}>
      <Card fullHeight>
        <Box between={4}>
          <Heading level="h3">Reward yourself</Heading>
          <Text>
            When you bundle TELUS SmartHome Security with one other eligible TELUS service, you
            qualify for TELUS Rewards. Earn points just by paying your monthly bill, and then redeem
            great rewards, like gift cards, contests, TELUS bill credits, and the latest tech.
          </Text>
        </Box>
      </Card>
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={4}>
      <Card fullHeight>
        <Box between={4}>
          <Heading level="h3">Enjoy fast internet in every corner of your home</Heading>
          <Text>
            TELUS Boost Wi-Fi creates a mesh network throughout your home so your devices will
            always connect to the strongest possible Wi-Fi.
          </Text>
        </Box>
      </Card>
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={4}>
      <Card fullHeight>
        <Box between={4}>
          <Heading level="h3">
            Power your home security and home monitoring system with the fastest internet technology
          </Heading>
          <Text>
            TELUS PureFibre is number one internet technology for speed and reliability. Save $10/
            month on TELUS SmartHome Security when you bundle with TELUS Internet.
          </Text>
        </Box>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Card Padding

By _Default_, cards have Box 5 spacing on top/bottom and Box 4 on left/right. They are used for marketing pages to call out or break information.

<img src="card/card-padding-default.png" alt="card padding default" style="max-width: 100%" />

_Narrow_ cards have Box 4 spacing on top/bottom and Box 3 on left/right. This card is used when presenting plans to a customer.

<img src="card/card-padding-narrow.png" alt="card padding narrow" style="max-width: 100%" />

**Cards with even padding around them are used in internal applications or pages to help with categorizing items and de-emphasize in terms of visual hierarchy.**

_Compact_ cards have Box 3 padding all around it.

<img src="card/card-padding-compact.png" alt="card padding compact" style="max-width: 100%" />

_Intermediate_ cards have Box 4 padding all around it.

<img src="card/card-padding-intermediate.png" alt="card padding intermediate" style="max-width: 100%" />

### Full Bleed Image Card

In cases where a full bleed image is desired, use the `fullBleedImage` property of the `Card` component. If passing a `fullBleedImage` property, the src, width, height, alt tag, and position are required.

Position can be passed as one of the following words: `'left'`, `'right'`, `'top'`, `'bottom'`, or `'none'`, depending on where in the `Card` you would like the image to be. This property may also be passed as a responsive prop, using the TDS breakpoints. A full bleed image with position: `{xs: 'none', md: 'left'}` for example, will have a full bleed image to the left of card content when viewed on desktops viewports, and no image when viewed on mobile viewports.

The image dimensions should be appropriately matched to that of the Card. In cases where the image is smaller than the dimensions of the card, the full bleed image will be centered in the card.

#### Horizontal card with a full bleed image positioned right on desktop, none on mobile

```jsx
<Card
  fullBleedImage={{
    src: 'card/salal_branch_tall.png',
    width: 191,
    height: 176,
    alt: 'salal branch image',
    position: { xs: 'none', md: 'right' },
  }}
  variant="defaultWithBorder"
>
  <Box between={2}>
    <Heading level="h3">Your first bill isn't ready yet.</Heading>
    <Paragraph>
      We'll send you an email or text message when it's available. Want to pay your bills
      automatically?
      <ChevronLink href="#" variant="secondary">
        Set up pre-authorized payments
      </ChevronLink>
    </Paragraph>
  </Box>
</Card>
```

#### Vertical card with a full bleed image positioned bottom on both desktop and mobile

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={5}>
      <Card
        fullBleedImage={{
          src: 'card/salal_branch.png',
          width: 398,
          height: 147,
          alt: 'salal branch image',
          position: 'bottom',
        }}
        variant="defaultWithBorder"
      >
        <Box between={2}>
          <Heading level="h3">Your first bill isn't ready yet.</Heading>
          <Paragraph>
            We'll send you an email or text message when it's available. Want to pay your bills
            automatically?
            <ChevronLink href="#" variant="secondary">
              Set up pre-authorized payments
            </ChevronLink>
          </Paragraph>
        </Box>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
