import React from 'react'
import { render, mount } from 'enzyme'

import FadeAndReveal, { StyledContainer } from '../FadeAndReveal'

describe('FadeAndReveal', () => {
  it('renders when the transition is triggered', () => {
    const fadeAndReveal = render(
      <FadeAndReveal timeout={500} duration={100} height={500} in={true}>
        {() => <div>Content to fade</div>}
      </FadeAndReveal>
    )

    expect(fadeAndReveal).toMatchSnapshot()
  })

  it('renders when the transition is not triggered', () => {
    const fadeAndReveal = render(
      <FadeAndReveal timeout={500} duration={100} height={500} in={false}>
        {() => <div>Content to fade</div>}
      </FadeAndReveal>
    )

    expect(fadeAndReveal).toMatchSnapshot()
  })

  it('should hide content from screenreaders when exited', () => {
    const fadeAndReveal = mount(
      <FadeAndReveal timeout={500} duration={100} height={500} in={false}>
        {() => <div>Content to fade</div>}
      </FadeAndReveal>
    )

    const styledContainer = fadeAndReveal.find(StyledContainer)
    expect(styledContainer).toHaveProp('aria-hidden', true)
    expect(styledContainer.prop('style').visibility).toEqual('hidden')
  })

  it('should display content from screenreaders when entered', () => {
    const fadeAndReveal = mount(
      <FadeAndReveal timeout={500} duration={100} height={500} in={true}>
        {() => <div>Content to fade</div>}
      </FadeAndReveal>
    )

    const styledContainer = fadeAndReveal.find(StyledContainer)
    expect(styledContainer).toHaveProp('aria-hidden', false)
    expect(styledContainer.prop('style').visibility).toEqual('visible')
  })
})
