import React from 'react'
import { render, shallow, mount } from 'enzyme'

import TermsAndConditions from '../TermsAndConditions'

describe('TermsAndConditions', () => {
  const defaultProps = {
    copy: 'en',
    indexedContent: ['One', 'Two', 'Three'],
  }

  const doShallow = (props = {}) => shallow(<TermsAndConditions {...defaultProps} {...props} />)

  it('renders', () => {
    const termsAndConditions = render(<TermsAndConditions {...defaultProps} />)
    expect(termsAndConditions).toMatchSnapshot()
  })

  it('renders expanded', () => {
    const termsAndConditions = mount(<TermsAndConditions {...defaultProps} />)
    termsAndConditions.find('button').simulate('click')

    expect(termsAndConditions).toMatchSnapshot()
  })

  it('renders expanded with indexedContent and nonIndexedContent', () => {
    const termsAndConditions = mount(
      <TermsAndConditions {...defaultProps} nonIndexedContent={['Four', 'Five']} />
    )
    termsAndConditions.find('button').simulate('click')

    expect(termsAndConditions).toMatchSnapshot()
  })

  it('renders expanded with just nonIndexedContent', () => {
    const termsAndConditions = mount(
      <TermsAndConditions
        {...defaultProps}
        nonIndexedContent={['Four', 'Five']}
        indexedContent={[]}
      />
    )
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

  it('forwards refs', () => {
    const ref = React.createRef()
    const termsAndConditions = mount(
      <>
        <TermsAndConditions ref={ref} {...defaultProps} />
      </>
    )

    const target = termsAndConditions
      .find('Styled(StyledClickable)')
      .find('button')
      .instance()

    expect(target).toEqual(ref.current)
  })

  it('can announce the expansion with screen reader', () => {
    const termsAndConditions = mount(<TermsAndConditions {...defaultProps} />)
    termsAndConditions.find('button').simulate('click')
    expect(termsAndConditions.find('button').prop('aria-expanded')).toEqual(true)
  })
})
