import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../safeRest'

import Container from '../Grid/Container/Container'
import Icon from '../Icon/Icon'
import ColoredTextProvider from '../Typography/ColoredTextProvider/ColoredTextProvider'
import Paragraph from '../Typography/Paragraph/Paragraph'

import styles from './Notification.modules.scss'

const iconByVariant = {
  success: 'checkmark',
  error: 'exclamation-point-circle'
}

const isImportant = variant => variant === 'success' || variant === 'error'

const renderIcon = glyph => (
  <span className={styles.icon}>
    <Icon glyph={glyph} aria-hidden="true" />
  </span>
)

const renderContent = (variant, children) => {
  const content = (
    <Paragraph bold={isImportant(variant)}>
      {children}
    </Paragraph>
  )

  if (variant === 'error') {
    return (
      <ColoredTextProvider colorClassName={styles.errorText}>
        {content}
      </ColoredTextProvider>
    )
  }

  return content
}

/**
 * A banner that highlights important messages.
 */
const Notification = ({ variant, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[variant]}>
    <Container limitWidth>
      <div className={styles.flexRow}>
        {isImportant(variant) ? renderIcon(iconByVariant[variant]) : undefined}

        {renderContent(variant, children)}
      </div>
    </Container>
  </div>
)

Notification.propTypes = {
  /**
   * The appearance.
   */
  variant: PropTypes.oneOf([
    'instructional',
    'branded',
    'success',
    'error'
  ]),
  /**
   * The message. Can be raw text or text components.
   */
  children: PropTypes.node.isRequired
}

Notification.defaultProps = {
  variant: 'instructional'
}

export default Notification
