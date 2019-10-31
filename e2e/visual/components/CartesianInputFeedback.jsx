/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import InputFeedback from '../../../packages/InputFeedback'

const CartesianInputFeedback = props => (
  <Cartesian
    {...props}
    component={InputFeedback}
    feedback={['success', 'error']}
    children="Input Feedback"
  />
)

export default { name: 'InputFeedback', Component: CartesianInputFeedback }
