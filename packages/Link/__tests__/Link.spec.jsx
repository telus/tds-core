import React from 'react'
import { mount, shallow } from 'enzyme'

import { warn } from '../../../shared/utils/warn'

import Link from '../Link'
import Edit from '../../InteractiveIcon/svgs/Dependent/Edit'

jest.mock('../../../shared/utils/warn')

describe('Link', () => {
  const doShallow = (overrides = {}) => shallow(<Link {...overrides}>Go home</Link>)
  const doMount = (overrides = {}) => {
    const link = mount(<Link {...overrides}>Some content</Link>)
    return {
      link: link.find(overrides.reactRouterLinkComponent || 'a'),
      wrapper: link,
    }
  }
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = doShallow()

    expect(link).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const { link } = doMount({ href: 'http://telus.com' })

    expect(link).toHaveDisplayName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const { link } = doMount({ reactRouterLinkComponent: MyLink })

    expect(link).toMatchSelector('MyLink')
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    let link = doMount({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    link = doShallow({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('can be displayed with the default styles', () => {
    const link = doMount()
    expect(link).toMatchSnapshot()
  })

  it('can be inverted', () => {
    const link = doMount({ invert: true })
    expect(link).toMatchSnapshot()
  })

  it('passes additional attributes to the link element', () => {
    const link = doShallow({ id: 'the-link', role: 'button' })

    expect(link).toHaveProp('id', 'the-link')
    expect(link).toHaveProp('role', 'button')
  })

  it('displays a Dependent Icon', () => {
    const link = doMount({ id: 'the-link', role: 'button', icon: Edit }).link
    expect(link.find('[data-testid="dependentSvg"]')).toExist()
  })

  it('displays a Dependent Icon and sets alignment', () => {
    const linkLeft = doMount({ id: 'the-link', role: 'button', icon: Edit, iconPosition: 'right' })
      .link
    const linkRight = doMount({ id: 'the-link', role: 'button', icon: Edit, iconPosition: 'right' })
      .link

    expect(linkLeft).toMatchSnapshot()
    expect(linkRight).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const link = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link.link.hasClass('my-custom-class')).toEqual(false)
    expect(link.link).not.toHaveProp('style')
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    // Link component needs to be wrapped in order for the ref instance to work with Enzyme's mount
    // https://github.com/airbnb/enzyme/issues/1852#issuecomment-433145879
    const link = mount(
      <>
        <Link ref={ref}>Link</Link>
      </>
    )

    const target = link
      .find('StyledComponent')
      .childAt(0)
      .instance()

    expect(target).toEqual(ref.current)
  })
})
