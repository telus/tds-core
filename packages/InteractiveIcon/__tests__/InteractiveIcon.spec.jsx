import React from 'react'
import { shallow, mount } from 'enzyme'

import IconButton, { StyledIconButton } from '../IconButton'
import Add from '../svgs/Dependent/Add'
import Edit from '../svgs/Dependent/Edit'
import Link from '../../Link'
import Paragraph from '../../Paragraph'

describe('InteractiveIcon', () => {
  const doShallow = (props = {}) =>
    shallow(
      <IconButton icon={Add} a11yText="This is an interactive icon" {...props}>
        <svg />
      </IconButton>
    )

  it('renders', () => {
    const iconButton = mount(
      <IconButton icon={Add} a11yText="This is an interactive icon">
        <svg />
      </IconButton>
    )

    expect(iconButton).toMatchSnapshot()
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
    const iconButton = doShallow()

    expect(iconButton).toExist()
  })

  it('passes additional attributes to the element', () => {
    const iconButton = doShallow({ id: 'the-id', 'data-some-attr': 'some value' }).find(
      StyledIconButton
    )

    expect(iconButton).toHaveProp('id', 'the-id')
    expect(iconButton).toHaveProp('data-some-attr', 'some value')
  })

  it('inherits invert prop from Link', () => {
    const invertedLink = mount(
      <Link href="#" icon={Edit} iconPosition="left" invert>
        Edit
      </Link>
    )

    expect(invertedLink.find(Edit)).toHaveProp('color', 'white')
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
    const iconButton = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(iconButton).not.toHaveProp('className', 'my-custom-class')
    expect(iconButton).not.toHaveProp('style')
  })

  it('forwards refs', () => {
    const ref = React.createRef()
    const iconButton = mount(
      <>
        <IconButton icon={Add} ref={ref} a11yText="This is an iconButton">
          <svg />
        </IconButton>
      </>
    )
    const target = iconButton
      .find('StyledComponent')
      .at(0)
      .childAt(0)
      .instance()

    expect(target).toEqual(ref.current)
  })
})
