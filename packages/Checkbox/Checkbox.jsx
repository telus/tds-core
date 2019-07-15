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
import DecorativeIcon from '@tds/core-decorative-icon'
import InputFeedback from '@tds/core-input-feedback'
import Paragraph from '@tds/core-paragraph'
import Text from '@tds/core-text'

import { borders } from '@tds/shared-styles'

import generateId from '../../shared/utils/generateId/generateId'
import safeRest from '../../shared/utils/safeRest'
import ColoredTextProvider from '../../shared/components/ColoredTextProvider/ColoredTextProvider'

const ErrorText = styled(ColoredTextProvider)(({ isError }) => ({
  ...(isError && { color: colorCardinal }),
}))

const FakeCheckbox = styled.span({
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
  ...borders.thin,
  ...borders.rounded,

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
    [`div > ${FakeCheckbox}`]: {
      borderColor: colorCardinal,
    },
  }),
  [`${HiddenInput}:focus ~ & > div > ${FakeCheckbox}`]: {
    boxShadow: `0 0 4px 1px ${colorShuttleGrey}`,
    borderColor: isError ? colorCardinal : colorWhite,
  },
  [`${HiddenInput}:checked ~ & > div > ${FakeCheckbox}`]: {
    backgroundColor: colorAccessibleGreen,
    borderColor: colorAccessibleGreen,
    '& > i': {
      display: 'block',
    },
  },
  [`${HiddenInput}:disabled ~ & > div > ${FakeCheckbox}`]: {
    backgroundColor: colorGainsboro,
    borderColor: colorGainsboro,
  },
  [`${HiddenInput}:disabled ~ & > div > div`]: {
    color: colorGainsboro,
  },
}))

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
const Checkbox = React.forwardRef(({ id, name, value, label, feedback, error, ...rest }, ref) => (
  <Box between={2}>
    {feedback === 'error' && renderError(error, getErrorId(name, value, id))}
    <HiddenInput
      type="checkbox"
      id={id || getGeneratedId(name, value)}
      name={name}
      value={value}
      aria-invalid={feedback === 'error'}
      aria-describedby={feedback === 'error' ? getErrorId(name, value, id) : undefined}
      data-testid="hidden-input"
      ref={ref}
      {...safeRest(rest)}
    />
    <StyledLabel
      isError={feedback === 'error'}
      htmlFor={id || getGeneratedId(name, value)}
      data-testid="checkbox-label"
    >
      <Box between={3} inline>
        <FakeCheckbox data-testid="fake-input">
          <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
        </FakeCheckbox>
        <ErrorText isError={feedback === 'error'}>
          <Text>{label}</Text>
        </ErrorText>
      </Box>
    </StyledLabel>
  </Box>
))

Checkbox.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value. Must be unique within the group.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  /**
   * Use `checked` for controlled Checkbox. For uncontrolled Checkbox, use React's built-in `defaultChecked` prop.
   * See examples below for more details.
   */
  checked: PropTypes.bool,
  /**
   * The id. Must be unique within the group. If no id is provided, one will be generated in the following format: `name_value`
   */
  id: PropTypes.string,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['error']),
  /**
   * An error message.
   */
  error: PropTypes.string,
}

Checkbox.defaultProps = {
  id: undefined,
  feedback: undefined,
  error: undefined,
  checked: undefined,
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
