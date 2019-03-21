import React from 'react'
import { shallow } from 'enzyme'

import VideoSplash from '../VideoSplash'

describe('VideoSplash', () => {
  const doShallow = (props = {}) => shallow(<VideoSplash poster="" videoLength={61} {...props} />)

  it('renders', () => {
    const videoSplash = doShallow()

    expect(videoSplash).toMatchSnapshot()
  })

  it('displays timestamps correctly', () => {
    const videoSplash = doShallow().find('[data-testid="timestamp"]')

    expect(videoSplash.dive().text()).toEqual('1:01')
  })

  it('passes additional attributes to the element', () => {
    const videoSplash = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(videoSplash).toHaveProp('id', 'the-id')
    expect(videoSplash).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const videoSplash = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(videoSplash).not.toHaveProp('className', 'my-custom-class')
    expect(videoSplash).not.toHaveProp('style')
  })
})
