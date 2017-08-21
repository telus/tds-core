import React from 'react'
import { shallow } from 'enzyme'
import TextTitleBodyButton from '../TextTitleBodyButton'

describe('<TextTitleBodyButton />', () => {
  const props = {
    className: 'class',
    title: 'title',
    description: 'description',
    ctaLink: {
      target: 'target',
      href: 'href',
      text: 'text'
    }
  }

  const textTitleBodyButton = shallow(<TextTitleBodyButton {...props} />)

  it('sets the classes from the className prop', () => {
    expect(textTitleBodyButton.hasClass('class')).toBeTruthy()
  })

  it('renders a header with legal content from the overviewTitle props', () => {
    expect(textTitleBodyButton.find('h4')).toBeDefined()
    expect(textTitleBodyButton.find('h4 WithLegal').props().content).toBe('title')
  })

  it('renders a paragraph with legal content from the overviewDescription props', () => {
    expect(textTitleBodyButton.find('p')).toBeDefined()
    expect(textTitleBodyButton.find('p WithLegal').props().content).toBe('description')
  })

  it('renders a link with content from the header props', () => {
    expect(textTitleBodyButton.find('a')).toBeDefined()
    expect(textTitleBodyButton.find('a').props().href).toBe('href')
    expect(textTitleBodyButton.find('a').props().target).toBe('target')
  })
})
