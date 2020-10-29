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
- Use `strikethrough` option for price savings comparison.
  - If using `strikethrough` pricing, it must be accompanied by corresponding `ariaLabel` to be used by screen readers

<img src="price-lockup_annotated.png" alt="price lockup annotated example" style="width: 100%; " />

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
