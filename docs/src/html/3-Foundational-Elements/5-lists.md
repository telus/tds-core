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

The `.tds-list` block and `.tds-list__item` element are the basic building blocks of any TDS list. They apply the basic styles shared by all lists.

Modifiers such as `.tds-list--bulleted` can change the bullet style and text formatting of a list. This particular modifier adds a purple bullet in front of each element.

Bulleted lists should be created using the `<ul>` tag since the order of their items is not important.

<ul class="tds-list tds-list--bulleted">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ul class="tds-list tds-list--bulleted">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ul>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="tds-list tds-list--bulleted">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ul class="tds-list tds-list--bulleted">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ul>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Small bulleted list

The `.tds-list--small` modifier can be used on any type of list to create small type.

<ul class="tds-list tds-list--bulleted tds-list--small">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ul class="tds-list tds-list--bulleted">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ul>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="tds-list tds-list--bulleted tds-list--small">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ul class="tds-list tds-list--bulleted">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ul>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```


## Numbered list

---

The `.tds-list--numbered` modifier and `<ol>` element mark up a list in which the items are in numerical order. The `.tds-list--alpha` and `.tds-list--alpha-lower` modifier are available for making nested lists beginning with letters instead of numbers.

<ol class="tds-list tds-list--numbered">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ol class="tds-list tds-list--alpha">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ol class="tds-list tds-list--alpha-lower">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ol>

```html
<ol class="tds-list tds-list--numbered">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ol class="tds-list tds-list--alpha">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ol class="tds-list tds-list--alpha-lower">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ol>
```

### Small numbered list

Just like creating a small version of a bulleted list, you can make a small numbered list with the `.tds-list--numbered` and `.tds-list--small` modifiers.

<ol class="tds-list tds-list--numbered tds-list--small">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ol class="tds-list tds-list--alpha">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ol class="tds-list list--alpha-lower">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ol>

```html
<ol class="tds-list tds-list--numbered tds-list--small">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ol class="tds-list list--alpha">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ol class="tds-list tds-list--alpha-lower">
	    <li class="tds-list__item">Quisque tincidunt dolor</li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ol>
    </li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ol>
```

## Icon lists

---

### Check list

Display a green check marks as bullets by using `.tds-list--checked` on a `<ul>` tag.

<ul class="tds-list tds-list--checked">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="tds-list tds-list--checked">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Small check list

<ul class="tds-list tds-list--checked tds-list--small">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>

```html
<ul class="tds-list tds-list--checked tds-list--small">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
</ul>
```

### Error list

The `.tds-list--error` modifier places red "close" icons before each list item.

<ul class="tds-list tds-list--error">
    <li class="tds-list__item">Error message 1</li>
    <li class="tds-list__item">Error message 2</li>
</ul>

```html
<ul class="tds-list tds-list--error">
    <li class="tds-list__item">Error message 1</li>
    <li class="tds-list__item">Error message 2</li>
</ul>
```

### Small error list

<ul class="tds-list tds-list--error tds-list--small">
    <li class="tds-list__item">Error message 1</li>
    <li class="tds-list__item">Error message 2</li>
</ul>

```html
<ul class="tds-list tds-list--error list--small">
    <li class="tds-list__item">Error message 1</li>
    <li class="tds-list__item">Error message 2</li>
</ul>
```


## Mixed lists

---

Lists of different types can be nested inside each other. Child `<ul>` and `<ol>` tags should be placed *inside* an `<li>` tag (they shouldn't be direct descendants of a `<ul>` or `<ol>`).

### Example mixed lists

<ol class="tds-list tds-list--numbered">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ul class="tds-list tds-list--checked">
	    <li class="tds-list__item">Lorem ipsum dolor sit amet</li>
	    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
	</ul>
    </li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ul class="tds-list tds-list--bulleted">
	    <li class="tds-list__item">
		Quisque tincidunt dolor
		<ul class="tds-list tds-list--bulleted">
		    <li class="tds-list__item">
			Aenean efficitur ut nibh in tempor
		    </li>
		</ul>
	    </li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ul>
    </li>
</ol>
<ul class="tds-list tds-list--bulleted">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ol class="tds-list list--numbered">
	    <li class="tds-list__item">Lorem ipsum dolor sit amet
		<ol class="tds-list list--alpha-lower">
		    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
		</ol>
	    </li>
	    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
	</ol>
    </li>
</ul>

```html
<ol class="tds-list tds-list--numbered">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ul class="tds-list tds-list--checked">
	    <li class="tds-list__item">Lorem ipsum dolor sit amet</li>
	    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
	</ul>
    </li>
    <li class="tds-list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<ul class="tds-list tds-list--bulleted">
	    <li class="tds-list__item">
		Quisque tincidunt dolor
		<ul class="tds-list tds-list--bulleted">
		    <li class="tds-list__item">
			Aenean efficitur ut nibh in tempor
		    </li>
		</ul>
	    </li>
	    <li class="tds-list__item">Nulla non ligula neque</li>
	</ul>
    </li>
</ol>
<ul class="tds-list tds-list--bulleted">
    <li class="tds-list__item">Nunc condimentum non est sed rutrum
	<ol class="tds-list tds-list--numbered">
	    <li class="tds-list__item">Lorem ipsum dolor sit amet
		<ol class="tds-list tds-list--alpha-lower">
		    <li class="tds-list__item">Nunc condimentum non est sed rutrum</li>
		</ol>
	    </li>
	    <li class="tds-list__item">Aenean efficitur ut nibh in tempor</li>
	</ol>
    </li>
</ul>
```

## Examples

---

You can see more of these styles in action on the [lists section of the typography examples page](/examples/typography.html#lists).
