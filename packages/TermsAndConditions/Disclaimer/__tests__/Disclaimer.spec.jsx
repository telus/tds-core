import React from 'react'
import { shallow, render } from 'enzyme'

import Disclaimer from '../Disclaimer'

describe('Disclaimer', () => {
  const doShallow = props => shallow(<Disclaimer {...props}>Some content</Disclaimer>)
  const doRender = props => render(<Disclaimer {...props}>Some content</Disclaimer>)

  it('renders', () => {
    const disclaimer = doRender()

    expect(disclaimer).toMatchSnapshot()
  })

  it('passes additional attributes to the p element', () => {
    const disclaimer = doShallow({ id: 'the-disclaimer' })

    expect(disclaimer).toHaveProp('id', 'the-disclaimer')
  })

  it('does not allow custom CSS', () => {
    const disclaimer = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(disclaimer).not.toHaveProp('className', 'my-custom-class')
    expect(disclaimer).not.toHaveProp('style')
  })
})
