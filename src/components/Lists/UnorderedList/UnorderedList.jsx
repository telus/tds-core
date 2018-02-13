import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../../utils/safeRest'

import UnorderedItem from './UnorderedItem/UnorderedItem'
import Box from '../../../../packages/Box/Box'

import styles from '../List.modules.scss'

const injectListStyle = (child, listStyle) => React.cloneElement(child, { listStyle })

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
