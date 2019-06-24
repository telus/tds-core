import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../shared/utils/joinClassNames'
import { deprecate, warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'
import SpinnerSvg from './SpinnerSvg/SpinnerSvg'

import positionStyles from '../../shared/styles/Position.modules.scss'
import styles from './Spinner.modules.scss'

/**
 * A waiting indicator.
 *
 * @version ./package.json
 */

class Spinner extends React.PureComponent {
  constructor() {
    super()
    this.spinnerOverlayRef = null
  }

  componentDidUpdate() {
    if (this.props.fullScreen && this.props.spinning) {
      document.body.addEventListener('touchmove', this.preventScroll, { passive: false })
      document.body.addEventListener('touchstart', this.preventScroll, { passive: false })

      document.body.style.overflow = 'hidden'
    } else {
      document.body.removeEventListener('touchmove', this.preventScroll)
      document.body.removeEventListener('touchstart', this.preventScroll)
      document.body.style.overflow = 'auto'
    }
  }

  preventScroll = e => {
    if (this.spinnerOverlayRef.current.contains(e.targetTouches[0].target)) {
      e.preventDefault()
    }
  }

  render() {
    const {
      spinning,
      label,
      dangerouslyHideVisibleLabel,
      tip,
      a11yLabel,
      inline,
      size,
      variant,
      fullScreen,
      children,
      ...rest
    } = this.props

    if (tip) {
      deprecate('core-spinner', 'The `tip` prop is deprecated. Please use the `label` prop.')
    }
    if (a11yLabel && label === undefined) {
      deprecate('core-spinner', 'The `a11yLabel` prop is deprecated. Please use the `label` prop.')
    }

    if (size === 'large' && variant === 'secondary') {
      warn(
        'core-spinner',
        'The Spinner should not use the `secondary` variant while `size` is set to `large`.'
      )
    }

    if (!spinning) {
      return children || null
    }

    const spinnerSvg = props => (
      <SpinnerSvg
        {...props}
        tip={dangerouslyHideVisibleLabel || size === 'small' ? undefined : label || tip}
        a11yLabel={label || a11yLabel}
        size={size}
        variant={variant}
        {...safeRest(rest)}
      />
    )

    if (fullScreen) {
      return (
        <div
          className={styles.fullscreenOverlay}
          ref={el => {
            this.spinnerOverlayRef = el
          }}
          data-testid="overlay"
        >
          <div
            className={joinClassNames(
              positionStyles.relative,
              inline && styles.inline,
              fullScreen && positionStyles.centerVertically
            )}
            data-testid="container"
            aria-live="assertive"
          >
            {spinnerSvg({ overlay: true })}
          </div>
        </div>
      )
    }
    if (children) {
      return (
        <div
          className={joinClassNames(positionStyles.relative, inline && styles.inline)}
          data-testid="container"
          aria-live="assertive"
        >
          {spinnerSvg({ overlay: true })}

          <div className={styles.overlay} data-testid="overlay" />

          <div
            onFocus={e => {
              e.target.blur()
            }}
            aira-hidden="true"
            className={styles.opaque}
          >
            {children}
          </div>
        </div>
      )
    }

    return spinnerSvg()
  }
}

Spinner.propTypes = {
  /**
   * Whether or not to render the spinner.
   */
  spinning: PropTypes.bool,
  /**
   * Communicates a message to assistive technology while visible. This same message will appear underneath the spinner when its `size` is `large`.
   *
   * When used with `A11yContent`, label text should be wrapped by a `<span>` or `<React.Fragment>`.
   *
   * **Note**: This prop will be required in the next major version.
   *
   * @since 2.2.0
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Hides the visible label under the spinner when the spinner's `size` is set to `large`. For special circumstances only.
   * @ignore
   */
  dangerouslyHideVisibleLabel: PropTypes.bool,
  /**
   * A additional displayed message.
   * @deprecated This prop and `a11yLabel` have been combined into the `label` prop.
   */
  tip: PropTypes.string,
  /**
   * A label for assistive technology.
   * @deprecated This prop and `tip` have been combined into the `label` prop.
   */
  a11yLabel: PropTypes.string,
  /**
   * Render the Spinner as inline-block. This can be used when wrapping
   * interactive elements such as buttons.
   *
   * @since 2.1.0
   */
  inline: PropTypes.bool,
  /**
   * The size of the spinner
   *
   * @since 2.2.0
   */
  size: PropTypes.oneOf(['large', 'small']),
  /**
   * The spinner's colour. The `secondary` variant is only available when `size` is set to `small`.
   *
   * @since 2.2.0
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Enables body locking
   *
   * @since 2.2.0
   */
  fullScreen: PropTypes.bool,
  /**
   * Content to be overlaid while the spinner is active. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node,
}

Spinner.defaultProps = {
  spinning: false,
  label: undefined,
  dangerouslyHideVisibleLabel: false,
  tip: undefined,
  a11yLabel: 'A spinner is active. Please wait while the page completes a task.',
  inline: false,
  size: 'large',
  variant: 'primary',
  fullScreen: false,
  children: undefined,
}

export default Spinner
