import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorWhiteLilac } from '@tds/core-colours'
import FlexGrid from '@tds/core-flex-grid'
import {
  NotificationSuccess,
  NotificationError,
  NotificationWarning,
} from '@tds/core-feedback-icon'
import { IconButton, Close } from '@tds/core-interactive-icon'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import { Reveal, Fade } from '@tds/shared-animation'
import { messaging } from '@tds/shared-styles'
import { getCopy, safeRest } from '@tds/util-helpers'

import copyDictionary from './notificationText'

import { warn } from '../../shared/utils/warn'

const StyledNotificationContainer = styled(({ variant, ...rest }) => <Box {...rest} />)(
  ({ variant }) => ({
    position: 'relative',
    ...{
      instructional: messaging.standard,
      success: messaging.success,
      error: messaging.error,
      warning: messaging.warning,
      branded: { backgroundColor: colorWhiteLilac },
    }[variant],
  })
)

const StyledIconContainer = styled(({ ...rest }) => <Box {...rest} />)({ lineHeight: 0 })

const StyledDismissButtonWrapper = styled.div({
  marginLeft: 'auto',
  height: '1.5rem',
  position: 'relative',
  marginTop: '-0.5rem',
  marginRight: '-0.5rem',
})

const isImportant = variant => variant === 'success' || variant === 'error' || variant === 'warning'

const renderIcon = (variant, copy) => {
  const feedback = getCopy(copyDictionary, copy).feedback
  const iconCopy = typeof copy === 'object' && copy.feedback ? { a11yText: feedback } : feedback

  if (variant === 'success') {
    return <NotificationSuccess copy={iconCopy} />
  }
  if (variant === 'error') {
    return <NotificationError copy={iconCopy} />
  }
  if (variant === 'warning') {
    return <NotificationWarning copy={iconCopy} />
  }
  return undefined
}

/**
 * A banner that highlights important messages.
 *
 * @version ./package.json
 */
class Notification extends React.Component {
  state = {
    dismissed: false,
    contentWrapperHeight: undefined,
  }

  componentDidMount() {
    if (this.props.dismissible) {
      window.addEventListener('resize', this.adjustContentHeight)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustContentHeight)
  }

  adjustContentHeight = () => {
    // TODO - temporary workaround to prevent crash
    if (
      this.contentWrapper &&
      this.contentWrapper.offsetHeight !== this.state.contentWrapperHeight
    ) {
      this.setState({ contentWrapperHeight: this.contentWrapper.offsetHeight })
    }
  }

  renderNotification() {
    const { variant, dismissible, children, onExit, onDismiss, copy, ...rest } = this.props

    return (
      <StyledNotificationContainer {...safeRest(rest)} vertical={3} variant={variant}>
        <FlexGrid>
          <FlexGrid.Row>
            <FlexGrid.Col>
              <FlexGrid gutter={false}>
                <FlexGrid.Row>
                  <FlexGrid.Col>
                    <Box inline between={3}>
                      <Box inline between={3} style={{ justifyContent: 'center' }}>
                        {isImportant(variant) && (
                          <StyledIconContainer vertical={1}>
                            {renderIcon(variant, copy)}
                          </StyledIconContainer>
                        )}
                        <Paragraph>{children}</Paragraph>
                      </Box>
                      {dismissible && (
                        <StyledDismissButtonWrapper>
                          <IconButton
                            icon={Close}
                            a11yText={getCopy(copyDictionary, copy).close}
                            onClick={() => {
                              this.setState(() => ({ dismissed: true }))
                              if (onDismiss) {
                                onDismiss()
                              }
                            }}
                          />
                        </StyledDismissButtonWrapper>
                      )}
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </StyledNotificationContainer>
    )
  }

  render() {
    const { variant, dismissible, onExit, onDismiss } = this.props

    if (onExit && !dismissible) {
      warn('Notification', 'The prop `onExit` must be used together with `dismissible`.')
    }
    if (onDismiss && !dismissible) {
      warn('Notification', 'The prop `onDismiss` must be used together with `dismissible`.')
    }
    if (variant === 'error' && dismissible) {
      warn('Notification', 'Error notifications should not be dismissible.')
    }
    if (variant === 'warning' && dismissible) {
      warn('Notification', 'Warning notifications should not be dismissible.')
    }
    if (dismissible) {
      const fadeDuration = 500
      const revealDuration = 400

      return (
        <Reveal
          timeout={revealDuration}
          delay={fadeDuration}
          in={!this.state.dismissed}
          height={this.state.contentWrapperHeight || 'auto'}
          unmountOnExit
        >
          {() => (
            <Fade timeout={fadeDuration} in={!this.state.dismissed} onExited={onExit}>
              {() => (
                <div
                  ref={c => {
                    this.contentWrapper = c
                  }}
                >
                  {this.renderNotification()}
                </div>
              )}
            </Fade>
          )}
        </Reveal>
      )
    }
    return this.renderNotification()
  }
}

Notification.propTypes = {
  /**
   * The appearance.
   */
  variant: PropTypes.oneOf(['instructional', 'branded', 'success', 'error', 'warning']),
  /**
   * Use the copy prop to either select provided English or French copy
   * by passing `'en'` or `'fr'` respectively.
   *
   * To provide your own, pass a JSON object with the keys
   * `feedback` for the `FeedbackIcon` and `close` for the `InteractiveIcon` used as the close button.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      feedback: PropTypes.string.isRequired,
      close: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  /**
   * Whether or not to allow the Notificiation to be dismissed.
   *
   * @since 1.2.0
   */
  dismissible: PropTypes.bool,
  /**
   * A callback function to be run on click of the dismissible icon.
   * Requires `dismissible={true}`
   *
   * @since 1.3.0
   */
  onDismiss: PropTypes.func,
  /**
   * A callback function to be run when the Notification has fully played its exit animation
   * Requires `dismissible={true}`
   *
   * @since 1.3.0
   */
  onExit: PropTypes.func,
  /**
   * The message. Can be raw text or text components.
   */
  children: PropTypes.node.isRequired,
}

Notification.defaultProps = {
  variant: 'instructional',
  dismissible: false,
  onDismiss: undefined,
  onExit: undefined,
}

export default Notification
