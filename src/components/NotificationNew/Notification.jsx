import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../safeRest'

import Container from '../Grid/Container/Container'
import Icon from '../Icon/Icon'

import styles from './Notification.modules.scss'

const iconByVariant = {
  success: 'checkmark',
  error: 'exclamation-point-circle'
}
const NotificationIcon = ({ variant }) => {
  if (variant !== 'success' && variant !== 'error') {
    return null
  }

  return (
    <span className={styles.icon}>
      <Icon glyph={iconByVariant[variant]} aria-hidden="true" />
    </span>
  )
}
NotificationIcon.propTypes = {
  variant: PropTypes.string.isRequired
}

/**
 * A banner to highlight important notices.
 */
const Notification = ({ variant, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[variant]}>
    <Container limitWidth>
      <NotificationIcon variant={variant} />
      {children}
    </Container>
  </div>
)

Notification.propTypes = {
  /**
   * The appearance of the Notification.
   */
  variant: PropTypes.oneOf([
    'instructional',
    'branded',
    'success',
    'error'
  ]),
  /**
   * The Notification's content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired
}

Notification.defaultProps = {
  variant: 'instructional'
}

export default Notification
