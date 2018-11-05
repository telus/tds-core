import React from 'react'
import PropTypes from 'prop-types'

import Box from '@tds/core-box'
import { componentWithName } from '@tds/util-prop-types'

import ButtonGroupItem from './ButtonGroupItem/ButtonGroupItem'

import safeRest from '../../shared/utils/safeRest'

import styles from './ButtonGroup.modules.scss'

/**
 * @version ./package.json
 */
const ButtonGroup = ({ name, children, ...rest }) => {
  const getButtons = () => {
    return React.Children.map(children, child => React.cloneElement(child, { name }))
  }
  return (
    <Box dangerouslyAddClassName={styles.buttonGroup} between={3} inline {...safeRest(rest)}>
      {getButtons()}
    </Box>
  )
}

ButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: componentWithName('ButtonGroupItem').isRequired,
}

ButtonGroup.defaultProps = {}

ButtonGroup.Item = ButtonGroupItem

export default ButtonGroup
