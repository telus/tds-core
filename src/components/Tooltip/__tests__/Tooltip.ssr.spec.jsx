/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import Tooltip from '../Tooltip'

describe('responsive behaviour', () => {
  it('uses mobile styles first', () => {
    const tooltip = render(<Tooltip>My tooltip text</Tooltip>)

    expect(tooltip.find('[data-testid=bubble]').hasClass('full')).toBe(true)
  })
})
