import React from 'react'
import { render, mount } from 'enzyme'

import Reveal from '../Reveal'

describe('Reveal', () => {
  const doMount = (overrides = {}) =>
    mount(
      <Reveal timeout={500} height={300} in={true} {...overrides}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

  const doRender = (overrides = {}) =>
    render(
      <Reveal timeout={500} height={300} in={true} {...overrides}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

  it('renders when the transition is triggered', () => {
    const reveal = doRender({ in: true })

    expect(reveal).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const reveal = doRender({ in: false })

    expect(reveal).toMatchSnapshot()
  })

  it('marks the content as visible to screen readers when expanded', () => {
    const reveal = doMount({ in: true })

    expect(reveal.find('[data-testid="childrenContainer"]')).toHaveProp('aria-hidden', false)
  })

  it('marks the content as hidden to screen readers when contracted', () => {
    const reveal = doMount({ in: false })

    expect(reveal.find('[data-testid="childrenContainer"]')).toHaveProp('aria-hidden', true)
  })
})
