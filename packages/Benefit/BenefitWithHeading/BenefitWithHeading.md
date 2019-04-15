A list of items containing an icon and text typically used to promote ideas.

#### Usage criteria

- Benefit should contain 4 or fewer items in a list
- Benefit with a heading must be used within Cards
- Each list item should have a unique icon
- For Business use, must use `Check` icon
- Code: the `icon` prop must either be set in `<BenefitWithHeading />` or `<BenefitWithHeading.Item />`. If `icon` is set in both components, the one set in `<BenefitWithHeading.Item />` has priority.
- Code: every `<BenefitWithHeading.Item />` must have a heading supplied to the `heading` prop

#### Examples with individual icons

```jsx
<Card>
  <BenefitWithHeading>
    <BenefitWithHeading.Item icon={Internet} heading="Benefit list">
      With heading and icons
    </BenefitWithHeading.Item>
    <BenefitWithHeading.Item icon={FavouriteNetwork} heading="Use within a card">
      Has 236 max width
    </BenefitWithHeading.Item>
    <BenefitWithHeading.Item icon={Files} heading="Heading">
      Text has limit of 35 characters
    </BenefitWithHeading.Item>
    <BenefitWithHeading.Item icon={DataLimit} heading="Benefit icon">
      Must use purple colour
    </BenefitWithHeading.Item>
  </BenefitWithHeading>
</Card>
```

#### Business example with one icon set

```jsx
<Card>
  <BenefitWithHeading icon={Check}>
    <BenefitWithHeading.Item heading="Benefit list">With heading and icons</BenefitWithHeading.Item>
    <BenefitWithHeading.Item heading="Use within a card">Has 236 max width</BenefitWithHeading.Item>
    <BenefitWithHeading.Item heading="Heading">
      Text has limit of 35 characters
    </BenefitWithHeading.Item>
  </BenefitWithHeading>
</Card>
```
