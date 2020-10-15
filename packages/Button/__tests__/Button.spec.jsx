import React from 'react'
import { render, shallow } from 'enzyme'

import A11yContent from '../../A11yContent'

import { warn } from '../../../shared/utils/warn'

import Button from '../Button'

jest.mock('../../../shared/utils/warn')

describe('Button', () => {
  const doShallow = (overrides = {}) => {
    const button = shallow(<Button {...overrides}>Submit</Button>)

    return button
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const button = render(<Button>Submit</Button>)

    expect(button).toMatchSnapshot()
  })

  it('has one of the HTML button types', () => {
    let button = doShallow()
    expect(button).toHaveProp('type', 'button')

    button = doShallow({ type: 'reset' })
    expect(button).toHaveProp('type', 'reset')
  })

  it('can be presented as one of the allowed variants', () => {
    const button = render(<Button variant="secondary">Submit</Button>)

    expect(button).toMatchSnapshot()
  })

  it('can be presented as one of the new allowed variants', () => {
    const button = render(<Button variant="standard">Submit</Button>)

    expect(button).toMatchSnapshot()
  })

  it('can not be disabled', () => {
    const button = doShallow({ disabled: true })

    expect(button).not.toHaveProp('disabled')
    expect(warn).toHaveBeenCalled()
  })

  it('passes additional attributes to button element', () => {
    const button = doShallow({ id: 'the-button', tabIndex: 1 })

    expect(button).toHaveProp('id', 'the-button')
    expect(button).toHaveProp('tabIndex', 1)
  })

  describe('A11yContent', () => {
    it('connects to Button', () => {
      const button = shallow(
        <Button>
          Go home
          <A11yContent>testing</A11yContent>
        </Button>
      )

      expect(button).toContainReact(<A11yContent>testing</A11yContent>)
    })
  })

  it('does not allow custom CSS', () => {
    const button = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(button).not.toHaveProp('className', 'my-custom-class')
    expect(button).not.toHaveProp('style')
  })
})
