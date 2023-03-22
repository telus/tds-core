```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/colour">
        Colour
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

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
const colours = require('./colours.js')
const ColourPaletteColour = require('../../docs/components/custom/ColourPalette/Colour').default

;<FlexGrid>
  <FlexGrid.Row>
    <ColourPaletteColour
      name="TELUS Purple"
      backgroundColor={colours.colorTelusPurple}
      hex="#4B286D"
      js="colorTelusPurple"
      usage="Headings, secondary button background/outline, chevron links"
    />
    <ColourPaletteColour
      name="TELUS Green"
      backgroundColor={colours.colorTelusGreen}
      hex="#66CC00"
      js="colorTelusGreen"
      usage="Decorative elements (graphs/charts). Use only for decorative items (when it doesn't need to be colour accessible)"
    />
    <ColourPaletteColour
      name="Accessible Green"
      backgroundColor={colours.colorAccessibleGreen}
      hex="#2B8000"
      js="colorAccessibleGreen"
      usage="Primary button backgrounds/outline, text links"
    />
    <ColourPaletteColour
      name="White"
      backgroundColor={colours.colorWhite}
      hex="#FFFFFF"
      js="colorWhite"
      usage="Page background, inverted links/buttons"
    />
  </FlexGrid.Row>
</FlexGrid>
```

### Greyscale

```jsx noeditor
const colours = require('./colours.js')
const ColourPaletteColour = require('../../docs/components/custom/ColourPalette/Colour').default

;<FlexGrid>
  <FlexGrid.Row>
    <ColourPaletteColour
      name="Shark"
      backgroundColor={colours.colorGreyShark}
      hex="#2A2C2E"
      js="colorGreyShark"
      usage="Sub headings (H3, H4), body text"
      notices="colorShark has been deprecated. Please use colorGreyShark"
    />
    <ColourPaletteColour
      name="Shuttle"
      backgroundColor={colours.colorGreyShuttle}
      hex="#54595F"
      js="colorGreyShuttle"
      usage="Colour for default links"
      notices="colorShuttleGrey has been deprecated. Please use colorGreyShuttle"
    />
    <ColourPaletteColour
      name="Raven"
      backgroundColor={colours.colorGreyRaven}
      hex="#71757B"
      js="colorGreyRaven"
      usage="Form input border"
    />
    <ColourPaletteColour
      name="Gainsboro"
      backgroundColor={colours.colorGreyGainsboro}
      hex="#D8D8D8"
      js="colorGreyGainsboro"
      usage="Horizontal, vertical and wave dividers"
      notices="colorGainsboro has been deprecated. Please use colorGreyGainsboro"
    />
    <ColourPaletteColour
      name="Athens"
      backgroundColor={colours.colorGreyAthens}
      hex="#F7F7F8"
      js="colorGreyAthens"
      usage="Helper/disabled state background"
      notices="colorAthensGrey has been deprecated. Please use colorGreyAthens"
    />
  </FlexGrid.Row>
</FlexGrid>
```

### Notification

```jsx noeditor
const colours = require('./colours.js')
const ColourPaletteColour = require('../../docs/components/custom/ColourPalette/Colour').default

;<FlexGrid>
  <FlexGrid.Row>
    <ColourPaletteColour
      name="Lavender Blush"
      backgroundColor={colours.colorLavenderBlush}
      hex="#FFF6F8"
      js="colorLavenderBlush"
      usage="Notification/error messaging background"
    />
    <ColourPaletteColour
      name="Panache"
      backgroundColor={colours.colorPanache}
      hex="#F4F9F2"
      js="colorPanache"
      usage="Success messaging background"
    />
    <ColourPaletteColour
      name="White Lilac"
      backgroundColor={colours.colorWhiteLilac}
      hex="#F2EFF4"
      js="colorWhiteLilac"
      usage="Branded messaging background"
    />
    <ColourPaletteColour
      name="Cardinal"
      backgroundColor={colours.colorCardinal}
      hex="#C12335"
      js="colorCardinal"
      usage="Error body text and icons"
    />
    <ColourPaletteColour
      name="Dark Rajah"
      backgroundColor={colours.colorRajahDark}
      hex="#8C5415"
      js="colorRajahDark"
      usage="Warning notification alert icon"
      notices="colorDarkRaja has been deprecated. Please use colorRajahDark"
    />
    <ColourPaletteColour
      name="Rajah"
      backgroundColor={colours.colorRajah}
      hex="#FACA69"
      js="colorRajah"
      usage="Warning notification border"
      notices="colorRaja has been deprecated. Please use colorRajah"
    />
    <ColourPaletteColour
      name="Light Rajah"
      backgroundColor={colours.colorRajahLight}
      hex="#FFF9EE"
      js="colorRajahLight"
      usage=" Warning notification background"
      notices="colorLightRaja has been deprecated. Please use colorRajahLight"
    />
  </FlexGrid.Row>
</FlexGrid>
```
