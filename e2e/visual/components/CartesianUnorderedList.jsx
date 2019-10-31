/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import UnorderedList from '../../../packages/UnorderedList'

const CartesianUnorderedList = props => (
  <Cartesian
    {...props}
    component={UnorderedList}
    listStyle={['circle', 'checkmark', 'x']}
    size={['small', 'medium', 'large']}
    children={[
      [
        <UnorderedList.Item>Design</UnorderedList.Item>,
        <UnorderedList.Item>Code</UnorderedList.Item>,
        <UnorderedList.Item>Content</UnorderedList.Item>,
      ],
    ]}
  />
)

export default { name: 'UnorderedList', Component: CartesianUnorderedList }
