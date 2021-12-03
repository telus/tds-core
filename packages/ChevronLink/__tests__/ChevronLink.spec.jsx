import React from 'react'
import { shallow, render, mount } from 'enzyme'

import A11yContent from '../../A11yContent'

import { warn } from '../../../shared/utils/warn'

import ChevronLink from '../ChevronLink'
import { ChevronLeft, ChevronRight } from '../../InteractiveIcon/index.cjs'

jest.mock('../../../shared/utils/warn')

describe('ChevronLink', () => {
  const doShallow = (overrides = {}) => shallow(<ChevronLink {...overrides}>Go home</ChevronLink>)
  const doRender = (overrides = {}) => render(<ChevronLink {...overrides}>Go home</ChevronLink>)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = doRender({ href: 'test.com' })

    expect(link).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallow({ href: 'http://telus.com' })

    expect(link).toHaveProp('as', 'a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const link = doShallow({ reactRouterLinkComponent: MyLink })

    expect(link).toHaveProp('as', MyLink)
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    doShallow({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    jest.clearAllMocks()

    const link = doShallow({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('has a chevron icon', () => {
    let link = doShallow({ href: 'https://telus.com' })
    expect(link).toContainReact(<ChevronRight size={16} variant="default" />)

    link = doShallow({ href: 'https://telus.com', direction: 'left' })
    expect(link).toContainReact(<ChevronLeft size={16} variant="default" />)
  })

  it('can have specific variants', () => {
    let link = doRender({ href: 'https://telus.com' })
    expect(link).toMatchSnapshot()

    link = doRender({ href: 'https://telus.com', variant: 'secondary' })
    expect(link).toMatchSnapshot()

    link = doRender({ href: 'https://telus.com', variant: 'primary' })
    expect(link).toMatchSnapshot()

    link = doRender({ href: 'https://telus.com', variant: 'inverted' })
    expect(link).toMatchSnapshot()
  })

  it('passes additional attributes to the link element', () => {
    const link = doShallow({ id: 'the-link', role: 'button' })

    expect(link).toHaveProp('id', 'the-link')
    expect(link).toHaveProp('role', 'button')
  })

  describe('A11yContent', () => {
    it('connects to ButtonLink', () => {
      const link = shallow(
        <ChevronLink>
          Go home
          <A11yContent>testing</A11yContent>
        </ChevronLink>
      )

      expect(link).toContainReact(<A11yContent>testing</A11yContent>)
    })
  })

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    // Link component needs to be wrapped in order for the ref instance to work with Enzyme's mount
    // https://github.com/airbnb/enzyme/issues/1852#issuecomment-433145879
    const link = mount(
      <>
        <ChevronLink ref={ref} href="https://telus.com">
          Go home
        </ChevronLink>
      </>
    )

    const target = link
      .find('StyledComponent')
      .at(0)
      .childAt(0)
      .instance()

    expect(target).toEqual(ref.current)
  })
})
