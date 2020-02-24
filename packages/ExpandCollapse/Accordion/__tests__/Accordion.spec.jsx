import React from 'react'
import { shallow, mount } from 'enzyme'

import { FadeAndReveal } from '@tds/shared-animation'

import Accordion from '../Accordion'

describe('Accordion', () => {
  const doShallow = (props = {}) =>
    shallow(
      <Accordion {...props}>
        <Accordion.Panel id="the-panel" header="The header">
          The panel content
        </Accordion.Panel>
      </Accordion>
    ).dive()

  const doMount = component => {
    const accordion = mount(component)

    const findPanel = id => accordion.find(`[data-testid="${id}"]`)
    const findPanelHeader = id => findPanel(id).find('button')

    return {
      accordion,
      findPanel,
      findPanelHeader,
      hoverPanel: id => findPanelHeader(id).simulate('mouseEnter'),
      unHoverPanel: id => findPanelHeader(id).simulate('mouseLeave'),
      clickPanel: id => findPanelHeader(id).simulate('click'),
    }
  }

  const expectPanelToBeOpen = panel => expect(panel.find(FadeAndReveal)).toHaveProp('in', true)
  const expectPanelToBeClosed = panel => expect(panel.find(FadeAndReveal)).toHaveProp('in', false)

  const defaultProps = {
    id: 'a-panel',
    header: 'Panel title',
  }
  const defaultChildren = 'Panel content'
  const aPanel = ({ ...props }, children = defaultChildren) => (
    <Accordion.Panel {...defaultProps} {...props}>
      {children}
    </Accordion.Panel>
  )

  it('renders a closed accordion', () => {
    const { accordion } = doMount(
      <Accordion>
        <Accordion.Panel id="panel-1" header="Panel title">
          Panel content
        </Accordion.Panel>
      </Accordion>
    )

    expect(accordion).toMatchSnapshot()
  })

  it('renders an open accordion', () => {
    const { accordion } = doMount(
      <Accordion open="panel-1">
        <Accordion.Panel id="panel-1" header="Panel title">
          Panel content
        </Accordion.Panel>
      </Accordion>
    )

    expect(accordion).toMatchSnapshot()
  })

  it('can have 1 panel open by default', () => {
    const { findPanel } = doMount(
      <Accordion open="panel-1">
        {aPanel({ id: 'panel-1' })}
        {aPanel({ id: 'panel-2' })}
      </Accordion>
    )

    expectPanelToBeOpen(findPanel('panel-1'))
    expectPanelToBeClosed(findPanel('panel-2'))
  })

  it('can open and close a panel', () => {
    const { findPanel, clickPanel } = doMount(<Accordion>{aPanel({ id: 'panel-1' })}</Accordion>)

    clickPanel('panel-1')
    expectPanelToBeOpen(findPanel('panel-1'))

    clickPanel('panel-1')
    expectPanelToBeClosed(findPanel('panel-1'))
  })

  it('closes all other panels when opening a new panel', () => {
    const { findPanel, clickPanel } = doMount(
      <Accordion>
        {aPanel({ id: 'panel-1' })}
        {aPanel({ id: 'panel-2' })}
      </Accordion>
    )

    clickPanel('panel-1')
    expectPanelToBeOpen(findPanel('panel-1'))

    clickPanel('panel-2')
    expectPanelToBeClosed(findPanel('panel-1'))
    expectPanelToBeOpen(findPanel('panel-2'))
  })

  it('lets a parent component control the open panel', () => {
    const { accordion, findPanel } = doMount(
      <Accordion>
        {aPanel({ id: 'panel-1' })}
        {aPanel({ id: 'panel-2' })}
      </Accordion>
    )

    accordion.setProps({ open: 'panel-1' })
    expectPanelToBeOpen(findPanel('panel-1'))

    accordion.setProps({ open: 'panel-2' })
    expectPanelToBeClosed(findPanel('panel-1'))
    expectPanelToBeOpen(findPanel('panel-2'))
  })

  it('triggers a callback when any panel is opened or closed', () => {
    const onToggle = jest.fn()

    const { clickPanel } = doMount(
      <Accordion onToggle={onToggle}>{aPanel({ id: 'panel-1' })}</Accordion>
    )

    clickPanel('panel-1')
    expect(onToggle).toHaveBeenCalledWith('panel-1')
  })

  it('passes additional attributes to the element', () => {
    const accordion = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(accordion).toHaveProp('id', 'the-id')
    expect(accordion).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const accordion = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(accordion).not.toHaveProp('className', 'my-custom-class')
    expect(accordion).not.toHaveProp('style')
  })

  it('renders empty panels', () => {
    const { findPanelHeader } = doMount(
      <Accordion>
        <Accordion.Panel id="home-service-billing" header="Home service billing (3)" />
      </Accordion>
    )

    const panelHeader = findPanelHeader('panel-1')
    expect(panelHeader).toMatchSnapshot()
  })
})
