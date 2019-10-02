/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import DisplayHeading from '../../../packages/DisplayHeading'

const CartesianDisplayHeading = props => (
  <Cartesian
    {...props}
    component={DisplayHeading}
    invert={[false, true]}
    children={[
      'TELUS Design System',
      <>
        TELUS Optik TV<sup>®</sup>
      </>,
    ]}
  />
)

export default { name: 'DisplayHeading', Component: CartesianDisplayHeading }
