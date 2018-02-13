import React from 'react'
import { shallow } from 'enzyme'

import Step from '../Step'

describe('<Step />', () => {
  it('contains .step-tracker__step class', () => {
    expect(shallow(<Step label="test" />).hasClass('step-tracker__step')).toBeTruthy()
  })

  it('contains the correct child', () => {
    expect(
      shallow(<Step label="test" stepNumber={1} />)
        .find('li > span.step-tracker__label')
        .render()
        .text()
    ).toEqual('1. test')
  })
})
