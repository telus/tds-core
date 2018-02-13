import React from 'react'
import { mount, shallow } from 'enzyme'
import SelectorCounter from '../SelectorCounter'
import CounterButton from '../CounterButton'

describe('<SelectorCounter />', () => {
  it('starts with a given default value', () => {
    expect(
      shallow(<SelectorCounter defaultValue={5} />)
        .find('input.selector-counter__value')
        .props().value
    ).toEqual(5)
  })

  describe('onChange handler', () => {
    let onChangeSpy
    let wrapper

    beforeEach(() => {
      onChangeSpy = jest.fn()
      wrapper = mount(<SelectorCounter defaultValue={1} onChange={onChangeSpy} />)
    })

    it('is called with the incremented value', () => {
      wrapper
        .find(CounterButton)
        .first()
        .simulate('click')
      expect(onChangeSpy.mock.calls.length).toEqual(1)
      expect(onChangeSpy.mock.calls[0][0]).toEqual(2)
    })

    it('is called with the decremented value', () => {
      wrapper
        .find(CounterButton)
        .last()
        .simulate('click')
      expect(onChangeSpy.mock.calls.length).toEqual(1)
      expect(onChangeSpy.mock.calls[0][0]).toEqual(0)
    })

    it('is called on keyboard input', () => {
      wrapper.find('input[type="number"]').simulate('change')
      expect(onChangeSpy.mock.calls.length).toEqual(1)
    })

    it('is not called when the min value has been reached', () => {
      wrapper = mount(<SelectorCounter onChange={onChangeSpy} />)
      wrapper
        .find(CounterButton)
        .last()
        .simulate('click')
      expect(onChangeSpy.mock.calls.length).toEqual(0)
    })

    it('is not called when the max value has been reached', () => {
      wrapper = mount(<SelectorCounter onChange={onChangeSpy} defaultValue={10} max={10} />)
      wrapper
        .find(CounterButton)
        .first()
        .simulate('click')
      expect(onChangeSpy.mock.calls.length).toEqual(0)
    })
  })

  it('focuses on demand', () => {
    const wrapper = mount(<SelectorCounter />)

    wrapper.instance().focus()
    expect(wrapper.find('input[type="number"]').getElement().props.id).toEqual(
      document.activeElement.getAttribute('id')
    )
  })

  describe('accessibility', () => {
    describe('context', () => {
      it('renders a helpful prefix', () => {
        const wrapper = shallow(
          <SelectorCounter contextPrefix="prefixed context" defaultValue={0} />
        )
        const expectedText = 'prefixed context 0 '

        expect(
          wrapper
            .find('.accessible-hide')
            .first()
            .text()
        ).toEqual(expectedText)
      })

      it('renders a helpful suffix', () => {
        const wrapper = shallow(
          <SelectorCounter contextSuffix="suffixed context" defaultValue={0} />
        )
        const expectedText = ' 0 suffixed context'

        expect(
          wrapper
            .find('.accessible-hide')
            .first()
            .text()
        ).toEqual(expectedText)
      })

      it('renders a helpful prefix and suffix', () => {
        const wrapper = shallow(
          <SelectorCounter contextPrefix="prefix" contextSuffix="suffix" defaultValue={0} />
        )
        const expectedText = 'prefix 0 suffix'

        expect(
          wrapper
            .find('.accessible-hide')
            .first()
            .text()
        ).toEqual(expectedText)
      })

      it('renders the status div', () => {
        const wrapper = shallow(<SelectorCounter />)
        const statusDiv = wrapper.find('.accessible-hide')

        expect(statusDiv.length).toEqual(1)
        expect(statusDiv.first().text()).toEqual(' 0 ')
      })
    })
  })

  describe('id prop', () => {
    it('uses the given id', () =>
      expect(shallow(<SelectorCounter id="foo" />).find('#foo').length).toEqual(1))

    it('generates a default id', () => {
      const input = shallow(<SelectorCounter />)
        .find('input')
        .first()

      expect(input).toHaveProp('id')
    })
  })
})
