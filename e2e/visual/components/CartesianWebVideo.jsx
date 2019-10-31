/* eslint-disable react/no-children-prop, react/jsx-key, react/display-name */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import WebVideo from '../../../packages/WebVideo'

const CartesianWebVideo = props => (
  <Cartesian
    {...props}
    component={WebVideo}
    videoId="ppF-fn37SDs"
    videoLength={[30, 90]}
    aspectRatio={['16:9', '4:3', '1:1']}
    defaultVolume={70}
    copy={['en', 'fr']}
  />
)

export default { name: 'WebVideo', Component: CartesianWebVideo }
