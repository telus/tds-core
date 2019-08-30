import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'

import { borders, messaging } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

const StyledFeedback = styled(({ feedback, ...rest }) => <Box {...rest} />)(({ feedback }) => ({
  ...borders.rounded,
  ...(feedback === 'success' && messaging.success),
  ...(feedback === 'error' && messaging.error),
  ...(feedback === undefined && messaging.standard),
}))

/**
 * A feedback box commonly used with form fields.
 *
 * @version ./package.json
 */
const InputFeedback = ({ feedback, children, ...rest }) => (
  <StyledFeedback
    {...safeRest(rest)}
    inset={3}
    role={feedback === 'error' ? 'alert' : null}
    feedback={feedback}
  >
    {children}
  </StyledFeedback>
)

InputFeedback.propTypes = {
  /**
   * A feedback state that changes the background colour.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

InputFeedback.defaultProps = {
  feedback: undefined,
}

export default InputFeedback
