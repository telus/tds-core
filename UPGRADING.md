# Upgrading Guide

## Upgrading to v0.10.x

* added `.container--limited-width` to set a max-width for our adaptive grid when on small and above viewpoints
* updated hover state on buttons (white background with coloured border)
* remove min-height:60 in buttons so they are the same height as form fields
* body tag now has white background
* `core-icon` mixin is now available in `mixins.scss`
* <sup> and <sub> have default styles
* doc: added zip file with fonts used on the sketch file
* doc: updated colours to match what's on the sketch file


## Upgrading to v0.6.x

The SelectorCounter component supports 4 new props:

* `aria-labeledby` can be given the ID of an element which contains the primary label of the counter field (usually a `<label>`)
* `aria-describedby` can be given the ID of an element containing a secondary description of the counter field
* `id` can be given a value for the id attribute if the SelectorCounter's `input[type=number]` element
* `max` can be given a number to use as the upper limit. If omitted, there is no upper limit on the counter.

## Upgrading to v0.5.x

Icons will now be named to reflect their form, not any intended function. The following names have been deprecated:

* `alert` (use `exclamation-point-circle`)
* `close` (use `times`)
* `dash` (use `minus`)
* `help` (use `question-mark-circle`)

The classes and code point mappings from these deprecated names have been preserved for backwards compatibility in 0.5.x, but they should not be used in any new code.
Existing code should be updated to use the new aliases, to be prepared for the eventual removal of these names.
