import React from 'react'
import PropTypes from 'prop-types'

import { deprecate } from '../../warn'
import capitalize from './capitalize'

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

  const classes = `${styles.icon}`
    + ` ${styles[`iconCore${capitalize(glyph)}`]}`
    + ` ${variant ? styles[variant] : ''}`
    + ` ${fixedWidth ? `${styles.fw}` : ''}`
    + ` ${size ? `${styles[size]}` : ''}`
    + ` ${className ? `${className}` : ''}`

  return (
    <i
      {...rest}
      className={classes}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
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
    'caretDown',
    'caretUp',
    'checkmark',
    'chevron',
    'leftChevron',
    'exclamationPointCircle',
    'expander',
    'hamburger',
    'incomplete',
    'location',
    'minus',
    'plus',
    'questionMarkCircle',
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
   * Creates an `aria-label` attribute with the label you specify.
   *
   * If not provided, `aria-hidden` is set to true.
   *
   * TODO: rename this prop to a11yText
   */
  label: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
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
