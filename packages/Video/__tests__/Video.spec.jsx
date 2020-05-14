import React from 'react'
import { mount } from 'enzyme'

import Video from '../Video'

describe('Video', () => {
  const doMount = (props = {}) =>
    mount(
      <Video
        sources={[
          { source: 'video.mp4', mediaType: 'video/mp4', qualityName: '1080p', qualityRank: 1 },
          { source: 'videolow.mp4', mediaType: 'video/mp4', qualityName: '480p', qualityRank: 2 },
        ]}
        defaultDesktopQuality={1}
        defaultMobileQuality={2}
        posterSrc="TestPoster.jpg"
        tracks={[
          {
            label: 'English',
            kind: 'captions',
            language: 'en',
            source: 'testEng.vtt',
          },
        ]}
        copy="en"
        // eslint-disable-next-line
        analyticsTracking={object => {console.log('object', object)}}
        videoTitle="Demo video"
        {...props}
      />
    )

  it('renders', () => {
    const video = doMount()

    expect(video).toMatchSnapshot()
  })

  it('does other things', () => {
    const video = doMount()

    expect(video).toExist()
  })

  it('passes additional attributes to the element', () => {
    const video = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(video).toHaveProp('id', 'the-id')
    expect(video).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const video = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    }).find('[data-testid="videoPlayer"]')

    expect(video).not.toHaveProp('className', 'my-custom-class')
    expect(video).not.toHaveProp('style')
  })
})
