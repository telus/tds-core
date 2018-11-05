import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../shared/utils/safeRest'

import styles from './ButtonGroupItem.modules.scss'

const ButtonGroupItem = ({ name, value, children, ...rest }) => (
  <div
    onClick={() => {
      document.getElementById(value).checked = true
    }}
    className={styles.itemContainer}
  >
    <input
      id={value}
      name={name}
      value={value}
      type="radio"
      className={styles.hiddenRadio}
      {...safeRest(rest)}
    />
    <label htmlFor={value} className={styles.itemButton}>
      {children}
    </label>
  </div>
)

ButtonGroupItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

ButtonGroupItem.defaultProps = {}

ButtonGroupItem.displayName = 'ButtonGroup.Item'

export default ButtonGroupItem
