import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'

const FeedbackIconSVG = ({ a11yText, children, ...rest }) => (
  <svg {...safeRest(rest)} role="img" aria-hidden={a11yText ? undefined : 'true'}>
    {a11yText && <title>{a11yText}</title>}
    {children}
  </svg>
)

FeedbackIconSVG.propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
}

FeedbackIconSVG.defaultProps = {
  a11yText: undefined,
}

export default FeedbackIconSVG
