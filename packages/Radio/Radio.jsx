import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import {
  colorCardinal,
  colorWhite,
  colorShuttleGrey,
  colorGainsboro,
  colorAccessibleGreen,
} from '@tds/core-colours'
import InputFeedback from '@tds/core-input-feedback'
import Paragraph from '@tds/core-paragraph'
import Text from '@tds/core-text'

import { borders } from '@tds/shared-styles'

import generateId from '../../shared/utils/generateId/generateId'
import safeRest from '../../shared/utils/safeRest'
import ColoredTextProvider from '../../shared/components/ColoredTextProvider/ColoredTextProvider'

const FakeRadio = styled.span({
  height: '20px',
  width: '20px',
  minHeight: '20px',
  minWidth: '20px',

  outline: 0,
  lineHeight: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  marginTop: '0.125rem',

  transition: 'border-color 0.1s linear, background-color 0.1s linear',
  borderRadius: '50%',
  ...borders.thin,

  borderColor: colorShuttleGrey,
  backgroundColor: colorWhite,
  '& > i': {
    display: 'none',
  },
})
const HiddenInput = styled.input({
  position: 'fixed',
  opacity: '0',
  pointerEvents: 'none',
})

const StyledLabel = styled.label(({ isError }) => ({
  display: 'flex',
  cursor: 'pointer',
  ...(isError && {
    color: colorCardinal,
    'input:checked ~ &': {
      color: 'initial',
    },
    'div > span': {
      borderColor: colorCardinal,
    },
  }),
  'input:focus ~ & > div > span': {
    boxShadow: `0 0 4px 1px ${colorShuttleGrey}`,
    borderColor: isError ? colorCardinal : colorWhite,
  },
  'input:checked ~ & > div > span': {
    '& > span': {
      display: 'block',
    },
    borderColor: colorShuttleGrey,
  },
  'input:disabled ~ & > div > span': {
    borderColor: colorGainsboro,
  },
  'input:disabled ~ & > div > div': {
    color: colorGainsboro,
  },
}))

const InnerChecked = styled.span({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: colorAccessibleGreen,
  display: 'none',
})

const renderError = (error, errorId) => (
  <InputFeedback id={errorId} feedback="error">
    <Paragraph size="small">{error || ''}</Paragraph>
  </InputFeedback>
)

const getGeneratedId = (name, value) => {
  return generateId(name).postfix(value)
}
const getErrorId = (name, value, id) => {
  return generateId(id || getGeneratedId(name, value)).postfix('error-message')
}

/**
 * @version ./package.json
 */
const Radio = ({ id, name, value, label, feedback, error, description, ...rest }) => (
  <Box between={2}>
    {feedback === 'error' && renderError(error, getErrorId(name, value, id))}
    <HiddenInput
      type="radio"
      id={id || getGeneratedId(name, value)}
      name={name}
      value={value}
      aria-invalid={feedback === 'error'}
      aria-describedby={feedback === 'error' ? getErrorId(name, value, id) : undefined}
      data-testid="hidden-input"
      {...safeRest(rest)}
    />
    <StyledLabel
      isError={feedback === 'error'}
      htmlFor={id || getGeneratedId(name, value)}
      data-testid="checkbox-label"
    >
      <Box between={3} inline>
        <FakeRadio data-testid="fake-input">
          <InnerChecked />
        </FakeRadio>
        <Box between={2}>
          <ColoredTextProvider>
            <Text>{label}</Text>
          </ColoredTextProvider>
          {description && <Text size="small">{description}</Text>}
        </Box>
      </Box>
    </StyledLabel>
  </Box>
)

Radio.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Associate this radio with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value. Must be unique within the group.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  /**
   * The id. Must be unique within the group. If no id is provided, one will be generated in the following format: `name_value`
   */
  id: PropTypes.string,
  /**
   * Description text below the radio.
   */
  description: PropTypes.string,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['error']),
  /**
   * An error message.
   */
  error: PropTypes.string,
}

Radio.defaultProps = {
  id: undefined,
  description: undefined,
  feedback: undefined,
  error: undefined,
}

export default Radio
