## Tech snacks

Tech snacks are small bits of **non-feature** tasks that don't fit nicely into an existing story. They should be able to be
completed in less than hour. Typical tech snacks focus on refactoring or other cleanup tasks, but could be other things.

If you find yourself with some extra time (at the end of the day, waiting for a PR review, etc), you can work on a tech snack!

* Get rid of "shared/scss/\_typography.scss" and incorporate those variables/mixins into the Typography CSS Modules files.
* ~~Add a postinstall npm script to do the gitbook install~~
* Remove the checkboxes in the github templates as they display progress and no one seems to use that
* Set up linter to lint code that is embedded in markdown files
* ~~Rectify prettier with our style lint rules (we have ignored a bunch of rules in "config/.stylelintrc.json")~~
* ~~Fix all the unmet peer dependency warnings we have~~
* In [FlexGrid](https://github.com/telusdigital/tds/blob/master/packages/FlexGrid/FlexGrid.jsx#L20-L21) and [FlexGrid.Row](https://github.com/telusdigital/tds/blob/master/packages/FlexGrid/Row/Row.jsx#L13-L29),
  "unwrap" the nested functions that are inside the components. These functions should either be changed to variable declarations, or hoisted out of the component function.
