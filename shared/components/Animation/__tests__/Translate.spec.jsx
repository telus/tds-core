import React from 'react'
import { render } from 'enzyme'

import Translate from '../Translate'

describe('Translate', () => {
  it('renders when the transition is triggered', () => {
    const translate = render(
      <Translate timeout={500} in={true} direction="x" distance="1rem">
        {() => <div>Content to translate</div>}
      </Translate>
    )

    expect(translate).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const translate = render(
      <Translate timeout={500} in={false} direction="x" distance="1rem">
        {() => <div>Content to translate</div>}
      </Translate>
    )

    expect(translate).toMatchSnapshot()
  })
})
