### Usage Criteria

- `PriceLockup` is available in three different sizes:
  - Use `small` for pricing in product catalogue pages (not in cards)
  - Use `medium` for pricing in product compare cards
  - Use `large` for pricing in banners and promo cards
- The size prop refers to the size of the PriceLockup rather than the viewport it is being used in
- PriceLockup is responsive depending on the screen size it is being viewed at
- Must provide pricing value using the `price` prop
- Price rate can be provided using the `rateText` prop (eg. /month)
- Top and bottom text are optional and can be provided using the `topText` and `bottomText` props respectively
- `bottomText` is only available with `small` and `medium` sized `PriceLockup`
- When displaying prices in French, use `signDirection` to position the dollar sign to the right of the price

```jsx
<PriceLockup
  size="small"
  topText="Starting at"
  price="25"
  signDirection="left"
  rateText="/month"
  bottomText="On a 2-year Easy Share Premium Plus Plan"
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

### French and `signDirection`

```jsx
<PriceLockup size="medium" topText="À partir de :" price="25" signDirection="right" />
```

### <a name="footnoteLinkWithPriceLockup">PriceLockup with FootnoteLink</a>

Usage criteria:

- Display `FootnoteLink` at the end of `rateText` or `bottomText`
- Group multiple `FootnoteLinks` together so that they:
  - Display in the same line as the `rateText` or `bottomText` when there’s available space,
  - Or display below `rateText` or `bottomText`, whichever is the last element
- Must not display `FootnoteLinks` in both the the `rateText` and `bottomText`
- The coded component can receive `FootnoteLinks` and position them automatically for you

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
