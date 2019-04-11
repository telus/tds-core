import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'
import Box from '@tds/core-box'

import joinClassNames from '../../shared/utils/joinClassNames'

import styles from './Tooltip.modules.scss'
import displayStyles from '../../shared/styles/Display.modules.scss'

const Bubble = ({ id, direction, open, width, children }) => {
  const classes = joinClassNames(styles[direction], !open && displayStyles.hide)

  return (
    <Box
      vertical={2}
      horizontal={3}
      className={classes}
      id={id}
      role="tooltip"
      aria-live="assertive"
      aria-hidden={open ? 'false' : 'true'}
      data-testid="bubble"
    >
      <div className={styles.innerBubble} style={width}>
        <Text size="small">{children}</Text>
      </div>
    </Box>
  )
}

Bubble.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  open: PropTypes.bool.isRequired,
  width: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Bubble
