import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import arrayFrom from 'core-js/fn/array/from'

import { isEqual } from '../../src/utils/sets'

import Panels from './Panels'
import Panel from './Panel/Panel'

/**
 * A connected series of expandable content areas.
 *
 * <span class="docs--badge__updated">updated</span> <span class="docs--badge__version">v0.33.1</span>
 */
class ExpandCollapse extends React.Component {
  state = {
    openPanels: new Set(this.props.open),
  }

  componentWillReceiveProps(nextProps) {
    const nextPanels = new Set(nextProps.open)

    if (!isEqual(this.state.openPanels, nextPanels)) {
      this.setState({ openPanels: nextPanels })
    }
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
          onToggle(arrayFrom(this.state.openPanels))
        }
      }
    )
  }

  isPanelOpen = panelId => {
    return this.state.openPanels.has(panelId)
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <Panels {...rest} isPanelOpen={this.isPanelOpen} togglePanel={this.togglePanel}>
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
   * The expandable panels. Must be at least one `ExpandCollapse.Panel`.
   */
  children: childrenOfType(Panel).isRequired,
}

ExpandCollapse.defaultProps = {
  open: [],
  topDivider: true,
  onToggle: undefined,
}

ExpandCollapse.Panel = Panel

export default ExpandCollapse
