import React from 'react'
// import styled from 'styled-components'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../../shared/utils/safeRest'

import Item from './BenefitWithHeadingItem'

const cloneChild = (Icon, child) => {
  if (Icon) {
    return React.cloneElement(child, { Icon })
  }
  return React.cloneElement(child)
}

/**
 * @version ../package.json
 */
const BenefitWithHeading = ({ Icon, children, ...rest }) => (
  <Box {...safeRest(rest)} tag="ul" between={3}>
    {React.Children.map(children, child => cloneChild(Icon, child))}
  </Box>
)

BenefitWithHeading.propTypes = {
  /**
   * A `DecorativeIcon`. If set here, it applies to all nested Benefit Items
   * except for Items that receive an `Icon` prop.
   */
  Icon: componentWithName('DecorativeIcon'),
  /**
   * An Item in the Benefit list
   */
  children: componentWithName('BenefitItem').isRequired,
}

BenefitWithHeading.defaultProps = {
  Icon: undefined,
}

BenefitWithHeading.Item = Item

export default BenefitWithHeading
