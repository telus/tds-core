import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../utils/safeRest'

import HairlineDivider from '../Dividers/HairlineDivider/HairlineDivider'
import PanelWrapper from './PanelWrapper/PanelWrapper'
import Panel from './Panel/Panel'

import styles from './ExpandCollapse.modules.scss'

const getPanelWrappers = (isPanelOpen, togglePanel, children) =>
  React.Children.map(children, panel => {
    const { id, header, subtext, disabled, onToggle } = panel.props

    return (
      <PanelWrapper
        panelId={id}
        panelHeader={header}
        panelSubtext={subtext}
        panelOnToggle={onToggle}
        panelDisabled={disabled}
        open={isPanelOpen(id)}
        onClick={() => togglePanel(id)}
      >
        {panel}
      </PanelWrapper>
    )
  })

const wrapWithDividers = panels =>
  panels.map((panel, index) => {
    const last = index === panels.length - 1

    return [
      <HairlineDivider key={1} />,
      panel,
      last && <HairlineDivider key={2} />,
    ]
  })

const Panels = ({ isPanelOpen, togglePanel, children, ...rest }) => {
  const panels = getPanelWrappers(isPanelOpen, togglePanel, children)

  return (
    <div {...safeRest(rest)} className={styles.base}>
      {wrapWithDividers(panels)}
    </div>
  )
}

Panels.propTypes = {
  isPanelOpen: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
  children: childrenOfType(Panel).isRequired,
}

export default Panels
