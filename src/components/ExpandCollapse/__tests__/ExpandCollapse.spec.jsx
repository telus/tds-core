import React from 'react'
import { shallow, mount } from 'enzyme'

import Reveal from '../../Animation/Reveal'
import ExpandCollapse from '../ExpandCollapse'

describe('ExpandCollapse', () => {
  const doShallow = (props = {}) =>
    shallow(
      <ExpandCollapse {...props}>
        <ExpandCollapse.Panel id="the-panel" header="The header">
          The panel content
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

  const doMount = component => {
    const expandCollapse = mount(component)

    const findPanel = id => expandCollapse.find(`[data-testid="${id}"]`)

    return {
      expandCollapse,
      findPanel,
      togglePanel: id =>
        findPanel(id)
          .find('button')
          .simulate('click'),
    }
  }

  const expectPanelToBeOpen = panel => expect(panel.find(Reveal)).toHaveProp('in', true)
  const expectPanelToBeClosed = panel => expect(panel.find(Reveal)).toHaveProp('in', false)

  it('renders', () => {
    const { expandCollapse } = doMount(
      <ExpandCollapse open={['panel-1']}>
        <ExpandCollapse.Panel id="panel-1" header="First panel title">
          First panel
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel id="panel-2" header="Second panel title">
          Second panel
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    expect(expandCollapse).toMatchSnapshot()
  })

  it('can have some panels open and some panels closed by default', () => {
    const { findPanel } = doMount(
      <ExpandCollapse open={['panel-1']}>
        <ExpandCollapse.Panel id="panel-1" header="First panel title">
          First panel
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel id="panel-2" header="Second panel title">
          Second panel
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    expectPanelToBeOpen(findPanel('panel-1'))
    expectPanelToBeClosed(findPanel('panel-2'))
  })

  it('opens and closes panels by clicking them', () => {
    const { findPanel, togglePanel } = doMount(
      <ExpandCollapse>
        <ExpandCollapse.Panel id="panel-1" header="First panel title">
          First panel
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    togglePanel('panel-1')
    expectPanelToBeOpen(findPanel('panel-1'))

    togglePanel('panel-1')
    expectPanelToBeClosed(findPanel('panel-1'))
  })

  it('lets a parent component control the open and closed panels', () => {
    const { expandCollapse, findPanel } = doMount(
      <ExpandCollapse>
        <ExpandCollapse.Panel id="panel-1" header="First panel title">
          First panel
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    expandCollapse.setProps({ open: ['panel-1'] })
    expectPanelToBeOpen(findPanel('panel-1'))

    expandCollapse.setProps({ open: [] })
    expectPanelToBeClosed(findPanel('panel-1'))
  })

  it('triggers callbacks when panels are opened and closed', () => {
    const onPanelToggle = jest.fn()

    const { expandCollapse, togglePanel } = doMount(
      <ExpandCollapse>
        <ExpandCollapse.Panel id="panel-1" header="First panel title" onToggle={onPanelToggle}>
          First panel
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    togglePanel('panel-1')
    expect(onPanelToggle).toHaveBeenCalledWith(true)

    expandCollapse.setProps({ open: [] })
    expect(onPanelToggle).toHaveBeenCalledWith(false)

    // TODO: onToggle for the entire expand collapse that receives all the state
  })

  it('passes additional attributes to the element', () => {
    const expandCollapse = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(expandCollapse).toHaveProp('id', 'the-id')
    expect(expandCollapse).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const expandCollapse = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(expandCollapse).not.toHaveProp('className', 'my-custom-class')
    expect(expandCollapse).not.toHaveProp('style')
  })
})
