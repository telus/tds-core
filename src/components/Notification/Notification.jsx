import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

import Grid from '../../old-components/Grid/Grid'
import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import Paragraph from '../Typography/Paragraph/Paragraph'
import Box from '../Box/Box'

import styles from './Notification.modules.scss'

const { Container, Row, Column } = Grid

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
    <Container limitWidth>
      <Row>
        <Column xs={12}>
          <Box inline between={3}>
            {isImportant(variant) ? renderIcon(iconByVariant[variant]) : undefined}

            <Paragraph bold={isImportant(variant)}>{children}</Paragraph>
          </Box>
        </Column>
      </Row>
    </Container>
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
