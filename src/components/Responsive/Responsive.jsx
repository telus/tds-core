import React from 'react'
import PropTypes from 'prop-types'
// import MediaQuery from 'react-responsive'

import safeRest from '../../utils/safeRest'

// import styles from './Responsive.modules.scss'

// const breakpoints = {
//   small: 576,
//   medium: 768,
//   large: 992,
//   xl: 1200,
// }

// const Small = props => <MediaQuery {...props} minWidth={breakpoints.small} />
// const Medium = props => <MediaQuery {...props} minWidth={breakpoints.medium} />
// const Large = props => <MediaQuery {...props} minWidth={breakpoints.large} />
// const XL = props => <MediaQuery {...props} minWidth={breakpoints.xl} />

const Responsive = ({ children, ...rest }) => <div {...safeRest(rest)}>{children}</div>

Responsive.propTypes = {
  query: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Responsive.defaultProps = {
  query: undefined,
}

export default Responsive
