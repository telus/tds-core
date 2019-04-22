import React from 'react'
import PropTypes from 'prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import { componentWithName } from '@tds/util-prop-types'

import styled from 'styled-components'
import ButtonGroupItem from './ButtonGroupItem/ButtonGroupItem'

import safeRest from '../../shared/utils/safeRest'
import { warn } from '../../shared/utils/warn'

/**
 * An input component utilizing buttons that act as radios.
 * @version ./package.json
 */
const ButtonGroup = ({ name, onChange, onFocus, onBlur, value, label, children, ...rest }) => {
  const passedButtons = React.Children.map(children, child =>
    React.cloneElement(child, {
      name,
      onChange,
      onFocus,
      onBlur,
      checked: value === child.props.value,
    })
  )

  const buttonValues = []
  Object.keys(passedButtons).forEach(key => {
    buttonValues.push(passedButtons[key].props.value)
  })

  if (buttonValues.indexOf(value) === -1) {
    warn(
      'ButtonGroup',
      `Selected value "${value}" of ButtonGroup named "${name}" does not match the value of any button in the group. A button must be selected by default. Available button values are: ${buttonValues}`
    )
  }
  const StyledButtonGroup = styled(Box)({
    flexFlow: 'row wrap',
    maxWidth: '784px',
  })

  return (
    <fieldset {...safeRest(rest)} name={name}>
      <legend>
        <Text bold size="medium">
          {label}
        </Text>
      </legend>

      <StyledButtonGroup between={3} inline>
        {passedButtons}
      </StyledButtonGroup>
    </fieldset>
  )
}

ButtonGroup.propTypes = {
  /**
   * The form name of the ButtonGroup.
   */
  name: PropTypes.string.isRequired,
  /**
   * The current selected value for the group.
   */
  value: PropTypes.string.isRequired,
  /**
   * A label to be displayed above the ButtonGroup.
   */
  label: PropTypes.string.isRequired,
  /**
   * A callback function to handle changing which button is seleced. Passed into all buttons.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func.isRequired,
  /**
   * A callback function to be invoked when a button receives focus. Passed into all buttons.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when a button loses focus. Passed into all buttons.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
  /**
   * A group of ButtonGroup.Item components.
   */
  children: componentWithName('ButtonGroupItem').isRequired,
}

ButtonGroup.defaultProps = {
  onFocus: undefined,
  onBlur: undefined,
}

ButtonGroup.Item = ButtonGroupItem

export default ButtonGroup
