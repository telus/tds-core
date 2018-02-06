import React from 'react'
import { mount, render } from 'enzyme'

import { warn } from '../../../../utils/warn'

import ButtonLink from '../ButtonLink'
import Responsive from '../../../Responsive/Responsive'

import mockMatchMedia from '../../../../__mocks__/matchMedia'

jest.mock('../../../../utils/warn')

describe('ButtonLink', () => {
  const doMount = (overrides = {}) => {
    const link = mount(<ButtonLink {...overrides}>Go home</ButtonLink>)

    return link.find('a')
  }

  const doShallow = (overrides = {}) => {
    const button = mount(<ButtonLink {...overrides}>Submit</ButtonLink>)

    return button
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = render(<ButtonLink>Go home</ButtonLink>)

    expect(link).toMatchSnapshot()
  })

  it('defaults to mobile', () => {
    const button = doShallow()

    expect(button.find(Responsive)).toHaveProp('defaultMatches', false)
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doMount({ href: 'http://telus.com' })

    expect(link).toHaveTagName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const link = mount(<ButtonLink reactRouterLinkComponent={MyLink}>The link test</ButtonLink>)

    expect(link.find(MyLink)).toBePresent()
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    doMount({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    jest.clearAllMocks()

    const link = doMount({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  describe('responsiveness', () => {
    it('is full width below medium viewports', () => {
      mockMatchMedia(767)

      const link = doMount()

      expect(link).toHaveClassName('fullWidth')
    })

    it('is inline at medium viewports and above', () => {
      mockMatchMedia(768)

      const link = doMount()

      expect(link).toHaveClassName('inline')
    })
  })

  it('can be presented as one of the allowed variants', () => {
    let link = doMount()
    expect(link).toHaveClassName('primary')

    link = doMount({ variant: 'secondary' })
    expect(link).toHaveClassName('secondary')
  })

  it('passes additional attributes to link element', () => {
    const link = doMount({ id: 'the-link', tabIndex: 1 })

    expect(link).toHaveProp('id', 'the-link')
    expect(link).toHaveProp('tabIndex', 1)
  })

  it('does not allow custom CSS', () => {
    const link = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })
})
