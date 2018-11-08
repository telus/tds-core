### Usage Criteria

- Must provide pricing value using the `price` prop

- Price rate can be provided using the `rateText` prop (i.e. /month)

- When displaying prices in French, use `signDirection` to position the dollar sign to the right of the price

- Top and bottom text are optional and can be provided using the `topText` and `bottomText` props respectively

- `bottomText` is only available with `small` and `medium` sized `PriceLockup`

- `PriceLockup` comes in three different sizes:
  - Use `small` for pricing in non-product cards
  - Use `medium` for pricing in product cards
  - Use `large` for pricing in banners and promo cards

```jsx
<PriceLockup
  size="medium"
  topText="Starting at"
  bottomText="$68 /month after 3 months"
  rateText="/month"
  price="25"
  signDirection="left"
/>
```

### French and `signDirection`

```jsx
<PriceLockup size="medium" topText="À partir de :" rateText="" price="25" signDirection="right" />
```
