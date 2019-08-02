import React from 'react'
import { render, shallow } from 'enzyme'

import FeedbackIcon from '../FeedbackIcon'

describe('FeedbackIcon', () => {
  const doShallow = (props = {}) => shallow(<FeedbackIcon {...props} />)

  it('renders', () => {
    const feedbackIconSVG = render(
      <FeedbackIcon>
        <svg />
      </FeedbackIcon>
    )

    expect(feedbackIconSVG).toMatchSnapshot()
  })

  it('to render an i tag', () => {
    const feedbackIcon = doShallow({
      children: <svg />,
      id: 'the-id',
      'data-some-attr': 'some value',
    })

    expect(feedbackIcon.type()).toEqual('i')
  })

  it('passes additional attributes to the element', () => {
    const feedbackIcon = doShallow({
      children: <svg />,
      id: 'the-id',
      'data-some-attr': 'some value',
    })

    expect(feedbackIcon).toHaveProp('id', 'the-id')
    expect(feedbackIcon).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const feedbackIcon = doShallow({
      children: <svg />,
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(feedbackIcon).not.toHaveProp('className', 'my-custom-class')
    expect(feedbackIcon).not.toHaveProp('style')
  })
})
