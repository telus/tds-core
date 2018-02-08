/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import Tooltip from '../Tooltip'

describe('Tooltip server side rendering', () => {
  it('uses mobile styles first', () => {
    const tooltip = render(<Tooltip>My tooltip text</Tooltip>)

    expect(tooltip.find('[data-testid=bubble]').hasClass('full')).toBe(true)
  })
})
