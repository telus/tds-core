import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Input from '../Input'

describe('Input', () => {
  const defaultProps = {
    label: 'The label'
  }
  const doShallow = (overrides = {}) => shallow(<Input {...defaultProps} {...overrides} />)

  it('renders', () => {
    const input = doShallow()

    expect(toJson(input)).toMatchSnapshot()
  })

  it('supports different input types', () => {
    let input = doShallow()
    expect(input.find('input')).toHaveProp('type', 'text')

    input = doShallow({ type: 'number' })
    expect(input.find('input')).toHaveProp('type', 'number')
  })

  it('must have a label', () => {
    const input = doShallow({ label: 'The label' })

    expect(input.find('label')).toHaveText('The label')
  })

  describe('connecting the label to the input', () => {
    it('connects the label to the input', () => {
      const input = doShallow()

      const label = input.find('label')
      const inputElement = input.find('input')

      expect(label.prop('htmlFor')).toEqual(inputElement.prop('id'))
    })

    it('uses the id when provided', () => {
      const input = doShallow({ id: 'the-id', name: 'the-name', label: 'The label' })

      expect(input.find('label')).toHaveProp('htmlFor', 'the-id')
      expect(input.find('input')).toHaveProp('id', 'the-id')
    })

    it('uses the name when no id is provided', () => {
      const input = doShallow({ name: 'the-name', label: 'The label' })

      expect(input.find('label')).toHaveProp('htmlFor', 'the-name')
      expect(input.find('input')).toHaveProp('id', 'the-name')
    })

    it('generates an id from the label when no id or name is provided', () => {
      const input = doShallow({ label: 'The label' })

      expect(input.find('label')).toHaveProp('htmlFor', 'the-label')
      expect(input.find('input')).toHaveProp('id', 'the-label')
    })
  })

  describe('editability', () => {
    it('supports string values or number values', () => {
      let input = doShallow()
      expect(input.find('input')).toHaveValue(undefined)

      input = doShallow({ value: 'some value' })
      expect(input.find('input')).toHaveValue('some value')

      input = doShallow({ value: 55 })
      expect(input.find('input')).toHaveValue(55)
    })

    it('has a value that can be changed', () => {
      const inputField = doShallow({ value: 'initial value' })
      inputField.find('input').simulate('change', { target: { value: 'new value' } })

      expect(inputField.find('input')).toHaveValue('new value')
    })

    it('will notify when its value changes', () => {
      const onChangeMock = jest.fn()

      const inputField = doShallow({ onChange: onChangeMock })
      inputField.find('input').simulate('change', { target: { value: 'new value' } })

      expect(onChangeMock).toHaveBeenCalledWith({ target: { value: 'new value' } })
      expect(inputField.find('input')).toHaveValue('new value')
    })

    it('can receive a new value from a parent component', () => {
      const input = doShallow({ value: 'initial value' })
      expect(input.find('input')).toHaveValue('initial value')

      input.setProps({ value: 'new value' })

      expect(input.find('input')).toHaveValue('new value')
    })
  })

  it('can be disabled', () => {
    let input = doShallow()
    expect(input.find('input')).not.toBeDisabled()

    input = doShallow({ disabled: true })
    expect(input.find('input')).toBeDisabled()
  })

  it('can have an error')
  it('can have a field helper')

  it('passes additional attributes to the input element', () => {
    const input = doShallow({ name: 'a name', placeholder: 'a placeholder' })

    expect(input.find('input')).toHaveProp('name', 'a name')
    expect(input.find('input')).toHaveProp('placeholder', 'a placeholder')
  })

  it('does not allow custom CSS', () => {
    const input = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(input.find('input')).not.toHaveProp('className', 'my-custom-class')
    expect(input.find('input')).not.toHaveProp('style')
  })
})
