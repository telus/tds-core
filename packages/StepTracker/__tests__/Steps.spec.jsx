import React from 'react'
import { mount } from 'enzyme'

import StepTracker from '../StepTracker'

describe('<StepTracker />', () => {
  it('renders into 3 steps', () => {
    expect(
      mount(
        <StepTracker current={1}>
          <StepTracker.Step label="Login" />
          <StepTracker.Step label="Purchase" />
          <StepTracker.Step label="Checkout" />
        </StepTracker>
      ).find('li').length
    ).toBe(3)
  })

  it('contains the correct child', () => {
    expect(
      mount(
        <StepTracker current={1}>
          <StepTracker.Step label="Login" />
          <StepTracker.Step label="Purchase" />
          <StepTracker.Step label="Checkout" />
        </StepTracker>
      )
        .find('li.step-tracker__step--processing > .step-tracker__label')
        .render()
        .text()
    ).toEqual('2. Purchase')
  })
})
