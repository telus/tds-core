A list of items containing an icon and text typically used to promote ideas.

#### Usage criteria

- Benefit should contain 4 or fewer items in a list
- Benefit without a heading must be used outside Cards
- Must use `Check` icon when using benefits list for Business
- Code: the `icon` prop must either be set in `<BenefitNoHeading />` or `<BenefitNoHeading.Item />`. If `icon` is set in both components, the one set in `<BenefitNoHeading.Item />` has priority.

#### Example with one icon set

```jsx
<BenefitNoHeading icon={Success}>
  <BenefitNoHeading.Item>This is a benefits list with icons</BenefitNoHeading.Item>
  <BenefitNoHeading.Item>Use this list outside of a card</BenefitNoHeading.Item>
  <BenefitNoHeading.Item>Use small text with a 35 character limit</BenefitNoHeading.Item>
  <BenefitNoHeading.Item>Must use purple colour for the Icon</BenefitNoHeading.Item>
</BenefitNoHeading>
```

#### Example with individual icons

```jsx
<BenefitNoHeading>
  <BenefitNoHeading.Item icon={SecurityHouse}>This is a list</BenefitNoHeading.Item>
  <BenefitNoHeading.Item icon={Heart}>With different icons per item</BenefitNoHeading.Item>
</BenefitNoHeading>
```
