import React from 'react'
import { shallow, render } from 'enzyme'

import A11yContent from '../A11yContent'

describe('A11yContent', () => {
  const defaultProps = {}
  const doShallow = (props = {}) => {
    return shallow(
      <A11yContent {...defaultProps} {...props}>
        Some text
      </A11yContent>
    )
  }

  it('renders', () => {
    const a11yContent = render(<A11yContent>Some text</A11yContent>)

    expect(a11yContent).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const a11yContent = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(a11yContent).not.toHaveProp('className', 'my-custom-class')
    expect(a11yContent).not.toHaveProp('style')
  })
})
