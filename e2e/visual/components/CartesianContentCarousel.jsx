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
        children={[<ContentCarousel.Item pictureSide="left">'Hello, world! 1'</ContentCarousel.Item>, <ContentCarousel.Item>'Hello, world! 2'</ContentCarousel.Item>, <ContentCarousel.Item>'Hello, world! 3'</ContentCarousel.Item>]}
    />
)

export default { name: 'ContentCarousel', Component: CartesianContentCarousel }
