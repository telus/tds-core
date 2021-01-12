import React from 'react'
import { render, shallow } from 'enzyme'

import FeedbackIcon from '../FeedbackIcon'

import { warn } from '../../../shared/utils/warn'

jest.mock('../../../shared/utils/warn')

describe('FeedbackIcon', () => {
  const defaultProps = { copy: { a11yText: 'Hello' }, width: 20, height: 20 }

  const doShallow = props => shallow(<FeedbackIcon {...defaultProps} {...props} />)

  it('renders', () => {
    const feedbackIcon = render(
      <FeedbackIcon copy={{ a11yText: 'Hello' }} width={20} height={20}>
        <svg />
      </FeedbackIcon>
    )

    expect(feedbackIcon).toMatchSnapshot()
  })

  it('has an img="role" attribute', () => {
    const feedbackIcon = doShallow({
      children: <path />,
    })

    expect(feedbackIcon.prop('role')).toEqual('img')
  })

  it('has an aria-hidden="true" attribute if optional a11yText is not passed', () => {
    const feedbackIcon = doShallow({
      children: <path />,
      optionalText: true,
      copy: { a11yText: '' },
    })

    expect(feedbackIcon.prop('aria-hidden')).toEqual(true)
  })

  it('does not have an aria-hidden attribute if a11yText is passed', () => {
    const feedbackIcon = doShallow({
      children: <path />,
      copy: { a11yText: 'Some text' },
    })

    expect(feedbackIcon.prop('aria-hidden')).toBeUndefined()
  })

  it('contains a title tag with a11yText if a11yText is passed', () => {
    const feedbackIcon = doShallow({
      children: <path />,
      copy: { a11yText: 'Add Location' },
    })

    expect(feedbackIcon.contains(<title>Add Location</title>)).toEqual(true)
  })

  it('warns when a11yText is not pass when required', () => {
    doShallow({
      children: <path />,
      copy: { a11yText: '' },
    })

    expect(warn).toHaveBeenCalled()
    jest.clearAllMocks()
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
