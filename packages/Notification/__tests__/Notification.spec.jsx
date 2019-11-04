import React from 'react'
import { shallow, render, mount } from 'enzyme'

import {
  NotificationSuccess,
  NotificationError,
  NotificationWarning,
} from '@tds/core-feedback-icon'
import { Close } from '@tds/core-interactive-icon'
import { Reveal } from '@tds/shared-animation'

import Notification from '../Notification'
import { warn } from '../../../shared/utils/warn'

jest.mock('../../../shared/utils/warn')

describe('<Notification />', () => {
  const defaultChildren = 'Some content'
  const doShallow = (props = {}, children = defaultChildren) =>
    shallow(
      <Notification copy="en" {...props}>
        {children}
      </Notification>
    )
  const doRender = (props = {}, children = defaultChildren) =>
    render(
      <Notification copy="en" {...props}>
        {children}
      </Notification>
    )
  const doMount = (props = {}, children = defaultChildren) =>
    mount(
      <Notification copy="en" {...props}>
        {children}
      </Notification>
    )

  it('renders', () => {
    const notification = doRender()

    expect(notification).toMatchSnapshot()
  })

  it('can have a variant', () => {
    let notification = doMount({ variant: undefined })
    expect(notification).toMatchSnapshot()

    notification = doMount({ variant: 'success' })
    expect(notification).toMatchSnapshot()
  })

  it('does not have an icon by default', () => {
    let notification = doShallow()
    expect(notification.find(NotificationSuccess)).not.toExist()
    expect(notification.find(NotificationError)).not.toExist()
    expect(notification.find(NotificationWarning)).not.toExist()

    notification = doShallow({ variant: 'branded' })
    expect(notification.find(NotificationSuccess)).not.toExist()
    expect(notification.find(NotificationError)).not.toExist()
    expect(notification.find(NotificationWarning)).not.toExist()
  })

  it('does not have a dismiss icon by default', () => {
    const notification = doShallow()
    expect(notification.find(Close)).not.toExist()
  })

  describe('successful variant', () => {
    it('default text style is not bold', () => {
      const notification = doShallow({ variant: 'success' }, 'A success message')

      expect(notification.find('Paragraph').prop('bold')).toBeFalsy()
    })

    it('adds a success icon', () => {
      const notification = doShallow({ variant: 'success' })

      expect(notification).toContainReact(<NotificationSuccess copy="en" />)
    })
  })

  describe('error variant', () => {
    it('default text style is not bold', () => {
      const notification = doShallow({ variant: 'error' }, 'An error message')

      expect(notification.find('Paragraph').prop('bold')).toBeFalsy()
    })

    it('adds an error icon', () => {
      const notification = doShallow({ variant: 'error' })

      expect(notification).toContainReact(<NotificationError copy="en" />)
    })
  })

  describe('warning variant', () => {
    it('default text style is not bold', () => {
      const notification = doShallow({ variant: 'warning' }, 'An warning message')

      expect(notification.find('Paragraph').prop('bold')).toBeFalsy()
    })

    it('adds a warning icon', () => {
      const notification = doShallow({ variant: 'warning' })

      expect(notification).toContainReact(<NotificationWarning copy="en" />)
    })
  })

  it('passes additional HTML attributes to the containing element', () => {
    const notification = doShallow({ id: 'hello', title: 'my title' })

    expect(notification).toHaveProp('id', 'hello')
    expect(notification).toHaveProp('title', 'my title')
  })

  it('does not allow custom CSS', () => {
    const notification = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(notification).not.toHaveProp('className', 'my-custom-class')
    expect(notification).not.toHaveProp('style')
  })

  describe('dismissible', () => {
    it('adds a dismiss button', () => {
      const notification = doMount({ dismissible: true })
      expect(notification.find(Close)).toExist()
    })

    it('unmounts on dismiss', done => {
      const notification = doMount({
        variant: 'error',
        dismissible: true,
        dismissibleA11yLabel: 'Close',
      })
      const reveal = notification.find(Reveal)
      expect(reveal).toHaveProp('in', true)
      expect(reveal).toHaveProp('unmountOnExit', true)
      notification.find(Close).simulate('click')
      setTimeout(() => {
        expect(notification.find(Reveal)).toHaveProp('in', false)
        done()
      }, 1000)
    })

    describe('onDismiss', () => {
      it('calls the provided callback when dismissible', () => {
        const onDismiss = jest.fn()
        const notification = doMount({
          variant: 'error',
          dismissible: true,
          dismissibleA11yLabel: 'Close',
          onDismiss,
        })
        notification.find(Close).simulate('click')
        expect(onDismiss).toHaveBeenCalled()
      })
      it('warns when the dismissible prop is false', () => {
        const onDismiss = jest.fn()
        doShallow({
          variant: 'error',
          dismissible: false,
          dismissibleA11yLabel: 'Close',
          onDismiss,
        })
        expect(warn).toHaveBeenCalled()
      })
    })
  })
})
