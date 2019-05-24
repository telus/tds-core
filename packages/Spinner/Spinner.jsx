import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../shared/utils/joinClassNames'
import { deprecate, warn } from '../../shared/utils/warn'
import SpinnerSvg from './SpinnerSvg/SpinnerSvg'

import positionStyles from '../../shared/styles/Position.modules.scss'
import styles from './Spinner.modules.scss'

/**
 * A waiting indicator.
 *
 * @version ./package.json
 */
const Spinner = ({
  spinning,
  label,
  dangerouslyHideVisibleLabel,
  tip,
  a11yLabel,
  inline,
  size,
  variant,
  children,
  ...rest
}) => {
  if (tip) {
    deprecate('core-spinner', 'The `tip` prop is deprecated. Please use the `label` prop.')
  }
  if (a11yLabel && label === undefined) {
    deprecate('core-spinner', 'The `a11yLabel` prop is deprecated. Please use the `label` prop.')
  }

  if (size === 'large' && variant === 'secondary') {
    warn(
      'core-spinner',
      'The Spinner may not be using the `secondary` variant while `size` is set to `large`.'
    )
  }
  if (!spinning) {
    return children || null
  }

  if (children) {
    return (
      <div
        className={joinClassNames(positionStyles.relative, inline && styles.inline)}
        data-testid="container"
        aria-live="assertive"
      >
        <SpinnerSvg
          {...rest}
          tip={dangerouslyHideVisibleLabel || size === 'small' ? undefined : label || tip}
          a11yLabel={label || a11yLabel}
          overlay={true}
          size={size}
          variant={variant}
        />

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

  return (
    <SpinnerSvg
      {...rest}
      tip={dangerouslyHideVisibleLabel || size === 'small' ? undefined : label || tip}
      a11yLabel={label || a11yLabel}
      size={size}
      variant={variant}
    />
  )
}

Spinner.propTypes = {
  /**
   * Whether or not to render the spinner.
   */
  spinning: PropTypes.bool,
  /**
   * Communicates a message to assistive technology while visible. This same message will appear underneath the spinner when its `size` is `large`. This prop will be required in the next major version. *Must be wrapped with a `span`*. In the future, it will be possible to use `React.Fragment`.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Hides the visible label under the spinner when the spinner's `size` is set to `large`. For special circumstances only.
   * @ignore
   */
  dangerouslyHideVisibleLabel: PropTypes.bool,
  /**
   * A additional displayed message.
   * @deprecated This prop and `tip` have been combined into the `label` prop. The `label` prop will show the spinner tip when deemed appropriate.
   */
  tip: PropTypes.string,
  /**
   * A label for assistive technology.
   * @deprecated This prop and `tip` have been combined into the `label` prop. The `label` prop will show the spinner tip when deemed appropriate.
   */
  a11yLabel: PropTypes.string,
  /**
   * Render the spinner as inline-block, useful when rendering the spinner on top of
   * components like button
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
   * The spinner's colour. The `secondary` spinner is only available when `size` is set to `small`.
   *
   * @since 2.2.0
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
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
  children: undefined,
}

export default Spinner
