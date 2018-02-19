/**
 * @jest-environment node
 */

import React from 'react'
import { render } from 'enzyme'

import ExpandCollapse from '../ExpandCollapse'

describe('ExpandCollapse server side rendering', () => {
  it.skip('uses mobile styles first', () => {
    const expandCollapse = render(
      <ExpandCollapse>
        <ExpandCollapse.Panel id="ssr" header="Yes" tertiaryText="Is that so?">
          {`Here's what's inside`}
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    const panel = expandCollapse.find('[data-testid="ssr"]')

    expect(panel.find('[data-testid="tertiarytext"]').hasClass('medium')).toBe(true)
  })
})
