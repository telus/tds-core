import React from 'react'
import { render, mount } from 'enzyme'

import StandaloneIcon from '@tds/core-standalone-icon'
import Text from '@tds/core-text'
import Paragraph from '@tds/core-paragraph'
import InputFeedback from '@tds/core-input-feedback'
import { Fade } from '@tds/shared-animation'
import Tooltip from '../../Tooltip'

import Input from '../Input'

describe('Input', () => {
  const defaultProps = {
    label: 'The input',
  }
  const doRender = (overrides = {}) => render(<Input {...defaultProps} {...overrides} />)

  const doMount = (overrides = {}) => {
    const input = mount(<Input {...defaultProps} {...overrides} />)

    const findInputElement = () => input.find('input')

    return {
      input,
      label: input.find('label'),
      findFeedbackIconFade: () => input.find(Fade),
      findHelper: () => input.find(InputFeedback),
      findInputElement,
      changeValueTo: value => findInputElement().simulate('change', { target: { value } }),
      focus: (focusEvent = {}) => findInputElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findInputElement().simulate('blur', blurEvent),
    }
  }

  it('renders', () => {
    const input = doRender()

    expect(input).toMatchSnapshot()
  })

  it('renders with a feedback state and icon', () => {
    const input = doRender({ feedback: 'error' })

    expect(input).toMatchSnapshot()
  })

  it('supports different input types', () => {
    let findInputElement = doMount().findInputElement
    expect(findInputElement()).toHaveProp('type', 'text')

    findInputElement = doMount({ type: 'number' }).findInputElement
    expect(findInputElement()).toHaveProp('type', 'number')
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

    it('can have a long hint', () => {
      const { input, findInputElement } = doMount({
        id: 'the-id',
        hint: 'The long hint over here',
        hintPosition: 'below',
      })

      expect(input).toContainReact(
        <Paragraph id="the-id_hint" size="small">
          The long hint over here
        </Paragraph>
      )

      expect(findInputElement()).toHaveProp('aria-describedby', 'the-id_hint')
    })
  })

  describe('connecting the label to the input', () => {
    it('connects the label to the input', () => {
      const { label, findInputElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findInputElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findInputElement } = doMount({
        id: 'the-id',
        name: 'the-name',
        label: 'The label',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findInputElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name when no id is provided', () => {
      const { label, findInputElement } = doMount({ name: 'the-name', label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-name')
      expect(findInputElement()).toHaveProp('id', 'the-name')
    })

    it('generates an id from the label when no id or name is provided', () => {
      const { label, findInputElement } = doMount({ label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-label')
      expect(findInputElement()).toHaveProp('id', 'the-label')
    })
  })

  describe('editability', () => {
    it('supports string values or number values', () => {
      let findInputElement = doMount().findInputElement
      expect(findInputElement()).toHaveValue(undefined)

      findInputElement = doMount({ value: 'some value' }).findInputElement
      expect(findInputElement()).toHaveValue('some value')

      findInputElement = doMount({ value: 55 }).findInputElement
      expect(findInputElement()).toHaveValue(55)
    })

    it('has a value that can be changed', () => {
      const { findInputElement, changeValueTo } = doMount({ value: 'initial value' })

      changeValueTo('new value')

      expect(findInputElement()).toHaveValue('new value')
    })

    it('will notify when its value changes', () => {
      const onChangeMock = jest.fn()

      const { findInputElement, changeValueTo } = doMount({ onChange: onChangeMock })
      changeValueTo('new value')

      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { value: 'new value' } })
      )
      expect(findInputElement()).toHaveValue('new value')
    })

    it('can receive a new value from a parent component', () => {
      const { input, findInputElement } = doMount({ value: 'initial value' })
      expect(findInputElement()).toHaveValue('initial value')

      input.setProps({ value: 'new value' })

      expect(findInputElement()).toHaveValue('new value')
    })
  })

  describe('default values', () => {
    it('can be mounted with default value', () => {
      const { findInputElement, changeValueTo } = doMount({ defaultValue: 'initial value' })
      expect(findInputElement()).toHaveValue(undefined)

      changeValueTo('new value')

      expect(findInputElement()).toHaveValue(undefined)
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

    it('ensures that the contents do not overlap the icons', () => {
      const { findInputElement } = doMount({ feedback: 'success' })

      expect(findInputElement()).toHaveClassName('withFeedbackIcon')
    })
  })

  describe('disabling', () => {
    it('deactivates the input', () => {
      let findInputElement = doMount().findInputElement
      expect(findInputElement()).not.toHaveClassName('disabled')
      expect(findInputElement()).not.toBeDisabled()

      findInputElement = doMount({ disabled: true }).findInputElement
      expect(findInputElement()).toHaveProp('disabled')
      expect(findInputElement()).toBeDisabled()
    })

    it('hides any icons', () => {
      const { input } = doMount({ disabled: true, feedback: 'error' })

      expect(input.find(StandaloneIcon)).not.toExist()
    })
  })

  it('can have an error message', () => {
    const { input } = doMount({ id: 'some-id', error: 'Oh no a terrible error!' })

    expect(input).toContainReact(
      <InputFeedback id="some-id_error-message" feedback="error">
        <Paragraph size="small">Oh no a terrible error!</Paragraph>
      </InputFeedback>
    )
  })

  describe('helpers', () => {
    it('can have a simple helper of some components', () => {
      const helper = <div>Some helper text.</div>
      const { input } = doMount({ id: 'some-id', helper })

      expect(input).toContainReact(
        <InputFeedback id="some-id_helper">
          <Text size="small">
            <div>Some helper text.</div>
          </Text>
        </InputFeedback>
      )
    })

    it('styles itself based on the feedback state', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>

      const { findHelper } = doMount({ feedback: 'success', helper })

      expect(findHelper()).toHaveProp('feedback', 'success')
    })

    it('can have a complex helper function to give control to the consumer', () => {
      const helper = jest.fn()
      helper.mockReturnValue(<InputFeedback>Some helper text.</InputFeedback>)

      const { input } = doMount({
        id: 'some-id',
        value: 'current value',
        feedback: 'error',
        helper,
      })

      expect(helper).toHaveBeenCalledWith('error', 'current value')
      expect(input).toContainReact(
        <div id="some-id_helper">
          <Text size="small">
            <InputFeedback>Some helper text.</InputFeedback>
          </Text>
        </div>
      )
    })
  })

  describe('tooltip prop', () => {
    it('connects to Input', () => {
      const input = mount(<Input label="Some field" tooltip={<Tooltip>The tooltip</Tooltip>} />)

      expect(input).toContainReact(<Tooltip connectedFieldLabel="Some field">The tooltip</Tooltip>)
    })
  })

  describe('accessibility', () => {
    it('marks the input as invalid when in the error feedback state', () => {
      let findInputElement = doMount().findInputElement
      expect(findInputElement()).toHaveProp('aria-invalid', false)

      findInputElement = doMount({ feedback: 'error' }).findInputElement
      expect(findInputElement()).toHaveProp('aria-invalid', true)
    })

    it('does not attach aria-describedby to the input field when no error or helper is present', () => {
      const { findInputElement } = doMount({ error: undefined, helper: undefined })

      expect(findInputElement()).toHaveProp('aria-describedby', undefined)
    })

    it('connects the error message to the input field for screen readers', () => {
      const { findInputElement, findHelper } = doMount({
        id: 'some-field-id',
        error: 'An error message',
      })

      expect(findInputElement()).toHaveProp('aria-describedby', 'some-field-id_error-message')
      expect(findHelper()).toHaveProp('id', 'some-field-id_error-message')
    })

    it('connects a simple helper to the input field for screen readers', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>
      const { findInputElement, findHelper } = doMount({ id: 'some-field-id', helper })

      expect(findInputElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(findHelper()).toHaveProp('id', 'some-field-id_helper')
    })

    it('connects a complex helper to the input field for screen readers', () => {
      const helper = () => <InputFeedback>Complex helper</InputFeedback>
      const { input, findInputElement } = doMount({ id: 'some-field-id', helper })

      expect(findInputElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(input).toContainReact(
        <div id="some-field-id_helper">
          <Text size="small">
            <InputFeedback>Complex helper</InputFeedback>
          </Text>
        </div>
      )
    })
  })

  it('passes additional attributes to the input element', () => {
    const { findInputElement } = doMount({ name: 'a name', id: 'the-id' })

    expect(findInputElement()).toHaveProp('name', 'a name')
    expect(findInputElement()).toHaveProp('id', 'the-id')
  })

  it('does not allow custom CSS', () => {
    const { findInputElement } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findInputElement()).not.toHaveClassName('my-custom-class')
    expect(findInputElement()).not.toHaveStyle('color', 'hotpink')
  })
})
