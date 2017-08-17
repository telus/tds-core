import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Icon from '../../Icon/Icon'

import Notification from '../Notification'

describe('<Notification />', () => {
  const doShallow = ({ ...overrides }) => (
    shallow(<Notification {...overrides}>Some content</Notification>)
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

  it('adds an icon only to the error and success variants', () => {
    let notification = doShallow({ variant: 'error' })
    expect(notification.find('NotificationIcon').dive()).toContainReact(<Icon glyph="exclamation-point-circle" aria-hidden="true" />)

    notification = doShallow({ variant: 'success' })
    expect(notification.find('NotificationIcon').dive()).toContainReact(<Icon glyph="checkmark" aria-hidden="true" />)

    notification = doShallow({ variant: 'branded' })
    expect(notification.find('NotificationIcon').dive()).toHaveText('')
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
