import React from 'react'
import { render, mount } from 'enzyme'

import StandaloneIcon from '@tds/core-standalone-icon'
import Text from '@tds/core-text'
import Paragraph from '@tds/core-paragraph'
import InputFeedback from '@tds/core-input-feedback'
import { Fade } from '@tds/shared-animation'
import Tooltip from '../../Tooltip'

import TextArea from '../TextArea'

describe('TextArea', () => {
  const defaultProps = {
    label: 'The textarea',
  }

  const doRender = (overrides = {}) => render(<TextArea {...defaultProps} {...overrides} />)

  const doMount = (overrides = {}) => {
    const textarea = mount(<TextArea {...defaultProps} {...overrides} />)

    const findTextAreaElement = () => textarea.find('textarea')

    return {
      textarea,
      label: textarea.find('label'),
      findTextAreaElement,
      findFeedbackIconFade: () => textarea.find(Fade),
      findHelper: () => textarea.find(InputFeedback),
      changeValueTo: value => findTextAreaElement().simulate('change', { target: { value } }),
      focus: (focusEvent = {}) => findTextAreaElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findTextAreaElement().simulate('blur', blurEvent),
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
      const { label, findTextAreaElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findTextAreaElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findTextAreaElement } = doMount({
        id: 'the-id',
        name: 'the-name',
        label: 'The label',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findTextAreaElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name when no id is provided', () => {
      const { label, findTextAreaElement } = doMount({ name: 'the-name', label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-name')
      expect(findTextAreaElement()).toHaveProp('id', 'the-name')
    })

    it('generates an id from the label when no id or name is provided', () => {
      const { label, findTextAreaElement } = doMount({ label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-label')
      expect(findTextAreaElement()).toHaveProp('id', 'the-label')
    })
  })

  describe('editability', () => {
    it('supports string values or number values', () => {
      let findTextAreaElement = doMount().findTextAreaElement
      expect(findTextAreaElement()).toHaveValue(undefined)

      findTextAreaElement = doMount({ value: 'some value' }).findTextAreaElement
      expect(findTextAreaElement()).toHaveValue('some value')
    })

    it('has a value that can be changed', () => {
      const { changeValueTo, findTextAreaElement } = doMount({ value: 'initial value' })
      changeValueTo('new value')

      expect(findTextAreaElement()).toHaveValue('new value')
    })

    it('will notify when its value changes', () => {
      const onChangeMock = jest.fn()

      const { changeValueTo, findTextAreaElement } = doMount({ onChange: onChangeMock })
      changeValueTo('new value')

      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { value: 'new value' } })
      )
      expect(findTextAreaElement()).toHaveValue('new value')
    })

    it('can receive a new value from a parent component', () => {
      const { textarea, findTextAreaElement } = doMount({ value: 'initial value' })

      textarea.setProps({ value: 'new value' })

      expect(findTextAreaElement()).toHaveValue('new value')
    })
  })

  describe('feedback states', () => {
    it('renders a checkmark icon on success feedback state', () => {
      const { findFeedbackIconFade } = doMount({ feedback: 'success' })

      expect(findFeedbackIconFade()).toContainReact(
        <StandaloneIcon
          symbol="checkmark"
          variant="primary"
          size={16}
          a11yText="The value of this input field is valid."
        />
      )
    })

    it('renders an error icon on error feedback state', () => {
      const { findFeedbackIconFade } = doMount({ feedback: 'error' })

      expect(findFeedbackIconFade()).toContainReact(
        <StandaloneIcon
          symbol="exclamationPointCircle"
          variant="error"
          size={16}
          a11yText="The value of this input field is invalid."
        />
      )
    })

    it('fades the feedback icon in on focus lost and out on focus gained', () => {
      const { findFeedbackIconFade, focus } = doMount({ feedback: 'success' })

      expect(findFeedbackIconFade()).toHaveProp('in', true)

      focus()
      expect(findFeedbackIconFade()).toHaveProp('in', false)
    })

    it('ensures that the contents do not overlap the icon', () => {
      const { findTextAreaElement } = doMount({ feedback: 'success' })

      expect(findTextAreaElement()).toHaveClassName('withFeedbackIcon')
    })
  })

  describe('disabling', () => {
    it('can be disabled', () => {
      let findTextAreaElement = doMount().findTextAreaElement
      expect(findTextAreaElement()).not.toHaveClassName('disabled')
      expect(findTextAreaElement()).not.toBeDisabled()

      findTextAreaElement = doMount({ disabled: true }).findTextAreaElement
      expect(findTextAreaElement()).toHaveProp('disabled')
      expect(findTextAreaElement()).toBeDisabled()
    })

    it('hides any icons', () => {
      const { textarea } = doMount({ disabled: true, feedback: 'error' })

      expect(textarea.find(StandaloneIcon)).not.toExist()
    })
  })

  it('can have an error message', () => {
    const { textarea } = doMount({ id: 'some-id', error: 'Oh no a terrible error!' })

    expect(textarea).toContainReact(
      <InputFeedback id="some-id_error-message" feedback="error">
        <Paragraph size="small">Oh no a terrible error!</Paragraph>
      </InputFeedback>
    )
  })

  describe('helpers', () => {
    it('can have a simple helper of some components', () => {
      const helper = <div>Some helper text.</div>
      const { textarea } = doMount({ id: 'some-id', helper })

      expect(textarea).toContainReact(
        <InputFeedback id="some-id_helper">
          <Text size="small">
            <div>Some helper text.</div>
          </Text>
        </InputFeedback>
      )
    })

    it('styles itself based on the textarea feedback state', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>

      const { findHelper } = doMount({ feedback: 'success', helper })

      expect(findHelper()).toHaveProp('feedback', 'success')
    })

    it('can have a complex helper function to give control to the consumer', () => {
      const helper = jest.fn()
      helper.mockReturnValue(<InputFeedback>Some helper text.</InputFeedback>)

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
            <InputFeedback>Some helper text.</InputFeedback>
          </Text>
        </div>
      )
    })
  })

  describe('accessibility', () => {
    it('marks the textarea as invalid when in the error feedback state', () => {
      let findTextAreaElement = doMount().findTextAreaElement
      expect(findTextAreaElement()).toHaveProp('aria-invalid', false)

      findTextAreaElement = doMount({ feedback: 'error' }).findTextAreaElement
      expect(findTextAreaElement()).toHaveProp('aria-invalid', true)
    })

    it('does not attach aria-describedby to the textarea field when no error or helper is present', () => {
      const { findTextAreaElement } = doMount({ error: undefined, helper: undefined })

      expect(findTextAreaElement()).toHaveProp('aria-describedby', undefined)
    })

    it('connects the error message to the textarea field for screen readers', () => {
      const { findTextAreaElement, findHelper } = doMount({
        id: 'some-field-id',
        error: 'An error message',
      })

      expect(findTextAreaElement()).toHaveProp('aria-describedby', 'some-field-id_error-message')
      expect(findHelper()).toHaveProp('id', 'some-field-id_error-message')
    })

    it('connects a simple helper to the textarea field for screen readers', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>
      const { findTextAreaElement, findHelper } = doMount({ id: 'some-field-id', helper })

      expect(findTextAreaElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(findHelper()).toHaveProp('id', 'some-field-id_helper')
    })

    it('connects a complex helper to the textarea field for screen readers', () => {
      const helper = () => <InputFeedback>Complex helper</InputFeedback>
      const { textarea, findTextAreaElement } = doMount({ id: 'some-field-id', helper })

      expect(findTextAreaElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(textarea).toContainReact(
        <div id="some-field-id_helper">
          <Text size="small">
            <InputFeedback>Complex helper</InputFeedback>
          </Text>
        </div>
      )
    })
  })

  describe('tooltip prop', () => {
    it('connects to TextArea', () => {
      const textarea = mount(
        <TextArea label="Some field" tooltip={<Tooltip>The tooltip</Tooltip>} />
      )

      expect(textarea).toContainReact(
        <Tooltip connectedFieldLabel="Some field">The tooltip</Tooltip>
      )
    })
  })

  it('passes additional attributes to the textarea element', () => {
    const { findTextAreaElement } = doMount({ name: 'a name', placeholder: 'a placeholder' })

    expect(findTextAreaElement()).toHaveProp('name', 'a name')
    expect(findTextAreaElement()).toHaveProp('placeholder', 'a placeholder')
  })

  it('does not allow custom CSS', () => {
    const { findTextAreaElement } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findTextAreaElement()).not.toHaveClassName('my-custom-class')
    expect(findTextAreaElement()).not.toHaveStyle('color', 'hotpink')
  })
})
