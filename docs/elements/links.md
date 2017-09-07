<span class="docs--badge cardinal">deprecated</span>

**The link CSS classes are deprecated and should not be used. Use the [Links](#links-1) component instead.**

## Text links

---

Text links are interactive elements. They can be used within body paragraphs or as stand alone elements.

### Body Style

The underline style distinguishes these as interactive elements.

- Use descriptive hyperlinks (e.g. “log into your account”), not just “click here” or “learn more”
- Use sentence case

### Standard links

<div class="example example--type">
  <p><a href="#" class="link link--descent">Fleet tracking</a> helps you track your moving pieces. <a href="#" class="link link--descent">Contact centres</a> win loyal customers. <a href="#" class="link link--descent">Security solutions</a> keep it all where it should be.</p>
</div>

```html
<p>
  <a href="#" class="link link--descent">Fleet tracking</a> helps you track your moving pieces.
  <a href="#" class="link link--descent">Contact centres</a> win loyal customers.
  <a href="#" class="link link--descent">Security solutions</a> keep it all where it should be.
</p>
```

### Primary Colour links

<div class="example example--type">
    <a href="#" class="link link--primary link--descent">View the current page</a>
</div>

```html
<a href="#" class="link link--primary link--descent">View the current page</a>
```

### Secondary Color links

<div class="example example--type">
    <a href="#" class="link link--secondary link--descent">View the current page</a>
</div>

```html
<a href="#" class="link link--secondary link--descent">View the current page</a>
```

### Inverted links on Primary Color Background

<div class="example example--inverted example--primary">
    <a href="#" class="link link--primary link--inverted link--descent">
        Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--primary link--inverted link--descent text--medium">
        Medium/Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--primary link--inverted link--descent text--small">
        Small/Lorem ipsum
    </a>
</div>

```html
<a href="#" class="link link--primary link--inverted link--descent">
    Lorem ipsum
</a>
<br/>
<a href="#" class="link link--primary link--inverted link--descent text--medium">
    Medium/Lorem ipsum
</a>
<br/>
<a href="#" class="link link--primary link--inverted link--descent text--small">
    Small/Lorem ipsum
</a>
```

### Inverted links on Secondary Color Background
<div class="example example--inverted example--secondary">
    <a href="#" class="link link--secondary link--inverted link--descent">
        Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--secondary link--inverted link--descent text--medium">
        Medium/Lorem ipsum
    </a>
    <br/>
    <a href="#" class="link link--secondary link--inverted link--descent text--small">
        Small/Lorem ipsum
    </a>
</div>

```html
<a href="#" class="link link--secondary link--inverted link--descent">
    Lorem ipsum
</a>
<br/>
<a href="#" class="link link--secondary link--inverted link--descent text--medium">
    Medium/Lorem ipsum
</a>
<br/>
<a href="#" class="link link--secondary link--inverted link--descent text--small">
    Small/Lorem ipsum
</a>
```

### "Clear descenders" modifier

You'll notice the text links include a `link--descent` modifier. This class creates a custom underline which doesn't intersect with the descenders of lowercase letters. There are a few requirements for using this style:

* Opt-in by applying `link--descent` class to a hyperlink
* The text must be on a *known*, solid background color.
    * White background for normal links
    * Telus Grape or Accessible Green background for inverted links

## Chevron Links

---

### Primary Color Chevron Links

<a href="#" class="chevron-link--primary">Large/link</a>

<a href="#" class="text--medium chevron-link--primary">Medium/link</a>

<a href="#" class="text--small chevron-link--primary">Small/link</a>


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

### Secondary Color Chevron Links

<a href="#" class="chevron-link--secondary">Large/link</a>

<a href="#" class="text--medium chevron-link--secondary">Medium/link</a>

<a href="#" class="text--small chevron-link--secondary">Small/link</a>


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
  <a href="#" class="chevron-link chevron-link--inverted">Large/link</a>
  <br>
  <a href="#" class="text--medium chevron-link chevron-link--inverted">Medium/link</a>
  <br>
  <a href="#" class="text--small chevron-link chevron-link--inverted">Small/link</a>
</div>

<div class="example example--inverted example--secondary">
  <a href="#" class="chevron-link chevron-link--inverted">Large/link</a>
  <br>
  <a href="#" class="text--medium chevron-link chevron-link--inverted">Medium/link</a>
  <br>
  <a href="#" class="text--small chevron-link chevron-link--inverted">Small/link</a>
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
