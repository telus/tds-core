import React from 'react'
import { render, shallow } from 'enzyme'

import FeedbackIconSVG from '../FeedbackIconSVG'

describe('FeedbackIconSVG', () => {
  const doShallow = (props = {}) => shallow(<FeedbackIconSVG {...props} />)

  it('renders', () => {
    const feedbackIconSVG = render(
      <FeedbackIconSVG>
        <path />
      </FeedbackIconSVG>
    )

    expect(feedbackIconSVG).toMatchSnapshot()
  })

  it('to render an svg tag', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
      id: 'the-id',
      'data-some-attr': 'some value',
    })

    expect(feedbackIconSVG.type()).toEqual('svg')
  })

  it('has an img="role" attribute', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
    })

    expect(feedbackIconSVG.prop('role')).toEqual('img')
  })

  it('has an aria-hidden="true" attribute if no a11yText is passed', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
    })

    expect(feedbackIconSVG.prop('aria-hidden')).toEqual('true')
  })

  it('does not have an aria-hidden attribute if a11yText is passed', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
      a11yText: 'Add Location',
    })

    expect(feedbackIconSVG.prop('aria-hidden')).toBeUndefined()
  })

  it('contains a title tag with a11yText if a11yText is passed', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
      a11yText: 'Add Location',
    })

    expect(feedbackIconSVG.contains(<title>Add Location</title>)).toEqual(true)
  })

  it('passes additional attributes to the element', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
      id: 'the-id',
      'data-some-attr': 'some value',
    })

    expect(feedbackIconSVG).toHaveProp('id', 'the-id')
    expect(feedbackIconSVG).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const feedbackIconSVG = doShallow({
      children: <path />,
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(feedbackIconSVG).not.toHaveProp('className', 'my-custom-class')
    expect(feedbackIconSVG).not.toHaveProp('style')
  })
})
