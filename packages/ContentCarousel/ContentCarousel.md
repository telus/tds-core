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

```jsx
<ContentCarousel copy="en">
  <ContentCarousel.Item
    picture={<Image src="carousel-example-1.jpg" width={1168} height={876} alt="Woman smiling" />}
  >
    <Paragraph bold>Mobility for Good</Paragraph>
    <Heading level="h2">Helping youth achieve independence</Heading>
    <Paragraph>
      For youth leaving foster care, their phone can be their lifeline, helping them build credit,
      search for somewhere to live, find education and job opportunities, and stay in touch with
      friends and vital support networks. A collaboration between TELUS and Children’s Aid
      Foundation of Canada (CAFC) and select Centre de Jeunesse Foundations, Mobility for GoodTM
      helps these kids achieve independence by providing them with a free phone and a $0 plan,
      including 3 GB of data for two years.
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
      serve is important to us. So is providing inclusive access to our products, services and
      solutions for persons of all abilities. Through our Tech for GoodTM program, TELUS customers
      with disabilities who require assistive technology such as additional hardware or software to
      independently use their smartphone or tablet can receive specialized assistance, tools and
      training. In some cases, we also offer financial assistance to help cover the cost of
      assistive technology*.
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
      But for less fortunate families, it can still be a struggle. 42% of low-income homes don’t
      have internet. Internet for GoodTM is an innovative partnership between TELUS, the British
      Columbia Ministry of Social Development and Poverty Reduction, and the Ministry of Community
      and Social Services in Alberta that provides eligible families with the tools and connectivity
      they need to succeed.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```

## Card Variant

```jsx
<ContentCarousel copy="en" variant="card">
  <ContentCarousel.Item
    picture={<Image src="carousel-example-1.jpg" width={1168} height={876} alt="Woman smiling" />}
  >
    <Paragraph bold>Mobility for Good</Paragraph>
    <Heading level="h2">Helping youth achieve independence</Heading>
    <Paragraph>
      For youth leaving foster care, their phone can be their lifeline, helping them build credit,
      search for somewhere to live, find education and job opportunities, and stay in touch with
      friends and vital support networks. A collaboration between TELUS and Children’s Aid
      Foundation of Canada (CAFC) and select Centre de Jeunesse Foundations, Mobility for GoodTM
      helps these kids achieve independence by providing them with a free phone and a $0 plan,
      including 3 GB of data for two years.
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
      serve is important to us. So is providing inclusive access to our products, services and
      solutions for persons of all abilities. Through our Tech for GoodTM program, TELUS customers
      with disabilities who require assistive technology such as additional hardware or software to
      independently use their smartphone or tablet can receive specialized assistance, tools and
      training. In some cases, we also offer financial assistance to help cover the cost of
      assistive technology*.
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
      But for less fortunate families, it can still be a struggle. 42% of low-income homes don’t
      have internet. Internet for GoodTM is an innovative partnership between TELUS, the British
      Columbia Ministry of Social Development and Poverty Reduction, and the Ministry of Community
      and Social Services in Alberta that provides eligible families with the tools and connectivity
      they need to succeed.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```

## Picture Side

It's possible to change the side the `Image` supplied through the `picture` prop appears on in each slide. This is accomplished by providing either the directions `"left"` or `"right"` to the `pictureSide` prop.

```jsx
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
      For youth leaving foster care, their phone can be their lifeline, helping them build credit,
      search for somewhere to live, find education and job opportunities, and stay in touch with
      friends and vital support networks. A collaboration between TELUS and Children’s Aid
      Foundation of Canada (CAFC) and select Centre de Jeunesse Foundations, Mobility for GoodTM
      helps these kids achieve independence by providing them with a free phone and a $0 plan,
      including 3 GB of data for two years.
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
      serve is important to us. So is providing inclusive access to our products, services and
      solutions for persons of all abilities. Through our Tech for GoodTM program, TELUS customers
      with disabilities who require assistive technology such as additional hardware or software to
      independently use their smartphone or tablet can receive specialized assistance, tools and
      training. In some cases, we also offer financial assistance to help cover the cost of
      assistive technology*.
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
      But for less fortunate families, it can still be a struggle. 42% of low-income homes don’t
      have internet. Internet for GoodTM is an innovative partnership between TELUS, the British
      Columbia Ministry of Social Development and Poverty Reduction, and the Ministry of Community
      and Social Services in Alberta that provides eligible families with the tools and connectivity
      they need to succeed.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```

## TEST Variant

```jsx
<ContentCarousel copy="en" variant="card">
  <ContentCarousel.Item
    picture={<Image src="carousel-example-1.jpg" width={1168} height={876} alt="Woman smiling" />}
  >
    <Paragraph bold>Mobility for Good</Paragraph>
    <Heading level="h2">Helping youth achieve independence</Heading>
    <Paragraph>
      For youth leaving foster care, their phone can be their lifeline, helping them build credit,
      search for somewhere to live, find education and job opportunities, and stay in touch with
      friends and vital support networks. A collaboration between TELUS and Children’s Aid
      Foundation of Canada (CAFC) and select Centre de Jeunesse Foundations, Mobility for GoodTM
      helps these kids achieve independence by providing them with a free phone and a $0 plan,
      including 3 GB of data for two years.
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
      serve is important to us. So is providing inclusive access to our products, services and
      solutions for persons of all abilities. Through our Tech for GoodTM program, TELUS customers
      with disabilities who require assistive technology such as additional hardware or software to
      independently use their smartphone or tablet can receive specialized assistance, tools and
      training. In some cases, we also offer financial assistance to help cover the cost of
      assistive technology*.
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
      But for less fortunate families, it can still be a struggle. 42% of low-income homes don’t
      have internet. Internet for GoodTM is an innovative partnership between TELUS, the British
      Columbia Ministry of Social Development and Poverty Reduction, and the Ministry of Community
      and Social Services in Alberta that provides eligible families with the tools and connectivity
      they need to succeed.
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
    <Paragraph bold>WWWWWWW for Good</Paragraph>
    <Heading level="h2">Connecting families in need</Heading>
    <Paragraph>
      Having access to reliable internet is increasingly important in today’s interconnected world.
      But for less fortunate families, it can still be a struggle. 42% of low-income homes don’t
      have internet. Internet for GoodTM is an innovative partnership between TELUS, the British
      Columbia Ministry of Social Development and Poverty Reduction, and the Ministry of Community
      and Social Services in Alberta that provides eligible families with the tools and connectivity
      they need to succeed.
    </Paragraph>
  </ContentCarousel.Item>
</ContentCarousel>
```
