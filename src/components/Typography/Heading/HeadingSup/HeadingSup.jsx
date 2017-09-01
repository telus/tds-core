import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../Heading.modules.scss'

const HeadingSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

HeadingSup.propTypes = {
  children: PropTypes.string.isRequired
}

export default HeadingSup
