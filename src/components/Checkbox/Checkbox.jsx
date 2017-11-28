import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import generateId from '../../utils/generateId'

import Text from '../Typography/Text/Text'

// import styles from './Checkbox.modules.scss'

const Checkbox = ({ label, ...rest }) => {
  const checkboxId = generateId(rest.id, rest.name, label)

  return (
    <label data-no-global-styles htmlFor={checkboxId.identity()}>
      <input {...safeRest(rest)} type="checkbox" data-no-global-styles id={checkboxId.identity()} />
      <Text size="medium">{label}</Text>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
}

Checkbox.defaultProps = {}

export default Checkbox
