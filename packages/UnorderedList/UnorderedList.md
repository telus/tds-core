### Minimal usage

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
  {false && <UnorderedList.Item>$10 off for limited time only</UnorderedList.Item>}
  {true && (
    <UnorderedList.Item>
      Free shipping anywhere in Canada with any phone purchase
    </UnorderedList.Item>
  )}
  <UnorderedList.Item>1-year limited manufacturer’s warranty</UnorderedList.Item>
  {false && <UnorderedList.Item>$40 off for a limited time only</UnorderedList.Item>}
</UnorderedList>
```

### Error list

```jsx
<UnorderedList listStyle="x">
  <UnorderedList.Item>8 characters or longer, no spaces</UnorderedList.Item>
  <UnorderedList.Item>A mix of numbers, lowercase and uppercase letters</UnorderedList.Item>
</UnorderedList>
```
