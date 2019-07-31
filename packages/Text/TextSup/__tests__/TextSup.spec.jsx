import React from 'react'
import { shallow, mount } from 'enzyme'

import TextSup from '../TextSup'

describe('TextSup', () => {
  const doShallow = props => shallow(<TextSup {...props}>Some content</TextSup>)
  const doMount = props => mount(<TextSup {...props}>Some content</TextSup>)

  it('renders', () => {
    const textSup = doMount()

    expect(textSup).toMatchSnapshot()
  })

  it('renders an HTML sub tag', () => {
    const textSup = doMount()

    expect(textSup.find('StyledComponent').childAt(0)).toHaveDisplayName('sup')
  })

  it('passes additional attributes to the sub element', () => {
    const textSup = doShallow({ id: 'the-sup-text' })

    expect(textSup).toHaveProp('id', 'the-sup-text')
  })

  it('does not allow custom CSS', () => {
    const textSup = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(textSup).not.toHaveProp('className', 'my-custom-class')
    expect(textSup).not.toHaveProp('style')
  })
})
