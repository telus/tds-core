import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import generateId from '../../utils/generateId'
import closest from './element-closest'

import StandaloneIcon from '../Icons/StandaloneIcon/StandaloneIcon'
import Text from '../Typography/Text/Text'
import Box from '../Box/Box'

import displayStyles from '../Display.modules.scss'
import iconWrapperStyles from '../Icons/IconWrapper.modules.scss'
import styles from './Tooltip.modules.scss'

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
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.24.0</span>
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
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

  renderBubble(id, direction, open, content) {
    const classes = joinClassNames(styles[direction], !open && displayStyles.hide)

    return (
      <Box
        spacing="padding"
        vertical={2}
        horizontal={3}
        dangerouslyAddClassName={classes}
        id={id}
        role="tooltip"
        aria-live="polite"
        aria-hidden={open ? 'false' : 'true'}
        data-testid="bubble"
      >
        <Text size="small">{content}</Text>
      </Box>
    )
  }

  render() {
    const { direction, connectedFieldLabel, children, ...rest } = this.props

    const { bubbleId, triggerId } = getIds(connectedFieldLabel)

    return (
      <div {...safeRest(rest)} className={iconWrapperStyles.fixLineHeight}>
        {this.renderBubble(bubbleId, direction, this.state.open, children)}

        <button
          id={triggerId}
          className={styles.trigger}
          onClick={this.toggleBubble}
          aria-controls={bubbleId}
          aria-haspopup="true"
          aria-expanded={this.state.open ? 'true' : 'false'}
        >
          <StandaloneIcon
            symbol="questionMarkCircle"
            a11yText={getTriggerA11yText(connectedFieldLabel)}
          />
        </button>
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
