import React from 'react'
import { shallow } from 'enzyme'

import Image from '../Image'

describe('Image', () => {
  const defaultProps = {
    src: 'test-image.jpg',
    alt: '',
    width: 200,
    height: 200,
  }

  const dummyClass = 'dummy-class'
  const doShallow = (newProps = {}) => shallow(<Image {...defaultProps} {...newProps} />)

  it.skip('renders', () => {
    const image = doShallow({})

    expect(image).toMatchSnapshot()
  })

  it('returns the image rounded', () => {
    const image = doShallow({ rounded: 'corners' })
    expect(image).toHaveClassName('corners')
  })

  it.skip('returns the circular image', () => {
    const image = doShallow({ rounded: 'circle' })
    expect(image).toHaveClassName('circle')
  })

  it('should set width and height', () => {
    const image = doShallow({ width: 300, height: 300 })
    expect(image).toHaveProp('width', 300)
    expect(image).toHaveProp('height', 300)
  })

  it('should not be able to pass custom className', () => {
    const image = doShallow({ className: dummyClass })
    expect(image).not.toHaveClassName(dummyClass)
  })

  it('must render fluidly, it must be boolean', () => {
    const image = doShallow({ fluid: true })
    expect(image).toHaveClassName('fluid')
  })

  it('passed additional attributes to image element', () => {
    const image = doShallow({ id: 'special-button', tabindex: 1 })
    expect(image).toHaveProp('id', 'special-button')
    expect(image).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const image = doShallow({ className: 'my-custom-class', style: { color: 'purple' } })
    expect(image).not.toHaveProp('className', 'my-custom-class')
    expect(image).not.toHaveProp('style')
  })
})
