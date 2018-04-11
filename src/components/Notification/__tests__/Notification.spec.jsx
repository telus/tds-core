import React from 'react'
import { shallow, render } from 'enzyme'

import DecorativeIcon from '../../../../packages/DecorativeIcon/DecorativeIcon'
import Paragraph from '../../Typography/Paragraph/Paragraph'

import Notification from '../Notification'

describe('<Notification />', () => {
  const defaultChildren = 'Some content'
  const doShallow = (props = {}, children = defaultChildren) =>
    shallow(<Notification {...props}>{children}</Notification>)
  const doRender = (props = {}, children = defaultChildren) =>
    render(<Notification {...props}>{children}</Notification>)

  it('renders', () => {
    const notification = doRender()

    expect(notification).toMatchSnapshot()
  })

  it('can have a variant', () => {
    let notification = doShallow({ variant: undefined })
    expect(notification.dive()).toHaveClassName('instructional')

    notification = doShallow({ variant: 'success' })
    expect(notification.dive()).toHaveClassName('success')
  })

  it('does not have an icon by default', () => {
    let notification = doShallow()
    expect(notification.find(DecorativeIcon)).toBeEmpty()

    notification = doShallow({ variant: 'branded' })
    expect(notification.find(DecorativeIcon)).toBeEmpty()
  })

  describe('successful variant', () => {
    it('bolds the content', () => {
      const notification = doShallow({ variant: 'success' }, 'A success message')

      expect(notification).toContainReact(<Paragraph bold>A success message</Paragraph>)
    })

    it('adds a checkmark icon', () => {
      const notification = doShallow({ variant: 'success' })

      expect(notification).toContainReact(<DecorativeIcon symbol="checkmark" variant="primary" />)
    })
  })

  describe('error variant', () => {
    it('bolds the content', () => {
      const notification = doShallow({ variant: 'error' }, 'An error message')

      expect(notification).toContainReact(<Paragraph bold>An error message</Paragraph>)
    })

    it('adds an exclamation point icon', () => {
      const notification = doShallow({ variant: 'error' })

      expect(notification).toContainReact(
        <DecorativeIcon symbol="exclamationPointCircle" variant="error" />
      )
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
})
