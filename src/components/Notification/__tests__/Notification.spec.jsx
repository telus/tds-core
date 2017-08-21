import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Icon from '../../../old-components/Icon/Icon'
import Paragraph from '../../Typography/Paragraph/Paragraph'

import Notification from '../Notification'
import ColoredTextProvider from '../../Typography/ColoredTextProvider/ColoredTextProvider'

describe('<Notification />', () => {
  const defaultChildren = 'Some content'
  const doShallow = (props = {}, children = defaultChildren) => (
    shallow(<Notification {...props}>{children}</Notification>)
  )

  it('renders', () => {
    const notification = doShallow()

    expect(toJson(notification)).toMatchSnapshot()
  })

  it('can have a variant', () => {
    let notification = doShallow({ variant: undefined })
    expect(notification).toHaveClassName('instructional')

    notification = doShallow({ variant: 'success' })
    expect(notification).toHaveClassName('success')
  })

  it('does not have an icon by default', () => {
    let notification = doShallow()
    expect(notification.find(Icon)).toBeEmpty()

    notification = doShallow({ variant: 'branded' })
    expect(notification.find(Icon)).toBeEmpty()
  })

  describe('successful variant', () => {
    it('bolds the content', () => {
      const notification = doShallow({ variant: 'success' }, 'A success message')

      expect(notification).toContainReact(<Paragraph bold>A success message</Paragraph>)
    })

    it('adds a checkmark icon', () => {
      const notification = doShallow({ variant: 'success' })

      expect(notification).toContainReact(<Icon glyph="checkmark" aria-hidden="true" />)
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
        <Icon glyph="exclamation-point-circle" aria-hidden="true" />
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
