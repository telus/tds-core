import React from 'react'
import { mount, render } from 'enzyme'

import A11yContent from '@tds/core-a11y-content'

import { warn } from '../../../shared/utils/warn'

import ButtonLink from '../ButtonLink'

jest.mock('../../../shared/utils/warn')

describe('ButtonLink', () => {
  const doMount = (overrides = {}) => {
    const link = mount(<ButtonLink {...overrides}>Go home</ButtonLink>)

    return link.find('a')
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = render(<ButtonLink>Go home</ButtonLink>)

    expect(link).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doMount({ href: 'http://telus.com' })

    expect(link).toHaveTagName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const link = mount(<ButtonLink reactRouterLinkComponent={MyLink}>The link test</ButtonLink>)

    expect(link.find(MyLink)).toExist()
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

  it('properly handles A11yContent in the default right side position', () => {
    const link = doMount({ a11yContent: 'testing' })
    /* eslint-disable react/jsx-key */
    const contentOrder = [
      <div data-testid="button" className="row centered">
        <span>Go home</span>
        <A11yContent>testing</A11yContent>
      </div>,
    ]
    /* eslint-enable react/jsx-key */
    expect(
      link.find('div[data-testid="button"]').containsAllMatchingElements(contentOrder)
    ).toEqual(true)
  })

  it('properly handles A11yContent in the left side position', () => {
    const link = doMount({ a11yContent: 'testing', a11yContentPosition: 'left' })
    /* eslint-disable react/jsx-key */
    const contentOrder = [
      <div data-testid="button" className="row centered">
        <A11yContent>testing</A11yContent>
        <span>Go home</span>
      </div>,
    ]
    /* eslint-enable react/jsx-key */
    expect(
      link.find('div[data-testid="button"]').containsAllMatchingElements(contentOrder)
    ).toEqual(true)
  })

  it('does not allow custom CSS', () => {
    const link = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })
})
