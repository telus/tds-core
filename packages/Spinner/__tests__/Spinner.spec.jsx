import React from 'react'
import { shallow } from 'enzyme'

import Text from '@tds/core-text'

import Spinner from '../Spinner'

describe('Spinner', () => {
  const defaultProps = {
    spinning: true,
  }
  const doShallow = (overrides = {}, children) => {
    const spinner = shallow(
      <Spinner {...defaultProps} {...overrides}>
        {children}
      </Spinner>
    )

    return {
      spinner,
      findOverlay: () => spinner.find('[data-testid="overlay"]'),
      findSpinnerContainer: () => spinner.find('[data-testid="spinner"]'),
    }
  }

  it('renders', () => {
    const { spinner } = doShallow()

    expect(spinner).toMatchSnapshot()
  })

  it('renders with children', () => {
    const { spinner } = doShallow({}, <span>Overlay me with the spinner</span>)

    expect(spinner).toMatchSnapshot()
  })

  it('is only visible while spinning', () => {
    let { spinner } = doShallow({ spinning: false })
    expect(spinner).toBeEmptyRender()

    spinner = doShallow({ spinning: true }).spinner
    expect(spinner).not.toBeEmptyRender()
  })

  it('can have a tip', () => {
    const { spinner } = doShallow({ tip: 'A tip' })

    expect(spinner).toContainReact(<Text size="small">A tip</Text>)
  })

  describe('overlaying content', () => {
    it('places the spinner on top of the content while spinning', () => {
      const { findOverlay, findSpinnerContainer } = doShallow(
        { spinning: true },
        <span>Overlay me with the spinner</span>
      )
      expect(findOverlay()).toExist()
      expect(findSpinnerContainer()).toHaveClassName('centered')
    })

    it('only shows the children while not spinning', () => {
      const { spinner } = doShallow({ spinning: false }, <span>Overlay me with the spinner</span>)

      expect(spinner).toMatchElement(<span>Overlay me with the spinner</span>)
    })
  })

  // TODO: spread rest and class name tests
})
