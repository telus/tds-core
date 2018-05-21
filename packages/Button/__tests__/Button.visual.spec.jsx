import path from 'path'
import fs from 'fs'

import React from 'react'

import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { generateImage } from 'component-image'

// Load the compiled component so that CSS Modules has already been applied
import Button from '../dist/index.es'

expect.extend({ toMatchImageSnapshot })

/*
  FIXME: This is a workaround because the generateImage `stylesheet` option must be a single file.
  We could make a PR to component-image so that stylesheet accepts an array too.
*/
const createImageShapshotCss = () => {
  const cssReset = fs.readFileSync(path.resolve('packages/css-reset/dist/index.css'))
  // Load the compiled CSS so that CSS Modules has already been applied
  const buttonCss = fs.readFileSync(path.join(__dirname, '../dist/index.css'))

  // Combine the component CSS with the CSS Reset so that the font faces get included during the image rendering
  fs.writeFileSync(path.join(__dirname, 'image-snapshot-test.css'), `${cssReset}\n${buttonCss}`)
}

const removeImageSnapshotCss = () => {
  fs.unlinkSync(path.join(__dirname, 'image-snapshot-test.css'))
}

describe('performs visual regression', () => {
  beforeEach(createImageShapshotCss)
  afterEach(removeImageSnapshotCss)

  it('for all variants', async () => {
    const options = {
      stylesheet: path.join(__dirname, 'image-snapshot-test.css'),
    }

    const image = await generateImage(
      <div>
        <Button>Primary button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="inverted">Inverted button</Button>
      </div>,
      options
    )

    expect(image).toMatchImageSnapshot()
  })

  it('for mobile', async () => {
    const options = {
      stylesheet: path.join(__dirname, 'image-snapshot-test.css'),
      viewport: {
        width: 500,
      },
    }

    const image = await generateImage(<Button>Mobile button</Button>, options)

    expect(image).toMatchImageSnapshot()
  })
})
