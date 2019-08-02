import React from 'react'
import { shallow } from 'enzyme'

import FeedbackIcon from '../FeedbackIcon'

describe('FeedbackIcon', () => {
  const doShallow = (props = {}) => shallow(<FeedbackIcon {...props} />)

  it('passes additional attributes to the element', () => {
    const feedbackIcon = doShallow({
      children: <path />,
      id: 'the-id',
      'data-some-attr': 'some value',
    })

    expect(feedbackIcon).toHaveProp('id', 'the-id')
    expect(feedbackIcon).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const feedbackIcon = doShallow({
      children: <path />,
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(feedbackIcon).not.toHaveProp('className', 'my-custom-class')
    expect(feedbackIcon).not.toHaveProp('style')
  })
})
