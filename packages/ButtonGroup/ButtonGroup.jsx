import React from 'react'
import PropTypes from 'prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import { componentWithName } from '@tds/util-prop-types'

import ButtonGroupItem from './ButtonGroupItem/ButtonGroupItem'

import safeRest from '../../shared/utils/safeRest'

import styles from './ButtonGroup.modules.scss'

/**
 * @version ./package.json
 */
const ButtonGroup = ({ name, onChange, value, label, children, ...rest }) => {
  const getButtons = () => {
    return React.Children.map(children, child =>
      React.cloneElement(child, { name, onChange, selectedValue: value })
    )
  }
  return (
    <fieldset>
      {label ? (
        <legend>
          <Text bold size="medium">
            {label}
          </Text>
        </legend>
      ) : null}
      <Box between={3} inline dangerouslyAddClassName={styles.buttonGroup} {...safeRest(rest)}>
        {getButtons()}
      </Box>
    </fieldset>
  )
}

ButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: componentWithName('ButtonGroupItem').isRequired,
}

ButtonGroup.defaultProps = {
  label: undefined,
  onChange: undefined,
}

ButtonGroup.Item = ButtonGroupItem

export default ButtonGroup
