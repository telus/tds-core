import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

import SpinnerSvg from './SpinnerSvg/SpinnerSvg'

const StyledSpinnerContainer = styled.div`
  position: relative;
  ${props => props.inline && `display: inline-block;`}
`

const StyledSpinnerOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 1400;
`

const StyledSpinnerOpaque = styled.div`
  opacity: 0.1;
`

/**
 * A waiting indicator.
 *
 * @version ./package.json
 */
const Spinner = ({ spinning, tip, a11yLabel, inline, children, ...rest }) => {
  if (!spinning) {
    return children || null
  }

  if (children) {
    return (
      <StyledSpinnerContainer data-testid="container" inline={inline}>
        {<SpinnerSvg {...rest} tip={tip} a11yLabel={a11yLabel} overlay={true} />}

        <StyledSpinnerOverlay data-testid="overlay" />

        <StyledSpinnerOpaque>{children}</StyledSpinnerOpaque>
      </StyledSpinnerContainer>
    )
  }

  return <SpinnerSvg {...rest} tip={tip} a11yLabel={a11yLabel} overlay={false} />
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

export default Spinner
