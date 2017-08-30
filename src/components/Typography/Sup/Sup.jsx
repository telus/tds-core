import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import textStyles from '../Text/Text.modules.scss'

const Sup = ({ children, size, ...rest }) => {
  return (
    <sup {...safeRest(rest)} className={textStyles[`${size}Sup`]} >
      {children}
    </sup>
  )
}


Sup.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ])
}

Sup.defaultProps = {
  size: 'medium'
}

export default Sup
