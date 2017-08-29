
## Overview

---

TDS' primary typeface is Helvetica Neue, a robust typeface with legible numbers that renders well at all sizes. It’s designed with precision and it commands respect, however, It is a friendly, sophisticated, and neutral typeface which never detracts from content.

For more details on how to use type, and copywriting guidelines, visit [BrandHub](https://brand.telus.com/guidelines/writing-conventions).

## Principles

---

### Hierarchy

Hierarchy signifies importance by structuring something to be more or less obvious. It clearly communicates a change from one level of content to another. Typography uses weight and size to create hierarchy. Primary content uses large/body with varying headline and subtitle size and secondary content uses small/body.

### Weight

Weight is used to create proportional contrast throughout the various sizes of typography. It’s intentionally applied to specific sizes to enhance readability and legibility across devices and platforms. Smaller sizes make use of heavier weights and larger sizes use lighter weights.

### Scale

Scale creates consistency in sizing across elements. Modular scaling was used to create type size in a more meaningful way. Users and content will differentiate between experiences so a global ratios construct scale.

**Headlines:** A base size of 28px is set for headings. Headings scale down to an augmented fourth. Take your heading point size divide it by 1.414 and round to the nearest whole number for mobile.

**Body, Links:** A base size of 16px is set for body copy. As we scale things responsively text values remain the same throughout.

### Type leading

To create consistent leading the line height is set to double the value of the baseline. Point size plus 8 equals your line height.

### Sentence case

* Easier to read in long titling
* Easier to spot proper nouns
* Easier to explain the format to designer and developers
* Looks friendlier and less formal


## Fonts for Sketch and Webfonts
---

- Helvetica Neue LT Std 35 Thin (css: `font-weight: 300;`)
- Helvetica Neue LT Std 45 Light (css: `font-weight: 400;`)
- Helvetica Neue LT Std 55 Roman (css: `font-weight: 500;`)
- Helvetica Neue LT Std 65 Medium (css: `font-weight: 700;`)

### Web-backup:

- Arial W01 Regular
- Arial W02 Bold


## Headings

**The Headings CSS classes are deprecated and should not be used. Use the [Display Heading](#displayheading) and [Heading](#heading) components instead.**

---

- Use sentence case for headings
- Use headings consistently to create a clear hierarchy
- Terminate headlines with a period if they are complete sentences, but not if they are short fragments
- Headings contain no paragraph styling.


<br>

<h1 class="display-heading-1">Display Heading 1</h1>

To be used in Hero Banners. Text within it should only wrap to a maximum of 2 lines.

```html
<h1 class="display-heading-1">Heading 1</h1>
```

<div class="heading-1">Heading 1</div>

Primary headlines, tops of category pages.

```html
<h1>Heading 1</h1>
<div class="heading-1">Heading 1</div>
```

<div class="heading-2">Heading 2</div>

Secondary headlines, tops of content compartments.

```html
<h2>Heading 2</h2>
<div class="heading-2">Heading 2</div>
```

<div class="heading-3">Heading 3</div>

Tertiary headline; tops of content buckets.

```html
<h3>Heading 3</h3>
<div class="heading-3">Heading 3</div>
```

<div class="heading-4">Heading 4</div>

Quaternary headline.

```html
<h4>Heading 4</h4>
<div class="heading-4">Heading 4</div>
```

## Body & Subhead

---

### Standard text

Primary copy; highest importance level of content.

<div class="example example--type">
    <header class="heading-3">Example</header>
    <p>Large body text.</p>
    <div class="text">Also large body text.</div>
</div>

```html
<!-- This is the default style, but can also be applied with .text -->
<p>Large body text.</p>
<div class="text">Also large body text.</div>
```

### Medium text

Secondary copy; content of lesser importance.

<div class="example example--type">
    <header class="heading-3">Example</header>
    <p class="text text--medium">Medium body text</p>
</div>

```html
<p class="text text--medium">Medium body text</p>
```

### Small text

Tertiary copy; lowest importance level of of content.

<div class="example example--type">
    <header class="heading-3">Example</header>
    <div class="text text--small">Small body text.</div>
    <small>This is also small body text.</small>
</div>

```html
<div class="text text--small">Small body text.</div>
<small>This is also small body text.</small>
```

### Line Length

The ideal line length for body copy is considered to be 50-75 characters per line with the inclusion of spaces. The best way to achieve an optimal character count per line is by putting constraints around how many columns your text block spans.

Too wide – if a line of text is too long, the user’s eye will have a hard time focusing on the text. This is because the length makes it difficult to get an idea of where the line starts and ends. Furthermore it can be difficult to continue from the correct line in large blocks of text.”

Too narrow – if a line is too short, the eye will have to travel back too often, breaking the reader’s rhythm. Too short lines also tend to stress people, making them begin on the next line before finishing the current one (hence skipping potentially important words)
