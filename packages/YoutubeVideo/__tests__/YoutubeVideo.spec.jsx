import React from 'react'
import { mount } from 'enzyme'

import YoutubeVideo from '../YoutubeVideo'

describe('YoutubeVideo', () => {
  const doMount = (props = {}) =>
    mount(<YoutubeVideo videoId="ppF-fn37SDs" videoLength={30} {...props} />)

  it('renders', () => {
    const youtubeVideo = doMount()

    expect(youtubeVideo).toMatchSnapshot()
  })

  it('applies the selected aspect ratio', () => {
    const youtubeVideo = doMount({ aspectRatio: '4:3' }).find('[data-testid="aspectLimiter"]')
    expect(youtubeVideo).toHaveStyleRule('padding-top', '75%')
  })

  it('passes additional attributes to the element', () => {
    const youtubeVideo = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(youtubeVideo).toHaveProp('id', 'the-id')
    expect(youtubeVideo).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const youtubeVideo = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    }).find('[data-testid="youtubePlayer"]')

    expect(youtubeVideo).not.toHaveProp('className', 'my-custom-class')
    expect(youtubeVideo).not.toHaveProp('style')
  })
})
