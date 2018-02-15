import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'

import FlexGrid from '../FlexGrid/FlexGrid'
import DecorativeIcon from '../DecorativeIcon/DecorativeIcon'
import ColoredTextProvider from '../../shared/components/ColoredTextProvider/ColoredTextProvider'
import Paragraph from '../Paragraph/Paragraph'
import Box from '../Box/Box'

import messagingStyles from '../../shared/styles/Messaging.modules.scss'
import styles from './Notification.modules.scss'

const iconByVariant = {
  success: {
    symbol: 'checkmark',
    color: 'primary',
  },
  error: {
    symbol: 'exclamationPointCircle',
    color: 'error',
  },
}

const isImportant = variant => variant === 'success' || variant === 'error'

const renderIcon = icon => <DecorativeIcon symbol={icon.symbol} variant={icon.color} />

const renderContent = (variant, children) => {
  const content = <Paragraph bold={isImportant(variant)}>{children}</Paragraph>

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
 */
const Notification = ({ variant, children, ...rest }) => (
  <Box {...safeRest(rest)} vertical={3} dangerouslyAddClassName={styles[variant]}>
    <FlexGrid limitWidth>
      <FlexGrid.Col>
        <Box inline between={3}>
          {isImportant(variant) ? renderIcon(iconByVariant[variant]) : undefined}

          {renderContent(variant, children)}
        </Box>
      </FlexGrid.Col>
    </FlexGrid>
  </Box>
)

Notification.propTypes = {
  /**
   * The appearance.
   */
  variant: PropTypes.oneOf(['instructional', 'branded', 'success', 'error']),
  /**
   * The message. Can be raw text or text components.
   */
  children: PropTypes.node.isRequired,
}

Notification.defaultProps = {
  variant: 'instructional',
}

export default Notification
