import React from 'react'
import { shallow } from 'enzyme'
import { imageSource } from '../../../__mocks__/fileMock'

import Image from '../Image'

describe('Image', () => {
  const defaultProps = {
    src: imageSource,
    alt: '',
  }

  const dummyClass = 'dummy-class'
  const doShallow = (newProps = {}) => shallow(<Image {...defaultProps} {...newProps} />)

  it('renders', () => {
    const image = doShallow({})

    expect(image).toMatchSnapshot()
  })

  it('returns the image rounded', () => {
    const image = doShallow({ rounded: true })
    expect(image).toHaveClassName('.rounded')
  })

  it('returns the circular image', () => {
    const image = doShallow({ circular: true })
    expect(image).toHaveClassName('circular')
  })

  it('should set width and height', () => {
    const image = doShallow({ width: 300, height: 300 })
    expect(image).toHaveProp('width', 300)
    expect(image).toHaveProp('height', 300)
  })

  it('should warn if rounded and circular are passed at once and return circular', () => {
    global.console.warn = jest.fn()
    const spy = jest.spyOn(global.console, 'warn')
    const image = doShallow({ circular: true, rounded: true })

    expect(spy).toHaveBeenCalled()
    expect(image).toHaveClassName('circular')
    expect(image).not.toHaveClassName('rounded')
  })

  it('should not be able to pass custom className', () => {
    const image = doShallow({ className: dummyClass })
    expect(image).not.toHaveClassName(dummyClass)
  })

  it('should be able to pass custom class through `dangerouslyAddClassName', () => {
    const image = doShallow({ dangerouslyAddClassName: dummyClass })
    expect(image).toHaveClassName(dummyClass)
  })

  it('must have a required src prop and load it appropriately when passed`', () => {
    global.console.error = jest.fn()
    let image = doShallow()
    expect(image).toHaveProp('src', imageSource)

    const spy = jest.spyOn(global.console, 'error')
    image = doShallow({ src: undefined })

    expect(spy).toHaveBeenCalled()
  })

  it('must have a required alt prop', () => {
    global.console.error = jest.fn()
    const spy = jest.spyOn(global.console, 'error')

    let image = doShallow({ alt: undefined })
    expect(spy).toHaveBeenCalled()

    const text = 'just a dummy text'
    image = doShallow({ alt: text })

    expect(image).toHaveProp('alt', text)
  })

  it('must render fluidly, it must be boolean', () => {
    global.console.error = jest.fn()

    let image = doShallow({ fluid: true })
    expect(image).toHaveClassName('fluid')

    const spy = jest.spyOn(global.console, 'error')
    image = doShallow({ fluid: 1234 })
    expect(spy).toHaveBeenCalled()
  })
})
