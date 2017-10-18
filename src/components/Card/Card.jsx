import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

import styles from './Card.modules.scss'

/**
 * A container that serves as an entry point to more detailed information.
 */
const Card = ({ variant, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[variant]}>
    {children}
  </div>
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
