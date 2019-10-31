/* eslint-disable react/no-children-prop, react/jsx-key, react/display-name */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import TextArea from '../../../packages/TextArea'
import Tooltip from '../../../packages/Tooltip'
import InputFeedback from '../../../packages/InputFeedback'

const CartesianTextArea = props => (
  <Cartesian
    {...props}
    component={TextArea}
    label="Description"
    hint={[undefined, 'Please describe yourself']}
    value={[undefined, 'I am me']}
    feedback={[undefined, 'success', 'error']}
    error="Default error message"
    helper={[undefined, () => <InputFeedback>InputFeedback</InputFeedback>]}
    tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
  />
)

export default { name: 'TextArea', Component: CartesianTextArea }
