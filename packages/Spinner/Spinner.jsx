/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../shared/utils/joinClassNames'
import { position } from '../../shared/styles/Position.js'

import SpinnerSvg from './SpinnerSvg/SpinnerSvg'

import positionStyles from '../../shared/styles/Position.modules.scss'

/**
 * A waiting indicator.
 *
 * @version ./package.json
 */
const Spinner = ({ spinning, tip, a11yLabel, inline, children, ...rest }) => {
  const style = {
    container: {
      ...position.relative,
      display: inline ? 'inline-block' : 'block',
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1400,
    },
    opaque: {
      opacity: 0.1,
    },
  }

  if (!spinning) {
    return children || null
  }

  if (children) {
    return (
      <div css={style.container} data-testid="container">
        {<SpinnerSvg {...rest} tip={tip} a11yLabel={a11yLabel} overlay={true} />}

        <div css={style.overlay} data-testid="overlay" />

        <div css={style.opaque}>{children}</div>
      </div>
    )
  }

  return <SpinnerSvg {...rest} tip={tip} a11yLabel={a11yLabel} />
}

Spinner.propTypes = {
  /**
   * Whether or not to render the spinner.
   */
  spinning: PropTypes.bool,
  /**
   * A additional displayed message.
   */
  tip: PropTypes.string,
  /**
   * A label for assistive technology.
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
   * Content to be overlaid while the spinner is active. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node,
}

Spinner.defaultProps = {
  spinning: false,
  tip: undefined,
  a11yLabel: 'A spinner is active. Please wait while the page completes a task.',
  inline: false,
  children: undefined,
}

/** @component */
export default Spinner
