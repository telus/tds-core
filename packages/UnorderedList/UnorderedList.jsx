import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../shared/utils/safeRest'

import UnorderedItem from './UnorderedItem/UnorderedItem'

import styles from '../../shared/styles/List.modules.scss'

const injectListStyle = (child, listStyle) => React.cloneElement(child, { listStyle })

/**
 * @version 0.0.0-development
 */
const UnorderedList = ({ listStyle, children, ...rest }) => {
  return (
    <Box {...safeRest(rest)} tag="ul" between={2} dangerouslyAddClassName={styles.base}>
      {React.Children.map(children, child => injectListStyle(child, listStyle))}
    </Box>
  )
}

UnorderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  /**
   * The list items. Must be at least one `UnorderedList.Item`.
   */
  children: childrenOfType(UnorderedItem).isRequired,
}

UnorderedList.defaultProps = {
  listStyle: 'circle',
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
