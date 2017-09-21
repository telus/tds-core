import React from 'react'
import PropTypes from 'prop-types'

import { deprecate } from '../../warn'
import capitalize from './capitalize'

import styles from './Icon.modules.scss'

const Icon = ({ glyph, variant, fixedWidth, size, className, children, ...rest }) => {
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

  const classes = [
    `${styles.icon}`,
    `${styles[`iconCore${capitalize(glyph)}`]}`,
    `${variant ? styles[variant] : ''}`,
    `${fixedWidth ? `${styles.fw}` : ''}`,
    `${size ? `${styles[`size${size}`]}` : ''}`,
    `${className ? `${className}` : ''}`
  ].join(' ')

  return (
    <i
      {...rest}
      className={classes}
      aria-label={rest['aria-label']}
      aria-hidden={rest['aria-label'] ? undefined : 'true'}
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
  size: PropTypes.oneOf(['16px', '24px', '48px']),
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
  children: PropTypes.node
}
Icon.defaultProps = {
  variant: 'inherit',
  fixedWidth: false,
  size: '24px',
  className: '',
  children: null
}

export default Icon
