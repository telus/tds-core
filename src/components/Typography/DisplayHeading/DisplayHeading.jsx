import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../safeRest'

import styles from './DisplayHeading.modules.scss'

const getClassName = invert => (
  invert ? styles.inverted : styles.default
)
const DisplayHeading = ({ invert, children, ...rest }) => (
  <h1 {...safeRest(rest)} className={getClassName(invert)} >{children}</h1>
)

DisplayHeading.propTypes = {
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}

DisplayHeading.defaultProps = {
  invert: false
}

export default DisplayHeading
