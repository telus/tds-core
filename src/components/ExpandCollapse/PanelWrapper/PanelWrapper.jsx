import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Box from '../../Box/Box'
import Flexbox from '../../Flexbox/Flexbox'
import Clickable from '../../Clickable/Clickable'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Text from '../../Typography/Text/Text'
import HairlineDivider from '../../Dividers/HairlineDivider/HairlineDivider'
import DimpleDivider from '../../Dividers/DimpleDivider/DimpleDivider'
import Reveal from '../../Animation/Reveal'
import Translate from '../../Animation/Translate'
import Panel from '../Panel/Panel'

import styles from '../Panel/Panel.modules.scss'

class PanelWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.contentWrapper = null

    this.state = {
      open: props.open,
      hover: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { panelOnToggle } = this.props

    if (this.state.open !== nextProps.open) {
      this.setState({ open: nextProps.open })

      if (panelOnToggle) {
        panelOnToggle(nextProps.open)
      }
    }
  }

  mouseEnter = () => {
    this.setState({ hover: true })
  }

  mouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    const { panelId, panelHeader, last, onClick, children } = this.props

    return (
      <div data-testid={panelId}>
        <HairlineDivider />

        <Clickable
          onClick={onClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          dangerouslyAddClassName={styles.header}
        >
          <Box vertical={3}>
            {/* padding */}
            <Flexbox direction="row">
              <Box right={3}>
                {' '}
                {/* margin */}
                <Translate timeout={300} in={this.state.hover} direction="y" length="0.25rem">
                  {() => <DecorativeIcon symbol="caretDown" variant="primary" />}
                </Translate>
              </Box>

              <Text size="medium">{panelHeader}</Text>
            </Flexbox>
          </Box>
        </Clickable>

        <Reveal
          timeout={500}
          in={this.state.open}
          height={this.contentWrapper ? this.contentWrapper.offsetHeight : 0}
        >
          {() => (
            <div
              ref={contentWrapper => {
                this.contentWrapper = contentWrapper
              }}
            >
              <DimpleDivider />

              <Box vertical={3}>
                <Text block>{children}</Text>
              </Box>
            </div>
          )}
        </Reveal>

        {last && <HairlineDivider />}
      </div>
    )
  }
}
PanelWrapper.propTypes = {
  panelId: PropTypes.string.isRequired,
  panelHeader: PropTypes.string.isRequired,
  panelOnToggle: PropTypes.func,
  open: PropTypes.bool,
  last: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: childrenOfType(Panel).isRequired,
}

PanelWrapper.defaultProps = {
  panelOnToggle: undefined,
  open: false,
}

export default PanelWrapper
