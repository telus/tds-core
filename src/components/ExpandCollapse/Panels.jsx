import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../utils/safeRest'

import PanelWrapper from './PanelWrapper/PanelWrapper'
import Panel from './Panel/Panel'

import styles from './ExpandCollapse.modules.scss'

const Panels = ({ isPanelOpen, togglePanel, children, ...rest }) => (
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
          open={isPanelOpen(id)}
          last={index === React.Children.count(children) - 1}
          onClick={() => togglePanel(id)}
        >
          {panel}
        </PanelWrapper>
      )
    })}
  </div>
)

Panels.propTypes = {
  isPanelOpen: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
  children: childrenOfType(Panel).isRequired,
}

export default Panels
