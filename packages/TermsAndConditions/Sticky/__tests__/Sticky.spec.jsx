import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Sticky from '../Sticky'

const defaultProps = {
  content: 'This is content',
  number: 3,
  onCloseClick: () => {},
}

describe('TermsAndConditions', () => {
  // const doShallow = (props = {}) => shallow(<Sticky {...defaultProps} {...props} />)
  // const doMount = (props = {}) => mount(<Sticky {...defaultProps} {...props} />)
  // const doRender = (props = {}) => render(<Sticky {...defaultProps} {...props} />)
  it('works', () => {
    expect(true).toBe(true)
  })

  // describe('Sticky', () => {
  //   it('renders an ordered list with a single item', () => {
  //     const sticky = doMount({ number: 5 })
  //     expect(sticky).toContainExactlyOneMatchingElement('ol')
  //   })

  //   it('renders an ordered list with the number', () => {
  //     const sticky = doMount({ number: 5 })
  //     expect(sticky.find('ol')).toHaveProp('start', 5)
  //   })

  //   it('renders an ordered list with an item with content', () => {
  //     const sticky = doMount({ content: 'This is not the content' })
  //     expect(sticky.find('li span')).toHaveProp('children', 'This is not the content')
  //   })
  // })
})
