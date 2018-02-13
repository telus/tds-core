import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box/Box'
import safeRest from '../../src/utils/safeRest'

import styles from './Card.modules.scss'

/**
 * A content container.
 */
const Card = ({ variant, children, ...rest }) => (
  <Box {...safeRest(rest)} horizontal={4} vertical={5} dangerouslyAddClassName={styles[variant]}>
    {children}
  </Box>
)

Card.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['white', 'lavender', 'grey']),
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  variant: 'white',
}

export default Card
