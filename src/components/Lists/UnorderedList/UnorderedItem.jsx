import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

// import styles from './UnorderedList.modules.scss'

const UnorderedItem = ({ listStyle, children, ...rest }) => {
  return (
    <li {...safeRest(rest)}>
      {children}
    </li>
  )
}

UnorderedItem.propTypes = {
  listStyle: PropTypes.string,
  children: PropTypes.node.isRequired
}

UnorderedItem.defaultProps = {
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
