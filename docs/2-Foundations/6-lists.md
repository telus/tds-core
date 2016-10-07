---
title: Lists
template: doc.jade
---

## Overview
---

* Try to keep lists consistent: either all fragments or all sentences
* Start each bullet with a capital letter
* Do not end sentence with a period
* Limit to one sentence each if possible. If you need to use two sentences, add a period after the first sentence (like this). Omit the period in last sentence, to match the other points

## Bulleted list

---

The `.list` block and `.list__item` element are the basic building blocks of any Thorium list. They apply the basic styles shared by all lists.

Modifiers such as `.list--bulleted` can change the bullet style and text formatting of a list. This particular modifier adds a purple bullet in front of each element.

Bulleted lists should be created using the `<ul>` tag since the order of their items is not important.

<ul class="list list--bulleted">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list list--bulleted">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ul>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="list list--bulleted">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list list--bulleted">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ul>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Small bulleted list

The `.list--small` modifier can be used on any type of list to create small type.

<ul class="list list--bulleted list--small">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list list--bulleted">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ul>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="list list--bulleted list--small">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list list--bulleted">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ul>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```


## Numbered list

---

The `.list--numbered` modifier and `<ol>` element mark up a list in which the items are in numerical order. The `.list--alpha` and `.list--alpha-lower` modifier are available for making nested lists beginning with letters instead of numbers.

<ol class="list list--numbered">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ol class="list list--alpha">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol class="list list--alpha-lower">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ol>

```html
<ol class="list list--numbered">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ol class="list list--alpha">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol class="list list--alpha-lower">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ol>
```

### Small numbered list

Just like creating a small version of a bulleted list, you can make a small numbered list with the `.list--numbered` and `.list--small` modifiers.

<ol class="list list--numbered list--small">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ol class="list list--alpha">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol class="list list--alpha-lower">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ol>

```html
<ol class="list list--numbered list--small">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ol class="list list--alpha">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ol class="list list--alpha-lower">
            <li class="list__item">Quisque tincidunt dolor</li>
            <li class="list__item">Nulla non ligula neque</li>
        </ol>
    </li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ol>
```

## Icon lists

---

### Check list

Display a green check marks as bullets by using `.list--checked` on a `<ul>` tag.

<ul class="list list--checked">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="list list--checked">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Small check list

<ul class="list list--checked list--small">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="list list--checked list--small">
    <li class="list__item">Nunc condimentum non est sed rutrum</li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Error list

The `.list--error` modifier places red "close" icons before each list item.

<ul class="list list--error">
    <li class="list__item">Error message 1</li>
    <li class="list__item">Error message 2</li>
</ul>

```html
<ul class="list list--error">
    <li class="list__item">Error message 1</li>
    <li class="list__item">Error message 2</li>
</ul>
```

### Small error list

<ul class="list list--error list--small">
    <li class="list__item">Error message 1</li>
    <li class="list__item">Error message 2</li>
</ul>

```html
<ul class="list list--error list--small">
    <li class="list__item">Error message 1</li>
    <li class="list__item">Error message 2</li>
</ul>
```


## Mixed lists

---

Lists of different types can be nested inside each other. Child `<ul>` and `<ol>` tags should be placed *inside* an `<li>` tag (they shouldn't be direct descendants of a `<ul>` or `<ol>`).

### Example mixed lists

<ol class="list list--numbered">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ul class="list list--checked">
            <li class="list__item">Lorem ipsum dolor sit amet</li>
            <li class="list__item">Aenean efficitur ut nibh in tempor</li>
        </ul>
    </li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list list--bulleted">
            <li class="list__item">
                Quisque tincidunt dolor
                <ul class="list list--bulleted">
                    <li class="list__item">
                        Aenean efficitur ut nibh in tempor
                    </li>
                </ul>
            </li>
            <li class="list__item">Nulla non ligula neque</li>
        </ul>
    </li>
</ol>
<ul class="list list--bulleted">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ol class="list list--numbered">
            <li class="list__item">Lorem ipsum dolor sit amet
                <ol class="list list--alpha-lower">
                    <li class="list__item">Nunc condimentum non est sed rutrum</li>
                </ol>
            </li>
            <li class="list__item">Aenean efficitur ut nibh in tempor</li>
        </ol>
    </li>
</ul>

```html
<ol class="list list--numbered">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ul class="list list--checked">
            <li class="list__item">Lorem ipsum dolor sit amet</li>
            <li class="list__item">Aenean efficitur ut nibh in tempor</li>
        </ul>
    </li>
    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <ul class="list list--bulleted">
            <li class="list__item">
                Quisque tincidunt dolor
                <ul class="list list--bulleted">
                    <li class="list__item">
                        Aenean efficitur ut nibh in tempor
                    </li>
                </ul>
            </li>
            <li class="list__item">Nulla non ligula neque</li>
        </ul>
    </li>
</ol>
<ul class="list list--bulleted">
    <li class="list__item">Nunc condimentum non est sed rutrum
        <ol class="list list--numbered">
            <li class="list__item">Lorem ipsum dolor sit amet
                <ol class="list list--alpha-lower">
                    <li class="list__item">Nunc condimentum non est sed rutrum</li>
                </ol>
            </li>
            <li class="list__item">Aenean efficitur ut nibh in tempor</li>
        </ol>
    </li>
</ul>
```

## Examples

---

You can see more of these styles in action on the [lists section of the typography examples page](/examples/typography.html#lists).