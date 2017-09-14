import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../../safeRest'

import styles from './UnorderedItem.modules.scss'
import textStyles from '../../../Typography/Text/Text.modules.scss'

const UnorderedItem = ({ size, listStyle, children, ...rest }) => {
  const classes = `
    ${styles[listStyle]}
    ${textStyles[size]}
  `
  return (
    <li {...safeRest(rest)} className={classes}>
      {children}
    </li>
  )
}

UnorderedItem.propTypes = {
  listStyle: PropTypes.oneOf([
    'circle',
    'checkmark',
    'x'
  ]),
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  children: PropTypes.node.isRequired
}

UnorderedItem.defaultProps = {
  listStyle: 'circle',
  size: undefined
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
