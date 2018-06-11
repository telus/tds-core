import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import generateId from '../../utils/generateId'
import closest from './element-closest'

import StandaloneIcon from '../../../packages/StandaloneIcon/StandaloneIcon'
import Responsive from '../Responsive/Responsive'

import Bubble from './Bubble'

import iconWrapperStyles from '../IconWrapper.modules.scss'

const getTriggerA11yText = connectedFieldLabel => {
  if (!connectedFieldLabel) {
    return 'Reveal additional information.'
  }

  return `Reveal additional information about ${connectedFieldLabel}.`
}

const getIds = connectedFieldLabel => {
  const id = generateId(connectedFieldLabel, 'unknown-field')

  return {
    bubbleId: id.postfix('tooltip'),
    triggerId: id.postfix('trigger'),
  }
}

/**
 * Provide an explanation or instructions for a form field that most users do not need.
 */
class Tooltip extends React.Component {
  state = {
    open: false,
  }

  componentDidUpdate() {
    if (this.state.open) {
      document.addEventListener('click', this.toggleBubbleOnOutsideEvent)
      document.addEventListener('keypress', this.toggleBubbleOnOutsideEvent)
    } else {
      document.removeEventListener('click', this.toggleBubbleOnOutsideEvent)
      document.removeEventListener('keypress', this.toggleBubbleOnOutsideEvent)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.toggleBubbleOnOutsideEvent)
    document.removeEventListener('keypress', this.toggleBubbleOnOutsideEvent)
  }

  toggleBubbleOnOutsideEvent = event => {
    const { connectedFieldLabel } = this.props

    const { bubbleId, triggerId } = getIds(connectedFieldLabel)

    const inBubble = closest(event.target, `#${bubbleId}`)
    const inTrigger = closest(event.target, `#${triggerId}`)

    if (!inBubble && !inTrigger) {
      this.toggleBubble()
    }
  }

  toggleBubble = () => {
    this.setState(({ open }) => {
      return { open: !open }
    })
  }

  render() {
    const { direction, connectedFieldLabel, children, ...rest } = this.props

    const { bubbleId, triggerId } = getIds(connectedFieldLabel)

    return (
      <div {...safeRest(rest)} className={iconWrapperStyles.fixLineHeight}>
        <StandaloneIcon
          symbol="questionMarkCircle"
          a11yText={getTriggerA11yText(connectedFieldLabel)}
          onClick={this.toggleBubble}
          id={triggerId}
          aria-controls={bubbleId}
          aria-haspopup="true"
          aria-expanded={this.state.open ? 'true' : 'false'}
        />
        <Responsive
          defaultMatches
          maxWidth="sm"
          render={() => (
            <Bubble id={bubbleId} direction="left" width="full" open={this.state.open}>
              {children}
            </Bubble>
          )}
        />
        <Responsive
          defaultMatches={false}
          minWidth="sm"
          maxWidth="md"
          render={() => (
            <Bubble id={bubbleId} direction="left" width="half" open={this.state.open}>
              {children}
            </Bubble>
          )}
        />
        <Responsive
          defaultMatches={false}
          minWidth="md"
          render={() => (
            <Bubble id={bubbleId} direction={direction} width="quarter" open={this.state.open}>
              {children}
            </Bubble>
          )}
        />
      </div>
    )
  }
}

Tooltip.propTypes = {
  /**
   * Open the bubble to the left or right of the trigger.
   */
  direction: PropTypes.oneOf(['left', 'right']),
  /**
   * The input field that using this tooltip must pass its label so that the tooltip trigger can connect itself. Do not
   * show this prop as it is not part of the public API. If this prop is not specified, the tooltip will generate
   * a generic ID, which could produce duplicate ids.
   *
   * @ignore
   */
  connectedFieldLabel: PropTypes.string,
  /**
   * The message. Can be raw text or text components.
   */
  children: PropTypes.node.isRequired,
}

Tooltip.defaultProps = {
  direction: 'right',
  connectedFieldLabel: undefined,
}

export default Tooltip
