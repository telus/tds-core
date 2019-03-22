import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'

import safeRest from '../../../shared/utils/safeRest'

/**
 * @version ../package.json
 */
const BenefitItem = ({ Icon, heading, children, ...rest }) => (
  <Box {...safeRest(rest)} between={3} tag="li">
    <Icon size="24" variant="default" />
    <div>
      <Heading level="h4" tag="span">
        {heading}
      </Heading>
      <Text size="small">{children}</Text>
    </div>
  </Box>
)

BenefitItem.propTypes = {
  /**
   * A DecorativeIcon.
   */
  Icon: componentWithName('DecorativeIcon').isRequired,
  /**
   * Heading text.
   */
  heading: PropTypes.string.isRequired,
  /**
   * An item in the Benefit list
   */
  children: PropTypes.node.isRequired,
}

BenefitItem.defaultProps = {}

BenefitItem.displayName = 'BenefitWithHeading.Item'

export default BenefitItem
