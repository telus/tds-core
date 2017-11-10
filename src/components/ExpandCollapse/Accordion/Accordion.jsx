import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Panels from '../Panels'
import Panel from '../Panel/Panel'

class Accordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openPanel: props.open,
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextPanel = nextProps.open

    if (this.state.openPanel !== nextPanel) {
      this.setState({ openPanel: nextPanel })
    }
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
  open: PropTypes.string,
  onToggle: PropTypes.func,
  children: childrenOfType(Panel).isRequired,
}

Accordion.defaultProps = {
  open: undefined,
  onToggle: undefined,
}

Accordion.Panel = Panel

export default Accordion
