import React from 'react'
import { shallow, mount } from 'enzyme'

import Reveal from '../../Animation/Reveal'
import Translate from '../../Animation/Translate'
import Text from '../../Typography/Text/Text'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
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
    const findPanelHeader = id => findPanel(id).find('button')

    return {
      expandCollapse,
      findPanel,
      findPanelHeader,
      hoverPanel: id => findPanelHeader(id).simulate('mouseEnter'),
      unHoverPanel: id => findPanelHeader(id).simulate('mouseLeave'),
      clickPanel: id => findPanelHeader(id).simulate('click'),
    }
  }

  const expectPanelToBeOpen = panel => expect(panel.find(Reveal)).toHaveProp('in', true)
  const expectPanelToBeClosed = panel => expect(panel.find(Reveal)).toHaveProp('in', false)

  const defaultProps = {
    id: 'a-panel',
    header: 'Panel title',
  }
  const defaultChildren = 'Panel content'
  const aPanel = ({ ...props }, children = defaultChildren) => (
    <ExpandCollapse.Panel {...defaultProps} {...props}>
      {children}
    </ExpandCollapse.Panel>
  )

  it('renders', () => {
    const { expandCollapse } = doMount(
      <ExpandCollapse open={['panel-1']}>
        <ExpandCollapse.Panel id="panel-1" header="Panel title">
          Panel content
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    expect(expandCollapse).toMatchSnapshot()
  })

  describe('the panel header', () => {
    it('can be a simple string', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', header: 'Panel title' })}</ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(<Text size="medium">Panel title</Text>)
    })

    it('can have additional subtext', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>
          {aPanel({ id: 'panel-1', header: 'Panel title', subtext: 'Some subtext' })}
        </ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(<Text size="medium">Panel title</Text>)
      expect(findPanelHeader('panel-1')).toContainReact(<Text size="small">Some subtext</Text>)
    })

    it('can be arbitrary components', () => {
      const Header = () => <div>A complex header</div>

      const { findPanelHeader } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', header: <Header /> })}</ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(<div>A complex header</div>)
    })
  })

  it('translates the caret icon on hover', () => {
    const { findPanel, hoverPanel, unHoverPanel } = doMount(
      <ExpandCollapse>{aPanel({ id: 'panel-1' })}</ExpandCollapse>
    )

    hoverPanel('panel-1')
    expect(findPanel('panel-1').find(Translate)).toHaveProp('in', true)

    unHoverPanel('panel-1')
    expect(findPanel('panel-1').find(Translate)).toHaveProp('in', false)
  })

  // TODO: it flips the caret when it opens. Need internet to see the icon.

  describe('panel interactions', () => {
    it('can have some panels open and some panels closed by default', () => {
      const { findPanel } = doMount(
        <ExpandCollapse open={['panel-1']}>
          {aPanel({ id: 'panel-1' })}
          {aPanel({ id: 'panel-2' })}
        </ExpandCollapse>
      )

      expectPanelToBeOpen(findPanel('panel-1'))
      expectPanelToBeClosed(findPanel('panel-2'))
    })

    it('opens and closes panels by clicking them', () => {
      const { findPanel, clickPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1' })}</ExpandCollapse>
      )

      clickPanel('panel-1')
      expectPanelToBeOpen(findPanel('panel-1'))

      clickPanel('panel-1')
      expectPanelToBeClosed(findPanel('panel-1'))
    })

    it('lets a parent component control the open and closed panels', () => {
      const { expandCollapse, findPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1' })}</ExpandCollapse>
      )

      expandCollapse.setProps({ open: ['panel-1'] })
      expectPanelToBeOpen(findPanel('panel-1'))

      expandCollapse.setProps({ open: [] })
      expectPanelToBeClosed(findPanel('panel-1'))
    })

    it('triggers individual panel callbacks when panels are opened and closed', () => {
      const onPanelToggle = jest.fn()

      const { expandCollapse, clickPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', onToggle: onPanelToggle })}</ExpandCollapse>
      )

      clickPanel('panel-1')
      expect(onPanelToggle).toHaveBeenCalledWith(true)

      expandCollapse.setProps({ open: [] })
      expect(onPanelToggle).toHaveBeenCalledWith(false)

      // TODO: onToggle for the entire expand collapse that receives all the state
    })

    it('triggers a callback when any panel is opened or closed', () => {
      const onToggle = jest.fn()

      const { clickPanel } = doMount(
        <ExpandCollapse onToggle={onToggle}>
          {aPanel({ id: 'panel-1' })}
          {aPanel({ id: 'panel-2' })}
        </ExpandCollapse>
      )

      clickPanel('panel-1')
      expect(onToggle).toHaveBeenCalledWith(['panel-1'])

      // TODO: Can I clear JUST the onToggle mock?
      jest.clearAllMocks()

      clickPanel('panel-2')
      expect(onToggle).toHaveBeenCalledWith(['panel-1', 'panel-2'])
    })
  })

  describe('disabled panels', () => {
    it('are rendered in a disabled treatment', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', disabled: true })}</ExpandCollapse>
      )

      const panelHeader = findPanelHeader('panel-1')
      expect(panelHeader).toHaveClassName('disabled')
      expect(panelHeader).toBeDisabled()
      expect(panelHeader.find(DecorativeIcon)).not.toBePresent()
    })

    it('are not able to be opened', () => {
      const { clickPanel, findPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', disabled: true })}</ExpandCollapse>
      )

      clickPanel('panel-1')

      expectPanelToBeClosed(findPanel('panel-1'))
    })
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
