/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import OrderedList from '../../../packages/OrderedList'

const CartesianOrderedList = props => (
  <Cartesian
    {...props}
    component={OrderedList}
    listStyle={['decimal', 'upperAlpha', 'lowerAlpha']}
    size={['small', 'medium', 'large']}
    children={[
      [
        <OrderedList.Item>Design</OrderedList.Item>,
        <OrderedList.Item>Code</OrderedList.Item>,
        <OrderedList.Item>Content</OrderedList.Item>,
      ],
    ]}
  />
)

export default { name: 'OrderedList', Component: CartesianOrderedList }
