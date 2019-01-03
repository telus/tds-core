# Colour

## Overview

Colour creates visual impact and distinguishes a brand. It conveys personality, attracts the eye and indicates change.

Our main brand colours are white, purple and green. White is the most dominant colour in our palette and should be the
foundation of every page. Purple and green are used to accent white space through buttons, text colour, and links.

All colours used to convey non-redundant information must meet WCAG 2.0 Level AA contrast ratio of at least 4.5:1.

The following colours are specific to digital experiences. For the full guidelines on using colour, including traditional
media and other forms of communications, visit [BrandHub](https://brand.telus.com).

## Usage

For Buttons, Links, Headings and Body copy only use the following colours:

<div class="color__swatch">
  <div class="color">
    <div class="color__preview" style="background-color: #248700;"></div>
    <p><strong>Accessible Green</strong></p>
<pre><code>Hex: #248700
Sass: $color-accessible-green</code></pre>
    <p>Usage: Primary button backgrounds/outline, text links</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #66CC00;"></div>
    <p><strong>TELUS Green</strong></p>
<pre><code>Hex: #66CC00
Sass: $color-telus-green</code></pre>
    <p>Usage: Decorative elements (graphs/charts). Use only for decorative items (when it doesn't need to be colour accessible)</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #4B286D;"></div>
    <p><strong>TELUS Purple</strong></p>
<pre><code>Hex: #4B286D
Sass: $color-telus-purple</code></pre>
    <p>Usage: Headings, secondary button background/outline, chevron links</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #2A2C2E;"></div>
    <p><strong>Shark</strong></p>
<pre><code>Hex: #2A2C2E
Sass: $color-shark</code></pre>
    <p>Usage: Sub headings (H3, H4), body text, and focus form objects borders</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #54595F;"></div>
    <p><strong>Shuttle Grey</strong></p>
<pre><code>Hex: #54595F
Sass: $color-shuttle-grey</code></pre>
    <p>Usage: Colour for default links</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #FFFFFF;"></div>
    <p><strong>White</strong></p>
<pre><code>Hex: #FFFFFF
Sass: $color-white</code></pre>
    <p>Usage: Page background, inverted links/buttons</p>
  </div>
</div>

## Exceptions

These colours are not part of the TELUS brand colour palette, however are used sparingly, but intentionally to play a
functional role and support a positive user experience. Example uses include notifications, errors and messaging.

<div class="color__swatch">
  <div class="color">
    <div class="color__preview" style="background-color: #C12335;"></div>
    <p><strong>Cardinal</strong></p>
<pre><code>Hex: #C12335
Sass: $color-cardinal</code></pre>
    <p>Usage: Error body text and icons</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #FFF6F8;"></div>
    <p><strong>Lavender Blush</strong></p>
<pre><code>Hex: #FFF6F8
Sass: $color-lavender-blush</code></pre>
    <p>Usage: Notification/error messaging background</p>
  </div>
    
  <div class="color">
    <div class="color__preview" style="background-color: #F2EFF4;"></div>
    <p><strong>White Lilac</strong></p>
<pre><code>Hex: #F2EFF4
Sass: $color-white-lilac</code></pre>
    <p>Usage: Branded messaging background</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #D8D8D8;"></div>
    <p><strong>Gainsboro</strong></p>
<pre><code>Hex: #D8D8D8
Sass: $color-gainsboro</code></pre>
    <p>Usage: Horizontal, vertical and wave dividers</p>
  </div>
  
  <div class="color">
    <div class="color__preview" style="background-color: #F7F7F8;"></div>
    <p><strong>Athens Grey</strong></p>
<pre><code>Hex: #F7F7F8
Sass: $color-athens-grey</code></pre>
    <p>Usage: Helper/disabled state background</p>
  </div>
    
  <div class="color">
    <div class="color__preview" style="background-color: #F4F9F2;"></div>
    <p><strong>Panache</strong></p>
<pre><code>Hex: #F4F9F2
Sass: $color-panache</code></pre>
    <p>Usage: Success messaging background</p>
  </div>
</div>

## Governance

The TELUS digital colour palette is mandated by the TELUS Brand team and should not be adjusted without explicit approval. If
you should have any questions regarding implementation, please [get in touch with us](../contact.md).

## Roadmap

- v1.0: Basic colour palette implemented as Sass variables
- Expose colour tokens to JavaScript
- Expand the colour palette to include more shade/tints of specific hues of colour
- Adopt a more semantically naming scheme
- Document and codify accessible colour combinations
