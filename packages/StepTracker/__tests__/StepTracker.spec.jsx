import React from 'react'
import { render, mount } from 'enzyme'

import Icon from '@tds/core-decorative-icon'

import StepTracker from '../StepTracker'

describe('<StepTracker />', () => {
  const defaultProps = {
    current: 1,
    steps: ['Login', 'Purchase', 'Checkout'],
  }

  const doMount = (overrides = {}) => {
    const container = mount(<StepTracker {...defaultProps} {...overrides} />)

    return container.find('[data-testid="stepTrackerContainer"]')
  }

  const doRender = (overrides = {}) => render(<StepTracker {...defaultProps} {...overrides} />)

  it('renders', () => {
    const stepTracker = doRender()

    expect(stepTracker).toMatchSnapshot()
  })

  it('contains defined steps', () => {
    const stepTracker = doMount()

    expect(stepTracker.find('[data-testid="step-2"]').length).toEqual(1)
  })

  it('renders a single step in progress', () => {
    const stepTracker = doMount({ current: 2 })

    expect(stepTracker.find('[data-testid="step-0"]')).toContainReact(
      <Icon symbol="checkmark" size={16} variant="inverted" />
    )
    expect(stepTracker.find('[data-testid="step-0"]').hasClass('stepActive'))

    expect(stepTracker.find('[data-testid="step-1"]')).toContainReact(
      <Icon symbol="checkmark" size={16} variant="inverted" />
    )
    expect(stepTracker.find('[data-testid="step-1"]').hasClass('stepActive'))

    expect(stepTracker.find('[data-testid="step-2"]')).not.toContainReact(
      <Icon symbol="checkmark" size={16} variant="inverted" />
    )
    expect(stepTracker.find('[data-testid="step-2"]').hasClass('stepActive'))
  })

  it('applies the right value to aria-current', () => {
    const stepTracker = doMount()

    expect(stepTracker.find('[data-testid="singleStepContainer-1"]')).toHaveProp(
      'aria-current',
      'true'
    )
  })

  it('passes additional attributes to button element', () => {
    const stepTracker = doMount({ id: 'step-tracker', tabIndex: 1 })

    expect(stepTracker).toHaveProp('id', 'step-tracker')
    expect(stepTracker).toHaveProp('tabIndex', 1)
  })

  it('does not allow custom CSS', () => {
    const stepTracker = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(stepTracker).not.toHaveProp('className', 'my-custom-class')
    expect(stepTracker).not.toHaveProp('style')
  })
})
