---
title: Typography
template: doc.jade
---

## Overview

---

TDS' primary typeface is Helvetica Neue, a robust typeface with legible numbers that renders well at all sizes. It’s designed with precision and it commands respect, however, It is a friendly, sophisticated, and neutral typeface which never detracts from content.

* [Principles](#principles)
* [Fonts](#fonts)
* [Headings](#headings)
* [Text links](#text-links)
* [Chevron links](#chevron-links)
* [Examples](/examples/typography.html)


## Principles

---

### Hierarchy

Hierarchy signifies importance by structuring something to be more or less obvious. It clearly communicates a change from one level of content to another. Typography uses weight and size to create hierarchy. Primary content uses large/body with varying headline and subtitle size and secondary content uses small/body.

### Weight

Weight is used to create proportional contrast throughout the various sizes of typography. It’s intentionally applied to specific sizes to enhance readability and legibility across devices and platforms. Smaller sizes make use of heavier weights and larger sizes use lighter weights.

### Scale

Scale creates consistency in sizing across elements. Modular scaling was used to create type size in a more meaningful way. Users and content will differentiate between experiences so a global ratios construct scale.

**Headlines:** A base size of 28px is set for headings. Headings scale down to an augmented fourth. Take your heading point size divide it by 1.414 and round to the nearest whole number for mobile.

**Body, Sub & Links:** A base size of 16px is set for body & subhead copy. As we scale things responsively text values remain the same throughout.

### Type leading

To create consistent leading the line height is set to double the value of the baseline. Point size plus 8 equals your line height.

### Sentence case

* Easier to read in long titling
* Easier to spot proper nouns
* Easier to explain the format to designer and developers
* Looks friendlier and less formal


## Fonts
---

### Web:

- Neue Helvetica W01 35 Thin
- Helvetica Neue For BBC W01 45 Light
- Helvetica Neue For BBC 55 Roman

### Web-backup:

- Arial W01 Regular
- Arial W02 Bold

### Desktop/Sketch:

- Helvetica Neue LT Std 35 Thin
- Helvetica Neue LT Std 45 Light
- Helvetica Neue LT Std 55 Roman
- Helvetica Neue LT Std 65 Medium


## Headings

---

- Use sentence case for headings
- Use headings consistently to create a clear hierarchy
- Terminate headlines and subheads with a period if they are complete sentences, but not if they are short fragments
- Headings contain no paragraph styling.


<br>

# Display Heading 1

To be used in Hero Banners. Text within it should only wrap to a maximum of 2 lines.

```html
<h1 class="display-heading-1">Heading 1</h1>
```

# Heading 1

Primary headlines, tops of category pages.

```html
<h1>Heading 1</h1>
<div class="heading-1">Heading 1</div>
```

## Heading 2

Secondary headlines, tops of content compartments.

```html
<h2>Heading 2</h2>
<div class="heading-2">Heading 2</div>
```

### Heading 3

Tertiary headline; tops of content buckets.

```html
<h3>Heading 3</h3>
<div class="heading-3">Heading 3</div>
```

#### Heading 4

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
    <div class=" text text--small">Small body text.</div>
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

**Max span**

**large/subhead & large/body**

* xs -- medium viewports: 10 columns
* large -- xl viewports: 8 columns

**small/subhead & small/body**

* xs -- medium viewports: 10 columns
* large viewport: 8 columns
* xl viewport: 6 columns


## Text links

---

Text links are interactive elements. They can be used within body paragraphs or as stand alone elements.

### Body Styles

The large and small text links inherit their parent styles; body large and body small. They are meant to work with their parents and not be crossed matched. Colour establishes importance, where green is primary and grey is secondary. Primary and secondary links, contained to their parent groupings (i.e lg or sm) can be used next to one another or in isolation. The underline style distinguishes these as interactive elements.

- Use descriptive hyperlinks (e.g. “log into your account”), not just “click here” or “learn more”
- Use sentence case

### Primary links

body/large/link-primary-normal<br>
body/large/link-primary-hover

*Usage: Highest importance level of content*

<div class="example example--type">
    <header class="heading-3">Example</header>
    <a href="#" class="link link--descent">View the current page</a>
</div>

```html
<a href="#" class="link link--descent">View the current page</a>
```

### Small primary links

body/small/link-primary-normal<br>
body/small/link-primary-hover

*Usage: Lowest importance level of content*

<div class="example example--type">
    <header class="heading-3">Example</header>
    <small><a href="#" class="link link--descent">View another page</a></small>
</div>

```html
<small><a href="#" class="link link--descent">View another page</a></small>
```

### Inverted links

<div class="example example--inverted">
    <a href="#" class="link link--inverted link--descent">
        Large/link
    </a>
    <br>
    <small>
        <a href="#" class="link link--inverted link--descent">
            Small/link
        </a>
    </small>
</div>

```html
<a href="#" class="link link--inverted link--descent">
    Large/link
</a>

<small>
    <a href="#" class="link link--inverted link--descent">
        Small/link
    </a>
</small>
```

### "Clear descenders" modifier

You'll notice these links include a `link--descent` modifier. This class creates a custom underline which doesn't intersect with the descenders of lowercase letters. There are a few requirements for using this style:

* Opt-in by applying the `.link .link--descent` classes to a hyperlink
* The text must be on a known, solid background color.
    * White background for normal links
    * Grape background for inverted links

## Chevron Links

---

### Primary chevrons

Clickable product names, clickable subheads that  are page/category titles.

<a href="#" class="chevron-link">
    Large/link
    <i class="icon icon-core-chevron"></i>
</a>

<small>
    <a href="#" class="chevron-link">
        Small/link
        <i class="icon icon-core-chevron"></i>
    </a>
</small>

```html
<a href="#" class="chevron-link">
    Large/link
    <i class="icon icon-core-chevron"></i>
</a>

<small>
    <a href="#" class="chevron-link">
        Small/link
        <i class="icon icon-core-chevron"></i>
    </a>
</small>
```

### Secondary chevrons

 CTAs such as ‘View All’, ‘Learn more’, CTAs below typestacks that dives deeper on a topic.

<a href="#" class="chevron-link chevron-link--secondary">
    Large/link
    <i class="icon icon-core-chevron"></i>
</a>

<small>
    <a href="#" class="chevron-link chevron-link--secondary">
        Small/link
        <i class="icon icon-core-chevron"></i>
    </a>
</small>

```html
<a href="#" class="chevron-link chevron-link--secondary">
    Large/link
    <i class="icon icon-core-chevron"></i>
</a>

<small>
    <a href="#" class="chevron-link chevron-link--secondary">
        Large/link
        <i class="icon icon-core-chevron"></i>
    </a>
</small>
```

### Inverted chevrons

<div class="example example--inverted">
    <a href="#" class="chevron-link chevron-link--inverted">
        Large/link
        <i class="icon icon-core-chevron"></i>
    </a>
    <br>
    <small>
        <a href="#" class="chevron-link chevron-link--inverted">
            Small/link
            <i class="icon icon-core-chevron"></i>
        </a>
    </small>
</div>

```html
<a href="#" class="chevron-link chevron-link--inverted">
    Large/link
    <i class="icon icon-core-chevron"></i>
</a>

<small>
    <a href="#" class="chevron-link chevron-link--inverted">
        Small/link
        <i class="icon icon-core-chevron"></i>
    </a>
</small>
```

## Examples

---

You can see more of these styles in action on the [typography examples page](/examples/typography.html).
