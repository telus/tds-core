import React from 'react'
import { mount } from 'enzyme'

import ExpandCollapse from '../ExpandCollapse'

const { Group, Panel } = ExpandCollapse

describe('<ExpandCollapse/>', () => {
  it('handles disabled panels', () => {
    const wrapper = mount(
      <Group disabledKeys={['p1']}>
        <Panel panelKey="p1" header="This is panel 1">
          <div>Hell world</div>
        </Panel>
        <Panel panelKey="p2" header="This is panel 2">
          <div>Hell world2</div>
        </Panel>
      </Group>
    )
    expect(wrapper.find('.collapsible-panel__label--disabled').length).toEqual(1)
    const panel1 = wrapper.find('.collapsible-panel__header').first()
    panel1.simulate('click')
    expect(wrapper.find('.collapsible-panel__content').first().hasClass('collapsible-panel__content--visible')).toEqual(false)
  })

  it('render correct number of panels with right content', () => {
    const wrapper = mount(
      <Group>
        <Panel panelKey="p1" header="This is panel 1">
          <div>Hell world</div>
        </Panel>
        <Panel panelKey="p2" header="This is panel 2">
          <div>Hell world2</div>
        </Panel>
      </Group>
    )
    expect(wrapper.find('.collapsible-panel').length).toEqual(2)
    expect(wrapper.find('.collapsible-panel__header').first().render().text()).toEqual('This is panel 1')

    wrapper.find('.collapsible-panel__content').forEach((node) => {
      expect(node.hasClass('collapsible-panel__content--visible')).toEqual(false)
    })
  })


  it('can set default open panel', () => {
    const wrapper = mount(
      <Group activeKeys={['p2']}>
        <Panel panelKey="p1" header="This is panel 1">
          <div>Hell world</div>
        </Panel>
        <Panel panelKey="p2" header="This is panel 2">
          <div>Hell world2</div>
        </Panel>
      </Group>
    )
    expect(wrapper.find('.collapsible-panel__content').first().hasClass('collapsible-panel__content--visible')).toEqual(false)
    expect(wrapper.find('.collapsible-panel__content').last().hasClass('collapsible-panel__content--visible')).toEqual(true)
  })


  describe('Click Event', () => {
    it.skip('handles panel click event correctly', () => {
      const onClickSpy = jest.fn()
      const wrapper = mount(
        <Group onChange={onClickSpy}>
          <Panel panelKey="p1" header="This is panel 1">
            <div>Hell world</div>
          </Panel>
          <Panel panelKey="p2" header="This is panel 2">
            <div>Hell world2</div>
          </Panel>
        </Group>
      )
      const panel2 = wrapper.find('.collapsible-panel__header').last()
      panel2.simulate('click')
      expect(onClickSpy).toBeCalled()
      expect(wrapper.find('.collapsible-panel__content').last().hasClass('collapsible-panel__content--visible')).toEqual(true)
    })

    it.skip('toggles the panel content visibility', () => {
      const wrapper = mount(
        <Group>
          <Panel panelKey="p1" header="This is panel 1">
            <div>Hell world</div>
          </Panel>
          <Panel panelKey="p2" header="This is panel 2">
            <div>Hell world2</div>
          </Panel>
        </Group>
      )
      const panel1 = wrapper.find('.collapsible-panel__header').first()
      panel1.simulate('click')
      expect(wrapper.find('.collapsible-panel__content').first().hasClass('collapsible-panel__content--visible')).toEqual(true)
      panel1.simulate('click')
      expect(wrapper.find('.collapsible-panel__content').first().hasClass('collapsible-panel__content--visible')).toEqual(false)
    })
  })

  describe('Accordion Mode', () => {
    it.skip('only one panel can be open', () => {
      const wrapper = mount(
        <Group accordion>
          <Panel panelKey="p1" header="This is panel 1">
            <div>Hell world</div>
          </Panel>
          <Panel panelKey="p2" header="This is panel 2">
            <div>Hell world2</div>
          </Panel>
        </Group>
      )
      const panel1 = wrapper.find('.collapsible-panel__header').first()
      const panel2 = wrapper.find('.collapsible-panel__header').last()
      panel2.simulate('click')
      expect(wrapper.find('.collapsible-panel__content').last().hasClass('collapsible-panel__content--visible')).toEqual(true)
      panel1.simulate('click')
      expect(wrapper.find('.collapsible-panel__content').last().hasClass('collapsible-panel__content--visible')).toEqual(false)
    })
  })
})
