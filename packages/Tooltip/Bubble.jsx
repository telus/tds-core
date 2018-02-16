import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../shared/utils/joinClassNames'

import Text from '../Text/Text'
import Box from '../Box/Box'

import styles from './Tooltip.modules.scss'
import displayStyles from '../../shared/styles/Display.modules.scss'

const Bubble = ({ id, direction, width, open, children }) => {
  const classes = joinClassNames(styles[direction], styles[width], !open && displayStyles.hide)

  return (
    <Box
      vertical={2}
      horizontal={3}
      dangerouslyAddClassName={classes}
      id={id}
      role="tooltip"
      aria-live="polite"
      aria-hidden={open ? 'false' : 'true'}
      data-testid="bubble"
    >
      <Text size="small">{children}</Text>
    </Box>
  )
}

Bubble.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  width: PropTypes.oneOf(['full', 'half', 'quarter']).isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Bubble
