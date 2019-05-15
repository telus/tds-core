import React from 'react'
import { mount, render } from 'enzyme'

import Text from '../../Typography/Text/Text'
import Paragraph from '../../Typography/Paragraph/Paragraph'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Checkbox from '../Checkbox'
import InputFeedback from '../../InputFeedback/InputFeedback'
import ColoredTextProvider from '../../Typography/ColoredTextProvider/ColoredTextProvider'

describe('Checkbox', () => {
  const defaultProps = {
    label: 'The checkbox',
    name: 'the-group-name',
    value: 'the-value',
  }
  const doMount = (overrides = {}) => {
    const checkbox = mount(<Checkbox {...defaultProps} {...overrides} />)

    const findCheckboxElement = () => checkbox.find('input')

    return {
      checkbox,
      label: checkbox.find('label'),
      findCheckboxElement,
      findFakeCheckbox: () => checkbox.find('[data-testid="fake-input"]'),
      findColoredLabel: () => checkbox.find(ColoredTextProvider),
      findErrorMessage: () => checkbox.find(InputFeedback),
      check: () => findCheckboxElement().simulate('change', { target: { checked: true } }),
      uncheck: () => findCheckboxElement().simulate('change', { target: { checked: false } }),
      focus: (focusEvent = {}) => findCheckboxElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findCheckboxElement().simulate('blur', blurEvent),
    }
  }

  it('renders', () => {
    const checkbox = render(<Checkbox label="A label" name="the-group-name" value="the-value" />)

    expect(checkbox).toMatchSnapshot()
  })

  it('must have a label', () => {
    const { label } = doMount({ label: 'Some label' })

    expect(label).toContainReact(<Text size="medium">Some label</Text>)
  })

  it('must have a name and a value', () => {
    const { findCheckboxElement } = doMount({ name: 'some-checkbox-group', value: 'some-value' })

    expect(findCheckboxElement()).toHaveProp('name', 'some-checkbox-group')
    expect(findCheckboxElement()).toHaveProp('value', 'some-value')
  })

  it('has a fake checkbox', () => {
    const { findFakeCheckbox } = doMount()

    expect(findFakeCheckbox()).toHaveClassName('fakeCheckbox')
  })

  describe('connecting the label to the checkbox', () => {
    it('connects the label to the checkbox', () => {
      const { label, findCheckboxElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findCheckboxElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findCheckboxElement } = doMount({
        id: 'the-id',
        name: 'the-checkbox-group',
        value: 'the-value',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findCheckboxElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name and the value when no id is provided', () => {
      const { label, findCheckboxElement } = doMount({
        name: 'the-checkbox-group',
        value: 'the-value',
      })

      expect(label).toHaveProp('htmlFor', 'the-checkbox-group_the-value')
      expect(findCheckboxElement()).toHaveProp('id', 'the-checkbox-group_the-value')
    })
  })

  describe('interactivity', () => {
    it('can be unchecked', () => {
      const { findCheckboxElement, findFakeCheckbox } = doMount({ checked: false })

      expect(findCheckboxElement()).toHaveProp('checked', false)
      expect(findFakeCheckbox()).toHaveClassName('unchecked')
      expect(findFakeCheckbox().find(DecorativeIcon)).toBeEmpty()
    })

    it('can be checked', () => {
      const { findCheckboxElement, findFakeCheckbox } = doMount({ checked: true })

      expect(findCheckboxElement()).toHaveProp('checked', true)
      expect(findFakeCheckbox()).toHaveClassName('checked')
      expect(findFakeCheckbox()).toContainReact(
        <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
      )
    })

    it('checks and unchecks when clicking', () => {
      const { findCheckboxElement, findFakeCheckbox, check, uncheck } = doMount()

      check()

      expect(findCheckboxElement()).toHaveProp('checked', true)
      expect(findFakeCheckbox()).toHaveClassName('checked')
      expect(findFakeCheckbox()).toContainReact(
        <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
      )

      uncheck()

      expect(findCheckboxElement()).toHaveProp('checked', false)
      expect(findFakeCheckbox()).toHaveClassName('unchecked')
      expect(findFakeCheckbox().find(DecorativeIcon)).toBeEmpty()
    })

    it('notifies when it is checked or unchecked', () => {
      const onChangeMock = jest.fn()
      const { check, uncheck } = doMount({ onChange: onChangeMock })

      check()
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { checked: true } })
      )

      uncheck()
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { checked: false } })
      )
    })

    it('can receive a new value from a parent component', () => {
      const { checkbox, findCheckboxElement } = doMount({ checked: false })

      checkbox.setProps({ checked: true })

      expect(findCheckboxElement()).toHaveProp('checked', true)
    })
  })

  describe('focusing', () => {
    it('can be focused and unfocused', () => {
      const { findFakeCheckbox, focus, blur } = doMount()

      focus()
      expect(findFakeCheckbox()).toHaveClassName('focused unchecked')

      blur()
      expect(findFakeCheckbox()).not.toHaveClassName('focused')
      expect(findFakeCheckbox()).toHaveClassName('unchecked')
    })

    it('will notify when focus is gained', () => {
      const onFocusMock = jest.fn()
      const event = { target: { value: 'the value' } }

      const { focus } = doMount({ onFocus: onFocusMock })
      focus(event)

      expect(onFocusMock).toHaveBeenCalledWith(expect.objectContaining(event))
    })

    it('will notify when focus is lost', () => {
      const onBlurMock = jest.fn()
      const event = { target: { value: 'the value' } }

      const { blur } = doMount({ onBlur: onBlurMock })
      blur(event)

      expect(onBlurMock).toHaveBeenCalledWith(expect.objectContaining(event))
    })
  })

  describe('error', () => {
    it('can have an error feedback state', () => {
      const { findFakeCheckbox, findColoredLabel } = doMount({
        label: 'Some error',
        feedback: 'error',
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'errorText ieFullWidth')
      expect(findFakeCheckbox()).toHaveClassName('error')
      expect(findFakeCheckbox()).not.toHaveClassName('unchecked')
    })

    it('can have an error message', () => {
      const { findErrorMessage, findFakeCheckbox, findColoredLabel } = doMount({
        label: 'Some error',
        feedback: 'error',
        error: 'Error message',
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'errorText ieFullWidth')
      expect(findFakeCheckbox()).toHaveClassName('error')
      expect(findFakeCheckbox()).not.toHaveClassName('unchecked')
      expect(findErrorMessage()).toContainReact(
        <InputFeedback id="the-group-namethe-value_error-message" feedback="error">
          <Paragraph size="small">Error message</Paragraph>
        </InputFeedback>
      )
    })

    it('does not appear as an error when it is checked', () => {
      const { findFakeCheckbox, findColoredLabel, check } = doMount({
        label: 'Some error',
        feedback: 'error',
        checked: false,
      })

      check()

      expect(findColoredLabel()).toBeEmpty()
      expect(findFakeCheckbox()).toHaveClassName('checked')
      expect(findFakeCheckbox()).not.toHaveClassName('error')
    })
  })

  describe('disabled', () => {
    it('can be disabled', () => {
      const { findFakeCheckbox, findCheckboxElement, findColoredLabel } = doMount({
        label: 'A label',
        disabled: true,
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'disabledText ieFullWidth')
      expect(findCheckboxElement()).toHaveProp('disabled', true)
      expect(findFakeCheckbox()).toHaveClassName('disabled')
    })

    it('can be disabled and checked', () => {
      const { findFakeCheckbox, findCheckboxElement, findColoredLabel } = doMount({
        label: 'A label',
        disabled: true,
        checked: true,
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'disabledText ieFullWidth')
      expect(findCheckboxElement()).toHaveProp('disabled', true)
      expect(findFakeCheckbox()).toHaveClassName('disabledChecked')
    })
  })

  describe('accessibility', () => {
    it('marks the checkbox as invalid when in the error feedback state', () => {
      let findCheckboxElement = doMount().findCheckboxElement
      expect(findCheckboxElement()).toHaveProp('aria-invalid', false)

      findCheckboxElement = doMount({ feedback: 'error' }).findCheckboxElement
      expect(findCheckboxElement()).toHaveProp('aria-invalid', true)
    })

    it('does not attach aria-describedby to the checkbox when no error is present', () => {
      const { findCheckboxElement } = doMount({ error: undefined })

      expect(findCheckboxElement()).toHaveProp('aria-describedby', undefined)
    })

    it('connects the error message to the checkbox for screen readers', () => {
      const { findCheckboxElement } = doMount({
        id: 'some-field-id',
        error: 'An error message',
      })

      expect(findCheckboxElement()).toHaveProp('aria-describedby', 'some-field-id_error-message')
    })
  })

  it('passes additional attributes to the checkbox', () => {
    const { findCheckboxElement } = doMount({
      disabled: true,
      'data-some-attr': 'some value',
    })
    expect(findCheckboxElement()).toHaveProp('disabled', true)
    expect(findCheckboxElement()).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const { findCheckboxElement } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findCheckboxElement()).not.toHaveProp('className', 'my-custom-class')
    expect(findCheckboxElement()).not.toHaveProp('style')
  })
})
