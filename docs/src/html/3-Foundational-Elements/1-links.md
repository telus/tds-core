---
title: Links
template: doc.jade
---

* [Text links](#text-links)
* [Chevron links](#chevron-links)
* [Examples](/examples/links.html)

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
    <a href="#" class="link--primary link--primary-descent">View the current page</a>
</div>

```html
<a href="#" class="link--primary link--primary-descent">View the current page</a>
```

<p class="text--small">Note: We are not including `.link` because of the descent class that provides the fancy underline clashes with the default gray underline.</p>

### Secondary links

<div class="example example--type">
    <a href="#" class="link--secondary link--secondary-descent">View the current page</a>
</div>

```html
<a href="#" class="link--secondary link--secondary-descent">View the current page</a>
```
<p class="text--small">Note: We are not including `.link` because of the descent class that provides the fancy underline clashes with the default gray underline.</p>

### Primary Inverted links

<div class="example example--inverted example--primary">
    <a href="#" class="link link--primary link--inverted link--inverted-descent">
        Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--primary link--inverted link--inverted-descent text--medium">
        Medium/Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--primary link--inverted link--inverted-descent text--small">
        Small/Lorem ipsum
    </a>
</div>

```html
<a href="#" class="link link--primary link--inverted link--inverted-descent">
    Lorem ipsum
</a>
<br/>
<a href="#" class="link link--primary link--inverted link--inverted-descent text--medium">
    Medium/Lorem ipsum
</a>
<br/>
<a href="#" class="link link--primary link--inverted link--inverted-descent text--small">
    Small/Lorem ipsum
</a>
```

### Secondary Inverted links
<div class="example example--inverted example--secondary">
    <a href="#" class="link link--secondary link--inverted link--inverted-descent">
        Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--secondary link--inverted link--inverted-descent text--medium">
        Medium/Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--secondary link--inverted link--inverted-descent text--small">
        Small/Lorem ipsum
    </a>
</div>

```html
<a href="#" class="link link--secondary link--inverted link--inverted-descent">
    Lorem ipsum
</a>
<br/>
<a href="#" class="link link--secondary link--inverted link--inverted-descent text--medium">
    Medium/Lorem ipsum
</a>
<br/>
<a href="#" class="link link--secondary link--inverted link--inverted-descent text--small">
    Small/Lorem ipsum
</a>
```

### "Clear descenders" modifier

You'll notice the text links include a `link--descent` or `link--primary-descent` or `link--secondary-descent` or `link--inverted-descent` modifier. This classes creates a custom underline which doesn't intersect with the descenders of lowercase letters. There are a few requirements for using this style:

* Opt-in by applying `link--descent` or `link--primary-descent` or `link--secondary-descent` or `link--inverted-descent` class to a hyperlink
* The text must be on a *known*, solid background color.
    * White background for normal links
    * Grape or Green Forest background for inverted links

## Chevron Links

---

### Primary chevrons

<a href="#" class="chevron-link--primary">
    Large/link
</a>

<a href="#" class="text--medium chevron-link--primary">
    Medium/link
</a>

<a href="#" class="text--small chevron-link--primary">
    Small/link
</a>


```html
<a href="#" class="chevron-link--primary">
    Large/link
</a>

<a href="#" class="text--medium chevron-link--primary">
    Medium/link
</a>

<a href="#" class="text--small chevron-link--primary">
    Small/link
</a>
```

### Secondary chevrons

<a href="#" class="chevron-link--secondary">
    Large/link
</a>

<a href="#" class="text--medium chevron-link--secondary">
    Medium/link
</a>

<a href="#" class="text--small chevron-link--secondary">
    Small/link
</a>


```html
<a href="#" class="chevron-link--secondary">
    Large/link
</a>

<a href="#" class="text--medium chevron-link--secondary">
    Medium/link
</a>

<a href="#" class="text--small chevron-link--secondary">
    Small/link
</a>
```

### Inverted chevrons

<div class="example example--inverted example--primary">
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

<div class="example example--inverted example--secondary">
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
