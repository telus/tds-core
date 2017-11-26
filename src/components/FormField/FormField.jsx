import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import generateId from '../../utils/generateId'
import joinClassNames from '../../utils/joinClassNames'

import Box from '../Box/Box'
import Flexbox from '../Flexbox/Flexbox'
import Fade from '../Animation/Fade'
import Text from '../Typography/Text/Text'
import Paragraph from '../Typography/Paragraph/Paragraph'
import Helper from '../Input/Helper/Helper'
import StandaloneIcon from '../Icons/StandaloneIcon/StandaloneIcon'
import Tooltip from '../Tooltip/Tooltip'

import styles from './FormField.modules.scss'
import positionStyles from '../Position.modules.scss'
import iconWrapperStyles from '../Icons/IconWrapper.modules.scss'

const getWrapperClassName = (feedback, focus, disabled) => {
  if (disabled) {
    return styles.disabled
  }

  if (focus) {
    return styles.focus
  }

  if (feedback) {
    return styles[feedback]
  }

  return styles.default
}

const showFeedbackIcon = (feedback, focus) =>
  (feedback === 'success' || feedback === 'error') && !focus

const renderLabel = (label, hint, fieldId) => (
  <label htmlFor={fieldId.identity()} data-no-global-styles>
    <Box inline between={2} dangerouslyAddClassName={styles.alignCenter}>
      <Text size="medium" bold>
        {label}
      </Text>

      {hint && <Text size="small">{hint}</Text>}
    </Box>
  </label>
)

const renderError = (error, errorId) => (
  <Helper id={errorId} feedback="error">
    <Paragraph size="small">{error}</Paragraph>
  </Helper>
)

const renderHelper = (helper, helperId, feedback, value) => {
  if (typeof helper === 'function') {
    return (
      <div id={helperId}>
        <Text size="small">{helper(feedback, value)}</Text>
      </div>
    )
  }

  return (
    <Helper id={helperId} feedback={feedback}>
      <Text size="small">{helper}</Text>
    </Helper>
  )
}

const renderIcon = feedback => {
  if (feedback === 'success') {
    return (
      <StandaloneIcon
        symbol="checkmark"
        variant="primary"
        size={16}
        a11yText="The value of this input field is valid."
      />
    )
  }

  return (
    <StandaloneIcon
      symbol="exclamationPointCircle"
      variant="error"
      size={16}
      a11yText="The value of this input field is invalid."
    />
  )
}

const FormField = ({
  value,
  label,
  hint,
  focus,
  feedback,
  error,
  helper,
  tooltip,
  children,
  ...rest
}) => {
  const fieldId = generateId(rest.id, rest.name, label)
  const helperId = helper && fieldId.postfix('helper')
  const errorId = error && fieldId.postfix('error-message')

  const wrapperClassName = getWrapperClassName(feedback, focus, rest.disabled)

  const showIcon = showFeedbackIcon(feedback, focus)

  const ariaInvalid = feedback === 'error'
  const ariaDescribedBy = errorId || helperId || undefined

  return (
    <Box between={2}>
      <Flexbox
        direction="row"
        justifyContent="spaceBetween"
        dangerouslyAddClassName={positionStyles.relative}
      >
        {renderLabel(label, hint, fieldId)}

        {tooltip && React.cloneElement(tooltip, { connectedFieldLabel: label })}
      </Flexbox>

      {helper && renderHelper(helper, helperId, feedback, value)}

      {error && renderError(error, errorId)}

      <div className={positionStyles.relative}>
        {children(fieldId.identity(), ariaInvalid, ariaDescribedBy, wrapperClassName)}

        <div
          className={joinClassNames(
            positionStyles.absolute,
            iconWrapperStyles.fixLineHeight,
            styles.iconPosition
          )}
        >
          <Fade timeout={100} in={showIcon} mountOnEnter={true} unmountOnExit={true}>
            {() => renderIcon(feedback)}
          </Fade>
        </div>
      </div>
    </Box>
  )
}

FormField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  focus: PropTypes.bool.isRequired,
  feedback: PropTypes.oneOf(['success', 'error']),
  error: PropTypes.string,
  helper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  tooltip: childrenOfType(Tooltip),
  children: PropTypes.func.isRequired,
}

FormField.defaultProps = {
  hint: undefined,
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
}

export default FormField
