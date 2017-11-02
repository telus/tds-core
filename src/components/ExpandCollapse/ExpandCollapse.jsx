import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'
import Set from 'core-js/es6/set'

import safeRest from '../../utils/safeRest'
import { isEqual } from '../../utils/sets'

import PanelWrapper from './PanelWrapper/PanelWrapper'
import Panel from './Panel/Panel'

class ExpandCollapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      panels: new Set(props.open),
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextPanels = new Set(nextProps.open)

    if (!isEqual(this.state.panels, nextPanels)) {
      this.setState({ panels: nextPanels })
    }
  }

  togglePanel = panelId => {
    const { onToggle } = this.props

    this.setState(
      ({ panels }) => {
        const nextPanels = new Set(panels)

        if (nextPanels.has(panelId)) {
          nextPanels.delete(panelId)
        } else {
          nextPanels.add(panelId)
        }

        return { panels: nextPanels }
      },
      () => {
        if (onToggle) {
          onToggle(this.state.panels)
        }
      }
    )
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <div {...safeRest(rest)}>
        {React.Children.map(children, (panel, index) => {
          const { id, header, onToggle } = panel.props

          return (
            <PanelWrapper
              panelId={id}
              panelHeader={header}
              panelOnToggle={onToggle}
              open={this.state.panels.has(id)}
              last={index === React.Children.count(children) - 1}
              onClick={() => this.togglePanel(id)}
            >
              {panel}
            </PanelWrapper>
          )
        })}
      </div>
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
