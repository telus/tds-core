/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Image from '../../../packages/Image'

const CartesianImage = props => (
  <Cartesian
    {...props}
    component={Image}
    src="https://tds.telus.com/components/image-example.jpg"
    alt="Image of co-workers collaborating"
    width={[300, 600]}
    height={[300, 600]}
    rounded={[undefined, 'circle', 'corners']}
  />
)

export default { name: 'Image', Component: CartesianImage }
