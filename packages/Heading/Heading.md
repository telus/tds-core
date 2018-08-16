```jsx
<Box between={3}>
  <Heading level="h1">Heading level 1 with an &lt;h1&gt; tag</Heading>
  <Heading level="h2">Heading level 2 with an &lt;h2&gt; tag</Heading>
  <Heading level="h2" tag="h3">
    Heading level 2 with an &lt;h3&gt; tag
  </Heading>
  <Heading level="h3">Heading level 3 with an &lt;h3&gt; tag</Heading>
  <Heading level="h4">Heading level 4 with an &lt;h4&gt; tag</Heading>
  <Heading level="h4" tag="h3">
    Heading level 4 with an &lt;h3&gt; tag
  </Heading>
</Box>
```

#### Usage criteria

* Be mindful of SEO and accessibility
* Organize headers in a nested order: h1, then h2, then h3
* Try **not** to skip levels where possible: h1, then h3
* Use one h1 per page
* The semantic HTML tag and visual appearance of the Heading component can be controlled using the `level` and `tag` props together
* For Hero overlays, Headlines, or Promo blocks, use [`DisplayHeading`](#displayheading)
* For subtext in the Hero overlays, or Headlines, use [`Text`](#text)

#### Separating semantic tag from visual style

The `Heading` component allows developers, designers, and content editors to represent headings with a certain style
while rendering a tag of their choice. It's important to maintain a correct order of semantic headings and not skip
levels; for example, have an h2 element directly follow an h1, or an h3 directly follow and h2. This allows users of
assistive technology to navigate through content predictably since headings represent information
hierarchy.

TELUS pages may require the use of smaller heading styles, such as a `Heading` with level 4, but it may follow a
heading with a visual level 2 and `<h2>` tag. To maintain order of information in this example, designers can propose
the use of a smaller heading level while still rendering an `<h3>` tag.

```jsx
<Box between={3}>
  <Heading level="h2">Phone description</Heading>

  <Paragraph>Our best phone yet.</Paragraph>

  {/* Heading level 4 with an h3 tag */}
  <Heading level="h4" tag="h3">
    Specifications
  </Heading>

  <UnorderedList>
    <UnorderedList.Item>4-Core CPU</UnorderedList.Item>
    <UnorderedList.Item>13 Megapixel Camera</UnorderedList.Item>
    <UnorderedList.Item>All-day battery life</UnorderedList.Item>
  </UnorderedList>
</Box>
```
