import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import HairlineDivider from '@tds/core-hairline-divider'

import safeRest from '../../shared/utils/safeRest'

import PanelWrapper from './PanelWrapper/PanelWrapper'

import styles from './ExpandCollapse.modules.scss'

const Panels = ({ topDivider, isPanelOpen, togglePanel, tag, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles.base}>
    {topDivider && <HairlineDivider />}

    {React.Children.toArray(children)
      .filter(Boolean)
      .map(panel => {
        const { id, header, subtext, tertiaryText, disabled, onToggle } = panel.props

        return (
          <PanelWrapper
            key={id}
            panelId={id}
            panelHeader={header}
            panelSubtext={subtext}
            panelTertiaryText={tertiaryText}
            panelOnToggle={onToggle}
            panelDisabled={disabled}
            tag={tag}
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
  children: componentWithName('Panel').isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
}

Panels.defaultProps = {
  tag: undefined,
}

export default Panels
