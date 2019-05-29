### Usage criteria

- If there is only one annotation needed on a page, try including it within the copy on the page and avoid using `FootnoteLink`
- For [PriceLockup](#pricelockup) all the numbers should appear together below the `bottomText`
- Must be wrapped by a `Text`, `Heading`, or `DisplayHeading` component
  - When using `FootnoteLink` in a `PriceLockup`, `PriceLockup` will automatically wrap all `bottomText` in a `Text` component

```jsx
<Card>
  <Heading level="h4">For Non TELUS mobility customers</Heading>

  <Paragraph>$30 per month</Paragraph>

  <Paragraph>
    <Text>
      Includes unlimited nationwide calling and 5 voice features.
      <FootnoteLink number={3} onClick={(number, ref) => {}} copy="en" />
    </Text>
  </Paragraph>
</Card>
```

#### Within a PriceLockup

```jsx
<FlexGrid gutter={false}>
  <FlexGrid.Row>
    <FlexGrid.Col xs={5} md={3}>
      <PriceLockup
        size="medium"
        topText="Starting at"
        price="25"
        rateText="/month"
        bottomText={
          <span>
            $68 /month after 3 months
            <br />
            <FootnoteLink number={[1, 2, 3]} onClick={(number, ref) => {}} copy="en" />
          </span>
        }
        signDirection="left"
      />
    </FlexGrid.Col>

    <FlexGrid.Col xs={5} md={3} xsOffset={2}>
      <PriceLockup
        size="medium"
        topText="Starting at"
        price="25"
        rateText="/month"
        bottomText={
          <span>
            $68 /month after 3 months
            <br />
            <FootnoteLink
              number={[1, 2, 3, 7, 8, 10, 19]}
              onClick={(number, ref) => {}}
              copy="en"
            />
          </span>
        }
        signDirection="left"
      />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
