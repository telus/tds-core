import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Set from 'core-js/es6/set'
import arrayFrom from 'core-js/fn/array/from'

import { isEqual } from '../../utils/sets'

import Panels from './Panels'
import Panel from './Panel/Panel'

class ExpandCollapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openPanels: new Set(props.open),
    }
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
  open: PropTypes.array,
  onToggle: PropTypes.func,
  children: childrenOfType(Panel).isRequired,
}

ExpandCollapse.defaultProps = {
  open: [],
  onToggle: undefined,
}

ExpandCollapse.Panel = Panel

export default ExpandCollapse
