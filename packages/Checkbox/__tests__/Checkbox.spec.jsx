import React from 'react'
import { shallow, mount, render } from 'enzyme'

import InputFeedback from '@tds/core-input-feedback'
import Checkbox from '../Checkbox'
import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'

describe('Checkbox', () => {
  const defaultProps = {
    label: 'The checkbox',
    name: 'the-group-name',
    value: 'the-value',
  }

  const doShallow = (overrides = {}) => {
    const checkbox = shallow(<Checkbox {...defaultProps} {...overrides} />)

    const findLabelElement = () => checkbox.find('[data-testid="checkbox-label"]')

    return {
      checkbox,
      label: checkbox.find('[data-testid="checkbox-label"]').find('div'),
      findLabelElement,
      clickLabel: () => findLabelElement().simulate('click'),
    }
  }
  const doMount = (overrides = {}) => {
    const checkbox = mount(<Checkbox {...defaultProps} {...overrides} />)

    const findCheckboxElement = () => checkbox.find('[data-testid="hidden-input"]').find('input')

    return {
      checkbox,
      label: checkbox.find('[data-testid="checkbox-label"]').find('div'),
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

  it('allows numbers as value', () => {
    const checkbox = render(<Checkbox label="A label" name="the-group-name" value={1} />)

    expect(checkbox).toMatchSnapshot()
  })

  it('must have a label', () => {
    const { label } = doMount({ label: 'Some label' })

    expect(label).toMatchSnapshot()
  })

  it('must have a name and a value', () => {
    const { findCheckboxElement } = doMount({ name: 'some-checkbox-group', value: 'some-value' })

    expect(findCheckboxElement()).toHaveProp('name', 'some-checkbox-group')
    expect(findCheckboxElement()).toHaveProp('value', 'some-value')
  })

  it('has a fake checkbox', () => {
    const { findFakeCheckbox } = doMount()

    expect(findFakeCheckbox()).toMatchSnapshot()
  })

  describe('connecting the label to the checkbox', () => {
    it('connects the label to the checkbox', () => {
      const { findCheckboxElement } = doMount()
      const { findLabelElement } = doShallow()

      expect(findLabelElement().prop('htmlFor')).toEqual(findCheckboxElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { findCheckboxElement } = doMount({
        id: 'the-id',
        name: 'the-checkbox-group',
        value: 'the-value',
      })
      const { findLabelElement } = doShallow({
        id: 'the-id',
        name: 'the-checkbox-group',
        value: 'the-value',
      })

      expect(findLabelElement()).toHaveProp('htmlFor', 'the-id')
      expect(findCheckboxElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name and the value when no id is provided', () => {
      const { findCheckboxElement } = doMount({
        name: 'the-checkbox-group',
        value: 'the-value',
      })

      const { findLabelElement } = doShallow({
        name: 'the-checkbox-group',
        value: 'the-value',
      })

      expect(findLabelElement()).toHaveProp('htmlFor', 'the-checkbox-group_the-value')
      expect(findCheckboxElement()).toHaveProp('id', 'the-checkbox-group_the-value')
    })
  })

  describe('interactivity', () => {
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
      const { checkbox, findCheckboxElement } = doMount({ checked: false, readOnly: true })

      checkbox.setProps({ checked: true })

      expect(findCheckboxElement()).toHaveProp('checked', true)
    })
  })

  describe('focusing', () => {
    it('can be focused and unfocused', () => {
      const { findFakeCheckbox, focus, blur } = doMount()

      focus()
      expect(findFakeCheckbox()).toMatchSnapshot()

      blur()
      expect(findFakeCheckbox()).toMatchSnapshot()
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

      expect(findColoredLabel()).toMatchSnapshot()
      expect(findFakeCheckbox()).toMatchSnapshot()
    })

    it('can have an error message', () => {
      const { findErrorMessage, findFakeCheckbox, findColoredLabel } = doMount({
        label: 'Some error',
        feedback: 'error',
        error: 'Error message',
      })

      expect(findColoredLabel()).toMatchSnapshot()
      expect(findFakeCheckbox()).toMatchSnapshot()
      expect(findErrorMessage()).toMatchSnapshot()
    })

    it('does not appear as an error when it is checked', () => {
      const { findFakeCheckbox, check } = doMount({
        label: 'Some error',
        feedback: 'error',
      })

      check()

      expect(findFakeCheckbox()).toMatchSnapshot()
    })
  })

  describe('disabled', () => {
    it('can be disabled', () => {
      const { findFakeCheckbox, findCheckboxElement, findColoredLabel } = doMount({
        label: 'A label',
        disabled: true,
      })

      expect(findColoredLabel()).toMatchSnapshot()
      expect(findCheckboxElement()).toHaveProp('disabled', true)
      expect(findFakeCheckbox()).toMatchSnapshot()
    })

    it('can be disabled and checked', () => {
      const { findFakeCheckbox, findCheckboxElement, findColoredLabel } = doMount({
        label: 'A label',
        disabled: true,
        checked: true,
        readOnly: true,
      })

      expect(findColoredLabel()).toMatchSnapshot()
      expect(findCheckboxElement()).toHaveProp('disabled', true)
      expect(findFakeCheckbox()).toMatchSnapshot()
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
        feedback: 'error',
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
