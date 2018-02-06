/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import Box from '../Box'

describe('responsive behaviour', () => {
  it('uses mobile styles first', () => {
    const box = render(<Box horizontal={4}>Submit</Box>)

    expect(box.hasClass('horizontalPadding-4')).toBe(true)
  })
})
