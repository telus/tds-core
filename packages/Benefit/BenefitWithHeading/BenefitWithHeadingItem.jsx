import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'

import { safeRest } from '@tds/util-helpers'
import { warn } from '../../../shared/utils/warn'

/**
 * @version ../package.json
 */
const BenefitItem = ({ icon: Icon, heading, children, ...rest }) => {
  if (Icon === undefined || typeof Icon === 'undefined') {
    warn(
      'BenefitWitHeading',
      'An icon must be set in either BenefitWithHeading or BenefitWithHeading.Item.'
    )
  }

  return (
    <Box {...safeRest(rest)} between={3} inline tag="li">
      {Icon && (
        <Box vertical={1}>
          <Icon size={24} variant="default" />
        </Box>
      )}
      <div>
        <Heading level="h4" tag="div">
          {heading}
        </Heading>
        <Text size="small">{children}</Text>
      </div>
    </Box>
  )
}

BenefitItem.propTypes = {
  /**
   * A DecorativeIcon. This will override any `icon` prop set in the parent.
   */
  icon: componentWithName('DecorativeIcon', true),
  /**
   * Heading text.
   */
  heading: PropTypes.string.isRequired,
  /**
   * An item in the Benefit list
   */
  children: PropTypes.node.isRequired,
}

BenefitItem.defaultProps = {
  icon: undefined,
}

BenefitItem.displayName = 'BenefitWithHeading.Item'

export default BenefitItem
