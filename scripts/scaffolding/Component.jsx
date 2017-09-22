import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

import styles from './COMPONENT.modules.scss'

const COMPONENT = ({ ...rest }) => (
  <div {...safeRest(rest)} />
)

COMPONENT.propTypes = {

}

COMPONENT.defaultProps = {

}

export default COMPONENT
