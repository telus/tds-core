/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import ContentCarousel from '../../../packages/ContentCarousel'
import Image from '../../../packages/Image'

const CartesianContentCarousel = props => (
  <Cartesian
    {...props}
    component={ContentCarousel}
    image={<Image src="image-example.jpg" />}
    children={<ContentCarousel.Item children="Hello!" />}
  />
)

export default { name: 'ContentCarousel', Component: CartesianContentCarousel }
