import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import uniqueId from './uniqueId'
import colors from '../../../shared/utils/colors'
import safeRest from '../../../shared/utils/safeRest'

const StyledSpinnerSvgContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  ${props => props.centered && `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 1600;
  `}
`

const StyledSpinnerSvg = styled.svg`
  @keyframes spinner-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spinner-rotate 1.8s linear infinite;
`

const StyledCircleSvg = styled.circle`
  @keyframes spinner-dash {
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
  }

  stroke: ${colors.accessibleGreen};

  animation: spinner-dash 1.7s ease-in-out infinite 0s;
`

const StyledSpinnerTip = styled.div`
  margin-top: -1.5rem;
`

const SpinnerSvg = ({ spinning, a11yLabel, tip, overlay, children, ...rest }) => {
  const titleId = uniqueId('spinner-title-')

  return (
    <StyledSpinnerSvgContainer centered={overlay}>
      <StyledSpinnerSvg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        role="img"
        aria-labelledby={titleId}
        data-testid="svg"
        {...safeRest(rest)}
      >
        <title id={titleId}>{a11yLabel}</title>
        <StyledCircleSvg
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="89, 200"
          strokeDashoffset="0"
          cx="50"
          cy="50"
          r="20"
        />
      </StyledSpinnerSvg>
      {tip && (
        <StyledSpinnerTip>
          <Text size="small">{tip}</Text>
        </StyledSpinnerTip>
      )}
    </StyledSpinnerSvgContainer>
  )
}

SpinnerSvg.propTypes = {
  tip: PropTypes.string,
  overlay: PropTypes.bool,
  a11yLabel: PropTypes.string.isRequired,
}
SpinnerSvg.defaultProps = {
  tip: undefined,
  overlay: false,
}

export default SpinnerSvg
