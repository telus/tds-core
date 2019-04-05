import React from 'react'
import { mount } from 'enzyme'

import { Fade } from '@tds/shared-animation'

import FormField from '../FormField'

describe('FormField', () => {
  const input = props => <input {...props} />

  const defaultProps = {
    label: 'label',
    children: input,
  }
  const doMount = (overrides = {}) => {
    const formField = mount(<FormField {...defaultProps} {...overrides} />)
    const findInputElement = () => formField.find('input')

    return {
      formField,
      findInputElement,
      findFeedbackIconFade: () => formField.find(Fade),
      focus: (focusEvent = {}) => findInputElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findInputElement().simulate('blur', blurEvent),
    }
  }

  describe('focusing', () => {
    it('can be focused', () => {
      const { findInputElement, focus, blur } = doMount()
      expect(findInputElement()).toHaveClassName('default')

      focus()
      expect(findInputElement()).toHaveClassName('focus')

      blur()
      expect(findInputElement()).not.toHaveClassName('focus')
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

  describe('feedback states', () => {
    it('can have a success feedback state', () => {
      const { findInputElement } = doMount({ feedback: 'success' })

      expect(findInputElement()).toHaveClassName('success')
    })

    it('can have an error feedback state', () => {
      const { findInputElement } = doMount({ feedback: 'error' })

      expect(findInputElement()).toHaveClassName('error')
    })

    it('hides the feedback state while focused', () => {
      const { findInputElement, focus, blur } = doMount({ feedback: 'success' })

      focus()
      expect(findInputElement()).not.toHaveClassName('success')

      blur()
      expect(findInputElement()).toHaveClassName('success')
    })
  })
})
