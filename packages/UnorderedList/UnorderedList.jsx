import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import UnorderedItem from './UnorderedItem/UnorderedItem'

import styles from '../../shared/styles/List.modules.scss'

const injectListStyle = (child, listStyle, size) => React.cloneElement(child, { listStyle, size })

/**
 * @version ./package.json
 */
const UnorderedList = ({ listStyle, size, children, ...rest }) => {
  return (
    <Box
      {...safeRest(rest)}
      tag="ul"
      between={2}
      dangerouslyAddClassName={joinClassNames(styles.base, styles[size])}
    >
      {React.Children.map(children, child => injectListStyle(child, listStyle, size))}
    </Box>
  )
}

UnorderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  /**
   * The size of the list's text.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The list items. Must be at least one `UnorderedList.Item`.
   */
  children: childrenOfType(UnorderedItem).isRequired,
}

UnorderedList.defaultProps = {
  listStyle: 'circle',
  size: 'medium',
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
