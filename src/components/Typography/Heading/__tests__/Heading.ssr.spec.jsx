/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import Heading from '../Heading'

describe('Heading server side rendering', () => {
  it('uses mobile styles first', () => {
    const heading = render(<Heading level="h1">My heading text</Heading>)

    expect(heading.hasClass('h1')).toBe(true)
  })
})
