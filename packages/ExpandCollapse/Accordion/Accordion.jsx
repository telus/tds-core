import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import Panels from '../Panels'
import Panel from '../Panel/Panel'

/**
 * A specialized `ExpandCollapse` in which only one panel can be open at a time.
 *
 * @version ../package.json
 */
class Accordion extends React.Component {
  state = {
    openPanel: this.props.open,
    prevOpenPanel: null,
  }

  static getDerivedStateFromProps(props, state) {
    const { prevOpenPanel } = state
    const open = props.open

    if (open !== prevOpenPanel) {
      return {
        openPanel: open,
        prevOpenPanel: open,
      }
    }
    return null
  }

  togglePanel = panelId => {
    const { onToggle } = this.props

    this.setState(
      ({ openPanel }) => {
        return {
          openPanel: openPanel === panelId ? undefined : panelId,
        }
      },
      () => {
        if (onToggle) {
          onToggle(this.state.openPanel)
        }
      }
    )
  }

  isPanelOpen = panelId => {
    return this.state.openPanel === panelId
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

Accordion.propTypes = {
  /**
   * A panel identifier to programmatically open.
   */
  open: PropTypes.string,
  /**
   * Whether or not to show the divider above the first panel.
   */
  topDivider: PropTypes.bool,
  /**
   * A callback function to be invoked when any panel is opened or closed.
   *
   * @param {String} openPanel The currently open panel identifier.
   */
  onToggle: PropTypes.func,
  /**
   * The expandable panels. Must be at least one `Accordion.Panel`.
   */
  children: componentWithName('Panel').isRequired,
}

Accordion.defaultProps = {
  open: undefined,
  topDivider: true,
  onToggle: undefined,
}

Accordion.Panel = Panel

export default Accordion
