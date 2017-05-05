---
title: Links
template: doc.jade
---

* [Text links](#text-links)
* [Chevron links](#chevron-links)
* [Examples](/examples/typography.html)

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
</a>

<a href="#" class="text--medium chevron-link">
    Medium/link
</a>


<a href="#" class="text--small chevron-link">
    Small/link
</a>


```html
<a href="#" class="chevron-link">
    Large/link
</a>

<a href="#" class="text--medium chevron-link">
    Medium/link
</a>

<a href="#" class="text--small chevron-link">
    Small/link
</a>
```

### Inverted chevrons

<div class="example example--inverted">
  <a href="#" class="chevron-link chevron-link--inverted">
    Large/link
  </a>
  <br>
  <a href="#" class="text--medium chevron-link chevron-link--inverted">
    Medium/link
  </a>
  <br>
  <a href="#" class="text--small chevron-link chevron-link--inverted">
    Small/link
  </a>
</div>

```html
<a href="#" class="chevron-link chevron-link--inverted">
  Large/link
</a>
<br>
<a href="#" class="text--medium chevron-link chevron-link--inverted">
  Medium/link
</a>
<br>
<a href="#" class="text--small chevron-link chevron-link--inverted">
  Small/link
</a>
```

## Examples

---

You can see more of these styles in action on the [typography examples page](/examples/typography.html).
