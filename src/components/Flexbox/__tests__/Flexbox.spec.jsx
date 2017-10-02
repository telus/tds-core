import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Flexbox from '../Flexbox'

describe('Flexbox', () => {
  const defaultProps = {
    direction: 'row'
  }
  const doShallow = (props = {}) => (
    shallow(<Flexbox {...defaultProps} {...props}>Some content</Flexbox>)
  )

  it('renders', () => {
    const flexbox = doShallow()

    expect(toJson(flexbox)).toMatchSnapshot()
  })

  it('can be a flex row or column', () => {
    let flexbox = doShallow({ direction: 'column' })
    expect(flexbox).toHaveClassName('column')

    flexbox = doShallow({ direction: 'row' })
    expect(flexbox).toHaveClassName('row')
  })

  it('will add additional arbitrary class names', () => {
    const flexbox = doShallow({ dangerouslyAddClassName: 'a-class' })

    expect(flexbox).toHaveClassName('a-class')
  })

  it('passes additional attributes to the HTML element', () => {
    const flexbox = doShallow({ id: 'the-id', 'data-some-property': 'a value' })

    expect(flexbox).toHaveProp('id', 'the-id')
    expect(flexbox).toHaveProp('data-some-property', 'a value')
  })

  it('does not allow custom CSS', () => {
    const flexbox = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(flexbox).not.toHaveProp('className', 'my-custom-class')
    expect(flexbox).not.toHaveProp('style')
  })
})
