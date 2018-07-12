import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import arrayFrom from 'core-js/fn/array/from'

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
    const { tag, children, ...rest } = this.props

    return (
      <Panels {...rest} isPanelOpen={this.isPanelOpen} togglePanel={this.togglePanel} tag={tag}>
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
   * The expandable panels. Must be at least one `ExpandCollapse.Panel`.
   */
  children: childrenOfType(Panel).isRequired,
}

ExpandCollapse.defaultProps = {
  open: [],
  topDivider: true,
  onToggle: undefined,
  tag: undefined,
}

ExpandCollapse.Panel = Panel

export default ExpandCollapse
