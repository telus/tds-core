/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'

import StandaloneIcon from '../../../packages/StandaloneIcon'

const StyledIconContainer = styled(StyledContainer)({
  padding: 12,
  width: 'auto',
})

const CartesianStandaloneIcon = props => (
  <Cartesian
    {...props}
    container={StyledIconContainer}
    component={StandaloneIcon}
    symbol={[
      'caretDown',
      'caretUp',
      'checkmark',
      'chevron',
      'leftChevron',
      'exclamationPointCircle',
      'expander',
      'hamburger',
      'location',
      'minus',
      'plus',
      'questionMarkCircle',
      'spyglass',
      'times',
    ]}
    variant={['primary', 'secondary', 'inverted', 'error']}
    size={[16, 20, 24, 32, 48]}
    a11yText="A11yText"
  />
)

export default { name: 'StandaloneIcon', Component: CartesianStandaloneIcon }
