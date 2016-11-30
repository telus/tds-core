## v0.6.0

30 November 2016

https://github.com/telusdigital/telus-thorium-core/releases/tag/v0.6.0

### Thorium Core

- Fixed: Breakpoints off by 1 (DSR-176). The dynamically generated media queries used ranges like `@media (min-width: $lower-bound + 1px) and (max-width: $upper-bound)`. This would cause the layout for a viewport to be applied starting at 1 pixel wider than the breakpoint, e.g. medium (768px) would not take affect until the viewport width was at least 769px. These media queries have been updated to subtract 1 from the upper bound, instead of adding one from the lower bound, e.g. `@media (min-width: $lower-bound) and (max-width: $upper-bound - 1px)`.
- Fixed: scss comments: `// vs /* */` in non-outputting files (Github Issue #72). Large comment blocks using CSS-style `/* */` appear in dev-mode output. These aren't useful in files like mixin & settings libraries which don't output anything, because the comments appear without any associated code. These comments have been switched to the SCSS style `//`.

### Thorium Enriched

- Added: [Icon React component](http://thorium.telus.hugeops.com/4-Components/hold-icon.html)
- Updated: Selector Counter accessibility. The SelectorCounter React component is now implemented internally as `input[type=number]`. Previous behavior and props are unchanged. The updated component supports direct keyboard input, up/down arrow keys, and accepts ARIA describedby and labeledby attributes.

### Thorium Docs

- Added: [Usage Criteria](http://thorium.telus.hugeops.com/2-Use-Thorium/1-getting-started.html#usage-criteria)
- Added: [Roadmap](http://thorium.telus.hugeops.com/1-About/3-roadmap.html)
- Added: [Changelog page](http://thorium.telus.hugeops.com/1-About/4-changelog.html)
- Added: [Contribution criteria](http://thorium.telus.hugeops.com/2-Use-Thorium/4-contributing.html#contribution-criteria)
- Added: [Adoption thresholds](http://thorium.telus.hugeops.com/1-About/1-overview.html#adoption-thresholds)
- Added: [Updating the version number](http://thorium.telus.hugeops.com/2-Use-Thorium/hold-6-administration.html#updating-the-version-number)
- Added: [CHANGELOG maintenance](http://thorium.telus.hugeops.com/2-Use-Thorium/hold-6-administration.html#changelog-maintenance)
- Added: [UPGRADING guide maintenance](http://thorium.telus.hugeops.com/2-Use-Thorium/hold-6-administration.html#upgrading-guide-maintenance)
- Added: [README maintenance](http://thorium.telus.hugeops.com/2-Use-Thorium/hold-6-administration.html#readme-maintenance)
- Updated: Information architecture. A new structure was applied to the navigation menu and the corresponding pages of documentation.
- Updated: Rendering of example React components. Removed `<div data-thorium-component="ReactComponentName" />` mount points, replaced them with inline `text/babel` scripts. Example components can now be written in pure JS/React.

## v0.5.0

19 October 2016

https://github.com/telusdigital/telus-thorium-core/releases/tag/v0.5.0

### Thorium Core

- Added: Selector Counter enriched component
- Added: hyperlink underlines which don't intersect descenders
- Added: Chevron links
- Added: Secondary buttons, outline buttons, inverted buttons
- Updated Primary button color
- Updated: Font sizes and colors to match results of the typography audit
- Updated: Consumption & Contribution documentation
- Updated: Utility icon names (deprecated names preserved for backwards compatibility)
- Fixed: Utility icons appear sharper in IE11
- Fixed: Alert icon no longer persists when an invalid field receives focus

### Thorium Enriched

- Added: new Thorium Enriched Node module w/ isomorphic React components

## v0.4.0

4 October 2016

https://github.com/telusdigital/telus-thorium-core/releases/tag/v0.4.0

### Thorium Core

- Added: Lists (bulleted, numbered, checked, error, small)
- Added: Form field success & error states
- Added: Dropdown form fields
- Added: Utility icons

### Thorium Documentation

- Fixed: Mis-aligned global header hamburger

## v0.3.1

20 September 2016

https://github.com/telusdigital/telus-thorium-core/releases/tag/v0.3.1

### Thorium Core

- Added: form hints

## v0.3.0

20 September 2016

https://github.com/telusdigital/telus-thorium-core/releases/tag/v0.3.0

### Thorium Core

- Fixed: ordering of links in the Documentation Site navigation
- Added: text fields and labels
- Added: radio buttons and check boxes
- Added: form helpers
- Fixed: Helvetica Neue web font

## v0.2.1

6 September 2016

https://github.com/telusdigital/telus-thorium-core/releases/tag/v0.2.1

### Thorium Core

- Added: colours
- Added: typography
- Added: responsive grid
- Added: buttons
- Added: links
- Added: contribution model
- Added: consumption model
