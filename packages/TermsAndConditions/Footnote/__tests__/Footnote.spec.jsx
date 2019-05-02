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
  const returnRef = useRef(null)
  return (
    <div>
      <button type="button" ref={returnRef}>
        Button
      </button>
      <Footnote {...props} returnRef={returnRef} />
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

      events.mousedown({ type: 'mousedown', x: 0, y: 0 })
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

    xit('focuses on the returnRef when closed', () => {
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

      expect(
        footnote
          .find('button')
          .at(0)
          .getDOMNode()
      ).toEqual(document.activeElement)
    })
  })
})
