import React from 'react'
import { shallow, mount } from 'enzyme'

import InteractiveIcon, { StyledInteractiveIconButton } from '../InteractiveButton'

describe('InteractiveIcon', () => {
  const doShallow = (props = {}) =>
    shallow(
      <InteractiveIcon a11yText="This is an interactive icon" {...props}>
        <svg />
      </InteractiveIcon>
    )

  it('renders', () => {
    const interactiveIcon = mount(
      <InteractiveIcon a11yText="This is an interactive icon">
        <svg />
      </InteractiveIcon>
    )

    expect(interactiveIcon).toMatchSnapshot()
  })

  it('does other things', () => {
    const interactiveIcon = doShallow()

    expect(interactiveIcon).toExist()
  })

  it('passes additional attributes to the element', () => {
    const interactiveIcon = doShallow({ id: 'the-id', 'data-some-attr': 'some value' }).find(
      StyledInteractiveIconButton
    )

    expect(interactiveIcon).toHaveProp('id', 'the-id')
    expect(interactiveIcon).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const interactiveIcon = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(interactiveIcon).not.toHaveProp('className', 'my-custom-class')
    expect(interactiveIcon).not.toHaveProp('style')
  })

  it('forwards refs', () => {
    const ref = React.createRef()
    const interactiveIcon = mount(
      <>
        <InteractiveIcon ref={ref} a11yText="This is an interactive icon">
          <svg />
        </InteractiveIcon>
      </>
    )
    const target = interactiveIcon
      .find('StyledComponent')
      .at(0)
      .childAt(0)
      .instance()

    expect(target).toEqual(ref.current)
  })
})
