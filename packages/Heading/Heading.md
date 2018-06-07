```jsx
<Box between={3}>
  <Heading level="h1">Heading level 1</Heading>
  <Heading level="h2">Heading level 2</Heading>
  <Heading level="h2" tag="h3">
    Heading level 2 tag 3
  </Heading>
  <Heading level="h3">Heading level 3</Heading>
  <Heading level="h4">Heading level 4</Heading>
  <Heading level="h4" tag="h3">
    Heading level 4 tag 3
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
