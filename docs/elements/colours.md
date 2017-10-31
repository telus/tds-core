
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
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Accessible Green</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-accessible-green</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #248700</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Primary button backgrounds/outline, text links</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(102, 204, 0)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>TELUS Green</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-telus-green</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #66CC00</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Decorative elements (graphs/charts).</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Use only for decorative items (when it doesn't need to be colour accessible)</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(75,40,109)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>TELUS Purple</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-telus-purple</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #4B286D</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Headings, secondary button background/outline, chevron links</Paragraph></div>
    </div>
  </div>
  <div className="grid-row">
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(42, 44, 46)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Shark</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-shark</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #2A2C2E</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Sub headings (H3, H4), body text, and focus form objects borders</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(84,89,95)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Shuttle Grey</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-shuttle-grey</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #54595F</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Colour for default links</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(255, 255, 255)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>White</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-white</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #FFFFFF</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Page background, inverted links/buttons</Paragraph></div>
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
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Cardinal</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-cardinal</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #C12335</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Error body text and icons</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(255,246,248)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Lavender Blush</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-lavender-blush</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #FFF6F8</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Notification/error messaging background</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(242,239,244)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>White Lilac</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-white-lilac</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #F2EFF4</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Branded messaging background</Paragraph></div>
    </div>
  </div>
  <div className="grid-row">
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(216,216,216)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Gainsboro</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-gainsboro</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #D8D8D8</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Horizontal, vertical and wave dividers</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(247,247,248)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Athens Grey</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-athens-grey</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #F7F7F8</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Helper/disabled state background</Paragraph></div>
    </div>
    <div className="medium-4">
      <span className="color-preview" style={{backgroundColor: 'rgb(244,249,242)'}}></span>
      <div className="docs__paragraph-spacing"><Paragraph><Strong>Panache</Strong></Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>$color-panache</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Hex: #F4F9F2</Paragraph></div>
      <div className="docs__paragraph-spacing"><Paragraph>Usage: Success messaging background</Paragraph></div>
    </div>
  </div>
</div>
```
