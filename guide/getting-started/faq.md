# FAQ

## What global styles does TDS insert into the web page?

The `tds.css` stylesheet contains the following global styles:

* **reset**: to standardize the different way browsers render elements by default
* **font-face declarations**: to map the different brand approved Helvetica Neue webfonts to their corresponding TELUS-Web font-weight
* **border-box**: to make it easier to size elements by telling the browser to account for any border and padding in the value you specify for width and height
* **default body styles**: to render the default fonts size and color

Do NOT override these global styles, doing so will likely produce non-deterministic behaviour and UI defects.

## Does TDS polyfill any browser APIs?

As a philosophy if TDS uses an API that is not widely supported natively, then TDS will include a non-invasive ponyfill (i.e. a polyfill that does not modify globals). TDS also precompiles its ES6 modules so that it should work in all browsers without running Babel on your code.

## Do I need to autoprefix styles in `tds.css`?

No, the styles in `tds.css` have been pre-processed to include all supported browsers prefixes using [autoprefixer](https://www.npmjs.com/package/autoprefixer) as part of our build process.

## What if I'm not using the RA?

TDS is a collection of React components that are bundled as transpiled ES6 modules that can be used outside of the RA, but it is **strongly** encouraged to use it together with the RA (TELUS Digital Platform) to easily implement all of the standards that TELUS web properties need to follow and are enforced by [DRB](https://drb.telus.com).

## How is TDS versioned?

TDS adheres to [Semantic Versioning](https://semver.org/) so that applications have a predictable way of managing the dependency.

Now that we have reached v1, changes that break backwards compatibility will only be introduced as part of a major release.
