/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Image from '../../../packages/Image'

const CartesianImage = props => (
  <div style={{ width: '25%' }}>
    <Cartesian {...props} component={Image} />
  </div>
)

const ImageContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianImage}
      src="https://tds.telus.com/components/image-example.jpg"
      alt="Image of co-workers collaborating"
      width={[300, 600]}
      height={[300, 600]}
      rounded={[undefined, 'circle', 'corners']}
    />
  </div>
)

export default { name: 'Image', Component: ImageContainer }
