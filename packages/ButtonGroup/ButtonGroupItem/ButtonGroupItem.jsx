import React from 'react'
import PropTypes from 'prop-types'

import { componentWithName, or } from '@tds/util-prop-types'

import styled from 'styled-components'

import { borders, forms } from '@tds/shared-styles'
import { medium, boldFont } from '@tds/shared-typography'
import { media } from '@tds/core-responsive'
import { colorTelusPurple, colorWhite } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import generateId from '../../../shared/utils/generateId/generateId'

const StyledButtonGroupItem = styled.div({
  margin: '0.5rem 0',
})
const StyledInput = styled.input({
  position: 'fixed',
  opacity: '0',
  '&:checked ~ label': {
    backgroundColor: colorTelusPurple,
    boxShadow: `0px 0px 0px 0px ${colorTelusPurple}`,
    color: colorWhite,
  },
  '&:focus ~ label': {
    boxShadow: `0px 0px 0px 2px ${colorTelusPurple}, 0px 0px 8px 1px ${colorTelusPurple}`,
  },
})
const StyledLabel = styled.label(
  borders.none,
  borders.rounded,
  medium,
  boldFont,
  forms.font,
  forms.baseButton,
  {
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
    backgroundColor: colorWhite,
    boxShadow: `0px 0px 0px 1px ${colorTelusPurple}`,
    color: colorTelusPurple,
    whiteSpace: 'nowrap',
    minWidth: '136px',
    '&:hover': {
      backgroundColor: colorWhite,
      color: colorTelusPurple,
      boxShadow: `0px 0px 0px 2px ${colorTelusPurple}, 0px 0px 8px 1px ${colorTelusPurple}`,
    },
    ...media.from('md').css({
      minWidth: '136px',
    }),
  }
)

const ButtonGroupItem = React.forwardRef(
  (
    {
      name,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      children,
      defaultChecked,
      readOnly,
      ...rest
    },
    ref
  ) => {
    const itemId = generateId(name).postfix(value)
    return (
      <StyledButtonGroupItem {...safeRest(rest)}>
        <StyledInput
          id={itemId}
          name={name}
          value={value}
          type="radio"
          checked={checked}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          defaultChecked={defaultChecked}
          readOnly={readOnly}
          ref={ref}
        />
        <StyledLabel htmlFor={itemId}>{children}</StyledLabel>
      </StyledButtonGroupItem>
    )
  }
)

ButtonGroupItem.propTypes = {
  /**
   *@ignore
   *
   * The name of the ButtonGroup this item is in. (Passed in from parent)
   */
  name: PropTypes.string,
  /**
   * The value of this button.
   */
  value: PropTypes.string.isRequired,
  /**
   *@ignore
   *
   * The current selected value of the full ButtonGroup. (Passed in from parent)
   */
  checked: PropTypes.bool,
  /**
   *@ignore
   *
   * A callback to communicate which button has been selected. (Passed in from parent)
   */
  onChange: PropTypes.func,
  /**
   *@ignore
   *
   * A callback that triggers when a button is given focus. (Passed in from parent)
   */
  onFocus: PropTypes.func,
  /**
   *@ignore
   *
   * A callback that triggers when a button loses focus. (Passed in from parent)
   */
  onBlur: PropTypes.func,
  /**
   *@ignore
   *
   * React defaultChecked
   * https://reactjs.org/docs/uncontrolled-components.html#default-values
   */
  defaultChecked: PropTypes.bool,
  /**
   *@ignore
   *
   * HTML readOnly
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
   */
  readOnly: PropTypes.bool,
  /**
   * The button's label. It can include the `A11yContent` component or strings.
   */

  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

ButtonGroupItem.defaultProps = {
  checked: undefined,
  name: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  defaultChecked: undefined,
  readOnly: undefined,
}

ButtonGroupItem.displayName = 'ButtonGroup.Item'

export default ButtonGroupItem
