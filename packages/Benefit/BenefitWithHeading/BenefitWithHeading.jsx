import React from 'react'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import { safeRest } from '@tds/util-helpers'

import Item from './BenefitWithHeadingItem'

const cloneChild = (icon, child) => {
  if (child.props.icon) {
    return child
  }
  return React.cloneElement(child, { icon })
}

/**
 * @version ../package.json
 */
const BenefitWithHeading = ({ icon, children, ...rest }) => (
  <Box {...safeRest(rest)} tag="ul" between={3}>
    {React.Children.map(children, child => cloneChild(icon, child))}
  </Box>
)

BenefitWithHeading.propTypes = {
  /**
   * A `DecorativeIcon`. If set here, it applies to all nested Benefit Items
   * except for Items that receive an `icon` prop.
   */
  icon: componentWithName('DecorativeIcon', true),
  /**
   * An Item in the Benefit list.
   */
  children: componentWithName('BenefitItem').isRequired,
}

BenefitWithHeading.defaultProps = {
  icon: undefined,
}

BenefitWithHeading.Item = Item

export default BenefitWithHeading
