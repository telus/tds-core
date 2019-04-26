import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import safeRest from '../../../shared/utils/safeRest'
import joinClassNames from '../../../shared/utils/joinClassNames'

import styles from './UnorderedItem.modules.scss'
import listStyles from '../../../shared/styles/List.modules.scss'

const UnorderedItem = ({ listStyle, itemStyle, size, children, ...rest }) => (
  <li
    {...safeRest(rest)}
    className={joinClassNames(styles[itemStyle || listStyle], styles[size], listStyles.item)}
  >
    <Text size={size}>{children}</Text>
  </li>
)

UnorderedItem.propTypes = {
  /**
   * The list's global bullet style. Can be overriden by listStyle.
   * @ignore
   */
  listStyle: PropTypes.oneOf(['', 'circle', 'checkmark', 'x']),
  /**
   * The bullet style of a single item.
   * @since 2.1.0
   */
  itemStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  /**
   * The size of the list items, passed from the parent.
   * @ignore
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
}

UnorderedItem.defaultProps = {
  listStyle: 'circle',
  itemStyle: undefined,
  size: 'medium',
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
