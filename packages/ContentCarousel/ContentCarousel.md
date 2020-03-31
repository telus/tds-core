This component will display `ContentCarousel.Item`s passed into it via its `children` in a slider format.

_Acessibility Note_

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
