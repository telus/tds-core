/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { componentWithName } from '../prop-types'

const FunctionalComponent = () => {}
class ClassComponent extends React.Component {}

describe('componentWithName', () => {
  it('returns a function', () => {
    expect(typeof componentWithName('label')).toEqual('function')
  })

  it('throws an error when not given a string', () => {
    expect(() => componentWithName()).toThrowError()
    expect(() => componentWithName({})).toThrowError()
    expect(() => componentWithName([])).toThrowError()
    expect(() => componentWithName(123)).toThrowError()
    expect(() => componentWithName(true)).toThrowError()
    expect(() => componentWithName(false)).toThrowError()
    expect(() => componentWithName(undefined)).toThrowError()
    expect(() => componentWithName(null)).toThrowError()
  })

  describe('single child', () => {
    it('passes validation with a FunctionalComponent', () => {
      const validator = componentWithName('FunctionalComponent')
      const status = validator(
        { children: <FunctionalComponent>Some content</FunctionalComponent> },
        'children',
        'FunctionalComponent'
      )
      expect(status).toBeUndefined()
    })

    it('passes validation with a ClassComponent', () => {
      const validator = componentWithName('ClassComponent')
      const status = validator(
        { children: <ClassComponent>Some content</ClassComponent> },
        'children',
        'ClassComponent'
      )
      expect(status).toBeUndefined()
    })

    it('passes when a single required element is supplied and matching', () => {
      const validator = componentWithName('FunctionalComponent').isRequired
      const status = validator(
        { children: <FunctionalComponent /> },
        'children',
        'FunctionalComponent'
      )
      expect(status).toBeUndefined()
    })

    it('fails validation with a FunctionalComponent', () => {
      const validator = componentWithName('FunctionalComponent')
      const status = validator({ children: 'Button' }, 'children', 'FunctionalComponent')
      expect(status).toBeInstanceOf(Error)
    })

    it('fails validation with a ClassComponent', () => {
      const validator = componentWithName('ClassComponent')
      const status = validator({ children: 'Button' }, 'children', 'ClassComponent')
      expect(status).toBeInstanceOf(Error)
    })

    it('fails when a single required element is not supplied', () => {
      const validator = componentWithName('FunctionalComponent').isRequired
      const status = validator({}, 'children', 'FunctionalComponent')
      expect(status).toBeInstanceOf(Error)
    })

    it('fails when a single required element is supplied but not matching', () => {
      const validator = componentWithName('FunctionalComponent').isRequired
      const status = validator({ children: 'Button' }, 'children', 'FunctionalComponent')
      expect(status).toBeInstanceOf(Error)
    })
  })

  describe('multiple children', () => {
    it('passes validation with a FunctionalComponent', () => {
      const validator = componentWithName('FunctionalComponent')
      const status = validator(
        {
          children: [
            <FunctionalComponent key={1}>One</FunctionalComponent>,
            <FunctionalComponent key={2}>Two</FunctionalComponent>,
          ],
        },
        'children',
        'FunctionalComponent'
      )
      expect(status).toBeUndefined()
    })

    it('passes validation with a ClassComponent', () => {
      const validator = componentWithName('ClassComponent')
      const status = validator(
        {
          children: [
            <ClassComponent key={1}>One</ClassComponent>,
            <ClassComponent key={2}>Two</ClassComponent>,
          ],
        },
        'children',
        'ClassComponent'
      )
      expect(status).toBeUndefined()
    })

    it('passes when all supplied elements are matching and required', () => {
      const validator = componentWithName('FunctionalComponent').isRequired
      const status = validator(
        {
          children: [<FunctionalComponent key={1} />, <FunctionalComponent key={2} />],
        },
        'children',
        'FunctionalComponent'
      )
      expect(status).toBeUndefined()
    })

    it('fails validation with a FunctionalComponent', () => {
      const validator = componentWithName('FunctionalComponent')
      const status = validator(
        {
          children: [
            <FunctionalComponent key={1}>One</FunctionalComponent>,
            <FunctionalComponent key={2}>Two</FunctionalComponent>,
            'String',
          ],
        },
        'children',
        'FunctionalComponent'
      )
      expect(status).toBeInstanceOf(Error)
    })

    it('fails validation with a ClassComponent', () => {
      const validator = componentWithName('ClassComponent')
      const status = validator(
        {
          children: [
            <ClassComponent key={1}>One</ClassComponent>,
            <ClassComponent key={2}>Two</ClassComponent>,
            'String',
          ],
        },
        'children',
        'ClassComponent'
      )
      expect(status).toBeInstanceOf(Error)
    })

    it('fails when at least one supplied array elements are not matching when required', () => {
      const validator = componentWithName('FunctionalComponent').isRequired
      const status = validator(
        {
          children: [
            <FunctionalComponent key={1}>One</FunctionalComponent>,
            <FunctionalComponent key={2}>Two</FunctionalComponent>,
            'String',
          ],
        },
        'children',
        'FunctionalComponent'
      )
      expect(status).toBeInstanceOf(Error)
    })
  })
})
