import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Set from 'core-js/es6/set'
import arrayFrom from 'core-js/fn/array/from'

import safeRest from '../../utils/safeRest'
import { isEqual } from '../../utils/sets'

import PanelWrapper from './PanelWrapper/PanelWrapper'
import Panel from './Panel/Panel'

import styles from './ExpandCollapse.modules.scss'

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

  render() {
    const { children, ...rest } = this.props

    return (
      <div {...safeRest(rest)} className={styles.base}>
        {React.Children.map(children, (panel, index) => {
          const { id, header, subtext, disabled, onToggle } = panel.props

          return (
            <PanelWrapper
              panelId={id}
              panelHeader={header}
              panelSubtext={subtext}
              panelOnToggle={onToggle}
              panelDisabled={disabled}
              open={this.state.openPanels.has(id)}
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
