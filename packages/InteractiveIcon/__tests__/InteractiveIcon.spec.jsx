import React from 'react'
import { shallow, mount } from 'enzyme'

import InteractiveIcon, { StyledInteractiveIconButton } from '../InteractiveButton'
import Edit from '../svgs/Dependent/Edit'
import Link from '../../Link'
import Paragraph from '../../Paragraph'

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

  it('renders Dependent icon with Link', () => {
    const dependentIcon = mount(
      <Link href="#" icon={Edit} iconPosition="left">
        Edit
      </Link>
    )

    expect(dependentIcon).toMatchSnapshot()
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

  it('inherits invert prop from Link', () => {
    const invertedLink = mount(
      <Link href="#" icon={Edit} iconPosition="left" invert>
        Edit
      </Link>
    )

    expect(invertedLink.find(Edit)).toHaveProp('invert', true)
  })

  it('inherits size prop from Paragraph', () => {
    const largeParagraph = mount(
      <Paragraph size="large">
        <Link href="#" icon={Edit} iconPosition="left" invert>
          Edit
        </Link>
      </Paragraph>
    )

    const mediumParagraph = mount(
      <Paragraph size="medium">
        <Link href="#" icon={Edit} iconPosition="left" invert>
          Edit
        </Link>
      </Paragraph>
    )

    const smallParagraph = mount(
      <Paragraph size="small">
        <Link href="#" icon={Edit} iconPosition="left" invert>
          Edit
        </Link>
      </Paragraph>
    )

    expect(largeParagraph.find('[data-testid="dependentSvg"]').find('StyledComponent')).toHaveProp(
      'paragraphSize',
      'large'
    )
    expect(mediumParagraph.find('[data-testid="dependentSvg"]').find('StyledComponent')).toHaveProp(
      'paragraphSize',
      'medium'
    )
    expect(smallParagraph.find('[data-testid="dependentSvg"]').find('StyledComponent')).toHaveProp(
      'paragraphSize',
      'small'
    )
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
