
## Overview

Colour creates visual impact and distinguishes a brand. It conveys personality, attracts the eye and indicates change. At a minimum; colours use the WCAG 2.0 Level AA contrast ratio of at least 4.5:1.

These colours are use cases and are intended to be specific to digital experiences only. For the full guidelines on using colour, including traditional media and other forms of communications, visit [BrandHub](https://brand.telus.com/guidelines/telus-colours).

## Brand colours

White is the most dominant colour in our palette and should be the foundation of every page. Purple and green are used to accent white space through buttons, text colour, and links.

For more insight in how we use whitespace and our colour palette, go to [BrandHub](http://brand.telus.com/).

## Buttons / links / headings / body

```jsx noeditor
<div className="container colors">
  <div className="grid-row">
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(36,135,0)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Accessible Green</Strong></Paragraph>
        <Paragraph>$color-accessible-green</Paragraph>
        <Paragraph>Hex: #248700</Paragraph>
        <Paragraph>Usage: Primary button backgrounds/outline, text links</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(102, 204, 0)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>TELUS Green</Strong></Paragraph>
        <Paragraph>$color-telus-green</Paragraph>
        <Paragraph>Hex: #66CC00</Paragraph>
        <Paragraph>Usage: Decorative elements (graphs/charts).</Paragraph>
        <Paragraph>Use only for decorative items (when it doesn't need to be colour accessible)</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(75,40,109)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>TELUS Purple</Strong></Paragraph>
        <Paragraph>$color-telus-purple</Paragraph>
        <Paragraph>Hex: #4B286D</Paragraph>
        <Paragraph>Usage: Headings, secondary button background/outline, chevron links</Paragraph>
      </Box>
    </div>
  </div>
  <div className="grid-row">
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(42, 44, 46)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Shark</Strong></Paragraph>
        <Paragraph>$color-shark</Paragraph>
        <Paragraph>Hex: #2A2C2E</Paragraph>
        <Paragraph>Usage: Sub headings (H3, H4), body text, and focus form objects borders</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(84,89,95)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Shuttle Grey</Strong></Paragraph>
        <Paragraph>$color-shuttle-grey</Paragraph>
        <Paragraph>Hex: #54595F</Paragraph>
        <Paragraph>Usage: Colour for default links</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(255, 255, 255)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>White</Strong></Paragraph>
        <Paragraph>$color-white</Paragraph>
        <Paragraph>Hex: #FFFFFF</Paragraph>
        <Paragraph>Usage: Page background, inverted links/buttons</Paragraph>
      </Box>
    </div>
  </div>
</div>
```

## Notifications / messaging / errors

These colours are not part of the TELUS brand colour palette, however are used sparingly, but intentionally to play a functional role and support a positive user experience.

```jsx noeditor
<div className="container colors">
  <div className="grid-row">
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(193,35,53)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Cardinal</Strong></Paragraph>
        <Paragraph>$color-cardinal</Paragraph>
        <Paragraph>Hex: #C12335</Paragraph>
        <Paragraph>Usage: Error body text and icons</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(255,246,248)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Lavender Blush</Strong></Paragraph>
        <Paragraph>$color-lavender-blush</Paragraph>
        <Paragraph>Hex: #FFF6F8</Paragraph>
        <Paragraph>Usage: Notification/error messaging background</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(242,239,244)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>White Lilac</Strong></Paragraph>
        <Paragraph>$color-white-lilac</Paragraph>
        <Paragraph>Hex: #F2EFF4</Paragraph>
        <Paragraph>Usage: Branded messaging background</Paragraph>
      </Box>
    </div>
  </div>
  <div className="grid-row">
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(216,216,216)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Gainsboro</Strong></Paragraph>
        <Paragraph>$color-gainsboro</Paragraph>
        <Paragraph>Hex: #D8D8D8</Paragraph>
        <Paragraph>Usage: Horizontal, vertical and wave dividers</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(247,247,248)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Athens Grey</Strong></Paragraph>
        <Paragraph>$color-athens-grey</Paragraph>
        <Paragraph>Hex: #F7F7F8</Paragraph>
        <Paragraph>Usage: Helper/disabled state background</Paragraph>
      </Box>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(244,249,242)'}}></span>
      <Box between={3} below={3}>
        <Paragraph><Strong>Panache</Strong></Paragraph>
        <Paragraph>$color-panache</Paragraph>
        <Paragraph>Hex: #F4F9F2</Paragraph>
        <Paragraph>Usage: Success messaging background</Paragraph>
      </Box>
    </div>
  </div>
</div>
```
