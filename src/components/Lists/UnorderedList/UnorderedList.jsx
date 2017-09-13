import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import Text from '../../Typography/Text/Text'
import UnorderedItem from './UnorderedItem'

import styles from './UnorderedList.modules.scss'

const UnorderedList = ({ listStyle, size, children, ...rest }) => {
  const classes = `
    ${styles[listStyle]}
  `

  const generateChildren = child =>
    React.cloneElement(child, {
      size,
      listStyle
    })

  const items = React.Children.map(children, generateChildren)


  return (
    <Text size={size || 'base'}>
      <ul {...safeRest(rest)} className={classes}>
        {items}
      </ul>
    </Text>
  )
}

UnorderedList.propTypes = {
  /**
   * The type of list.
   */
  listStyle: PropTypes.oneOf([
    'circle',
    'checkmark',
    'x'
  ]),
  /**
   * The font size
   */
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  /**
   * The list items
   */
  children: PropTypes.node.isRequired
}

UnorderedList.defaultProps = {
  listStyle: 'circle',
  size: undefined
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
