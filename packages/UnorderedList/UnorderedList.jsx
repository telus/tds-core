import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../shared/utils/safeRest'

import UnorderedItem from './UnorderedItem/UnorderedItem'

import styles from '../../shared/styles/List.modules.scss'

const LIST_STYLE_CIRLCLE = 'circle'
const LIST_STYLE_CHECKMARK = 'checkmark'
const LIST_STYLE_X = 'x'

const injectListStyle = (child, listStyle, size) => {
  const propsForChild = {
    size,
  }
  if (listStyle !== '') {
    propsForChild.listStyle = listStyle
  }
  return React.cloneElement(child, propsForChild)
}

/**
 * @version ./package.json
 */
const UnorderedList = ({ listStyle, size, children, ...rest }) => {
  const filteredChildren = React.Children.toArray(children).filter(child => child)
  return (
    <Box {...safeRest(rest)} tag="ul" between={2} className={styles.base}>
      {React.Children.map(filteredChildren, child => injectListStyle(child, listStyle, size))}
    </Box>
  )
}

UnorderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf([LIST_STYLE_CIRLCLE, LIST_STYLE_CHECKMARK, LIST_STYLE_X]),
  /**
   * The size of the list's text.
   *
   * @since 2.0.0
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The list items. Must be at least one `UnorderedList.Item`.
   */
  children: componentWithName('UnorderedItem').isRequired,
}

UnorderedList.defaultProps = {
  listStyle: '',
  size: 'medium',
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
