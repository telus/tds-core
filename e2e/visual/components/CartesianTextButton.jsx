/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import TextButton from '../../../packages/TextButton'

const CartesianTextButton = props => (
  <Cartesian {...props} component={TextButton} children="Delete Saved Card" />
)

export default { name: 'TextButton', Component: CartesianTextButton }
