import React from 'react'
import { shallow, render } from 'enzyme'

import DecorativeIcon from '@tds/core-decorative-icon'
import Paragraph from '@tds/core-paragraph'

import Notification from '../Notification'
import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'

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
    expect(
      notification
        .dive()
        .dive()
        .dive()
    ).toHaveClassName('instructional')

    notification = doShallow({ variant: 'success' })
    expect(
      notification
        .dive()
        .dive()
        .dive()
    ).toHaveClassName('success')
  })

  it('does not have an icon by default', () => {
    let notification = doShallow()
    expect(notification.find(DecorativeIcon)).not.toExist()

    notification = doShallow({ variant: 'branded' })
    expect(notification.find(DecorativeIcon)).not.toExist()
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
    it('bolds and colors the content', () => {
      const notification = doShallow({ variant: 'error' }, 'An error message')

      expect(notification).toContainReact(
        <ColoredTextProvider colorClassName="errorText">
          <Paragraph bold>An error message</Paragraph>
        </ColoredTextProvider>
      )
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
