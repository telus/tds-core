```js static
import { colorAccessibleGreen, colorGreyAthens } from '@tds/core-colours'
```

```jsx noeditor
const { version } = require('./package.json')
const PackageVersion = require('../../docs/components/custom/PackageVersion/PackageVersion').default

;<PackageVersion version={version} />
```

These are the brand-approved colours available as JS variables to be consumed within your application styles.

For more information on the usage of each colour please refer to the [colour principles and guidelines](https://tds.telus.com/design/colour.html).

### Brand

```jsx noeditor
const ColourPaletteColour = require('../../docs/components/custom/ColourPalette/Colour').default

;<FlexGrid>
  <FlexGrid.Row>
    <ColourPaletteColour
      name="Accessible Green"
      backgroundColor="rgb(43,128,0)"
      hex="#2B8000"
      js="colorAccessibleGreen"
      usage="Primary button backgrounds/outline, text links"
    />
    <ColourPaletteColour
      name="TELUS Green"
      backgroundColor="rgb(102, 204, 0)"
      hex="#66CC00"
      js="colorTelusGreen"
      usage="Decorative elements (graphs/charts). Use only for decorative items (when it doesn't need to be colour accessible)"
    />
    <ColourPaletteColour
      name="TELUS Purple"
      backgroundColor="rgb(75,40,109)"
      hex="#4B286D"
      js="colorTelusPurple"
      usage="Headings, secondary button background/outline, chevron links"
    />
    <ColourPaletteColour
      name="White"
      backgroundColor="rgb(255, 255, 255)"
      hex="#FFFFFF"
      js="colorWhite"
      usage="Page background, inverted links/buttons"
    />
  </FlexGrid.Row>
</FlexGrid>
```

### Greyscale

```jsx noeditor
const ColourPaletteColour = require('../../docs/components/custom/ColourPalette/Colour').default

;<FlexGrid>
  <FlexGrid.Row>
    <ColourPaletteColour
      name="Shark"
      backgroundColor="rgb(42, 44, 46)"
      hex="#2A2C2E"
      js="colorGreyShark"
      usage="Sub headings (H3, H4), body text"
      deprecations="colorShark has been deprecated. Please use colorGreyShark"
    />
    <ColourPaletteColour
      name="Shuttle"
      backgroundColor="rgb(84,89,95)"
      hex="#54595F"
      js="colorGreyShuttle"
      usage="Colour for default links"
      deprecations="colorShuttleGrey has been deprecated. Please use colorGreyShuttle"
    />
    <ColourPaletteColour
      name="Raven"
      backgroundColor="rgb(113,117,123)"
      hex="#71757B"
      js="colorGreyRaven"
      usage="Form input border"
    />
    <ColourPaletteColour
      name="Gainsboro"
      backgroundColor="rgb(216,216,216)"
      hex="#D8D8D8"
      js="colorGreyGainsboro"
      usage="Horizontal, vertical and wave dividers"
      deprecations="colorGainsboro has been deprecated. Please use colorGreyGainsboro"
    />
    <ColourPaletteColour
      name="Athens"
      backgroundColor="rgb(247,247,248)"
      hex="#F7F7F8"
      js="colorGreyAthens"
      usage="Helper/disabled state background"
      deprecations="colorAthensGrey has been deprecated. Please use colorGreyAthens"
    />
  </FlexGrid.Row>
</FlexGrid>
```

### Notification

```jsx noeditor
const ColourPaletteColour = require('../../docs/components/custom/ColourPalette/Colour').default

;<FlexGrid>
  <FlexGrid.Row>
    <ColourPaletteColour
      name="Lavender Blush"
      backgroundColor="rgb(244,249,242)"
      hex="#FFF6F8"
      js="colorLavenderBlush"
      usage="Notification/error messaging background"
    />
    <ColourPaletteColour
      name="Panache"
      backgroundColor="rgb(244,249,242)"
      hex="#F4F9F2"
      js="colorPanache"
      usage="Success messaging background"
    />
    <ColourPaletteColour
      name="White Lilac"
      backgroundColor="rgb(242,239,244)"
      hex="#F2EFF4"
      js="colorWhiteLilac"
      usage="Branded messaging background"
    />
    <ColourPaletteColour
      name="Cardinal"
      backgroundColor="rgb(193,35,53)"
      hex="#C12335"
      js="colorCardinal"
      usage="Error body text and icons"
    />
    <ColourPaletteColour
      name="Dark Rajah"
      backgroundColor="rgb(140,84,21)"
      hex="#8C5415"
      js="colorRajahDark"
      usage="Warning notification alert icon"
      deprecations="colorDarkRaja has been deprecated. Please use colorRajahDark"
    />
    <ColourPaletteColour
      name="Rajah"
      backgroundColor="rgb(250,202,105)"
      hex="#FACA69"
      js="colorRajah"
      usage="Warning notification border"
      deprecations="colorRaja has been deprecated. Please use colorRajah"
    />
    <ColourPaletteColour
      name="Light Rajah"
      backgroundColor="rgb(255,249,238)"
      hex="#FFF9EE"
      js="colorRajahLight"
      usage=" Warning notification background"
      deprecations="colorLightRaja has been deprecated. Please use colorRajahLight"
    />
  </FlexGrid.Row>
</FlexGrid>
```
