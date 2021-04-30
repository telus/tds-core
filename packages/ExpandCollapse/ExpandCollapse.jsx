import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import { isEqual } from '../../shared/utils/sets'

import Panels from './Panels'
import Panel from './Panel/Panel'

/**
 * A connected series of expandable content areas.
 *
 * @version ./package.json
 */
class ExpandCollapse extends React.Component {
  state = {
    openPanels: new Set(this.props.open),
    prevOpenPanels: new Set(),
  }

  static getDerivedStateFromProps(props, state) {
    const { prevOpenPanels } = state
    const open = new Set(props.open)

    if (!isEqual(open, prevOpenPanels)) {
      return {
        openPanels: open,
        prevOpenPanels: open,
      }
    }
    return null
  }

  togglePanel = panelId => {
    const { onToggle } = this.props

    this.setState(
      ({ openPanels }) => {
        const nextPanels = new Set(openPanels)

        if (nextPanels.has(panelId)) {
          nextPanels.delete(panelId)
        } else {
          nextPanels.add(panelId)
        }

        return { openPanels: nextPanels }
      },
      () => {
        if (onToggle) {
          onToggle(Array.from(this.state.openPanels))
        }
      }
    )
  }

  isPanelOpen = panelId => {
    return this.state.openPanels.has(panelId)
  }

  render() {
    const { tag, children, compact, ...rest } = this.props

    return (
      <Panels
        {...rest}
        isPanelOpen={this.isPanelOpen}
        togglePanel={this.togglePanel}
        tag={tag}
        compact={compact}
      >
        {children}
      </Panels>
    )
  }
}

ExpandCollapse.propTypes = {
  /**
   * A list of panel identifiers to programmatically open.
   */
  open: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether or not to show the divider above the first panel.
   */
  topDivider: PropTypes.bool,
  /**
   * A callback function to be invoked when any panel is opened or closed.
   *
   * @param {Array} openPanels A list of the currently open panel identifiers.
   */
  onToggle: PropTypes.func,
  /**
   * Wrap each ExpandCollapse button in a heading tag. This adds context for screen readers, and does not affect text style.
   */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  /**
   * Panel content. Can be text, any HTML element, or any component.
   * If content is not provided, only the Panel heading will be
   * displayed in a non-interactive manner. See documentation for usage.
   *
   * @since 2.1.0
   */
  children: componentWithName('Panel'),
  /**
   * If selected, reduces margins for header and content.
   */
  compact: PropTypes.bool,
}

ExpandCollapse.defaultProps = {
  open: [],
  topDivider: true,
  onToggle: undefined,
  tag: undefined,
  children: undefined,
  compact: false,
}

ExpandCollapse.Panel = Panel

export default ExpandCollapse
