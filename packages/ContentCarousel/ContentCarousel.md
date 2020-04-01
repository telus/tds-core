A `ContentCarousel` is a component for cycling through slides, designed to take up a designated space to allow the user to interact with the content at their own pace. This component will display `ContentCarousel.Item`s passed into it via its `children` in a slider format.

- Use a carousel when other alternatives have been exhausted
  - Users often overlook and scroll past carousel
  - Users often miss content after the first slide
  - Key points or messages can be missed or misinterpreted if they span multiple slides
- Use a carousel for the following considerations
  - Location is a priority and there is limited space
  - Provide supplemental content without disrupting the main objective of the view
- Display content in order of priority and relevance
- Must not display content integral to the main objective

## Usage guidelines

- Must display a single slide in view
- Must display an image (left or right) with content displayed on the other side
- Available in two variants:
  - Default (open, branded, product): Image and content appear on a white background
  - Card (full bleed): Image and content are contained within a card
- Display any combination of content (eyebrow, header, text, CTAs, links, etc.) but they should be consistent between slides in the same carousel
  - Do not use Display or Heading 1 sized text
- Limit character count for the following content, applicable to English and French language
  - Eyebrow is limited to 30 characters
  - Heading is limited to 40 characters
  - Body text is limited to 150 characters
- Recommend including a link to view all slides at once or direct to a catalogue of items displayed in the slider
- May display a divider before or after the `ContentSlider` component to provide clear visual distinction of sections as necessary
- Should not have more than 5 slides of content

## Usage risks

Though the `ContentCarousel` has been built with many accessibility considerations and visual styles tailored to our brand, there are associated risks when deciding to use `ContentCarousel` for your online experiences that include:

- Carousels always include content that is hidden from the customer’s view, and it is very likely they will not see that content
- Carousel items have a low click-through rate
- Carousels are often skipped entirely by customers

## Accessibility guide

- Consumers of this component must take additional steps to ensure the component is accessible.
- Must supply accessible content for each slide
- Images must have appropriate “alt” text in English and French
- Must be able to navigate and read content using assistive technologies

`ContentCarousel` does _not_ support autoplay. The autoplay option can be distracting or even distressing to those who struggle with sensory overload. We believe that omitting this feature will encourage the most inclusive experience possible for our customers.

```jsx
<ContentCarousel>
  <ContentCarousel.Item picture={<Image src="image-example.jpg" />} pictureSide="left">
    <Paragraph bold>Use branded images</Paragraph>
    <Heading level="h2">Use outside of a card to keep open feeling</Heading>
    <Button>Hi!</Button>
    <Paragraph>
      Don't show previous/next chevron button when showing first/last slide. Doesn't render as an
      infinite scrolling content slider.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item picture={<Image src="image-example.jpg" />} pictureSide="right">
    <Paragraph bold>This is slide 2</Paragraph>
    <Heading level="h2">Use outside of a card to keep open feeling</Heading>
    <Paragraph>
      Don't show previous/next chevron button when showing first/last slide. Doesn't render as an
      infinite scrolling content slider.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item picture={<Image src="test-poster.jpg" />} pictureSide="right">
    <Paragraph bold>This is slide 3</Paragraph>
    <Heading level="h2">Use outside of a card to keep open feeling</Heading>
    <Paragraph>
      Don't show previous/next chevron button when showing first/last slide. Doesn't render as an
      infinite scrolling content slider.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```

## Picture Side

It's possible to change the side the `Image` supplied through the `picture` prop appears on in each slide. This is accomplished by providing either the directions `"left"` or `"right"` to the `pictureSide` prop.

```jsx
<ContentCarousel>
  <ContentCarousel.Item picture={<Image src="image-example.jpg" />} pictureSide="right">
    <Paragraph bold>Use branded images</Paragraph>
    <Heading level="h2">Use outside of a card to keep open feeling</Heading>
    <Button>Hi!</Button>
    <Paragraph>
      Don't show previous/next chevron button when showing first/last slide. Doesn't render as an
      infinite scrolling content slider.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item picture={<Image src="image-example.jpg" />} pictureSide="left">
    <Paragraph bold>This is slide 2</Paragraph>
    <Heading level="h2">Use outside of a card to keep open feeling</Heading>
    <Paragraph>
      Don't show previous/next chevron button when showing first/last slide. Doesn't render as an
      infinite scrolling content slider.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```
