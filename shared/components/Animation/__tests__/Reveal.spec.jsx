import React from 'react'
import { render, shallow } from 'enzyme'

import Reveal from '../Reveal'

describe('Reveal', () => {
  it('renders when the transition is triggered', () => {
    const reveal = render(
      <Reveal timeout={500} in={true} height={300}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

    expect(reveal).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const reveal = render(
      <Reveal timeout={500} in={false} height={300}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

    expect(reveal).toMatchSnapshot()
  })
})

describe('accessibility', () => {
  it('marks the panel as an expandable trigger for content for screen readers', () => {
    const reveal = shallow(
      <Reveal timeout={500} in={true} height={300}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

    expect(reveal.dive()).toHaveProp('aria-hidden', false)
  })

  it('hides panel content from screen readers until they are opened', () => {
    const reveal = shallow(
      <Reveal timeout={500} in={false} height={300}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

    expect(reveal.dive()).toHaveProp('aria-hidden', true)
  })
})
