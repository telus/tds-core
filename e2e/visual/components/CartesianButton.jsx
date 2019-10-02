/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Button from '../../../packages/Button'

const CartesianButton = props => (
  <Cartesian
    {...props}
    component={Button}
    type={['button', 'submit', 'reset']}
    variant={['primary', 'secondary', 'inverted']}
    children={['Hello, world!']}
  />
)

export default { name: 'Button', Component: CartesianButton }
