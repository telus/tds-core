import React from 'react'
import { render, shallow, mount } from 'enzyme'

import TermsAndConditions from '../TermsAndConditions'

describe('TermsAndConditions', () => {
  const defaultProps = {
    content: ['One', 'Two', 'Three'],
  }

  const doShallow = (props = {}) => shallow(<TermsAndConditions {...defaultProps} {...props} />)

  it('renders', () => {
    const termsAndConditions = render(<TermsAndConditions content={['One', 'Two', 'Three']} />)
    expect(termsAndConditions).toMatchSnapshot()
  })

  it('renders expanded', () => {
    const termsAndConditions = mount(<TermsAndConditions content={['One', 'Two', 'Three']} />)
    termsAndConditions.find('button').simulate('click')

    expect(termsAndConditions).toMatchSnapshot()
  })

  it('passes additional attributes to the element', () => {
    const termsAndConditions = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(termsAndConditions).toHaveProp('id', 'the-id')
    expect(termsAndConditions).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const termsAndConditions = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(termsAndConditions).not.toHaveProp('className', 'my-custom-class')
    expect(termsAndConditions).not.toHaveProp('style')
  })
})
