import React from 'react'
import { render, mount } from 'enzyme'

import A11yContent from '@tds/core-a11y-content'

import { warn } from '../../../shared/utils/warn'

import Button from '../Button'

jest.mock('../../../shared/utils/warn')

describe('Button', () => {
  const doMount = (overrides = {}) => {
    const button = mount(<Button {...overrides}>Submit</Button>)

    return button.find('button')
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const button = render(<Button>Submit</Button>)

    expect(button).toMatchSnapshot()
  })

  it('has one of the HTML button types', () => {
    let button = doMount()
    expect(button).toHaveProp('type', 'button')

    button = doMount({ type: 'reset' })
    expect(button).toHaveProp('type', 'reset')
  })

  it('can be presented as one of the allowed variants', () => {
    let button = doMount()
    expect(button).toHaveClassName('primary')

    button = doMount({ variant: 'secondary' })
    expect(button).toHaveClassName('secondary')
  })

  it('can not be disabled', () => {
    const button = doMount({ disabled: true })

    expect(button).not.toHaveProp('disabled')
    expect(warn).toHaveBeenCalled()
  })

  it('passes additional attributes to button element', () => {
    const button = doMount({ id: 'the-button', tabIndex: 1 })

    expect(button).toHaveProp('id', 'the-button')
    expect(button).toHaveProp('tabIndex', 1)
  })

  it('properly handles A11yContent in the default right side position', () => {
    const button = doMount({ a11yContent: 'testing' })
    /* eslint-disable react/jsx-key */
    const contentOrder = [
      <div data-testid="button" className="row centered">
        <span>Submit</span>
        <A11yContent>testing</A11yContent>
      </div>,
    ]
    /* eslint-enable react/jsx-key */
    expect(
      button.find('div[data-testid="button"]').containsAllMatchingElements(contentOrder)
    ).toEqual(true)
  })

  it('properly handles A11yContent in the left side position', () => {
    const button = doMount({ a11yContent: 'testing', a11yContentPosition: 'left' })
    /* eslint-disable react/jsx-key */
    const contentOrder = [
      <div data-testid="button" className="row centered">
        <A11yContent>testing</A11yContent>
        <span>Submit</span>
      </div>,
    ]
    /* eslint-enable react/jsx-key */

    expect(
      button.find('div[data-testid="button"]').containsAllMatchingElements(contentOrder)
    ).toEqual(true)
  })

  it('does not allow custom CSS', () => {
    const button = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(button).not.toHaveProp('className', 'my-custom-class')
    expect(button).not.toHaveProp('style')
  })
})
