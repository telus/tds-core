import React from 'react'
import { shallow } from 'enzyme'
import { warn } from '../../../utils/warn'

import Image from '../Image'

jest.mock('../../../utils/warn')

describe('Image', () => {
  const defaultProps = {
    src: 'test-image.jpg',
    alt: '',
    width: 200,
    height: 200,
  }

  const doShallow = (newProps = {}) => shallow(<Image {...defaultProps} {...newProps} />)

  it('renders', () => {
    const image = doShallow({})

    expect(image).toMatchSnapshot()
  })

  it('rounds 4 corners', () => {
    const image = doShallow({ rounded: 'corners' })

    expect(image).toHaveClassName('rounded')
  })

  describe('circular masking', () => {
    it('applies 50% border radius', () => {
      const image = doShallow({ rounded: 'circle' })

      expect(image).toHaveClassName('circular')
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
