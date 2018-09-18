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
<FlexGrid>
  <FlexGrid.Row xsReverse={true} smReverse={true} mdReverse={false}>
    <FlexGrid.Col xs={12} md={0}>
      <Image src="aside-image.jpg" />
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={6}>
      <Box between={3}>
        <Box between={4}>
          {/* Heading level 4 with an h1 tag */}
          <Heading level="h4" tag="h1">
            Consider this: $0 first month
          </Heading>

          {/* Heading level 4 with an h3 tag */}
          <Heading level="h1" tag="h2">
            Stream live TV on any screen with Pik TV
          </Heading>
        </Box>

        <Text>
          Stream live TV or On Demand shows and movies on any screen with TELUS Pik TV<Text.Sup>
            TM
          </Text.Sup>. Get Pik TV from just $10 a month, and get your first month for $0<Text.Sup>
            1
          </Text.Sup> when you sign up.
        </Text>

        <div>
          <ButtonLink>Get Started</ButtonLink>
        </div>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={0} md={6}>
      <Image src="aside-image.jpg" />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
