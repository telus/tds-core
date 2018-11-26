import React from 'react'
import { shallow, mount } from 'enzyme'

import Text from '@tds/core-text'
import DecorativeIcon from '@tds/core-decorative-icon'
import HairlineDivider from '@tds/core-hairline-divider'

import Reveal from '../../../shared/components/Animation/Reveal'
import Translate from '../../../shared/components/Animation/Translate'

import ExpandCollapse from '../ExpandCollapse'

import mockMatchMedia from '../../../config/jest/__mocks__/matchMedia'

describe('ExpandCollapse', () => {
  const doShallow = (props = {}) =>
    shallow(
      <ExpandCollapse {...props}>
        <ExpandCollapse.Panel id="the-panel" header="The header">
          The panel content
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    ).dive()

  const doMount = component => {
    const expandCollapse = mount(component)

    const findPanel = id => expandCollapse.find(`[data-testid="${id}"]`)
    const findPanelHeader = id => findPanel(id).find('button')
    const findPanelContent = id => findPanel(id).find('[data-testid="content"]')

    return {
      expandCollapse,
      findPanel,
      findPanelHeader,
      findPanelContent,
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

  beforeEach(() => {
    mockMatchMedia(768)
  })

  it('renders a closed panel', () => {
    const { expandCollapse } = doMount(
      <ExpandCollapse>
        <ExpandCollapse.Panel id="panel-1" header="Panel title">
          Panel content
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    expect(expandCollapse).toMatchSnapshot()
  })

  it('renders an open panel', () => {
    const { expandCollapse } = doMount(
      <ExpandCollapse open={['panel-1']}>
        <ExpandCollapse.Panel id="panel-1" header="Panel title">
          Panel content
        </ExpandCollapse.Panel>
      </ExpandCollapse>
    )

    expect(expandCollapse).toMatchSnapshot()
  })

  it('renders panels conditionally', () => {
    const { expandCollapse } = doMount(
      <ExpandCollapse open={['panel-1']}>
        {false}
        {null}
        {undefined}
        {aPanel({ id: 'panel-1' })}
      </ExpandCollapse>
    )

    expect(expandCollapse.find('Panel').length).toBe(1)
  })

  describe('the panel header', () => {
    it('can be a simple string', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', header: 'Panel title' })}</ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(<Text size="large">Panel title</Text>)
    })

    it('can be a string with superscript', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', header: 'TELUS^^TM^^' })}</ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(<Text.Sup>TM</Text.Sup>)
    })

    it('can be a string with trademark, and registered HTML entities', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>
          {aPanel({ id: 'panel-1', header: 'TELUS&trade; Optik TV&reg;' })}
        </ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(
        <Text size="large">TELUS&trade; Optik TV&reg;</Text>
      )
    })

    it('can have additional subtext', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>
          {aPanel({ id: 'panel-1', header: 'Panel title', subtext: 'Some subtext' })}
        </ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(<Text size="small">Some subtext</Text>)
    })

    it('can have additional tertiary text', () => {
      const { findPanelHeader } = doMount(
        <ExpandCollapse>
          {aPanel({ id: 'panel-1', tertiaryText: 'Some tertiary text' })}
        </ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toContainReact(
        <Text data-testid="tertiarytext" size="large">
          Some tertiary text
        </Text>
      )
    })
  })

  describe('the caret icon', () => {
    it('translates it on hover', () => {
      const { findPanelHeader, hoverPanel, unHoverPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1' })}</ExpandCollapse>
      )

      hoverPanel('panel-1')
      expect(findPanelHeader('panel-1').find(Translate)).toHaveProp('in', true)

      unHoverPanel('panel-1')
      expect(findPanelHeader('panel-1').find(Translate)).toHaveProp('in', false)
    })

    it('reverses its direction when opening and closing', () => {
      const { findPanelHeader, clickPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1' })}</ExpandCollapse>
      )

      expect(findPanelHeader('panel-1').find(Translate)).toHaveProp('distance', '0.25rem')
      expect(findPanelHeader('panel-1').find(DecorativeIcon)).toHaveProp('symbol', 'caretDown')

      clickPanel('panel-1')
      expect(findPanelHeader('panel-1').find(Translate)).toHaveProp('distance', '-0.25rem')
      expect(findPanelHeader('panel-1').find(DecorativeIcon)).toHaveProp('symbol', 'caretUp')
    })
  })

  describe('panel opening and closing', () => {
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

      onToggle.mockClear()

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
    })

    it('are not able to be opened', () => {
      const { clickPanel, findPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1', disabled: true })}</ExpandCollapse>
      )

      clickPanel('panel-1')

      expectPanelToBeClosed(findPanel('panel-1'))
    })
  })

  describe('accessibility', () => {
    it('marks the panel as an expandable trigger for content for screen readers', () => {
      const { findPanelHeader, clickPanel } = doMount(
        <ExpandCollapse>{aPanel({ id: 'panel-1' })}</ExpandCollapse>
      )

      expect(findPanelHeader('panel-1')).toHaveProp('aria-expanded', false)

      clickPanel('panel-1')
      expect(findPanelHeader('panel-1')).toHaveProp('aria-expanded', true)
    })

    it('wraps a heading tag around a panel label', () => {
      const { expandCollapse } = doMount(
        <ExpandCollapse tag="h3">{aPanel({ id: 'panel-1' })}</ExpandCollapse>
      )
      expect(expandCollapse.find(`[data-testid="headerWrapper"]`).children()).toHaveDisplayName(
        'Clickable'
      )
    })
  })

  describe('panel dividers', () => {
    it('surrounds all the panels', () => {
      const { expandCollapse } = doMount(
        <ExpandCollapse>
          {aPanel({ id: 'panel-1' })}
          {aPanel({ id: 'panel-2' })}
        </ExpandCollapse>
      )

      expect(expandCollapse.find(HairlineDivider).length).toBe(3)
    })

    it('can turn off the top divider', () => {
      const { expandCollapse } = doMount(
        <ExpandCollapse topDivider={false}>
          {aPanel({ id: 'panel-1' })}
          {aPanel({ id: 'panel-2' })}
        </ExpandCollapse>
      )

      expect(expandCollapse.find(HairlineDivider).length).toBe(2)
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
