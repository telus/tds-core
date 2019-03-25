A list of items containing an icon and text typically used to promote ideas.

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
