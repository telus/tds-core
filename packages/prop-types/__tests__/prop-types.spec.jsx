/* eslint-disable import/prefer-default-export, react/prefer-stateless-function */

import React from 'react'
import { componentWithName } from '../prop-types'

const FunctionalComponent = () => {}
class ClassComponent extends React.Component {}

describe('prop-types', () => {
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
          { children: <FunctionalComponent>Foo</FunctionalComponent> },
          'children',
          'FunctionalComponent'
        )
        expect(status).toBeUndefined()
      })

      it('passes validation with a ClassComponent', () => {
        const validator = componentWithName('ClassComponent')
        const status = validator(
          { children: <ClassComponent>Foo</ClassComponent> },
          'children',
          'ClassComponent'
        )
        expect(status).toBeUndefined()
      })

      it('fails validation with a FunctionalComponent', () => {
        const validator = componentWithName('FunctionalComponent')
        const status = validator({ children: 'foobar' }, 'children', 'FunctionalComponent')
        expect(status).toBeInstanceOf(Error)
      })

      it('fails validation with a ClassComponent', () => {
        const validator = componentWithName('ClassComponent')
        const status = validator({ children: 'foobar' }, 'children', 'ClassComponent')
        expect(status).toBeInstanceOf(Error)
      })
    })

    describe('multiple children', () => {
      it('passes validation with a FunctionalComponent', () => {
        const validator = componentWithName('FunctionalComponent')
        const status = validator(
          {
            children: [
              <FunctionalComponent key="one">One</FunctionalComponent>,
              <FunctionalComponent key="two">Two</FunctionalComponent>,
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
              <ClassComponent key="one">One</ClassComponent>,
              <ClassComponent key="two">Two</ClassComponent>,
            ],
          },
          'children',
          'ClassComponent'
        )
        expect(status).toBeUndefined()
      })

      it('fails validation with a FunctionalComponent', () => {
        const validator = componentWithName('FunctionalComponent')
        const status = validator(
          {
            children: [
              <FunctionalComponent key="one">One</FunctionalComponent>,
              <FunctionalComponent key="two">Two</FunctionalComponent>,
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
              <ClassComponent key="one">One</ClassComponent>,
              <ClassComponent key="two">Two</ClassComponent>,
              'String',
            ],
          },
          'children',
          'ClassComponent'
        )
        expect(status).toBeInstanceOf(Error)
      })
    })
  })
})
