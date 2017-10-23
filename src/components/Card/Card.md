Cards will stretch to fill their container. Wrap the card in another element to apply size.

```jsx
<Card>
  <Heading level="h2">Need a hand?</Heading>
  
  <div style={{ margin: "1rem 0" }}>
    <Paragraph>
      Ready to order? Have a question? We'll get back to you, with volume discounts available to larger accounts.
    </Paragraph>
  </div>
  
  <ButtonLink href="#">Request sales callback</ButtonLink>
</Card>
```

### Coloured variants

Card also supports a 'grey' or 'lavender' `variant`. These appear flat, while the default white Card appears floating.

```jsx {"props": {"className": "docs__layout-horizontally"}}
<div className="wrapper">
  <Card variant="lavender">
    <Heading level="h4">Holiday deal</Heading>
    
    <div style={{ margin: "1rem 0" }}>
      <Paragraph size="medium">Get a new smartphone for $0<br/>on a 2-year plan.</Paragraph>
    </div>
  </Card>
  
  <Card variant="grey">
    <Heading level="h4">Find the right gift</Heading>
    
    <div style={{ margin: "1rem 0" }}>
      <Paragraph>Find something they'll love from our<br/>selection of great devices.</Paragraph>
    </div>
    
    <ChevronLink variant="primary" href="">Explore latest devices</ChevronLink>
  </Card>
</div>
```
