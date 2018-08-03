import React from 'react'
import PropTypes from 'prop-types'

import FlexGrid from '../../../packages/FlexGrid/FlexGrid'
import DecorativeIcon from '../../../packages/DecorativeIcon/DecorativeIcon'
import Paragraph from '../Typography/Paragraph/Paragraph'
import Box from '../../../packages/Box/Box'
import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

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

/**
 * A banner that highlights important messages.
 */
const Notification = ({ variant, children, ...rest }) => (
  <Box {...safeRest(rest)} vertical={3} dangerouslyAddClassName={styles[variant]}>
    <FlexGrid limitWidth>
      <FlexGrid.Row>
        <FlexGrid.Col>
          <Box inline between={3}>
            {isImportant(variant) ? renderIcon(iconByVariant[variant]) : undefined}
            <div
              className={joinClassNames(
                isImportant(variant) ? styles.withIcon : styles.withoutIcon
              )}
            >
              <Paragraph bold={isImportant(variant)}>{children}</Paragraph>
            </div>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
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
