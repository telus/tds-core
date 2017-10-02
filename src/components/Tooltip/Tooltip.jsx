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

  toggleBubble() {
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

  render() {
    const { direction, children, ...rest } = this.props

    const bubbleClasses = joinClassNames(
      styles[direction],
      this.state.opened ? styles.showBubble : styles.hideBubble
    )

    // TODO: create renderBubble()
    return (
      <div {...safeRest(rest)} className={styles.wrapper}>
        <span className={bubbleClasses}>
          {children}
        </span>
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
  direction: 'right'
}

export default Tooltip
