import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import StandaloneIcon from '../Icons/StandaloneIcon/StandaloneIcon'
import Text from '../Typography/Text/Text'
import Box from '../Box/Box'

import styles from './Tooltip.modules.scss'
import displayStyles from '../Display.modules.scss'

/**
 * Provide more detailed instructions.
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  toggleBubble = () => {
    this.setState({
      open: !this.state.open,
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
        aria-hidden={open ? 'false' : 'true'}
        data-testid="bubble"
      >
        <Text size="small">{content}</Text>
      </Box>
    )
  }

  render() {
    const { id, direction, children, ...rest } = this.props

    return (
      <div {...safeRest(rest)} className={styles.wrapper}>
        {this.renderBubble(id, direction, this.state.open, children)}

        <button
          className={styles.trigger}
          onClick={this.toggleBubble}
          aria-haspopup="true"
          aria-expanded={this.state.open ? 'true' : 'false'}
          aria-labelledby={id}
        >
          <StandaloneIcon symbol="questionMarkCircle" a11yText="Reveal additional information." />
        </button>
      </div>
    )
  }
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  /**
   * Open the bubble to the left or right of the trigger.
   */
  direction: PropTypes.oneOf(['left', 'right']),
  /**
   * The content.
   */
  children: PropTypes.node.isRequired,
}

Tooltip.defaultProps = {
  direction: 'right',
}

export default Tooltip
