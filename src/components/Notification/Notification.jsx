import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../safeRest'

import Grid from '../../old-components/Grid/Grid'
import Icon from '../../old-components/Icon/Icon'
import ColoredTextProvider from '../Typography/ColoredTextProvider/ColoredTextProvider'
import Paragraph from '../Typography/Paragraph/Paragraph'

import styles from './Notification.modules.scss'

const { Container, Row, Column } = Grid

const iconByVariant = {
  success: 'checkmark',
  error: 'exclamation-point-circle'
}

const isImportant = variant => variant === 'success' || variant === 'error'

const renderIcon = glyph => (
  <span className={styles.icon}>
    <Icon glyph={glyph} size="large" aria-hidden="true" />
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
 * <span class="docs--badge green">updated!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const Notification = ({ variant, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[variant]}>
    <Container limitWidth>
      <Row>
        <Column xs={12}>
          <div className={styles.flexRow}>
            {isImportant(variant) ? renderIcon(iconByVariant[variant]) : undefined}

            {renderContent(variant, children)}
          </div>
        </Column>
      </Row>
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
