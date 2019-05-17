import React, { useRef } from 'react'
import { mount, render } from 'enzyme'

import Footnote from '../Footnote'

const defaultProps = {
  copy: 'en',
  number: 3,
  content:
    'Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice.',
  onClose: () => {},
}

const Wrapper = props => {
  const refOne = useRef(null)
  const refTwo = useRef(null)
  return (
    <div>
      Terms and conditions may apply
      <button id="one" type="button" ref={refOne}>
        1
      </button>
      <button id="two" type="button" ref={refTwo}>
        2
      </button>
      <Footnote {...props} returnRef={refOne} />
    </div>
  )
}

describe('Footnote', () => {
  const doRenderWrapper = (props = {}) => render(<Wrapper {...defaultProps} {...props} />)
  const doMountWrapper = (props = {}, options = {}) =>
    mount(<Wrapper {...defaultProps} {...props} />, options)

  it('renders closed', () => {
    const footnote = doRenderWrapper()
    expect(footnote).toMatchSnapshot()
  })

  it('renders opened', () => {
    const footnote = doRenderWrapper({ isOpen: true })
    expect(footnote).toMatchSnapshot()
  })

  describe('onClose', () => {
    it('calls onClose when ESCAPE is pressed', () => {
      const events = {}
      window.addEventListener = jest.fn((event, cb) => {
        events[event] = cb
      })

      const onClose = jest.fn()
      doMountWrapper({ isOpen: true, onClose })
      events.keydown({ type: 'keydown', key: 'Escape' })
      expect(onClose).toHaveBeenCalled()
    })

    it('calls onClose when clicking outside the Footnote', () => {
      const events = {}
      window.addEventListener = jest.fn((event, cb) => {
        events[event] = cb
      })

      const onClose = jest.fn()
      doMountWrapper({ isOpen: true, onClose })

      events.click({ type: 'click', x: 0, y: 0 })
      expect(onClose).toHaveBeenCalled()
    })

    it('calls onClose when clicking the close button', () => {
      const events = {}
      window.addEventListener = jest.fn((event, cb) => {
        events[event] = cb
      })

      const onClose = jest.fn()
      const footnote = doMountWrapper({ isOpen: true, onClose })

      footnote
        .find('Footnote')
        .find('button')
        .simulate('click')

      expect(onClose).toHaveBeenCalled()
    })

    it('focuses on the returnRef when closed', () => {
      const footnote = doMountWrapper({ isOpen: true })

      footnote
        .find('Footnote')
        .find('button')
        .simulate('click')

      expect(footnote.find('button#one').getDOMNode()).toEqual(document.activeElement)
    })
  })
})
