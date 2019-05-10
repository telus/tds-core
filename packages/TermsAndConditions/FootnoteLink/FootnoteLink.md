### Usage criteria

- If only one annotation is required, when possible place elaborative copy in-page with the language or element in question
- For `PriceLockup` all the numbers should appear together at the end

```jsx
<Card>
  <Heading level="h4">For Non TELUS mobility customers</Heading>

  <Paragraph>$30 per month</Paragraph>

  <Paragraph>
    Includes unlimited nationwide calling and 5 voice features.{' '}
    <FootnoteLink number={3} onClick={(number, ref) => {}} copy="en" />
  </Paragraph>
</Card>
```

#### Within a PriceLockup

```jsx
<FlexGrid gutter={false}>
  <FlexGrid.Row>
    <FlexGrid.Col xs={3}>
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

    <FlexGrid.Col xs={3} xsOffset={1}>
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
