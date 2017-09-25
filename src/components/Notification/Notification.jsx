import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

import Grid from '../../old-components/Grid/Grid'
import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import ColoredTextProvider from '../Typography/ColoredTextProvider/ColoredTextProvider'
import Paragraph from '../Typography/Paragraph/Paragraph'
import Flexbox from '../Flexbox/Flexbox'

import messagingStyles from '../Messaging.modules.scss'
import styles from './Notification.modules.scss'

const { Container, Row, Column } = Grid

const iconByVariant = {
  success: {
    symbol: 'checkmark',
    color: 'primary'
  },
  error: {
    symbol: 'exclamationPointCircle',
    color: 'error'
  }
}

const isImportant = variant => variant === 'success' || variant === 'error'

const renderIcon = icon => (
  <span className={styles.icon}>
    <DecorativeIcon symbol={icon.symbol} variant={icon.color} />
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
      <ColoredTextProvider colorClassName={messagingStyles.errorText}>
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
          <Flexbox direction="row">
            {isImportant(variant) ? renderIcon(iconByVariant[variant]) : undefined}

            {renderContent(variant, children)}
          </Flexbox>
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
