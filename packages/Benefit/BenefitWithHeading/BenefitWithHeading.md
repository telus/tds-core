A list of items containing an icon and text typically used to promote ideas.

#### Usage criteria

- Benefit should contain 4 or fewer items in a list
- Benefit with a heading must be used within Cards
- Code: the `icon` prop must either be set in `<BenefitWithHeading />` or `<BenefitWithHeading.Item />`. If `icon` is set in both components, the one set in `<BenefitWithHeading.Item />` has priority.

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

#### Example with one icon set

```jsx
<Card>
  <BenefitWithHeading icon={Success}>
    <BenefitWithHeading.Item heading="Benefit list">With heading and icons</BenefitWithHeading.Item>
    <BenefitWithHeading.Item heading="Use within a card">Has 236 max width</BenefitWithHeading.Item>
    <BenefitWithHeading.Item heading="Heading">
      Text has limit of 35 characters
    </BenefitWithHeading.Item>
  </BenefitWithHeading>
</Card>
```
