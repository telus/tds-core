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

### Body Style

The underline style distinguishes these as interactive elements.

- Use descriptive hyperlinks (e.g. “log into your account”), not just “click here” or “learn more”
- Use sentence case

### Standard links

<div class="example example--type">
    <a href="#" class="link link--descent">View the current page</a>
</div>

```html
<a href="#" class="link link--descent">View the current page</a>
```

### Primary links

<div class="example example--type">
    <a href="#" class="link link--primary link--descent">View the current page</a>
</div>

```html
<a href="#" class="link link--primary link--descent">View the current page</a>
```

### Secondary links

<div class="example example--type">
    <a href="#" class="link link--secondary link--descent">View the current page</a>
</div>

```html
<a href="#" class="link link--secondary link--descent">View the current page</a>
```

### Inverted links

<div class="example example--inverted">
    <a href="#" class="link link--inverted link--descent">
        Link
    </a>
    <br/>
    <a href="#" class="link link--inverted link--descent text--medium">
        Medium/link
    </a>
    <br/>
    <a href="#" class="link link--inverted link--descent text--small">
        Small/link
    </a>
</div>

```html
<a href="#" class="link link--inverted link--descent">
    Link
</a>
<br/>
<a href="#" class="link link--inverted link--descent text--medium">
    Medium/link
</a>
<br/>
<a href="#" class="link link--inverted link--descent text--small">
    Small/link
</a>
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
