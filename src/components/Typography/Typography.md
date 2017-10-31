Typography components replace standard HTML dom (`<Paragraph>` instead of `<p>`) in order to provide maintainable
font styles.

## Overview

TDS' primary typeface is Helvetica Neue, a robust typeface with legible numbers that renders well at all sizes. It’s designed with precision and it commands respect, however, It is a friendly, sophisticated, and neutral typeface which never detracts from content.

For more details on how to use type, and copywriting guidelines, visit [BrandHub](https://brand.telus.com/guidelines/writing-conventions).

## Principles

### Hierarchy

Hierarchy signifies importance by structuring something to be more or less obvious. It clearly communicates a change from one level of content to another. Typography uses weight and size to create hierarchy. Primary content uses large/body with varying headline and subtitle size and secondary content uses small/body.

### Weight

Weight is used to create proportional contrast throughout the various sizes of typography. It’s intentionally applied to specific sizes to enhance readability and legibility across devices and platforms. Smaller sizes make use of heavier weights and larger sizes use lighter weights.

### Scale

Scale creates consistency in sizing across elements. Modular scaling was used to create type size in a more meaningful way. Users and content will differentiate between experiences so a global ratios construct scale.

**Headlines:** A base size of 28px is set for headings. Headings scale down to an augmented fourth. Take your heading point size divide it by 1.414 and round to the nearest whole number for mobile.

**Body, links:** A base size of 16px is set for body copy. As we scale things responsively text values remain the same throughout.

### Type leading

To create consistent leading the line height is set to double the value of the baseline. Point size plus 8 equals your line height.

### Sentence case

* Easier to read in long titling
* Easier to spot proper nouns
* Easier to explain the format to designer and developers
* Looks friendlier and less formal

## Fonts for Sketch and webfonts

- Helvetica Neue LT Std 35 Thin (css: `font-weight: 300;`)
- Helvetica Neue LT Std 45 Light (css: `font-weight: 400;`)
- Helvetica Neue LT Std 55 Roman (css: `font-weight: 500;`)
- Helvetica Neue LT Std 65 Medium (css: `font-weight: 700;`)

### Web-backup:

- Arial W01 Regular
- Arial W02 Bold

### Line length

The ideal line length for body copy is considered to be 50-75 characters per line with the inclusion of spaces. The best way to achieve an optimal character count per line is by putting constraints around how many columns your text block spans.

Too wide – if a line of text is too long, the user’s eye will have a hard time focusing on the text. This is because the length makes it difficult to get an idea of where the line starts and ends. Furthermore it can be difficult to continue from the correct line in large blocks of text.”

Too narrow – if a line is too short, the eye will have to travel back too often, breaking the reader’s rhythm. Too short lines also tend to stress people, making them begin on the next line before finishing the current one (hence skipping potentially important words)

## Spacing system

Typography components **do not** have built-in padding or margin. For the interim, designers are strongly
advised to follow TDS Sketch assets for spacing rules in order for developers to properly apply the correct spacing between
related components.

For example, a `<Paragraph>` component immediately following a `<Heading>` component would require `1rem` spacing between
them. For this case, we recommend:

```
<div>
  <Heading level="h2">Great Deals</Heading>

  <div style={{paddingTop: '1rem'}}>
    <Paragraph>
      See how this great deal can benefit you and your shared lines.
    </Paragraph>
  </div>
</div>
```
