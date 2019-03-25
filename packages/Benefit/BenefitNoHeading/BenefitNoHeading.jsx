import React from 'react'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../../shared/utils/safeRest'

import Item from './BenefitNoHeadingItem'

const cloneChild = (icon, child) => {
  if (child.props.icon) {
    return React.cloneElement(child)
  }
  return React.cloneElement(child, { icon })
}

/**
 * @version ../package.json
 */
const BenefitNoHeading = ({ icon, children, ...rest }) => (
  <Box {...safeRest(rest)} tag="ul" between={3}>
    {React.Children.map(children, child => cloneChild(icon, child))}
  </Box>
)

BenefitNoHeading.propTypes = {
  /**
   * A `DecorativeIcon`. If set here, it applies to all nested Benefit Items
   * except for Items that receive an `icon` prop.
   */
  icon: componentWithName('DecorativeIcon'),
  /**
   * An Item in the Benefit list
   */
  children: componentWithName('BenefitItem').isRequired,
}

BenefitNoHeading.defaultProps = {
  icon: undefined,
}

BenefitNoHeading.Item = Item

export default BenefitNoHeading
