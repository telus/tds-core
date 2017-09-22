import React from 'react'
import PropTypes from 'prop-types'

import { deprecate } from '../../warn'
import capitalize from '../../capitalize'
import joinClassNames from '../../utils/joinClassNames'

import styles from './Icon.modules.scss'

const Icon = ({ glyph, variant, fixedWidth, size, className, children, ...rest }) => {
  if (className) {
    deprecate('Icon', 'Custom CSS classes are deprecated. This component will soon stop supporting custom styling.')
  }

  if (rest.style) {
    deprecate('Icon', 'Inline styles are deprecated. This component will soon stop supporting custom styling.')
  }

  if (variant === 'disabled') {
    deprecate('Icon', 'The `disabled` variant is no longer supported. Use one of the supported variants instead.')
  }

  if (fixedWidth) {
    deprecate('Icon', 'Creating `fixedWidth` icons is deprecated. Use `size` instead.')
  }

  if (children) {
    deprecate('Icon', 'Passing children components to Icon is deprecated. To add an accessible label use `aria-label`.')
  }

  const classes = joinClassNames(
    styles[`iconCore${capitalize(glyph)}`],
    variant && styles[variant],
    fixedWidth && styles.fw,
    size && styles[`size${size}`],
    className
  )

  return (
    <i
      {...rest}
      className={classes}
      aria-label={rest['aria-label']}
      aria-hidden={rest['aria-label'] ? undefined : 'true'}
    >{children}
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
   *
   * **Note:** The `disabled` option has been deprecated
   *
   * -
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
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 24, 48]),
  /**
   * One or more CSS class names separated by spaces to append onto the icon.
   * Don't advertise as we plan on removing this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @deprecated since v0.23.0
   */
  children: PropTypes.node
}
Icon.defaultProps = {
  variant: 'inherit',
  fixedWidth: false,
  size: 24,
  className: '',
  children: null
}

export default Icon
