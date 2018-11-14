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
    <fieldset {...safeRest(rest)}>
      {label ? (
        <legend>
          <Text bold size="medium">
            {label}
          </Text>
        </legend>
      ) : null}
      <Box between={3} inline dangerouslyAddClassName={styles.buttonGroup}>
        {getButtons()}
      </Box>
    </fieldset>
  )
}

ButtonGroup.propTypes = {
  /**
   * The form name of the ButtonGroup.
   */
  name: PropTypes.string,
  /**
   * A callback function to handle changing which button is seleced.
   */
  onChange: PropTypes.func,
  /**
   * The current selected value for the group.
   */
  value: PropTypes.string,
  /**
   * A label to be displayed above the ButtonGroup.
   */
  label: PropTypes.string,
  /**
   * A group of ButtonGroup.Item components.
   */
  children: componentWithName('ButtonGroupItem').isRequired,
}

ButtonGroup.defaultProps = {
  name: undefined,
  value: undefined,
  label: undefined,
  onChange: undefined,
}

ButtonGroup.Item = ButtonGroupItem

export default ButtonGroup
