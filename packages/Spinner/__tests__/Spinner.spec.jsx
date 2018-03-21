import React from 'react'
import { shallow, mount } from 'enzyme'

import Text from '@tds/core-text'

import Spinner from '../Spinner'

describe('Spinner', () => {
  const defaultProps = {
    spinning: true,
  }
  const doShallow = (overrides = {}) => shallow(<Spinner {...defaultProps} {...overrides} />)

  it('is only visible while spinning', () => {
    let spinner = doShallow({ spinning: false })
    expect(spinner).toBeEmptyRender()

    spinner = doShallow({ spinning: true })
    expect(spinner).not.toBeEmptyRender()
  })

  it('can have a tip', () => {
    const spinner = doShallow({ tip: 'A tip' })

    expect(spinner).toContainReact(<Text size="small">A tip</Text>)
  })

  describe.skip('in container mode', () => {
    it('spinner is visible when spinning is true', () => {
      const wrapper = shallow(<Spinner tip="Loading..." spinning />)
      expect(
        wrapper
          .find('.spinner')
          .first()
          .hasClass('spinner--spinning')
      ).toBeTruthy()
      expect(
        wrapper
          .find('.spinner__tip')
          .first()
          .text()
      ).toBe('Loading...')
      wrapper.setProps({
        spinning: false,
      })
      expect(
        wrapper
          .find('.spinner')
          .first()
          .hasClass('spinner--spinning')
      ).toBeFalsy()
    })
  })

  describe.skip('embedded mode', () => {
    it('spinner is visible when spinning is true', () => {
      const wrapper = mount(
        <Spinner tip="Loading..." spinning wrapperClassName="test">
          <p>TEST</p>
        </Spinner>
      )
      expect(
        wrapper
          .find('.spinner')
          .first()
          .hasClass('spinner--spinning')
      ).toBeTruthy()
      expect(
        wrapper
          .find('.spinner__tip')
          .first()
          .text()
      ).toBe('Loading...')
      expect(
        wrapper
          .find('.spinner-container')
          .first()
          .hasClass('spinner-container--loading')
      ).toBeTruthy()
      wrapper.setProps({
        spinning: false,
      })
      expect(
        wrapper
          .find('.spinner-container > p')
          .first()
          .text()
      ).toBe('TEST')
    })
  })
})
