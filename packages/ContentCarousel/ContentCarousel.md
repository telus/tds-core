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
  - Open (open, branded, product): Image and content appear on a white background
  - Card (full bleed): Image and content are contained within a card
- Display any combination of content (eyebrow, header, text, CTAs, links, etc.) but they should be consistent between slides in the same carousel
  - Do not use Display or Heading 1 sized text
- Must not have a mix of full bleed imagery or cropped in one carousel
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

## Open Variant

### Accessibility

#### Built-in accessibility features

- When a CardSlider section is in focus, the user must be able to scroll left and right with using keyboard arrow keys
- Each card in a slider must receive focus when tabbed into

#### Required by consumer

- Consumer of this component needs to make sure that the content supplied to each slide is accessible
- Images have an appropriate alt text in both English and French
- Content can be navigated and read by using assistive technologies

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<ContentCarousel copy="en">
  <ContentCarousel.Item
    picture={<Image src="carousel-nature.png" width={1168} height={876} alt="Woman smiling" />}
  >
    <Heading level="h2">Get a FREE 55" Samsung 4K HDR Smart TV.</Heading>
    <Paragraph>
      Get a FREE 55" Samsung 4K HDR Smart TV when you order Internet and Optik TV on a 2 year term.
      Plus, get a $300 bill credit (including tax) when you order online.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-rewards.png"
        width={1168}
        height={876}
        alt="Child interacting with acessible technology while mother watches"
      />
    }
    pictureSide="right"
  >
    <Heading level="h2">
      Save up to $1080 when you sign up for Optik TV and Internet on a 2 year term.
    </Heading>
    <Paragraph>
      Sign up for 2 years and save BIG on your first 24 months. Plus get a $300 credit (including
      tax) when you order online.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-stevie-macaw.png"
        width={1168}
        height={876}
        alt="Two women smiling, sitting on a couch behind bouqet of flowers"
      />
    }
  >
    <Heading level="h2">Earn, redeem, repeat – with TELUS Rewards.</Heading>
    <Paragraph>
      Earn points each month just for being a customer, and redeem them for great rewards like Video
      on Demand, charity donations, TELUS bill credits, and more.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```

## Card Variant

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<ContentCarousel copy="en" variant="card">
  <ContentCarousel.Item
    picture={<Image src="carousel-example-1.jpg" width={1168} height={876} alt="Woman smiling" />}
  >
    <Paragraph bold>Mobility for Good</Paragraph>
    <Heading level="h2">Helping youth achieve independence</Heading>
    <Paragraph>
      A collaboration between TELUS and Children’s Aid Foundation of Canada (CAFC) and select Centre
      de Jeunesse Foundations, Mobility for GoodTM helps these kids achieve independence by
      providing them with a free phone and a $0 plan, including 3 GB of data for two years.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-example-2.jpg"
        width={1168}
        height={876}
        alt="Child interacting with acessible technology while mother watches"
      />
    }
    pictureSide="right"
  >
    <Paragraph bold>Tech for Good</Paragraph>
    <Heading level="h2">Ensuring digital accessibility for everyone</Heading>
    <Paragraph>
      Promoting inclusion and accessibility within our workplace and the communities in which we
      serve is important to us.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-example-3.jpg"
        width={1168}
        height={876}
        alt="Two women smiling, sitting on a couch behind bouqet of flowers"
      />
    }
  >
    <Paragraph bold>Internet for Good</Paragraph>
    <Heading level="h2">Connecting families in need</Heading>
    <Paragraph>
      Having access to reliable internet is increasingly important in today’s interconnected world.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```

## Picture Side

It's possible to change the side the `Image` supplied through the `picture` prop appears on in each slide. This is accomplished by providing either the directions `"left"` or `"right"` to the `pictureSide` prop.

```jsx { "props": { "className": "docs_full-width-playground docs_flex-grid-coloring" } }
<ContentCarousel copy="en">
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-example-1.jpg"
        width={1168}
        height={876}
        alt="Woman smiling"
        pictureSide="right"
      />
    }
  >
    <Paragraph bold>Mobility for Good</Paragraph>
    <Heading level="h2">Helping youth achieve independence</Heading>
    <Paragraph>
      A collaboration between TELUS and Children’s Aid Foundation of Canada (CAFC) and select Centre
      de Jeunesse Foundations, Mobility for GoodTM helps these kids achieve independence by
      providing them with a free phone and a $0 plan, including 3 GB of data for two years.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-example-2.jpg"
        width={1168}
        height={876}
        alt="Child interacting with acessible technology while mother watches"
      />
    }
    pictureSide="left"
  >
    <Paragraph bold>Tech for Good</Paragraph>
    <Heading level="h2">Ensuring digital accessibility for everyone</Heading>
    <Paragraph>
      Promoting inclusion and accessibility within our workplace and the communities in which we
      serve is important to us.
    </Paragraph>
  </ContentCarousel.Item>
  <ContentCarousel.Item
    picture={
      <Image
        src="carousel-example-3.jpg"
        width={1168}
        height={876}
        alt="Two women smiling, sitting on a couch behind bouqet of flowers"
      />
    }
    pictureSide="right"
  >
    <Paragraph bold>Internet for Good</Paragraph>
    <Heading level="h2">Connecting families in need</Heading>
    <Paragraph>
      Having access to reliable internet is increasingly important in today’s interconnected world.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```
