import React from 'react'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../../shared/utils/safeRest'

import Item from './BenefitNoHeadingItem'

const cloneChild = (Icon, child) => {
  if (child.props.Icon) {
    return React.cloneElement(child)
  }
  return React.cloneElement(child, { Icon })
}

/**
 * @version ../package.json
 */
const BenefitNoHeading = ({ Icon, children, ...rest }) => (
  <Box {...safeRest(rest)} tag="ul" between={3}>
    {React.Children.map(children, child => cloneChild(Icon, child))}
  </Box>
)

BenefitNoHeading.propTypes = {
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

BenefitNoHeading.defaultProps = {
  Icon: undefined,
}

BenefitNoHeading.Item = Item

export default BenefitNoHeading
