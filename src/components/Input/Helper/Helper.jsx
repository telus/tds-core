import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import ColoredTextProvider from '../../Typography/ColoredTextProvider/ColoredTextProvider'
import Paragraph from '../../Typography/Paragraph/Paragraph'

import messagingStyles from '../../Messaging.modules.scss'
import styles from './Helper.modules.scss'

const getClassName = feedback => (feedback ? styles[feedback] : styles.default)

const renderContent = (feedback, children) => {
  const content = (
    <Paragraph>
      {children}
    </Paragraph>
  )

  if (feedback === 'error') {
    return (
      <ColoredTextProvider colorClassName={messagingStyles.errorText}>
        {content}
      </ColoredTextProvider>
    )
  }

  return content
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
