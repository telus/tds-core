/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import ButtonLink from '../ButtonLink'

describe('ButtonLink server side rendering', () => {
  it('uses mobile styles first', () => {
    const button = render(<ButtonLink>Submit</ButtonLink>)

    expect(button.hasClass('fullWidth')).toBe(true)
  })
})
