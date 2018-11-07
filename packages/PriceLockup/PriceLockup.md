### Usage Criteria

- Must provide pricing value under prop called `price`

- Price rate of component can be provided under `rateText` prop (i.e. /month)

- For French format, please supply the `signDirection` prop with `right`

- Top and bottom text are optional, and can be provided using the `topText` and `bottomText` prop respectively

- Size of component can be determined by 3 sizes called `small`, `medium`, `large`

- Only under `small` and `medium` sizing, `bottomText` and `hairlineDivider` are available

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
