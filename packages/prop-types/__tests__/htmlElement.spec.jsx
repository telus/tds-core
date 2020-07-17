import React from 'react'
import { htmlElement } from '../prop-types'

describe('htmlElement', () => {
  it('returns a function', () => {
    expect(typeof htmlElement('span')).toEqual('function')
  })

  it('throws an error when not given a string', () => {
    expect(() => htmlElement()).toThrowError()
    expect(() => htmlElement({})).toThrowError()
    expect(() => htmlElement([])).toThrowError()
    expect(() => htmlElement(123)).toThrowError()
    expect(() => htmlElement(true)).toThrowError()
    expect(() => htmlElement(false)).toThrowError()
    expect(() => htmlElement(undefined)).toThrowError()
    expect(() => htmlElement(null)).toThrowError()
  })

  it('returns undefined when given nothing', () => {
    const validator = htmlElement('span')
    const status = validator({ children: undefined }, 'children', 'span')
    expect(status).toBeUndefined()
  })

  it('throws error when given nothing but is required', () => {
    const validator = htmlElement('span').isRequired
    const status = validator({ children: undefined }, 'children', 'span')
    expect(status).toBeInstanceOf(Error)
  })

  describe('single child', () => {
    it('passes validation with a valid html tag', () => {
      const validator = htmlElement('span')
      const status = validator({ children: <span>Some content</span> }, 'children', 'span')
      expect(status).toBeUndefined()
    })
  })

  describe('multiple children', () => {
    it('passes validation with a valid html tag', () => {
      const validator = htmlElement('span')
      const status = validator(
        {
          children: [<span key={1}>One</span>, <span key={2}>Two</span>],
        },
        'children',
        'span'
      )
      expect(status).toBeUndefined()
    })
  })
})
