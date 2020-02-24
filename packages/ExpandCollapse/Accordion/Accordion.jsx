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
   * Panel content. Can be text, any HTML element, or any component.
   * If content is not provided, only the Panel heading will be
   * displayed in a non-interactive manner. See documentation for usage.
   *
   * @since 2.1.0
   */
  children: componentWithName('Panel'),
}

Accordion.defaultProps = {
  open: undefined,
  topDivider: true,
  onToggle: undefined,
  children: undefined,
}

Accordion.Panel = Panel

export default Accordion
