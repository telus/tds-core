import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import ColoredTextProvider from '../../Typography/ColoredTextProvider/ColoredTextProvider'

import messagingStyles from '../../Messaging.modules.scss'
import styles from './Helper.modules.scss'

const getClassName = feedback => (feedback ? styles[feedback] : styles.default)

const renderContent = (feedback, children) => {
  if (feedback === 'error') {
    return (
      <ColoredTextProvider colorClassName={messagingStyles.errorText}>
        {children}
      </ColoredTextProvider>
    )
  }

  return children
}

const Helper = ({ feedback, children, ...rest }) => (
  <div {...safeRest(rest)} className={getClassName(feedback)}>
    {renderContent(feedback, children)}
  </div>
)
Helper.propTypes = {
  feedback: PropTypes.oneOf(['success', 'error']),
  children: PropTypes.node.isRequired
}
Helper.defaultProps = {
  feedback: undefined
}
Helper.displayName = 'Input.Helper'

export default Helper
