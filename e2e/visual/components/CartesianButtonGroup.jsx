/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import ButtonGroup from '../../../packages/ButtonGroup'

const CartesianButtonGroup = props => (
  <React.Fragment>
    <Cartesian
      {...props}
      component={ButtonGroup}
      name="size-read-only"
      value="64gb"
      label="Storage size (read only)"
      readOnly={true}
      children={[
        [
          <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>,
          <ButtonGroup.Item value="128gb">128 GB</ButtonGroup.Item>,
        ],
      ]}
    />
    <Cartesian
      {...props}
      component={ButtonGroup}
      name="size"
      value="64gb"
      label="Storage size"
      children={[
        [
          <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>,
          <ButtonGroup.Item value="128gb">128 GB</ButtonGroup.Item>,
        ],
      ]}
    />
  </React.Fragment>
)

export default { name: 'ButtonGroup', Component: CartesianButtonGroup }
