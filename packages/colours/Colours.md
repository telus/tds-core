```js static
import { colorAccessibleGreen, colorAthensGrey } from '@tds/core-colours'
```

```jsx noeditor
const { version } = require('./package.json')
const PackageVersion = require('../../docs/components/custom/PackageVersion/PackageVersion').default

;<PackageVersion version={version} />
```

These are the brand-approved colours available as JS variables to be consumed within your application styles.

For more information on the usage of each colour please refer to the [colour principles and guidelines](https://tds.telus.com/design/colour.html).

```jsx noeditor
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(43,128,0)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Accessible Green</Strong>
          </Paragraph>
          <Paragraph>colorAccessibleGreen</Paragraph>
          <Paragraph>Hex: #2B8000</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(102, 204, 0)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>TELUS Green</Strong>
          </Paragraph>
          <Paragraph>colorTelusGreen</Paragraph>
          <Paragraph>Hex: #66CC00</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(75,40,109)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>TELUS Purple</Strong>
          </Paragraph>
          <Paragraph>colorTelusPurple</Paragraph>
          <Paragraph>Hex: #4B286D</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(42, 44, 46)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Shark</Strong>
          </Paragraph>
          <Paragraph>colorShark</Paragraph>
          <Paragraph>Hex: #2A2C2E</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(84,89,95)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Shuttle Grey</Strong>
          </Paragraph>
          <Paragraph>colorShuttleGrey</Paragraph>
          <Paragraph>Hex: #54595F</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(113,117,123)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Raven Grey</Strong>
          </Paragraph>
          <Paragraph>colorRavenGrey</Paragraph>
          <Paragraph>Hex: #71757B</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(216,216,216)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Gainsboro</Strong>
          </Paragraph>
          <Paragraph>colorGainsboro</Paragraph>
          <Paragraph>Hex: #D8D8D8</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(247,247,248)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Athens Grey</Strong>
          </Paragraph>
          <Paragraph>colorAthensGrey</Paragraph>
          <Paragraph>Hex: #F7F7F8</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(255, 255, 255)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>White</Strong>
          </Paragraph>
          <Paragraph>colorWhite</Paragraph>
          <Paragraph>Hex: #FFFFFF</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(193,35,53)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Cardinal</Strong>
          </Paragraph>
          <Paragraph>colorCardinal</Paragraph>
          <Paragraph>Hex: #C12335</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(255,246,248)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Lavender Blush</Strong>
          </Paragraph>
          <Paragraph>colorLavenderBlush</Paragraph>
          <Paragraph>Hex: #FFF6F8</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(242,239,244)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>White Lilac</Strong>
          </Paragraph>
          <Paragraph>colorWhiteLilac</Paragraph>
          <Paragraph>Hex: #F2EFF4</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(244,249,242)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Panache</Strong>
          </Paragraph>
          <Paragraph>colorPanache</Paragraph>
          <Paragraph>Hex: #F4F9F2</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(255,249,238)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Light Raja</Strong>
          </Paragraph>
          <Paragraph>colorLightRaja</Paragraph>
          <Paragraph>Hex: #FFF9EE</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(250,202,105)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Raja</Strong>
          </Paragraph>
          <Paragraph>colorRaja</Paragraph>
          <Paragraph>Hex: #FACA69</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
    <FlexGrid.Col xs={4}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor: 'rgb(140,84,21)' }} />
        <Box between={3}>
          <Paragraph>
            <Strong>Dark Raja</Strong>
          </Paragraph>
          <Paragraph>colorDarkRaja</Paragraph>
          <Paragraph>Hex: #8C5415</Paragraph>
        </Box>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
