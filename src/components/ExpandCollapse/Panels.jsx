import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../utils/safeRest'

import HairlineDivider from '../Dividers/HairlineDivider/HairlineDivider'
import PanelWrapper from './PanelWrapper/PanelWrapper'
import Panel from './Panel/Panel'

import styles from './ExpandCollapse.modules.scss'

const Panels = ({ topDivider, isPanelOpen, togglePanel, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles.base}>
    {topDivider && <HairlineDivider />}

    {React.Children.map(children, panel => {
      const { id, header, subtext, tertiaryText, disabled, onToggle } = panel.props

      return (
        <PanelWrapper
          panelId={id}
          panelHeader={header}
          panelSubtext={subtext}
          panelTertiaryText={tertiaryText}
          panelOnToggle={onToggle}
          panelDisabled={disabled}
          open={isPanelOpen(id)}
          onClick={() => togglePanel(id)}
        >
          {panel}
        </PanelWrapper>
      )
    })}
  </div>
)

Panels.propTypes = {
  topDivider: PropTypes.bool.isRequired,
  isPanelOpen: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
  children: childrenOfType(Panel).isRequired,
}

export default Panels
