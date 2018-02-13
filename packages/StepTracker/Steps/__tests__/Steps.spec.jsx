import React from 'react'
import { mount } from 'enzyme'

import Steps from '../Steps'

describe('<Steps />', () => {
  it('renders into 3 steps', () => {
    expect(
      mount(
        <Steps current={1}>
          <Steps.Step label="Login" />
          <Steps.Step label="Purchase" />
          <Steps.Step label="Checkout" />
        </Steps>
      ).find('li').length
    ).toBe(3)
  })

  it('contains the correct child', () => {
    expect(
      mount(
        <Steps current={1}>
          <Steps.Step label="Login" />
          <Steps.Step label="Purchase" />
          <Steps.Step label="Checkout" />
        </Steps>
      )
        .find('li.step-tracker__step--processing > .step-tracker__label')
        .render()
        .text()
    ).toEqual('2. Purchase')
  })
})
