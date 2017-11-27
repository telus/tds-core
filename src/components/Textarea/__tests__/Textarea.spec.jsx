import React from 'react'
import { render, mount } from 'enzyme'

import StandaloneIcon from '../../Icons/StandaloneIcon/StandaloneIcon'
import Text from '../../Typography/Text/Text'
import Paragraph from '../../Typography/Paragraph/Paragraph'
import Fade from '../../Animation/Fade'
import Textarea from '../Textarea'
import Helper from '../../Input/Helper/Helper'

describe('Textarea', () => {
  const defaultProps = {
    label: 'The textarea',
  }

  const doRender = (overrides = {}) => render(<Textarea {...defaultProps} {...overrides} />)

  const doMount = (overrides = {}) => {
    const textarea = mount(<Textarea {...defaultProps} {...overrides} />)

    const findTextareaElement = () => textarea.find('textarea')

    return {
      textarea,
      label: textarea.find('label'),
      findTextareaElement,
      findFeedbackIconFade: () => textarea.find(Fade),
      findHelper: () => textarea.find(Helper),
      changeValueTo: value => findTextareaElement().simulate('change', { target: { value } }),
      focus: (focusEvent = {}) => findTextareaElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findTextareaElement().simulate('blur', blurEvent),
    }
  }

  it('renders', () => {
    const textarea = doRender()

    expect(textarea).toMatchSnapshot()
  })

  it('renders with a feedback state and icon', () => {
    const textarea = doRender({ feedback: 'error' })

    expect(textarea).toMatchSnapshot()
  })

  describe('label', () => {
    it('must have a label', () => {
      const { label } = doMount({ label: 'The label' })

      expect(label).toContainReact(
        <Text size="medium" bold>
          The label
        </Text>
      )
    })

    it('can have a short hint', () => {
      const { label } = doMount({ hint: 'The short hint' })

      expect(label).toContainReact(<Text size="small">The short hint</Text>)
    })
  })

  describe('connecting the label to the textarea', () => {
    it('connects the label to the textarea', () => {
      const { label, findTextareaElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findTextareaElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findTextareaElement } = doMount({
        id: 'the-id',
        name: 'the-name',
        label: 'The label',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findTextareaElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name when no id is provided', () => {
      const { label, findTextareaElement } = doMount({ name: 'the-name', label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-name')
      expect(findTextareaElement()).toHaveProp('id', 'the-name')
    })

    it('generates an id from the label when no id or name is provided', () => {
      const { label, findTextareaElement } = doMount({ label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-label')
      expect(findTextareaElement()).toHaveProp('id', 'the-label')
    })
  })

  describe('editability', () => {
    it('supports string values or number values', () => {
      let findTextareaElement = doMount().findTextareaElement
      expect(findTextareaElement()).toHaveValue('')

      findTextareaElement = doMount({ value: 'some value' }).findTextareaElement
      expect(findTextareaElement()).toHaveValue('some value')
    })

    it('has a value that can be changed', () => {
      const { changeValueTo, findTextareaElement } = doMount({ value: 'initial value' })
      changeValueTo('new value')

      expect(findTextareaElement()).toHaveValue('new value')
    })

    it('will notify when its value changes', () => {
      const onChangeMock = jest.fn()

      const { changeValueTo, findTextareaElement } = doMount({ onChange: onChangeMock })
      changeValueTo('new value')

      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { value: 'new value' } })
      )
      expect(findTextareaElement()).toHaveValue('new value')
    })

    it('can receive a new value from a parent component', () => {
      const { textarea, findTextareaElement } = doMount({ value: 'initial value' })

      textarea.setProps({ value: 'new value' })

      expect(findTextareaElement()).toHaveValue('new value')
    })
  })

  describe('focusing', () => {
    it('can be focused', () => {
      const { findTextareaElement, focus, blur } = doMount()
      expect(findTextareaElement()).toHaveClassName('default')

      focus()
      expect(findTextareaElement()).toHaveClassName('focus')

      blur()
      expect(findTextareaElement()).not.toHaveClassName('focus')
    })

    it('will notify when focus is gained', () => {
      const onFocusMock = jest.fn()
      const event = { target: { value: 'the value' } }

      const { focus } = doMount({ onFocus: onFocusMock })
      focus(event)

      // TODO: Need to do jest.matches or something to match only part of the event
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

  describe('feedback states', () => {
    it('can have a success feedback state', () => {
      const { findTextareaElement, findFeedbackIconFade } = doMount({ feedback: 'success' })

      expect(findTextareaElement()).toHaveClassName('success')
      expect(findFeedbackIconFade()).toContainReact(
        <StandaloneIcon
          symbol="checkmark"
          variant="primary"
          size={16}
          a11yText="The value of this input field is valid."
        />
      )
    })

    it('can have an error feedback state', () => {
      const { findTextareaElement, findFeedbackIconFade } = doMount({ feedback: 'error' })
      expect(findTextareaElement()).toHaveClassName('error')
      expect(findFeedbackIconFade()).toContainReact(
        <StandaloneIcon
          symbol="exclamationPointCircle"
          variant="error"
          size={16}
          a11yText="The value of this input field is invalid."
        />
      )
    })

    it('hides the feedback state while focused', () => {
      const { findTextareaElement, focus, blur } = doMount({ feedback: 'success' })

      focus()
      expect(findTextareaElement()).not.toHaveClassName('success')

      blur()
      expect(findTextareaElement()).toHaveClassName('success')
    })

    it('fades the feedback icon in on focus lost and out on focus gained', () => {
      const { findFeedbackIconFade, focus } = doMount({ feedback: 'success' })

      expect(findFeedbackIconFade()).toHaveProp('in', true)

      focus()
      expect(findFeedbackIconFade()).toHaveProp('in', false)
    })
  })

  it('can be disabled', () => {
    let findTextareaElement = doMount().findTextareaElement
    expect(findTextareaElement()).not.toHaveClassName('disabled')
    expect(findTextareaElement()).not.toBeDisabled()

    findTextareaElement = doMount({ disabled: true }).findTextareaElement
    expect(findTextareaElement()).toHaveProp('disabled')
    expect(findTextareaElement()).toBeDisabled()
  })

  it('can have an error message', () => {
    const { textarea } = doMount({ id: 'some-id', error: 'Oh no a terrible error!' })

    expect(textarea).toContainReact(
      <Helper id="some-id_error-message" feedback="error">
        <Paragraph size="small">Oh no a terrible error!</Paragraph>
      </Helper>
    )
  })

  describe('helpers', () => {
    it('can have a simple helper of some components', () => {
      const helper = <div>Some helper text.</div>
      const { textarea } = doMount({ id: 'some-id', helper })

      expect(textarea).toContainReact(
        <Helper id="some-id_helper">
          <Text size="small">
            <div>Some helper text.</div>
          </Text>
        </Helper>
      )
    })

    it('styles itself based on the textarea feedback state', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>

      const { findHelper } = doMount({ feedback: 'success', helper })

      expect(findHelper()).toHaveProp('feedback', 'success')
    })

    it('can have a complex helper function to give control to the consumer', () => {
      const helper = jest.fn()
      helper.mockReturnValue(<Helper>Some helper text.</Helper>)

      const { textarea } = doMount({
        id: 'some-id',
        value: 'current value',
        feedback: 'error',
        helper,
      })

      expect(helper).toHaveBeenCalledWith('error', 'current value')
      expect(textarea).toContainReact(
        <div id="some-id_helper">
          <Text size="small">
            <Helper>Some helper text.</Helper>
          </Text>
        </div>
      )
    })
  })

  describe('accessibility', () => {
    it('marks the textarea as invalid when in the error feedback state', () => {
      let findTextareaElement = doMount().findTextareaElement
      expect(findTextareaElement()).toHaveProp('aria-invalid', false)

      findTextareaElement = doMount({ feedback: 'error' }).findTextareaElement
      expect(findTextareaElement()).toHaveProp('aria-invalid', true)
    })

    it('does not attach aria-describedby to the textarea field when no error or helper is present', () => {
      const { findTextareaElement } = doMount({ error: undefined, helper: undefined })

      expect(findTextareaElement()).toHaveProp('aria-describedby', undefined)
    })

    it('connects the error message to the textarea field for screen readers', () => {
      const { findTextareaElement, findHelper } = doMount({
        id: 'some-field-id',
        error: 'An error message',
      })

      expect(findTextareaElement()).toHaveProp('aria-describedby', 'some-field-id_error-message')
      expect(findHelper()).toHaveProp('id', 'some-field-id_error-message')
    })

    it('connects a simple helper to the textarea field for screen readers', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>
      const { findTextareaElement, findHelper } = doMount({ id: 'some-field-id', helper })

      expect(findTextareaElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(findHelper()).toHaveProp('id', 'some-field-id_helper')
    })

    it('connects a complex helper to the textarea field for screen readers', () => {
      const helper = () => <Helper>Complex helper</Helper>
      const { textarea, findTextareaElement } = doMount({ id: 'some-field-id', helper })

      expect(findTextareaElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(textarea).toContainReact(
        <div id="some-field-id_helper">
          <Text size="small">
            <Helper>Complex helper</Helper>
          </Text>
        </div>
      )
    })
  })

  it('passes additional attributes to the textarea element', () => {
    const { findTextareaElement } = doMount({ name: 'a name', placeholder: 'a placeholder' })

    expect(findTextareaElement()).toHaveProp('name', 'a name')
    expect(findTextareaElement()).toHaveProp('placeholder', 'a placeholder')
  })

  it('does not allow custom CSS', () => {
    const { findTextareaElement } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findTextareaElement()).not.toHaveProp('className', 'my-custom-class')
    expect(findTextareaElement()).not.toHaveProp('style')
  })
})
