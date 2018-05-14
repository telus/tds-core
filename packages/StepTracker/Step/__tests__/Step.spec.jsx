import React from 'react'
import { shallow } from 'enzyme'

import Step from '../Step'

describe('<Step />', () => {
  it('contains .step class', () => {
    expect(shallow(<Step status={1} label="test" />).hasClass('step')).toBeTruthy()
  })

  it('contains the correct child', () => {
    expect(
      shallow(<Step status={1} label="test" stepNumber={1} />)
        .find('li > span.label')
        .render()
        .text()
    ).toEqual('1. test')
  })
})
