import React from 'react'
import { mount } from 'enzyme'

import Reveal from '../Reveal'

describe('Reveal', () => {
  const doMount = (overrides = {}) =>
    mount(
      <Reveal {...overrides} timeout={500} height={300}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

  it('renders when the transition is triggered', () => {
    const reveal = doMount({ in: true })

    expect(reveal).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const reveal = doMount({ in: false })

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
