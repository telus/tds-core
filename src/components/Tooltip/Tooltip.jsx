import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'

import styles from './Tooltip.modules.scss'

/**
 * Provide more detailed instructions.
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false
    }
  }

  toggleBubble = () => {
    if (this.state.opened) {
      this.setState({
        opened: false
      })
    } else {
      this.setState({
        opened: true
      })
    }
  }

  renderBubble(direction, children) {
    const bubbleClasses = joinClassNames(
      styles[direction],
      this.state.opened ? styles.showBubble : styles.hideBubble
    )

    return (
      <span className={bubbleClasses}>
        {children}
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
  bubble: PropTypes.node,
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
