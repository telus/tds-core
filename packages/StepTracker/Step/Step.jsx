import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorGreyShuttle, colorPrimary } from '@tds/core-colours'
import Icon from '@tds/core-decorative-icon'
import { media } from '@tds/core-responsive'
import Text from '@tds/core-text'

const StyledStep = styled.div({
  position: 'relative',
  textAlign: 'center',
  width: '100%',

  '&:before, &:after': {
    position: 'absolute',
    top: '17px',
    width: 'calc(50% - 1.07rem)',
    content: `''`,
    borderBottom: `0.1rem solid ${colorGreyShuttle}`,
  },

  '&:before': {
    left: 0,
  },

  '&:after': {
    right: 0,
  },

  '&:first-child': {
    '&:before': {
      content: 'none',
    },
  },

  '&:last-child': {
    '&:after': {
      content: 'none',
    },
  },
})

const StyledIcon = styled.span(({ isStepActive }) => ({
  display: 'inline-block',
  border: `0.1rem solid ${colorGreyShuttle}`,
  borderRadius: '50%',
  lineHeight: '1.7rem',
  width: '35px',
  height: '35px',
  marginBottom: '1rem',
  ...(isStepActive && {
    backgroundColor: colorPrimary,
    textAlign: 'center',
    border: `0.1rem solid ${colorPrimary}`,
  }),
}))

const StyledLabel = styled.div({
  display: 'none',
  textAlign: 'center',
  ...media.from('md').css({
    display: 'block',
  }),
})

/**
 * A single step of a StepTracker.
 */

const Step = ({ label, status, stepNumber, stepIndex }) => {
  const isStepActive = () => {
    return status > stepIndex || status === stepIndex
  }
  return (
    <StyledStep
      aria-label={label}
      aria-current={status === stepIndex ? 'true' : 'false'}
      data-testid={`singleStepContainer-${stepIndex}`}
      data-isactive={isStepActive()}
    >
      <StyledIcon isStepActive={isStepActive()}>
        {status > stepIndex ? <Icon symbol="checkmark" size={16} variant="inverted" /> : <br />}
      </StyledIcon>
      <StyledLabel>
        <Text bold={status === stepIndex}>
          {stepNumber}. {label}
        </Text>
      </StyledLabel>
    </StyledStep>
  )
}

Step.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
  stepIndex: PropTypes.number.isRequired,
}

export default Step
