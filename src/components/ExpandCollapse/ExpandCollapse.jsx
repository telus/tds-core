import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'
import Set from 'core-js/es6/set'

import safeRest from '../../utils/safeRest'

import PanelWrapper from './PanelWrapper/PanelWrapper'
import Panel from './Panel/Panel'

// TODO: Write some tests for this just to be sure...

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const setDifference = (start, compare) => {
  const difference = new Set(start)

  compare.forEach(element => difference.delete(element))

  return difference
}

const areSetsEqual = (a, b) => {
  const difference1 = setDifference(a, b)
  const difference2 = setDifference(b, a)

  return difference1.size === 0 && difference2.size === 0
}

class ExpandCollapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      panels: new Set(props.open),
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextPanels = new Set(nextProps.open)

    if (!areSetsEqual(this.state.panels, nextPanels)) {
      this.setState({ panels: nextPanels })
    }
  }

  togglePanel = panelId => {
    this.setState(({ panels }) => {
      const nextPanels = new Set(panels)

      if (nextPanels.has(panelId)) {
        nextPanels.delete(panelId)
      } else {
        nextPanels.add(panelId)
      }

      return { panels: nextPanels }
    })
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
  children: childrenOfType(Panel).isRequired,
}

ExpandCollapse.defaultProps = {
  open: [],
}

ExpandCollapse.Panel = Panel

export default ExpandCollapse
