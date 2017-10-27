import React from 'react'
import { render } from 'enzyme'

import Fade from '../Fade'

describe('Fade', () => {
  it('renders when the transition is triggered', () => {
    const fade = render(
      <Fade timeout={500} in={true}>
        {() => <div>Content to fade</div>}
      </Fade>
    )

    expect(fade).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const fade = render(
      <Fade timeout={500} in={false}>
        {() => <div>Content to fade</div>}
      </Fade>
    )

    expect(fade).toMatchSnapshot()
  })
})
