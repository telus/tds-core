# Upgrading Guide


## Upgrading to v0.16.x

* `button-green` changed to `button--green`
* `button-purple` changed to `button--purple`
* `button-green--outlined` changed to `button--green button--outlined`
* `button-purple--outlined` changed to `button--purple button--outlined`
* `button-inverted` changed to `button--inverted`
* `button-inverted--outlined` changed to `button--inverted button--outlined`
* `button-link` changed to `button--link` and now also includes the chevron and can be made purple or green with the revised classes mentioned above
* to disable a but you will have to use `button--disable` together with `[disabled]` attribute for functionality


## Upgrading to v0.15.x

## Upgrading to v0.14.x



## Upgrading to v0.10.x

* body tag now has white background
* `.button-primary` has changed to `.button-purple`
* `.button-secondary` has changed to `.button-green`
* scss variable $color-green changed to $color-forest-green
* scss variable $color-green-darker changed to $color-japanese-laurel
* scss variable $color-green-panel changed to $color-panache
* scss variable $color-grey-medium changed to $color-raven
* scss variable $color-grey changed to $color-shuttle-grey
* scss variable $color-grey-dark changed to $color-shark
* scss variable $color-grey-panel changed to $color-athens-grey
* scss variable $color-purple changed to $color-grape
* scss variable $color-purple-light changed to $color-royal-purple
* scss variable $color-purple-panel changed to $color-white-lilac
* scss variable $color-red changed to $color-cardinal
* scss variable $color-red-panel changed to $color-lavender-blush
* scss variable $color-grey-dividers changed to $color-gainsboro


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
