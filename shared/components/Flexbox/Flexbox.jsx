import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import capitalize from '../../utils/capitalize'

import styles from './Flexbox.modules.scss'

const Flexbox = ({ direction, justifyContent, dangerouslyAddClassName, children, ...rest }) => {
  const classNames = joinClassNames(
    styles[direction],
    justifyContent && styles[`justifyContent${capitalize(justifyContent)}`],
    dangerouslyAddClassName
  )

  return (
    <div {...safeRest(rest)} className={classNames}>
      {children}
    </div>
  )
}

Flexbox.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']).isRequired,
  justifyContent: PropTypes.oneOf(['spaceBetween', 'center']),
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Flexbox.defaultProps = {
  justifyContent: undefined,
  dangerouslyAddClassName: undefined,
}

export default Flexbox
