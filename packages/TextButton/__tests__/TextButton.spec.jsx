import React from 'react'
import { shallow, render } from 'enzyme'

import A11yContent from '../../A11yContent'

import TextButton from '../TextButton'

describe('TextButton', () => {
  const doShallow = (props = {}) => shallow(<TextButton {...props} />)

  it('renders', () => {
    const textButton = render(<TextButton>This is text</TextButton>)

    expect(textButton).toMatchSnapshot()
  })

  it('displays child text', () => {
    const textButton = shallow(<TextButton>This is text</TextButton>)

    expect(textButton.text().includes('This is text')).toBe(true)
  })

  it('should contain A11yContent', () => {
    const textButton = shallow(
      <TextButton>
        Go home
        <A11yContent>testing</A11yContent>
      </TextButton>
    )

    expect(textButton).toContainReact(<A11yContent>testing</A11yContent>)
  })

  it('should do something when clicked', () => {
    const mockCallBack = jest.fn()
    const button = shallow(<TextButton onClick={mockCallBack}>Text</TextButton>)
    button.simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('does not allow custom CSS', () => {
    const textButton = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
      children: 'Text',
    })

    expect(textButton).not.toHaveProp('className', 'my-custom-class')
    expect(textButton).not.toHaveProp('style')
  })
})
