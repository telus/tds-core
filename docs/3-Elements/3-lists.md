---
title: Lists
template: doc.jade
---

## Overview
---

<ul class="list">
    <li>Try to keep lists consistent: either all fragments or all sentences</li>
    <li>Start each bullet with a capital letter</li>
    <li>Do not end sentence with a period</li>
    <li>Limit to one sentence each if possible. If you need to use two sentences, add a period after the first sentence (like this). Omit the period in last sentence, to match the other points</li>
</ul>

## Bulleted list

---

Use the `.list` block on a `<ul>` element to create a list in which the order of items is not important.

Since the "purple bullet" design inserts a pseudo element to control color, the `.list` block allows consumers to opt-in to this style without breaking non-bulleted lists.

<div class="subhead">Example bulleted list</div>

<ul class="list">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list">
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ul>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="list">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list">
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ul>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Small bulleted list

Modify `<ul>` with `.text--small` to create a list with small type.

<div class="subhead">Example small bulleted list</div>

<ul class="list text text--small">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list">
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ul>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="list text text--small">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list">
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ul>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>
```


## Numbered list

---

The `<ol>` element marks up a list in which the items are in numerical order.

<div class="subhead">Example numbered list</div>

<ol>
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol>
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ol>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ol>

```html
<ol>
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol>
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ol>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ol>
```

### Small numbered list

Modify `<ol>` with `.text--small` to make an ordered list with small type.

<div class="subhead">Example small numbered list</div>

<ol class="text text--small">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol>
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ol>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ol>

```html
<ol class="text text--small">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol>
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ol>
    </li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ol>
```

## Check list

---

Apply the `.checklist` class to a `<ul>` element in order to make a list with green check marks as bullets.

<div class="subhead">Example check list</div>

<ul class="checklist">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="checklist">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Small check list

Modify `<ul>` with `.text--small` to make a check list with small type and check marks.

<div class="subhead">Example small check list</div>

<ul class="checklist text text--small">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="checklist text text--small">
    <li>Nunc condimentum non est sed rutrum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Aenean efficitur ut nibh in tempor</li>
</ul>
```


## Mixed lists

---

Lists of different types can be nested inside each other. Child `<ul>` and `<ol>` tags should be placed *inside* an `<li>` tag (they shouldn't be direct descendants of a `<ul>` or `<ol>`).

<div class="subhead">Example mixed lists</div>

<ol>
    <li>Nunc condimentum non est sed rutrum
        <ul class="checklist">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Aenean efficitur ut nibh in tempor</li>
        </ul>
    </li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list">
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ul>
    </li>
</ol>
<ul class="list">
    <li>Nunc condimentum non est sed rutrum
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <ol>
                    <li>Nunc condimentum non est sed rutrum</li>
                </ol>
            </li>
            <li>Aenean efficitur ut nibh in tempor</li>
        </ol>
    </li>
</ul>

```html
<ol>
    <li>Nunc condimentum non est sed rutrum
        <ul class="checklist">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Aenean efficitur ut nibh in tempor</li>
        </ul>
    </li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list">
            <li>Quisque tincidunt dolor</li>
            <li>Nulla non ligula neque</li>
        </ul>
    </li>
</ol>
<ul class="list">
    <li>Nunc condimentum non est sed rutrum
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <ol>
                    <li>Nunc condimentum non est sed rutrum</li>
                </ol>
            </li>
            <li>Aenean efficitur ut nibh in tempor</li>
        </ol>
    </li>
</ul>
```

## Examples

---

You can see more of these styles in action on the [lists section of the typography examples page](/examples/typography.html#lists).