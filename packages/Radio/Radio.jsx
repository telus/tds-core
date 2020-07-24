import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import {
  colorCardinal,
  colorWhite,
  colorGreyShuttle,
  colorGreyGainsboro,
  colorAccessibleGreen,
} from '@tds/core-colours'
import InputFeedback from '@tds/core-input-feedback'
import Paragraph from '@tds/core-paragraph'
import Text from '@tds/core-text'

import { borders } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

import generateId from '../../shared/utils/generateId/generateId'
import ColoredTextProvider from '../../shared/components/ColoredTextProvider/ColoredTextProvider'

const FakeRadio = styled.span({
  height: '1.25rem',
  width: '1.25rem',
  minHeight: '1.25rem',
  minWidth: '1.25rem',

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

  borderColor: colorGreyShuttle,
  backgroundColor: colorWhite,
  '& > i': {
    display: 'none',
  },
})
const HiddenInput = styled.input({
  position: 'absolute',
  width: '1.2rem',
  height: '1.2rem',
  margin: '2px 1px',
  opacity: '0',
  pointerEvents: 'none',
})

const StyledLabel = styled.label(({ isError }) => ({
  display: 'flex',
  cursor: 'pointer',
  ...(isError && {
    color: colorCardinal,
    [`${HiddenInput}:checked ~ &`]: {
      color: 'initial',
    },
    [`div > ${FakeRadio}`]: {
      borderColor: colorCardinal,
    },
  }),
  [`${HiddenInput}:focus ~ & > div > ${FakeRadio}`]: {
    boxShadow: `0 0 4px 1px ${colorGreyShuttle}`,
    borderColor: isError ? colorCardinal : colorWhite,
  },
  [`${HiddenInput}:checked ~ & > div > ${FakeRadio}`]: {
    '& > span': {
      display: 'block',
    },
    borderColor: colorGreyShuttle,
  },
  [`${HiddenInput}:disabled ~ & > div > ${FakeRadio}`]: {
    borderColor: colorGreyGainsboro,
  },
  [`${HiddenInput}:disabled ~ & > div > div`]: {
    color: colorGreyGainsboro,
  },
}))

const InnerChecked = styled.span({
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '50%',
  backgroundColor: colorAccessibleGreen,
  display: 'none',
})

const StyledLabelAndDescriptionBox = styled(Box)({
  width: '100%',
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

const Radio = React.forwardRef(
  ({ id, name, value, label, feedback, error, description, ...rest }, ref) => (
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
        ref={ref}
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
          <StyledLabelAndDescriptionBox between={2}>
            <ColoredTextProvider>
              <Text>{label}</Text>
            </ColoredTextProvider>
            {description && <Text size="small">{description}</Text>}
          </StyledLabelAndDescriptionBox>
        </Box>
      </StyledLabel>
    </Box>
  )
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
   * Use `checked` for controlled radio. For uncontrolled radio, use React's built-in `defaultChecked` prop.
   * See examples below for more details.
   */
  checked: PropTypes.bool,
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
  checked: undefined,
}

Radio.displayName = 'Radio'

export default Radio
