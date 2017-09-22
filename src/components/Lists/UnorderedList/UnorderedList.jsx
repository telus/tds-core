import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../../utils/safeRest'
import UnorderedItem from './UnorderedItem/UnorderedItem'

import styles from '../List.modules.scss'

const injectSizeAndListStyle = (child, size, listStyle) => (
  React.cloneElement(child, { size, listStyle })
)

/**
 * <span class="docs--badge green">wip</span>
 */
const UnorderedList = ({ listStyle, size, children, ...rest }) => {
  return (
    <ul {...safeRest(rest)} className={styles.base}>
      {React.Children.map(children, child => injectSizeAndListStyle(child, size, listStyle))}
    </ul>
  )
}

UnorderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf([
    'circle',
    'checkmark',
    'x'
  ]),
  /**
   * The font size.
   */
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  /**
   * The list items. Must be at least one `UnorderedList.Item`.
   */
  children: childrenOfType(UnorderedItem).isRequired
}

UnorderedList.defaultProps = {
  listStyle: 'circle',
  size: undefined
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
