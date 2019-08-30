import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { position } from '@tds/shared-styles'
import { media } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

import { deprecate, warn } from '../../shared/utils/warn'
import SpinnerSvg from './SpinnerSvg/SpinnerSvg'

const zindexModalBackdrop = 1400

const SpinnerContainer = styled.div(({ inline, fullScreen }) => ({
  ...position.relative,
  ...(inline && {
    display: 'block',
    ...media.from('md').css({
      display: 'inline-block',
    }),
  }),
  ...(fullScreen && position.centerVertically),
}))

const ContentOverlay = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: zindexModalBackdrop,
})

const FullscreenOverlay = styled.div({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: zindexModalBackdrop,
  backgroundColor: 'rgba(255, 255, 255, 0.96)',
})

const OpaqueContainer = styled.div({
  opacity: 0.06,
})

const recursiveMap = (children, fn) =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child
    }
    if (child.props.children) {
      return fn(
        React.cloneElement(child, {
          children: recursiveMap(child.props.children, fn),
        })
      )
    }
    return fn(child)
  })

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
      labelRef,
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
    const spinnerSvg = props => {
      return (
        <SpinnerSvg
          {...props}
          {...safeRest(rest)}
          tip={dangerouslyHideVisibleLabel || size === 'small' ? undefined : label || tip}
          a11yLabel={label || a11yLabel}
          size={size}
          variant={variant}
          labelRef={labelRef}
        />
      )
    }

    if (fullScreen) {
      return (
        <FullscreenOverlay
          ref={el => {
            this.spinnerOverlayRef = el
          }}
          data-testid="overlay"
        >
          <SpinnerContainer
            inline={inline}
            fullScreen={fullScreen}
            data-testid="container"
            aria-live="assertive"
          >
            {spinnerSvg({ overlay: true })}
          </SpinnerContainer>
        </FullscreenOverlay>
      )
    }
    if (children) {
      return (
        <SpinnerContainer
          inline={inline}
          fullScreen={fullScreen}
          data-testid="container"
          aria-live="assertive"
        >
          {spinnerSvg({ overlay: true })}

          <ContentOverlay data-testid="overlay" />

          <OpaqueContainer inert="true">
            {recursiveMap(children, c => {
              if (c) {
                return React.cloneElement(c, { tabIndex: '-1', 'aria-hidden': 'true' })
              }
              return undefined
            })}
          </OpaqueContainer>
        </SpinnerContainer>
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
  /**
   * A React ref to the label on the `Spinner`, can be used to set initial focus.
   *
   * @since 3.0.5
   */
  labelRef: PropTypes.object,
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
  labelRef: undefined,
}

export default Spinner
