import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../../safeRest'
import Icon from '../../../../old-components/Icon/Icon'

import styles from '../UnorderedList.modules.scss'

const UnorderedItem = ({ variant, children, ...rest }) => {

  const iconClasses = `
    ${styles.fixedWidth}
    ${styles.icon}
  `
  return (
    <li className={styles.base} {...safeRest(rest)}>
      <Icon glyph={variant} className={iconClasses} />
      {children}
    </li>
  )
}

UnorderedItem.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
}

UnorderedItem.defaultProps = {
  variant: 'location'
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
