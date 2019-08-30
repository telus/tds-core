import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'

import { safeRest } from '@tds/util-helpers'
import { warn } from '../../../shared/utils/warn'

/**
 * @version ../package.json
 */
const BenefitItem = ({ icon: Icon, children, ...rest }) => {
  if (Icon === undefined || typeof Icon === 'undefined') {
    warn(
      'BenefitNoHeading',
      'An icon must be set in either BenefitNoHeading or BenefitNoHeading.Item.'
    )
  }

  return (
    <Box {...safeRest(rest)} between={3} inline tag="li">
      {Icon && <Icon size={24} variant="default" />}
      <Text size="small">{children}</Text>
    </Box>
  )
}

BenefitItem.propTypes = {
  /**
   * A DecorativeIcon. This will override any `icon` prop set in the parent.
   */
  icon: componentWithName('DecorativeIcon', true),
  /**
   * An item in the Benefit list
   */
  children: PropTypes.node.isRequired,
}

BenefitItem.defaultProps = {
  icon: undefined,
}

BenefitItem.displayName = 'BenefitNoHeading.Item'

export default BenefitItem
