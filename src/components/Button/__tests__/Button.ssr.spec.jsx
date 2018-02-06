/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import Button from '../Button'

describe('responsive behaviour', () => {
  it('uses mobile styles first', () => {
    const button = render(<Button>Submit</Button>)

    expect(button.hasClass('fullWidth')).toBe(true)
  })
})
