import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Text from '@tds/core-text'

import Spinner from '../Spinner'

describe('Spinner', () => {
  const defaultProps = {
    spinning: true,
  }
  const doShallow = (overrides = {}, children) =>
    shallow(
      <Spinner {...defaultProps} {...overrides}>
        {children}
      </Spinner>
    )

  const doMount = (overrides = {}, children) => {
    const spinner = mount(
      <Spinner {...defaultProps} {...overrides}>
        {children}
      </Spinner>
    )

    const spinnerSvg = spinner.find('[data-testid="svg"]')

    return {
      spinner,
      overlay: spinner.find('[data-testid="overlay"]'),
      spinnerContainer: spinner.find('[data-testid="spinner"]'),
      spinnerSvg,
      a11yLabel: spinnerSvg.find('title[id^="spinner-title-"]'),
    }
  }

  it('renders', () => {
    const spinner = render(<Spinner spinning />)

    expect(spinner).toMatchSnapshot()
  })

  it('renders with children', () => {
    const spinner = render(
      <Spinner spinning>
        <span>Overlay me with the spinner</span>
      </Spinner>
    )

    expect(spinner).toMatchSnapshot()
  })

  it('is only visible while spinning', () => {
    let spinner = doShallow({ spinning: false })
    expect(spinner).toBeEmptyRender()

    spinner = doShallow({ spinning: true })
    expect(spinner).not.toBeEmptyRender()
  })

  it('can have a tip', () => {
    const { spinner } = doMount({ tip: 'A tip' })

    expect(spinner).toContainReact(<Text size="small">A tip</Text>)
  })

  describe('overlaying content', () => {
    it('places the spinner on top of the content while spinning', () => {
      const { overlay, spinnerContainer } = doMount(
        { spinning: true },
        <span>Overlay me with the spinner</span>
      )

      expect(overlay).toExist()
      expect(spinnerContainer).toHaveClassName('centered')
    })

    it('only shows the children while not spinning', () => {
      const spinner = doShallow({ spinning: false }, <span>Overlay me with the spinner</span>)

      expect(spinner).toMatchElement(<span>Overlay me with the spinner</span>)
    })
  })

  describe('accessibility', () => {
    it('gives the svg a default a11y label', () => {
      const { spinnerSvg, a11yLabel } = doMount()

      expect(a11yLabel).toHaveText(
        'A spinner is active. Please wait while the page completes a task.'
      )
      expect(spinnerSvg).toHaveProp('aria-labelledby', a11yLabel.props().id)
    })

    it('allows a custom a11y label', () => {
      const { a11yLabel } = doMount({ a11yLabel: 'Something is busy' })

      expect(a11yLabel).toHaveText('Something is busy')
    })
  })

  it('passes additional attributes to svg element', () => {
    const { spinnerSvg } = doMount({ id: 'the-spinner', 'data-some-attr': 'some value' })

    expect(spinnerSvg).toHaveProp({ id: 'the-spinner', 'data-some-attr': 'some value' })
  })

  it('does not allow custom CSS', () => {
    const { spinnerSvg } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(spinnerSvg).not.toHaveProp('className', 'my-custom-class')
    expect(spinnerSvg).not.toHaveProp('style')
  })
})
