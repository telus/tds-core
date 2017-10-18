import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

import styles from './Card.modules.scss'

/**
 * A container that serves as an entry point to more detailed information.
 */
const Card = ({ children, ...rest }) => (
  <div {...safeRest(rest)} className={styles.card}>
    {children}
  </div>
)

Card.propTypes = {
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

export default Card
