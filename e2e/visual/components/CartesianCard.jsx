/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Card from '../../../packages/Card'

const CartesianCard = props => (
  <div style={{ width: '20%', maxHeight: 250 }}>
    <Card {...props} />
  </div>
)

const CartesianContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianCard}
      variant={[
        'white',
        'lavender',
        'grey',
        'default',
        'branded',
        'alternative',
        'defaultWithBorder',
        'defaultOnlyBorder',
      ]}
      fullHeight={[true, false]}
      spacing={['default', 'narrow', 'compact', 'intermediate']}
      children="Get a new smartphone for $0 on a 2-year plan"
    />

    <Cartesian
      component={Card}
      variant="defaultWithBorder"
      children="Get a new smartphone for $0 on a 2-year plan"
      fullBleedImage={[
        undefined,
        {
          src: 'https://tds.telus.com/components/image-example.jpg',
          width: 191,
          height: 176,
          alt: 'salal branch image',
          position: 'right',
        },
        {
          src: 'https://tds.telus.com/components/image-example.jpg',
          width: 191,
          height: 176,
          alt: 'salal branch image',
          position: 'top',
        },
      ]}
    />
  </div>
)
export default { name: 'Card', Component: CartesianContainer }
