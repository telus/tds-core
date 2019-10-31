/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Video from '../../../packages/Video'

const CartesianVideo = props => (
  <Cartesian
    {...props}
    component={Video}
    sources={[
      {
        source: 'https://tds.telus.com/components/sample-video-480.mp4',
        mediaType: 'video/mp4',
        qualityName: '480p',
        qualityRank: 1,
      },
    ]}
    defaultDesktopQuality={1}
    defaultMobileQuality={1}
    posterSrc="https://tds.telus.com/components/test-poster.jpg"
    copy={['en', 'fr']}
    simpleMode={[false, true]}
    videoBorder={[false, true]}
  />
)

export default { name: 'Video', Component: CartesianVideo }
