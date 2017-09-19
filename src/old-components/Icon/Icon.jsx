import React from 'react'
import PropTypes from 'prop-types'

import { deprecate } from '../../warn'

import styles from './Icon.modules.scss'

const Icon = ({ glyph, variant, label, fixedWidth, size, className, children, ...rest }) => {
  if (className) {
    deprecate('Icon', 'Custom CSS classes are deprecated. This component will soon stop supporting custom styling.')
  }

  if (rest.style) {
    deprecate('Icon', 'Inline styles are deprecated. This component will soon stop supporting custom styling.')
  }

  if (variant === 'disabled') {
    deprecate('Icon', '\'disabled\' variant is deprecated.')
  }

  if (fixedWidth) {
    deprecate('Icon', '\'fixedWidth\' prop is deprecated.')
  }

  const classes = `${styles.icon} ${styles[`icon-core-${glyph}`]}`
    + ` ${variant ? styles[`icon--${variant}`] : ''}`
    + `${fixedWidth ? ` ${styles['icon--fw']}` : ''}`
    + `${size ? ` ${styles[`icon--${size}`]}` : ''}`
    + `${className ? ` ${className}` : ''}`

  return (
    <i
      {...rest}
      className={classes}
      aria-label={label || undefined}
      aria-hidden={label ? 'false' : 'true'}
    >
      {children}
    </i>
  )
}

Icon.propTypes = {
  /**
   * Name of the icon glyph.
   */
  glyph: PropTypes.oneOf([
    'caret-down',
    'caret-up',
    'checkmark',
    'chevron',
    'left-chevron',
    'exclamation-point-circle',
    'expander',
    'hamburger',
    'incomplete',
    'location',
    'minus',
    'plus',
    'question-mark-circle',
    'spyglass',
    'times'
  ]).isRequired,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'inverted',
    'disabled',
    'error'
  ]),
  /**
   * Whether or not to give the icon a fixed width.
   *
   * @deprecated an alternative will be provided soon.
   */
  fixedWidth: PropTypes.bool,
  /**
   *
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * One or more CSS class names separated by spaces to append onto the icon.
   * Don't advertise as we plan on removing this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  label: PropTypes.string,
  /**
   * This can be used to add screen-reader content into the icon, but it must
   * be hidden from view. This behaviour is better accomplished with aria-* attributes.
   *
   * @ignore
   */
  children: PropTypes.node
}
Icon.defaultProps = {
  variant: 'inherit',
  fixedWidth: false,
  size: 'medium',
  className: '',
  children: null
}

export default Icon
