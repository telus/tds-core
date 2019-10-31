/* eslint-disable react/no-children-prop, react/jsx-key, react/display-name */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Select from '../../../packages/Select'
import Tooltip from '../../../packages/Tooltip'
import InputFeedback from '../../../packages/InputFeedback'

const CartesianSelect = props => (
  <React.Fragment>
    <Cartesian
      {...props}
      component={Select}
      options={[
        [
          { text: 'Alberta', value: 'AB' },
          { text: 'British Columbia', value: 'BC' },
          { text: 'Ontario', value: 'ON' },
          { text: 'Quebec', value: 'QC' },
        ],
      ]}
      label="Province"
      placeholder={[undefined, 'Please select...']}
      value={[undefined, 'ON']}
      defaultValue={[undefined, 'ON']}
    />

    <Cartesian
      {...props}
      component={Select}
      options={[
        [
          { text: 'Alberta', value: 'AB' },
          { text: 'British Columbia', value: 'BC' },
          { text: 'Ontario', value: 'ON' },
          { text: 'Quebec', value: 'QC' },
        ],
      ]}
      label="Province"
      feedback={[undefined, 'success', 'error']}
      error="Default error message"
    />

    <Cartesian
      {...props}
      component={Select}
      options={[
        [
          { text: 'Alberta', value: 'AB' },
          { text: 'British Columbia', value: 'BC' },
          { text: 'Ontario', value: 'ON' },
          { text: 'Quebec', value: 'QC' },
        ],
      ]}
      label="Province"
      hint={[undefined, 'Hint text']}
      hintPosition={['inline', 'below']}
    />

    <Cartesian
      {...props}
      component={Select}
      options={[
        [
          { text: 'Alberta', value: 'AB' },
          { text: 'British Columbia', value: 'BC' },
          { text: 'Ontario', value: 'ON' },
          { text: 'Quebec', value: 'QC' },
        ],
      ]}
      label="Province"
      helper={[undefined, () => <InputFeedback>InputFeedback</InputFeedback>]}
      tooltip={[undefined, <Tooltip copy="en">Sample Tooltip</Tooltip>]}
    />
  </React.Fragment>
)

export default { name: 'Select', Component: CartesianSelect }
