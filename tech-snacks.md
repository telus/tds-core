## Tech snacks

Tech snacks are small bits of **non-feature** tasks that don't fit nicely into an existing story. They should be able to be
completed in less than hour. Typical tech snacks focus on refactoring or other cleanup tasks, but could be other things.

If you find yourself with some extra time (at the end of the day, waiting for a PR review, etc), you can work on a tech snack!

- Get rid of "shared/scss/\_typography.scss" and incorporate those variables/mixins into the Typography CSS Modules files.
- In [FlexGrid](https://github.com/telusdigital/tds-core/blob/master/packages/FlexGrid/FlexGrid.jsx#L20-L21) and [FlexGrid.Row](https://github.com/telusdigital/tds-core/blob/master/packages/FlexGrid/Row/Row.jsx#L13-L29),
  "unwrap" the nested functions that are inside the components. These functions should either be changed to variable declarations, or hoisted out of the component function.
- Make it more obvious via comments as to what changes have been made to the various Styleguidist components that are being copied and slightly modified (such as Pathline, TabButton, or Editor)
- Spike using [repng](https://github.com/jxnblk/repng) to render individual React components as images. This strategy could be a superior replacement for visual regression over screenshotting the styleguide.
- This repository's git history contains somewhat large binary files including Sketch documents and PNGs. Let's set up Git LFS for `".png"` and `".sketch"` patterns in order to retroactively apply large file storage to those files. The benefit of Git LFS is to only download those files at checkout, and not fetch or clone.
