/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import DisplayHeading from '../DisplayHeading'

describe('responsive behaviour', () => {
  it('uses mobile styles first', () => {
    const heading = render(<DisplayHeading>My heading text</DisplayHeading>)

    expect(heading.hasClass('heading')).toBe(true)
  })
})
