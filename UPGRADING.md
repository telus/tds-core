# Upgrading Guide

## Upgrading to v0.16.x

### NEW CDN files
* New CSS CDN file path is
  * https://cdn.telus.digital/thorium/core/v0.16.0/tds.min.css
  * https://cdn.telus.digital/thorium/enriched/v0.16.0/tds-enriched.min.css
  * https://cdn.telus.digital/thorium/core/v0.16.0/tds-lite.min.css (unstyled typography and anchor links and no form styles - barebones css for platform agnostic projects)
* New JS file path on CDN with Global Component
  * https://cdn.telus.digital/thorium/enriched/v0.16.0/tds-enriched.min.js
* Files with the latest files
  * https://cdn.telus.digital/thorium/core/v0-latest/tds.min.css
  * https://cdn.telus.digital/thorium/enriched/v0-latest/tds-enriched.min.css
  * https://cdn.telus.digital/thorium/enriched/v0-latest/tds-enriched.min.js

### NPM Packages on npmjs.org
* tds-jenkins/telus-thorium-core has moved to telusdigital/tds-core
* tds-jenkins/telus-thorium-enriched has moved to telusdigital/tds-enriched

### Buttons
* button classes now have a minimum width of 180px
* removed styles from button html tag and if you need to remove default styling you can use `button--plain`
* `button-green` changed to `button--primary`
* `button-purple` changed to `button--secondary`
* `button-green--outlined` changed to `button--primary button--outlined`
* `button-purple--outlined` changed to `button--secondary button--outlined`
* `button-inverted` changed to `button--inverted`
* `button-inverted--outlined` changed to `button--inverted button--outlined`
* `button-link` now includes the chevron and can be made purple or green with the revised classes mentioned above
* removed `button[disabled]` styles because if a button needs to be disabled then it might as well not be there

### Links
* `chevron-link` (i.e. purple chevron link) changed to `chevron-link--secondary` and you need to remove the icon markup
* `chevron-link--secondary` (i.e. green chevron link) changed to `chevron-link--primary` and you need to remove the icon markup
* to get the styles from `chevron-link--inverted` you now need to use `chevron-link chevron-link--inverted`
* `link link--inverted link--descent` class for white links on purple background `link link--secondary link--inverted link--descent`
* chevron links don't need the `<i class="icon icon-core-chevron"></i>` mark up because the chevron icon is now part of the anchor link mark up

### Lists
* remove deprecated list classes that have already been replaced by their BEMified version, e.g: `list-alpha` was replaced by already existing and documented `list--alpha` class.

### SASS
* remove (SASS) non-standard `$color-grey-light` (because it is not part of the colour palette)
* remove (SASS) `$color-link-hover` because default underlined links don't change colour when hovered

### Typography
* remove `subhead`, use `heading-3` instead (Deprecated in v0.5.0, 10/18/16)
* remove `subhead--small`, use `heading-4` instead (Deprecated in v0.5.0, 10/18/16)

### Components
* `<Collapsible/>` global component changed to `<ExpandCollapse/>`
* `<Notification/>` error variant now includes the warning icon and all Notification variants expect `<p/>` tags for content


## Upgrading to v0.15.x

* Revised the offset implementation below and after user feedback decided to implemented like Bootstrap does it, because it is much cleaner. So, offsets are now inherited from smaller viewports again and if you need to reset it on a particular viewport then we have the following new classes available: `offset-small-0`, `offset-medium-0`, `offset-large-0` and `offset-xl-0`.


## Upgrading to v0.14.x

* if you need an offset for multiple viewports, they need to be called out individually. Larger
viewports won't inherit the offsets from smaller viewports anymore. So, if you are using `offset-xs-1` and are expecting that offset to be applied on all small, medium, large and xl viewports then you will have to add `offset-small-1 offset-medium-1 offset-large-1 offset-xl-1`

## Upgrading to v0.10.x

* `body` tag now has white background
* `.button-primary` has changed to `.button-purple`
* `.button-secondary` has changed to `.button-green`
* scss variable `$color-green` changed to `$color-forest-green`
* scss variable `$color-green-darker` changed to `$color-japanese-laurel`
* scss variable `$color-green-panel` changed to `$color-panache`
* scss variable `$color-grey-medium` changed to `$color-raven`
* scss variable `$color-grey changed` to `$color-shuttle-grey`
* scss variable `$color-grey-dark` changed to `$color-shark`
* scss variable `$color-grey-panel` changed to `$color-athens-grey`
* scss variable `$color-purple` changed to `$color-grape`
* scss variable `$color-purple-light` changed to `$color-royal-purple`
* scss variable `$color-purple-panel` changed to `$color-white-lilac`
* scss variable `$color-red` changed to `$color-cardinal`
* scss variable `$color-red-panel` changed to `$color-lavender-blush`
* scss variable `$color-grey-dividers` changed to `$color-gainsboro`


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
