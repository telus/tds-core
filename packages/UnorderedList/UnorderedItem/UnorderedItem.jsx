import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import safeRest from '../../../shared/utils/safeRest'
import joinClassNames from '../../../shared/utils/joinClassNames'

import styles from './UnorderedItem.modules.scss'

const UnorderedItem = ({ listStyle, size, children, ...rest }) => (
  <li {...safeRest(rest)} className={joinClassNames(styles[listStyle], styles[size])}>
    <Text size={size}>{children}</Text>
  </li>
)

UnorderedItem.propTypes = {
  listStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
}

UnorderedItem.defaultProps = {
  listStyle: 'circle',
  size: 'medium',
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
