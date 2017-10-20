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

Card also supports a grey or lilac `variant`. These appear flat, while the default white Card appears floating.

```jsx {"props": {"className": "docs__layout-horizontally"}}
<div className="wrapper">
  <Card variant="grey">
    <Heading level="h4">I am new to TELUS.</Heading>
    
    <div style={{ margin: "1rem 0" }}>
      <Paragraph size="small">Order Pik TV, Internet and media box.</Paragraph>
    </div>
    
    <ButtonLink href="#" variant="secondary">Get started</ButtonLink>
  </Card>
  
  <Card variant="grey">
    <Heading level="h4">I am an existing TELUS customer.</Heading>
    
    <div style={{ margin: "1rem 0" }}>
      <Paragraph size="small">Add Pik TV to My Account.</Paragraph>
    </div>
    
    <ButtonLink href="#" variant="secondary">Continue</ButtonLink>
  </Card>
</div>
```

```jsx {"props": {"className": "docs__layout-horizontally"}}
<div className="wrapper">
  <Card variant="lavender">
    <Heading level="h4">Holiday deal</Heading>
    
    <div style={{display: 'flex', 'align-content': 'flex-start', 'width': '280px'}}>
      <div style={{'margin-top': '12px'}}>$</div>
      <div style={{'font-size': '44px'}}>0</div>
      <div style={{'margin-top': '12px', 'line-height': '1.4', 'font-size': '16px', 'margin-left': '16px'}}>on a 2-year <br/> SharePlus Ultra Plan</div>
    </div>

  </Card>
  
  <Card variant="lavender">
    <Heading level="h4">Holiday deal</Heading>
    
    <div style={{display: 'flex', 'align-content': 'flex-start', 'width': '280px'}}>
      <div style={{'margin-top': '12px'}}>$</div>
      <div style={{'font-size': '44px'}}>400</div>
      <div style={{'margin-top': '12px', 'line-height': '1.4', 'font-size': '16px', 'margin-left': '16px'}}>on a 2-year <br/> SharePlus Ultra Plan</div>
    </div>

  </Card>
</div>
```
