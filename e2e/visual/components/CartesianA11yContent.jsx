/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import A11yContent from '../../../packages/A11yContent'

const CartesianA11yContent = props => (
  <Cartesian {...props} component={A11yContent} children="Accessible Text" />
)

export default { name: 'A11yContent', Component: CartesianA11yContent }
