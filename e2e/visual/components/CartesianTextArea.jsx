/* eslint-disable react/no-children-prop, react/jsx-key, react/display-name */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import TextArea from '../../../packages/TextArea'
import Tooltip from '../../../packages/Tooltip'
import InputFeedback from '../../../packages/InputFeedback'

const CartesianTextArea = props => (
  <div style={{ width: '7%', transform: 'scale(0.75)' }}>
    <TextArea {...props} />
  </div>
)

const TextAreaContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianTextArea}
      label="Description"
      hint={[undefined, 'Please describe yourself']}
      value={[undefined, 'I am me']}
      feedback={[undefined, 'success', 'error']}
      error="Default error message"
      helper={[undefined, () => <InputFeedback>InputFeedback</InputFeedback>]}
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
  </div>
)

export default { name: 'TextArea', Component: TextAreaContainer }
