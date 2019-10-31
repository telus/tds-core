import React from 'react'

import { Cartesian } from '@compositor/kit'

import WaveDivider from '../../../packages/WaveDivider'

const CartesianWaveDivider = props => <Cartesian {...props} component={WaveDivider} />

export default { name: 'WaveDivider', Component: CartesianWaveDivider }
