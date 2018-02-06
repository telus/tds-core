/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import Heading from '../Heading'

describe('responsive behaviour', () => {
  it('uses mobile styles first', () => {
    const heading = render(<Heading level="h1">My heading text</Heading>)

    expect(heading.hasClass('h1')).toBe(true)
  })
})
