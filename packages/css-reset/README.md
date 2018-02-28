```css noeditor
// in jsx
import '@tds/core-reset/dist/index.css'
```

Version: 1.0.0

These stylesheet includes a small amount of page level styles to establish a common baseline.

Specifically, the `index.css` stylesheet in this package contains the following page level styles:

* **reset**: to standardize default styling of HTML5 elements across browsers, using the popular [Eric Meyer Reset](http://meyerweb.com/eric/tools/css/reset/)
* **font-face declarations**: to load the TELUS font files
* **border-box**: to make it easier to size elements by telling the browser to account for any border and padding in the value you specify for width and height
* **default body styles**: to establish the base font size and colour

Please do not override these global styles. Doing so will likely produce non-deterministic behaviour and UI defects.

Note: for the import statement above to work in your application you must also use the [ignore-styles](https://www.npmjs.com/package/ignore-styles) packages to ignore style imports when running in Node (SSR).
