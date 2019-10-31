/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Input from '../../../packages/Input'
import Tooltip from '../../../packages/Tooltip'

const CartesianInput = props => (
  <React.Fragment>
    <Cartesian
      {...props}
      component={Input}
      type={['text', 'number', 'password']}
      label="TDS Input"
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
    <Cartesian
      {...props}
      component={Input}
      type="text"
      label="TDS Feedback Input"
      feedback={[undefined, 'success', 'error']}
      error="Error message"
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
    <Cartesian
      {...props}
      component={Input}
      type="text'"
      label="TDS Hint Input"
      hint="Hint text"
      hintPosition={['inline', 'below']}
      feedback={[undefined, 'error']}
      error="Error message"
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
  </React.Fragment>
)

export default { name: 'Input', Component: CartesianInput }
