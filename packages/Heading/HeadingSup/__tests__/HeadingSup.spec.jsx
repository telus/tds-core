import React from 'react'
import { shallow, mount, render } from 'enzyme'

import HeadingSup from '../HeadingSup'

describe('HeadingSup', () => {
  const doShallow = props => shallow(<HeadingSup {...props}>Some content</HeadingSup>)

  it('renders', () => {
    const headingSup = render(<HeadingSup>Some content</HeadingSup>)

    expect(headingSup).toMatchSnapshot()
  })

  it('renders an HTML sup tag', () => {
    const headingSup = mount(<HeadingSup>The content</HeadingSup>)

    expect(headingSup).toContainMatchingElement('sup')
  })

  it('passes additional attributes to the sup element', () => {
    const headingSup = doShallow({ id: 'the-sup-text' })

    expect(headingSup).toHaveProp('id', 'the-sup-text')
  })

  it('does not allow custom CSS', () => {
    const headingSup = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(headingSup).not.toHaveProp('className', 'my-custom-class')
    expect(headingSup).not.toHaveProp('style')
  })
})
