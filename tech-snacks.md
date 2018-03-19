## Tech snacks

Tech snacks are small bits of **non-feature** tasks that don't fit nicely into an existing story. They should be able to be
completed in less than hour. Typical tech snacks focus on refactoring or other cleanup tasks, but could be other things.

If you find yourself with some extra time (at the end of the day, waiting for a PR review, etc), you can work on a tech snack!

* Get rid of "shared/scss/\_typography.scss" and incorporate those variables/mixins into the Typography CSS Modules files.
* Set up linter to lint code that is embedded in markdown files
* In [FlexGrid](https://github.com/telusdigital/tds/blob/master/packages/FlexGrid/FlexGrid.jsx#L20-L21) and [FlexGrid.Row](https://github.com/telusdigital/tds/blob/master/packages/FlexGrid/Row/Row.jsx#L13-L29),
  "unwrap" the nested functions that are inside the components. These functions should either be changed to variable declarations, or hoisted out of the component function.
* Make it more obvious via comments as to what changes have been made to the various Styleguidist components that are being copied and slightly modified (such as Pathline, TabButton, or Editor)
* The OpenShift build seems to be running very slow now, seems to be over 20 minutes now for the "build" stage! It didn't used to take this long. Did we change something to make it go slower? Is there any way to speed it up?
* Inline code blocks (like this one --> `I'm inline code!`) do not render their styles in the styleguide anymore. Fix please. (See an example at <https://tds.telus.com/components/index.html#css-reset> and inspect the words "@font-face".)
* Spike using [repng](https://github.com/jxnblk/repng) to render individual React components as images. This strategy could be a superior replacement for visual regression over screenshotting the styleguide.
* Read component versions from their package.json files instead of hard coding them in JSDoc tags for display in the styleguide. (Will need to make a change a react-styleguidist for this to work. PR has been started [here](https://github.com/styleguidist/react-styleguidist/pull/868).)
* When viewing the [production styleguide](https://tds.telus.com/components/index.html) there is a console error: "GET https://tds.telus.com/favicon.ico 403 ()". The favicon is not being loaded. Fix please.
