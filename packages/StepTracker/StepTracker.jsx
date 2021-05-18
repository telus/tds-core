import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorWhite } from '@tds/core-colours'
import Text from '@tds/core-text'
import FlexGrid from '@tds/core-flex-grid'
import { getCopy, safeRest } from '@tds/util-helpers'

import { deprecate } from '../../shared/utils/warn'

import copyDictionary from './stepTrackerText'

import Step from './Step/Step'

const StyledStepBg = styled.div({
  padding: '1rem 0',
  backgroundColor: colorWhite,
})

const StyledStepContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const StyledMobileLabel = styled.div({
  width: '100%',
  textAlign: 'center',
})

const parseStepText = (current, steps, mobileStepLabelTemplate) => {
  return (
    <span>
      {mobileStepLabelTemplate
        .replace('%{current}', current < steps.length ? current + 1 : steps.length)
        .replace('%{total}', steps.length)}
    </span>
  )
}

const getStepLabel = (current, steps) => {
  return current < steps.length ? steps[current] : steps[steps.length - 1]
}

/**
 * Show the current position in a sequence of steps.
 *
 * @version ./package.json
 */

const StepTracker = ({ current, steps, copy, mobileStepLabelTemplate, ...rest }) => {
  if (mobileStepLabelTemplate && copy === undefined) {
    deprecate(
      'core-step-tracker',
      'The `mobileStepLabelTemplate` prop, along with its default copy, is deprecated. Please use the `copy` prop. The `copy` prop will be required in the next major release.'
    )
  }

  const stepText = parseStepText(
    current,
    steps,
    getCopy(copyDictionary, copy).mobileStepLabel || mobileStepLabelTemplate
  )
  const stepLabel = getStepLabel(current, steps)
  return (
    <StyledStepBg {...safeRest(rest)} data-testid="stepTrackerContainer">
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <StyledStepContainer>
              {steps.map((label, index) => {
                return (
                  <Step
                    status={current}
                    label={label}
                    stepNumber={index + 1}
                    stepIndex={index}
                    key={label}
                    data-testid={`step-${index}`}
                  />
                )
              })}
            </StyledStepContainer>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12} md={0}>
            <StyledMobileLabel>
              <Text data-testid="mobileStepLabel">
                {stepText} {stepLabel}
              </Text>
            </StyledMobileLabel>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </StyledStepBg>
  )
}

StepTracker.propTypes = {
  /**
   * The active step. The minimum value is 0, while the maximum value is the length of the steps prop.
   */
  current: PropTypes.number.isRequired,
  /**
   * The steps as an array of strings.
   */
  steps: PropTypes.array.isRequired,
  /**
   * @since 4.0.0
   *
   * Setting for text to display current step progress on mobile devices.
   * Use the `copy` prop to either select provided English or French copy by passing 'en' or 'fr' respectively.
   *
   * To provide your own, pass a JSON object with the key `mobileStepLabel`.
   * Use %current to place the current step and use %total to place the total amount of steps.
   *
   * This prop will be *required* when `mobileStepLabelTemplate` is removed.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      mobileStepLabel: PropTypes.string,
    }),
  ]),
  /**
   * @deprecated The same functionality with built-in defaults can be used via the `copy` prop.
   *
   * String for text to display current step progress on mobile devices.
   * Use %current to place the current step and use %total to place the total amount of steps.
   */
  mobileStepLabelTemplate: PropTypes.string,
}

StepTracker.defaultProps = {
  copy: undefined,
  mobileStepLabelTemplate: 'Step %{current} of %{total}:',
}

export default StepTracker
