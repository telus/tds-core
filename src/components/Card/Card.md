### Basic usage

```jsx
<Card>
  <Heading level="h2">Specifications</Heading>
  <div style={{ padding: "1rem 0" }}>
    <UnorderedList>
      <UnorderedList.Item>2.2gHz CPU</UnorderedList.Item>
      <UnorderedList.Item>250GB Storage</UnorderedList.Item>
    </UnorderedList>
  </div>
</Card>
```

### Coloured variants

```jsx {"props": {"className": "docs__layout-horizontally docs__horizontal-spacing docs__max-width400 docs__vertical-spacing"}}
<div className="wrapper wrapperExtendHS wrapperExtendVS wrapperExtendMW">
  <Card variant="lavender">
    <Heading level="h2">Need a hand?</Heading>
    <div style={{ padding: "1rem 0" }}>
      <Paragraph>Ready to order? Have a question? We'll get back to you, with volume discounts available to larger accounts.</Paragraph>
    </div>
    <ButtonLink>Request sales callback</ButtonLink>
  </Card>
    
  <Card variant="gray">
    <Heading level="h2">"My office is wherever my customers are. TELUS helps me stay connected whether I'm making a sale or doing payroll."</Heading>
    <div style={{ padding: "1rem 0" }}>
      <Paragraph>Dave Smith, Foreman</Paragraph>
    </div>
  </Card>
</div>
```
