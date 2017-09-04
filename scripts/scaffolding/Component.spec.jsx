import React from 'react'
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'

import COMPONENT from '../COMPONENT'

describe('COMPONENT', () => {
  const doShallow = (props = {}) => shallow(<COMPONENT {...props} />)

  it('does things', () => {
    const component = doShallow()

    expect(component).toBePresent()
  })
})
