import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../Box/Box'

import safeRest from '../../../../utils/safeRest'

import styles from './UnorderedItem.modules.scss'

const UnorderedItem = ({ listStyle, children, ...rest }) => (
  <li {...safeRest(rest)} className={styles[listStyle]}>
    <Box spacing="margin" bottom={2}>
      {children}
    </Box>
  </li>
)

UnorderedItem.propTypes = {
  listStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  children: PropTypes.node.isRequired,
}

UnorderedItem.defaultProps = {
  listStyle: 'circle',
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
