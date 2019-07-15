### Minimal usage

_Note: An `UnorderedList` should not be used adjacent to an `OrderedList`._

```jsx
<UnorderedList>
  <UnorderedList.Item>Save any important voicemail messages.</UnorderedList.Item>
  <UnorderedList.Item>
    Someone over the age of 18 must be present during the entire move.
  </UnorderedList.Item>
  <UnorderedList.Item>
    If you added new TELUS services, your <Link href="#">first post-move bill amount</Link> may
    appear larger than normal because it will include more than one month of services.
  </UnorderedList.Item>
</UnorderedList>
```

### Check list

```jsx
<UnorderedList listStyle="checkmark">
  <UnorderedList.Item>30-day satisfaction guaranteed with no-hassle returns</UnorderedList.Item>
  <UnorderedList.Item>Free shipping anywhere in Canada with any phone purchase</UnorderedList.Item>
  <UnorderedList.Item>1-year limited manufacturer’s warranty</UnorderedList.Item>
</UnorderedList>
```

### Error list

```jsx
<UnorderedList listStyle="x">
  <UnorderedList.Item>8 characters or longer, no spaces</UnorderedList.Item>
  <UnorderedList.Item>A mix of numbers, lowercase and uppercase letters</UnorderedList.Item>
</UnorderedList>
```

### Mixed List

If you do not want each list item to have the same icon, you may give each item its own icon via the `itemStyle` prop. This will override a `listStyle` set by the parent.

```jsx
<UnorderedList listStyle="circle">
  <UnorderedList.Item itemStyle="checkmark">
    An item that has a checkmark in front of it
  </UnorderedList.Item>
  <UnorderedList.Item>An item using the global listStyle</UnorderedList.Item>
  <UnorderedList.Item>Another item using the global listStyle</UnorderedList.Item>
  <UnorderedList.Item itemStyle="x">An item that has an X in front of it</UnorderedList.Item>
</UnorderedList>
```
