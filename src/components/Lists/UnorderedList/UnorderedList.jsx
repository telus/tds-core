import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import UnorderedItem from './UnorderedItem/UnorderedItem'

import styles from './UnorderedList.modules.scss'

const UnorderedList = ({ variant, children, ...rest }) => {
  const classes = `
    ${styles.base}
    ${styles[variant]}
  `
  return (
    <ul {...safeRest(rest)} className={classes}>
      {children}
    </ul>
  )
}

UnorderedList.propTypes = {
  /**
   * The type of list.
   */
  variant: PropTypes.oneOf([
    'bullet',
    'checkmark',
    'error'
  ]),
  children: PropTypes.node.isRequired
}

UnorderedList.defaultProps = {
  variant: 'bullet'
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
