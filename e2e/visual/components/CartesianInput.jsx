/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Input from '../../../packages/Input'
import Tooltip from '../../../packages/Tooltip'

const CartesianInput = props => (
  <Cartesian
    {...props}
    component={Input}
    type={['text', 'number', 'password', 'email', 'search', 'tel', 'url']}
    label="TDS Input"
    hint={[undefined, 'Hint text']}
    hintPosition={[undefined, 'inline', 'below']}
    feedback={[undefined, 'success', 'error']}
    error={[undefined, 'Error message']}
    tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
  />
)

export default { name: 'Input', Component: CartesianInput }
