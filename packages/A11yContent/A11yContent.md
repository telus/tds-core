Allows content to be hidden from sight, but still visible to screen readers. This can be used to give context to users using screen readers without revealing unnecessary extra text to sighted users.

```jsx
    <Text>The screen reader says:</Text><A11yContent>This is accessible content</A11yContent>
```

If `A11yContent` has to go between two separate text components, considering wrapping the whole text in a `<span>` to persist leading and trailing space.

```jsx
<ButtonLink href="#">
  <span>
    Shop <A11yContent>iPhone</A11yContent> Now
  </span>
</ButtonLink>
```

### Usage with a `Heading` component

Often a design may not include a visual heading tag to describe a section or a page. A common example is a page that does not have a visible `<h1>` tag because of a hero banner. In such cases, `A11yContent` can be used to wrap a `Heading` component and be placed on the page. This allows users with screen readers to easily identify the context of the page.

Note: The standard is to add a visual heading tag wherever possible as it supports more assistive technologies, this strategy is helpful for remediating pages for accessibility.

```jsx
<main>
  <A11yContent>
    <Heading level="h1">Mobility - Shop our phones and plans | Telus</Heading>
  </A11yContent>
  <FlexGrid>
    <FlexGrid.Row>
      <FlexGrid.Col xs={12} md={4}>
        <Image src="a11yContent-header-img.png" width={468} height={312} alt="iPhone 11" />
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={8}>
        <Box between={3}>
          <Heading level="h2">Get up to $520 off iPhone 11 with Bring‑It‑Back</Heading>
          <Paragraph>
            Enjoy iPhone 11 for just $20 per month on a two-year term when you choose Bring‑It‑Back
            Read. Offer available for a limited time only.
          </Paragraph>
          <div>
            <ButtonLink href="#">Get iPhone Now</ButtonLink>
          </div>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
</main>
```
