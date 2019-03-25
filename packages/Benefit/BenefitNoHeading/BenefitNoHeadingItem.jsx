import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'

import safeRest from '../../../shared/utils/safeRest'

/**
 * @version ../package.json
 */
const BenefitItem = ({ icon: Icon, children, ...rest }) => (
  <Box {...safeRest(rest)} between={3} inline tag="li">
    <Icon size={24} variant="default" />
    <Text size="small">{children}</Text>
  </Box>
)

BenefitItem.propTypes = {
  /**
   * A DecorativeIcon. This will override any `icon` prop set in the parent.
   */
  icon: componentWithName('DecorativeIcon').isRequired,
  /**
   * An item in the Benefit list
   */
  children: PropTypes.node.isRequired,
}

BenefitItem.displayName = 'BenefitNoHeading.Item'

export default BenefitItem
