/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Tooltip from '../../../packages/Tooltip'

const CartesianTooltip = props => (
  <Cartesian
    {...props}
    component={Tooltip}
    direction={['left', 'right', 'auto']}
    copy={['en', 'fr']}
    children="You can find your device's IMEI by typing *#06# on its dialpad. Please enter the complete
    15-digit number, without spaces or characters."
  />
)

export default { name: 'Tooltip', Component: CartesianTooltip }
