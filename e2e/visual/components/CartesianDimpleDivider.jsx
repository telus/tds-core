import React from 'react'

import { Cartesian } from '@compositor/kit'

import DimpleDivider from '../../../packages/DimpleDivider'

const CartesianDimpleDivider = props => <Cartesian {...props} component={DimpleDivider} />

export default { name: 'DimpleDivider', Component: CartesianDimpleDivider }
