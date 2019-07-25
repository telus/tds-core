import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import { warn } from '../../shared/utils/warn'

/**
 * @version ./package.json
 */
const FeedbackIcon = props => {
  if (props.onClick) {
    warn('FeedbackIcon', 'Icons are not interactable, do not pass an onClick handler.')
  }
  return <i {...safeRest(props)} />
}

FeedbackIcon.propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
}

FeedbackIcon.defaultProps = {
  a11yText: undefined,
  onClick: undefined,
}

export default FeedbackIcon
