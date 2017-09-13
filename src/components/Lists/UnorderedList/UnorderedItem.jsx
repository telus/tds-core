import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import Text from '../../Typography/Text/Text'

import styles from './UnorderedList.modules.scss'

const UnorderedItem = ({ size, listStyle, children, ...rest }) => (
  <li {...safeRest(rest)} className={styles[`${listStyle}Item`]}>
    <Text size={size || 'base'}>
      {children}
    </Text>
  </li>
)

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
  /**
   * The content
   */
  children: PropTypes.node.isRequired
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
