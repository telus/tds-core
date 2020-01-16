/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Input from '../../../packages/Input'
import Tooltip from '../../../packages/Tooltip'

const CartesianInput = props => (
  <div style={{ width: '25%' }}>
    <Input {...props} component={Input} />
  </div>
)

const CartesianContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianInput}
      type={['text', 'number', 'password']}
      label="TDS Input"
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
    <Cartesian
      component={CartesianInput}
      type="text"
      label="TDS Feedback Input"
      feedback={[undefined, 'success', 'error']}
      error="Error message"
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
    <Cartesian
      component={CartesianInput}
      type="text'"
      label="TDS Hint Input"
      hint="Hint text"
      hintPosition={['inline', 'below']}
      feedback={[undefined, 'error']}
      error="Error message"
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
  </div>
)

export default { name: 'Input', Component: CartesianContainer }
