import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Text from '@tds/core-text'

import Spinner from '../Spinner'

import { warn, deprecate } from '../../../shared/utils/warn'

jest.mock('../../../shared/utils/warn')

describe('Spinner', () => {
  const defaultProps = {
    label: 'Loading content',
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
      container: spinner.find('[data-testid="container"]'),
      overlay: spinner.find('[data-testid="overlay"]'),
      spinnerContainer: spinner.find('[data-testid="spinner"]'),
      spinnerSvg,
      a11yLabel: spinnerSvg.find('title[id^="spinner-title-"]'),
    }
  }

  it('renders', () => {
    const spinner = render(<Spinner label="Loading content" spinning />)

    expect(spinner).toMatchSnapshot()
  })

  it('renders with children', () => {
    const spinner = render(
      <Spinner label="Loading content" spinning>
        <span>Overlay me with the spinner</span>
      </Spinner>
    )

    expect(spinner).toMatchSnapshot()
  })

  it('renders a small spinner', () => {
    const { container } = doMount(
      { size: 'small', inline: true },
      <span>Overlay me with the spinner</span>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders a small secondary spinner', () => {
    const { container } = doMount(
      { size: 'small', variant: 'secondary', inline: true },
      <span>Overlay me with the spinner</span>
    )
    expect(container).toMatchSnapshot()
  })

  it('does not render a large secondary spinner', () => {
    doMount(
      { size: 'large', variant: 'secondary', inline: true },
      <span>Overlay me with the spinner</span>
    )
    expect(warn).toHaveBeenCalled()
    jest.clearAllMocks()
  })

  it('renders inline', () => {
    const { container } = doMount(
      { spinning: true, inline: true },
      <span>Overlay me with the spinner</span>
    )
    expect(container).toMatchSnapshot()
  })

  it('is only visible while spinning', () => {
    let spinner = doShallow({ spinning: false })
    expect(spinner).toBeEmptyRender()

    spinner = doShallow({ spinning: true })
    expect(spinner).not.toBeEmptyRender()
  })

  it('can have a tip', () => {
    const { spinner } = doMount({ label: undefined, tip: 'A tip' })

    expect(spinner).toContainReact(<Text size="small">A tip</Text>)
    expect(deprecate).toHaveBeenCalled()
  })

  it('can have a label', () => {
    const { spinner } = doMount({ label: 'A label' })

    expect(spinner).toContainReact(<Text size="small">A label</Text>)
  })

  describe('overlaying content', () => {
    it('places the spinner on top of the content while spinning', () => {
      const { overlay, spinnerContainer } = doMount(
        { spinning: true },
        <span>Overlay me with the spinner</span>
      )

      expect(overlay).toExist()
      expect(spinnerContainer).toMatchSnapshot()
    })

    it('only shows the children while not spinning', () => {
      const spinner = doShallow({ spinning: false }, <span>Overlay me with the spinner</span>)

      expect(spinner).toMatchElement(<span>Overlay me with the spinner</span>)
    })

    it('can be fullscreen', () => {
      const spinner = doShallow({ fullScreen: true, label: 'Loading page', spinning: true })

      expect(spinner).toMatchSnapshot()
    })
  })

  describe('accessibility', () => {
    it('allows a custom a11y label (label prop)', () => {
      const { a11yLabel } = doMount({ label: 'Something is busy' })

      expect(a11yLabel).toHaveText('Something is busy')
    })
  })

  it('passes additional attributes to svg element', () => {
    const { spinnerSvg } = doMount({ id: 'the-spinner', 'data-some-attr': 'some value' })

    expect(spinnerSvg).toMatchSnapshot()
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
