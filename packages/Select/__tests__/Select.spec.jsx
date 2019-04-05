import React from 'react'
import { render, mount } from 'enzyme'

import StandaloneIcon from '@tds/core-standalone-icon'
import Text from '@tds/core-text'
import Paragraph from '@tds/core-paragraph'
import InputFeedback from '@tds/core-input-feedback'
import DecorativeIcon from '@tds/core-decorative-icon'
import { Fade } from '@tds/shared-animation'
import Tooltip from '../../Tooltip'

import Select from '../Select'

describe('Select', () => {
  const defaultProps = {
    label: 'The select',
    options: [{ text: 'text one', value: 'value-1' }, { text: 'text two', value: 'value-2' }],
  }

  const doRender = (overrides = {}) => render(<Select {...defaultProps} {...overrides} />)

  const doMount = (overrides = {}) => {
    const select = mount(<Select {...defaultProps} {...overrides} />)

    const findSelectElement = () => select.find('select')

    return {
      select,
      label: select.find('label'),
      findSelectElement,
      findFeedbackIconFade: () => select.find(Fade),
      findHelper: () => select.find(InputFeedback),
      changeValueTo: value => findSelectElement().simulate('change', { target: { value } }),
      focus: (focusEvent = {}) => findSelectElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findSelectElement().simulate('blur', blurEvent),
    }
  }

  it('renders', () => {
    const select = doRender()

    expect(select).toMatchSnapshot()
  })

  it('renders with a feedback state and icon', () => {
    const select = doRender({ feedback: 'error' })

    expect(select).toMatchSnapshot()
  })

  it('needs a set of options', () => {
    const { findSelectElement } = doMount({
      options: [{ text: 'some text', value: 'value-1' }, { text: 'other text', value: 'value-2' }],
    })

    expect(findSelectElement()).toContainReact(<option value="value-1">some text</option>)
    expect(findSelectElement()).toContainReact(<option value="value-2">other text</option>)
  })

  it('positions the down caret so that the text does not overlap it', () => {
    const { findSelectElement } = doMount()

    expect(findSelectElement()).toHaveClassName('withoutFeedbackIcon')
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

  describe('connecting the label to the select', () => {
    it('connects the label to the select', () => {
      const { label, findSelectElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findSelectElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findSelectElement } = doMount({
        id: 'the-id',
        name: 'the-name',
        label: 'The label',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findSelectElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name when no id is provided', () => {
      const { label, findSelectElement } = doMount({ name: 'the-name', label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-name')
      expect(findSelectElement()).toHaveProp('id', 'the-name')
    })

    it('generates an id from the label when no id or name is provided', () => {
      const { label, findSelectElement } = doMount({ label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-label')
      expect(findSelectElement()).toHaveProp('id', 'the-label')
    })
  })

  describe('editability', () => {
    it('supports string values or number values', () => {
      let findSelectElement = doMount().findSelectElement
      expect(findSelectElement()).toHaveValue(undefined)

      findSelectElement = doMount({ value: 'some value' }).findSelectElement
      expect(findSelectElement()).toHaveValue('some value')
    })

    it('has a value that can be changed', () => {
      const { changeValueTo, findSelectElement } = doMount({ value: 'initial value' })
      changeValueTo('new value')

      expect(findSelectElement()).toHaveValue('new value')
    })

    it('will notify when its value changes', () => {
      const onChangeMock = jest.fn()

      const { changeValueTo, findSelectElement } = doMount({ onChange: onChangeMock })
      changeValueTo('new value')

      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { value: 'new value' } })
      )
      expect(findSelectElement()).toHaveValue('new value')
    })

    it('can receive a new value from a parent component', () => {
      const { select, findSelectElement } = doMount({ value: 'initial value' })

      select.setProps({ value: 'new value' })

      expect(findSelectElement()).toHaveValue('new value')
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
      const { select, findFeedbackIconFade } = doMount({ feedback: 'error' })

      expect(select.find(DecorativeIcon)).toHaveProp('variant', 'error')
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
      const { findSelectElement } = doMount({ feedback: 'success' })

      expect(findSelectElement()).toHaveClassName('withFeedbackIcon')
    })
  })

  describe('disabling', () => {
    it('deactivates the select', () => {
      let findSelectElement = doMount().findSelectElement
      expect(findSelectElement()).not.toHaveClassName('disabled')
      expect(findSelectElement()).not.toBeDisabled()

      findSelectElement = doMount({ disabled: true }).findSelectElement
      expect(findSelectElement()).toHaveProp('disabled')
      expect(findSelectElement()).toBeDisabled()
    })

    it('removes the positioning of the select so that the disabled treatment is displayed', () => {
      const { findSelectElement } = doMount({ disabled: true })

      expect(findSelectElement()).not.toHaveClassName('positionSelectOnTop')
    })

    it('hides any icons', () => {
      const { select } = doMount({ disabled: true, feedback: 'error' })

      expect(select.find(StandaloneIcon)).not.toExist()
      expect(select.find(DecorativeIcon)).not.toExist()
    })
  })

  it('can see placeholder', () => {
    const { findSelectElement } = doMount({ placeholder: 'Please select...' })

    expect(findSelectElement()).toContainReact(
      <option value="" disabled>
        Please select...
      </option>
    )
  })

  it('can have an error message', () => {
    const { select } = doMount({ id: 'some-id', error: 'Oh no a terrible error!' })

    expect(select).toContainReact(
      <InputFeedback id="some-id_error-message" feedback="error">
        <Paragraph size="small">Oh no a terrible error!</Paragraph>
      </InputFeedback>
    )
  })

  describe('helpers', () => {
    it('can have a simple helper of some components', () => {
      const helper = <div>Some helper text.</div>
      const { select } = doMount({ id: 'some-id', helper })

      expect(select).toContainReact(
        <InputFeedback id="some-id_helper">
          <Text size="small">
            <div>Some helper text.</div>
          </Text>
        </InputFeedback>
      )
    })

    it('styles itself based on the select feedback state', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>

      const { findHelper } = doMount({ feedback: 'success', helper })

      expect(findHelper()).toHaveProp('feedback', 'success')
    })

    it('can have a complex helper function to give control to the consumer', () => {
      const helper = jest.fn()
      helper.mockReturnValue(<InputFeedback>Some helper text.</InputFeedback>)

      const { select } = doMount({
        id: 'some-id',
        value: 'current value',
        feedback: 'error',
        helper,
      })

      expect(helper).toHaveBeenCalledWith('error', 'current value')
      expect(select).toContainReact(
        <div id="some-id_helper">
          <Text size="small">
            <InputFeedback>Some helper text.</InputFeedback>
          </Text>
        </div>
      )
    })
  })

  describe('accessibility', () => {
    it('marks the select as invalid when in the error feedback state', () => {
      let findSelectElement = doMount().findSelectElement
      expect(findSelectElement()).toHaveProp('aria-invalid', false)

      findSelectElement = doMount({ feedback: 'error' }).findSelectElement
      expect(findSelectElement()).toHaveProp('aria-invalid', true)
    })

    it('does not attach aria-describedby to the select field when no error or helper is present', () => {
      const { findSelectElement } = doMount({ error: undefined, helper: undefined })

      expect(findSelectElement()).toHaveProp('aria-describedby', undefined)
    })

    it('connects the error message to the select field for screen readers', () => {
      const { findSelectElement, findHelper } = doMount({
        id: 'some-field-id',
        error: 'An error message',
      })

      expect(findSelectElement()).toHaveProp('aria-describedby', 'some-field-id_error-message')
      expect(findHelper()).toHaveProp('id', 'some-field-id_error-message')
    })

    it('connects a simple helper to the select field for screen readers', () => {
      const helper = <Paragraph>Some helper text.</Paragraph>
      const { findSelectElement, findHelper } = doMount({ id: 'some-field-id', helper })

      expect(findSelectElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(findHelper()).toHaveProp('id', 'some-field-id_helper')
    })

    it('connects a complex helper to the select field for screen readers', () => {
      const helper = () => <InputFeedback>Complex helper</InputFeedback>
      const { select, findSelectElement } = doMount({ id: 'some-field-id', helper })

      expect(findSelectElement()).toHaveProp('aria-describedby', 'some-field-id_helper')
      expect(select).toContainReact(
        <div id="some-field-id_helper">
          <Text size="small">
            <InputFeedback>Complex helper</InputFeedback>
          </Text>
        </div>
      )
    })
  })

  describe('tooltip prop', () => {
    it('connects to Select', () => {
      const select = mount(
        <Select
          label="Some field"
          options={[
            {
              text: 'hi',
              value: 'hi',
            },
          ]}
          tooltip={<Tooltip>The tooltip</Tooltip>}
        />
      )

      expect(select).toContainReact(<Tooltip connectedFieldLabel="Some field">The tooltip</Tooltip>)
    })
  })

  it('passes additional attributes to the select element', () => {
    const { findSelectElement } = doMount({ name: 'a name', id: 'the-id' })

    expect(findSelectElement()).toHaveProp('name', 'a name')
    expect(findSelectElement()).toHaveProp('id', 'the-id')
  })

  it('does not allow custom CSS', () => {
    const { findSelectElement } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findSelectElement()).not.toHaveClassName('my-custom-class')
    expect(findSelectElement()).not.toHaveStyle('color', 'hotpink')
  })
})
