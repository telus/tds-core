import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../warn'

import styles from './Icon.modules.scss'

const Icon = ({ glyph, variant, fixedWidth, size, className, children, ...rest }) => {
  if (className) {
    warn('Icon', 'Custom CSS classes are deprecated. This component does not support custom styling.')
  }

  if (rest.style) {
    warn('Icon', 'Inline styles are deprecated. This component does not support custom styling.')
  }

  const classes = `
    ${styles.icon}
    ${styles[`icon-core-${glyph}`]}
    ${variant ? styles[`icon-color--${variant}`] : styles['icon-color--inherit']}
    ${fixedWidth ? styles['icon--fw'] : ''}
    ${size ? styles[`icon--${size}`] : ''}
    ${className}
  `

  return (
    <i {...rest} className={classes}>
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
   *
   * **Note**: when no variant is specified, the icon's colour is inherited from parent element.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
    'error'
  ]),
  /**
   * Whether or not to give the icon a fixed width.
   *
   * @deprecated please use [Unordered Lists](#unorderedlist) to
   * display icons uniformly within a column.
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
   * This can be used to add screen-reader content into the icon, but it must
   * be hidden from view. This behaviour is better accomplished with aria-* attributes.
   *
   * @ignore
   */
  children: PropTypes.node
}
Icon.defaultProps = {
  variant: undefined,
  fixedWidth: false,
  size: 'medium',
  className: '',
  children: null
}

export default Icon
