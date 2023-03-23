```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/price-lockup">
        PriceLockup
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage Criteria

- `PriceLockup` is available in three different sizes:
  - Use `small` for pricing in product catalogue pages (not in cards)
  - Use `medium` for pricing in product compare cards
  - Use `large` for pricing in banners and promo cards
- Sizes refer to the relative size of text within `PriceLockup` rather than viewport
  - The large `PriceLockup` displays responsively based on viewport
  - Must not display `bottomText` in large `PriceLockup`
- Must use the `price` prop to provide monetary value
- Use `rateText` prop to provide month or year
- Use `topText` and `bottomText` props to provide additional information
- Align the currency sign to the right when displaying prices in French
- Use `strikethrough` prop for price savings comparison
  - If using `strikethrough` prop, it must be accompanied by corresponding `a11yText` to be used by screen readers
  - `strikethrough` price must be smaller than the discounted price
- Use `a11yText` prop to support screen reader when text is not reader-friendly
  - Problem: if the component shows "\$25/mo.", screen reader will read: "dollar 25 slash mo"
  - Solution: supply component with `a11yText="25 dollars per month"`. Screen reader will now read: "25 dollars per month" and ignore visual text

### Strikethrough Usage Criteria

- Usage: To visually show a discounted price next to a non-strikethrough price
- Placement: Must be placed in close proximity to the product
- If using `strikethrough` prop, it must be accompanied by corresponding `a11yText` to be used by screen readers
- a11yText will override strikethrough price, so it must include price (ie. "was 50 dollars per month")

<img src="price-lockup_annotated.png" alt="price lockup annotated example" style="width: 100%; " />

```jsx
<PriceLockup
  size="small"
  topText="Starting at"
  price="25"
  signDirection="left"
  rateText="/month"
  bottomText="On a 2-year Easy Share Premium Plus Plan"
  a11yText="25 dollars per month"
  footnoteLinks={<FootnoteLink number={[7, 8]} onClick={(number, ref) => {}} copy="en" />}
/>
```

```jsx
<PriceLockup
  size="medium"
  topText="Starting at"
  price="25"
  rateText="/month"
  bottomText="$68 /month after 3 months"
  signDirection="left"
/>
```

### Example use case for `small` strikethrough option

- to be used with `medium` discounted price

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={9} xl={5}>
      <Card variant="defaultWithBorder">
        <Box between={3}>
          <Heading level="h3">Internet 15 - Special Offer</Heading>
          <FlexGrid>
            <FlexGrid.Row verticalAlign="bottom" horizontalAlign="start">
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  topText="Starting at"
                  size="medium"
                  price="25"
                  signDirection="left"
                  rateText="/month"
                  a11yText="25 dollars per month"
                />
              </FlexGrid.Col>
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  size="small"
                  strikethrough
                  a11yText="was 50 dollars per month"
                  price="50"
                  signDirection="left"
                  rateText="/month"
                />
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
          <Text size="medium">Good for basic browsing, and posting to social media.</Text>
          <Button>Add to cart</Button>
          <ChevronLink href="#">Learn more</ChevronLink>
        </Box>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### Example use case for `medium` strikethrough option

- to be used with `large` discounted price
- to be used in campaign banners
- not for use in cards

```jsx
<FlexGrid>
  <FlexGrid.Row verticalAlign="bottom" horizontalAlign="start">
    <FlexGrid.Col xs={12} md={5} xl={3}>
      <PriceLockup
        topText="Starting at"
        size="large"
        price="25"
        signDirection="left"
        rateText="/month"
      />
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={4} xl={2}>
      <PriceLockup
        size="medium"
        strikethrough
        a11yText="was 50 dollars per month"
        price="50"
        signDirection="left"
        rateText="/month"
      />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```

### French and `signDirection`

```jsx
<PriceLockup size="medium" topText="À partir de :" price="25" signDirection="right" />
```

<div id="pricelockupWithFootnotelink"></div>
### PriceLockup with FootnoteLink

**Usage criteria**

- Group multiple `FootnoteLinks` together
  - Must not display `FootnoteLinks` in both `rateText` and `bottomText`
- `FootnoteLink` should always be the last element displayed in `PriceLockup`
- Maximum of 3 `FootnoteLinks` may display inline with the `price` or `rateText`
  - Display in the same line as the `price`, `rateText` or `bottomText` when there’s available space
  - Display with `rateText` or `bottomText`, whichever is the last element
- If there are more than 3 `FootnoteLinks`
  - Display `FootnoteLinks` as the last element (bottom) of `PriceLockup`

```jsx
<PriceLockup
  size="medium"
  topText="Starting at"
  price="25"
  rateText="/month"
  signDirection="left"
  footnoteLinks={<FootnoteLink number={[1, 2, 3]} onClick={(number, ref) => {}} copy="en" />}
/>
```

```jsx
<PriceLockup
  size="medium"
  topText="Starting at"
  price="25"
  rateText="/month"
  bottomText="$68 /month after 3 months"
  signDirection="left"
  footnoteLinks={<FootnoteLink number={[1, 2, 3]} onClick={(number, ref) => {}} copy="en" />}
/>
```

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={3}>
      <PriceLockup
        size="medium"
        topText="Starting at"
        price="25"
        rateText="/month"
        bottomText="$68 /month after 3 months"
        signDirection="left"
        footnoteLinks={<FootnoteLink number={[1, 2, 3]} onClick={(number, ref) => {}} copy="en" />}
      />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
