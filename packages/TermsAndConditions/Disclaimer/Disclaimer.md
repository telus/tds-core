```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/disclaimer">
        Disclaimer
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- Use in place of `FootnoteLink`
- Use only when there is only one statement and the legal copy must be directly grouped with the action
  - Ex. before unsubscribing from a product, the statement is positioned between a checkbox and submit button

### Minimal usage

```jsx
<Disclaimer>This is fine print</Disclaimer>
```

### Use in forms

```jsx
<Box between={3}>
  <Box between={1}>
    <Checkbox
      name="consent"
      value="consent"
      label="I consent to receive electronic messages from TELUS."
    />
    <Disclaimer>
      We will use your email address to send you information about promotions, special offers and
      news about TELUS events and services. All communications will be coming from TELUS, Marketing
      Preferences, 30 Floor, 25 York Street, Toronto ON M5J 2V5,{' '}
      <Link href="http://www.telus.com">www.telus.com</Link>. We assure you that your email address
      will not be shared with any third party. You can withdraw your consent to receive electronic
      messages from TELUS at any time. Your personal information will be used in accordance with our
      Privacy Policy.
    </Disclaimer>
  </Box>
  <div>
    <Button>Sign me up</Button>
  </div>
</Box>
```
