import React from 'react'
import PropTypes from 'prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import { componentWithName } from '@tds/util-prop-types'

import styled from 'styled-components'
import ButtonGroupItem from './ButtonGroupItem/ButtonGroupItem'

import safeRest from '../../shared/utils/safeRest'

const StyledButtonGroup = styled(Box)({
  flexFlow: 'row wrap',
  maxWidth: '784px',
})

/**
 * An input component utilizing buttons that act as radios.
 * @version ./package.json
 */
const ButtonGroup = React.forwardRef(
  ({ name, onChange, onFocus, onBlur, value, label, children, readOnly, ...rest }, ref) => {
    const passedButtons = React.Children.map(children, child =>
      React.cloneElement(child, {
        name,
        onChange,
        onFocus,
        onBlur,
        checked: typeof value !== 'undefined' ? value === child.props.value : undefined,
        readOnly,
      })
    )

    const buttonValues = []
    Object.keys(passedButtons).forEach(key => {
      buttonValues.push(passedButtons[key].props.value)
    })

    return (
      <fieldset {...safeRest(rest)} name={name} ref={ref}>
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
)
ButtonGroup.displayName = 'ButtonGroup'

ButtonGroup.propTypes = {
  /**
   * The form name of the ButtonGroup.
   */
  name: PropTypes.string.isRequired,
  /**
   * The current selected value for the group.
   */
  value: PropTypes.string,
  /**
   * A label to be displayed above the ButtonGroup.
   */
  label: PropTypes.string.isRequired,
  /**
   * A callback function to handle changing which button is seleced. Passed into all buttons.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
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
   * @ignore
   *
   * A callback function to be invoked when a button loses focus. Passed into all buttons.
   */
  readOnly: PropTypes.bool,
  /**
   * A group of ButtonGroup.Item components.
   */
  children: componentWithName('ButtonGroup.Item', true).isRequired,
}

ButtonGroup.defaultProps = {
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  value: undefined,
  readOnly: undefined,
}

ButtonGroup.Item = ButtonGroupItem

export default ButtonGroup
