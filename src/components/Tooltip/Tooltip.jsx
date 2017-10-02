import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import Text from '../Typography/Text/Text'

import styles from './Tooltip.modules.scss'

/**
 * Provide more detailed instructions.
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // TODO: change to open
      opened: false
    }
  }

  toggleBubble = () => {
    this.setState({
      opened: !this.state.opened
    })
  }

  renderBubble(direction, children) {
    const bubbleClasses = joinClassNames(
      styles[direction],
      this.state.opened ? styles.showBubble : styles.hideBubble
    )

    return (
      <span className={bubbleClasses}>
        <Text size="small">{children}</Text>
      </span>
    )
  }

  render() {
    const { direction, children, ...rest } = this.props

    return (
      <div {...safeRest(rest)} className={styles.wrapper}>

        { this.state.opened &&
          this.renderBubble(direction, children)
        }

        <button className={styles.trigger} onClick={this.toggleBubble}>
          <DecorativeIcon symbol="questionMarkCircle" />
        </button>
      </div>
    )
  }
}

Tooltip.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  /**
   * The content.
   */
  children: PropTypes.node.isRequired
}

Tooltip.defaultProps = {
  direction: 'right',
  bubble: undefined
}

export default Tooltip
