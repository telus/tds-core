import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

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

  onClick = (event) => {
    const { onClick } = this.props

    this.setState({ opened: true })
  }

  render() {
    const { direction, children, ...rest } = this.props

    return (
      <div {...safeRest(rest)} className={styles.wrapper}>
        <span className={styles[direction]}>
          {children}
        </span>
        <button className={styles.trigger}>
          <DecorativeIcon symbol="questionMarkCircle" size={16} />
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
