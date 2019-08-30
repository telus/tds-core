import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorAccessibleGreen, colorSecondary } from '@tds/core-colours'
import Text from '@tds/core-text'
import { uniqueId, safeRest } from '@tds/util-helpers'

// TODO: use ES6 module import after rollup fixes this issue: https://github.com/rollup/rollup/issues/3011
const keyframes = require('styled-components').keyframes

const zindexPopover = 1600

const spinnerRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const spinnerDash = keyframes`
  0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
`
const SvgContainer = styled.div(({ overlay }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...(overlay && {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: zindexPopover,
  }),
}))

const StyledSvg = styled.svg`
  animation: ${spinnerRotate} 1.8s linear infinite;
  ${({ size }) => size === 'small' && 'height: 3.125rem; width: 3.125rem;'}
  ${({ size }) => size === 'large' && 'height: 6.25rem; width: 6.25rem;'}
`

const SvgCircle = styled.circle`
  animation: ${spinnerDash} 1.7s ease-in-out infinite 0s;
  ${({ variant }) => variant === 'primary' && `stroke: ${colorAccessibleGreen}`}
  ${({ variant }) => variant === 'secondary' && `stroke: ${colorSecondary}`}
`

const TipContainer = styled.div({
  marginTop: '-1.5rem',
})

const SpinnerSvg = ({ tip, overlay, a11yLabel, size, variant, labelRef, ...rest }) => {
  const titleId = uniqueId('spinner-title-')

  return (
    <SvgContainer overlay={overlay} data-testid="spinner">
      <StyledSvg
        {...safeRest(rest)}
        viewBox="0 0 100 100"
        width={size === 'large' ? '100' : '50'}
        height={size === 'large' ? '100' : '50'}
        role="alert"
        aria-labelledby={titleId}
        aria-live="assertive"
        data-testid="svg"
      >
        <title id={titleId}>{a11yLabel}</title>
        <SvgCircle
          variant={size === 'small' ? variant : 'primary'}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="89, 200"
          strokeDashoffset="0"
          cx="50"
          cy="50"
          r="20"
        />
      </StyledSvg>
      {tip && (
        <TipContainer tabIndex="-1" ref={labelRef}>
          <Text size="small">{tip}</Text>
        </TipContainer>
      )}
    </SvgContainer>
  )
}

SpinnerSvg.propTypes = {
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  overlay: PropTypes.bool,
  a11yLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf(['large', 'small']).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  labelRef: PropTypes.object,
}
SpinnerSvg.defaultProps = {
  tip: undefined,
  overlay: false,
  labelRef: undefined,
}

export default SpinnerSvg
