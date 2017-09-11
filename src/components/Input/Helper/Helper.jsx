import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import ColoredTextProvider from '../../Typography/ColoredTextProvider/ColoredTextProvider'
import Paragraph from '../../Typography/Paragraph/Paragraph'

import styles from './Helper.modules.scss'

const getClassName = feedback => (feedback ? styles[feedback] : styles.default)

const getContent = (feedback, children) => {
  const content = (
    <Paragraph>
      {children}
    </Paragraph>
  )

  if (feedback === 'error') {
    return (
      <ColoredTextProvider colorClassName={styles.errorText}>
        {content}
      </ColoredTextProvider>
    )
  }

  return content
}

const Helper = ({ feedback, children, ...rest }) => (
  <div {...safeRest(rest)} className={getClassName(feedback)}>
    {getContent(feedback, children)}
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
