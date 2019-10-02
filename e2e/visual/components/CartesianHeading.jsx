/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Heading from '../../../packages/Heading'

const CartesianHeading = props => (
  <Cartesian
    {...props}
    component={Heading}
    level={['h1', 'h2', 'h3', 'h4']}
    invert={[false, true]}
    children={[
      'TELUS Design System',
      <>
        TELUS Optik TV<sup>®</sup>
      </>,
    ]}
  />
)

export default { name: 'Heading', Component: CartesianHeading }
