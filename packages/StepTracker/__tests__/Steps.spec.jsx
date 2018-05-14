import React from 'react'
import { mount } from 'enzyme'

import StepTracker from '../StepTracker'

describe('<StepTracker />', () => {
  it('renders into 3 steps', () => {
    expect(
      mount(<StepTracker current={1} steps={['Login', 'Purchase', 'Checkout']} />).find('li').length
    ).toBe(3)
  })

  it('contains the correct child', () => {
    expect(
      mount(<StepTracker current={1} steps={['Login', 'Purchase', 'Checkout']} />)
        .find('li.processing > .label')
        .render()
        .text()
    ).toEqual('2. Purchase')
  })
})
