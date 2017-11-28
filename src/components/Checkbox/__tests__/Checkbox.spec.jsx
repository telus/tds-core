import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  const defaultProps = {
    label: 'The input',
  }
  const doShallow = (overrides = {}) => shallow(<Checkbox {...defaultProps} {...overrides} />)
  const findInputElement = input => input.find('input')

  it('renders', () => {
    const checkbox = doShallow()

    expect(checkbox).toMatchSnapshot()
  })

  it('does other things', () => {
    const checkbox = doShallow()

    expect(checkbox).toBePresent()
  })

  it('passes additional attributes to the element', () => {
    const checkbox = doShallow({
      disabled: 'true',
      'data-some-attr': 'some value',
    })
    expect(findInputElement(checkbox)).toHaveProp('disabled', 'true')
    expect(findInputElement(checkbox)).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const checkbox = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findInputElement(checkbox)).not.toHaveProp('className', 'my-custom-class')
    expect(findInputElement(checkbox)).not.toHaveProp('style')
  })
})
