/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types'
import secret from 'prop-types/lib/ReactPropTypesSecret'

import or from '../or'

const callValidator = (validator, props, propName, componentName) =>
  validator(props, propName, componentName, '', null, secret)

describe('or', () => {
  it('returns a function', () => {
    expect(typeof or([PropTypes.number, PropTypes.string])).toEqual('function')
  })

  it('throws an error if an array is not passed', () => {
    expect(() => or(PropTypes.string)).toThrowError()
    expect(() => or(123)).toThrowError()
    expect(() => or(null)).toThrowError()
    expect(() => or(undefined)).toThrowError()
    expect(() => or({})).toThrowError()
    expect(() => or(false)).toThrowError()
  })

  it('throws an error if an array with less than 2 items is passed', () => {
    expect(() => or([])).toThrowError()
    expect(() => or([PropTypes.number])).toThrowError()
  })

  it('passes when props match the or', () => {
    const validator = or([PropTypes.string, PropTypes.number])
    expect(
      callValidator(validator, { children: 'Purchase Now' }, 'children', 'FunctionalComponent')
    ).toBeNull()
    expect(callValidator(validator, { children: 99 }, 'children', 'FunctionalComponent')).toBeNull()
    expect(
      callValidator(
        validator,
        { children: ['Purchase Now', 99] },
        'children',
        'FunctionalComponent'
      )
    ).toBeNull()
  })

  it('fails when props do not match the or', () => {
    const validator = or([PropTypes.string, PropTypes.number])
    expect(
      callValidator(validator, { children: false }, 'children', 'FunctionalComponent')
    ).toBeInstanceOf(Error)
    expect(
      callValidator(validator, { children: [false, 'See more'] }, 'children', 'FunctionalComponent')
    ).toBeInstanceOf(Error)
  })
})
