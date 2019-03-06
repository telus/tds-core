import React from 'react'
import { shallow, render } from 'enzyme'

import { warn } from '../../../shared/utils/warn'

import Image from '../Image'

jest.mock('../../../shared/utils/warn')

describe('Image', () => {
  const defaultProps = {
    src: 'test-image.jpg',
    alt: '',
    width: 200,
    height: 200,
  }

  const doShallow = (newProps = {}) => shallow(<Image {...defaultProps} {...newProps} />)
  const doRender = (newProps = {}) => render(<Image {...defaultProps} {...newProps} />)

  it('renders', () => {
    const image = doRender({})

    expect(image).toMatchSnapshot()
  })

  it('rounds 4 corners', () => {
    const image = doRender({ rounded: 'corners' })

    expect(image).toMatchSnapshot()
  })

  describe('circular masking', () => {
    it('applies 50% border radius', () => {
      const image = doRender({ rounded: 'circle' })

      expect(image).toMatchSnapshot()
    })

    it('shows a warning when the image is not a square', () => {
      doShallow({ rounded: 'circle', width: 50, height: 60 })

      expect(warn).toHaveBeenCalled()
    })
  })

  it('passed additional attributes to image element', () => {
    const image = doShallow({ id: 'special-button', tabindex: 1 })
    expect(image).toHaveProp('id', 'special-button')
    expect(image).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const image = doShallow({ className: 'my-custom-class', style: { color: 'purple' } })
    expect(image).not.toHaveProp('className', 'my-custom-class')
    expect(image).not.toHaveStyle('color', 'purple')
  })
})
