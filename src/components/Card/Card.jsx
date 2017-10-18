import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box/Box'
import safeRest from '../../utils/safeRest'

import styles from './Card.modules.scss'

/**
 * A container that serves as an entry point to more detailed information.
 */
const Card = ({ variant, children, ...rest }) => (
  <Box
    {...safeRest(rest)}
    spacing="padding"
    horizontal={3}
    vertical={4}
    dangerouslyAddClassName={styles[variant]}
  >
    {children}
  </Box>
)

Card.propTypes = {
  variant: PropTypes.oneOf(['white', 'lavender', 'gray']).isRequired,
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  variant: 'white',
}

export default Card
