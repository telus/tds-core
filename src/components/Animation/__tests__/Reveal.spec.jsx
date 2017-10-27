import React from 'react'
import { render } from 'enzyme'

import Reveal from '../Reveal'

describe('Reveal', () => {
  it('renders when the transition is triggered', () => {
    const reveal = render(
      <Reveal timeout={500} in={true}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

    expect(reveal).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const reveal = render(
      <Reveal timeout={500} in={false}>
        {() => <div>Content to reveal</div>}
      </Reveal>
    )

    expect(reveal).toMatchSnapshot()
  })
})
