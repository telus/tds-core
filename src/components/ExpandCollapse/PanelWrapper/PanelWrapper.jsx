import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Box from '../../Box/Box'
import Clickable from '../../Clickable/Clickable'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Text from '../../Typography/Text/Text'
import HairlineDivider from '../../Dividers/HairlineDivider/HairlineDivider'
import DimpleDivider from '../../Dividers/DimpleDivider/DimpleDivider'
import Reveal from '../../Animation/Reveal'
import Translate from '../../Animation/Translate'
import Panel from '../Panel/Panel'

import joinClassNames from '../../../utils/joinClassNames'

import styles from './PanelWrapper.modules.scss'
import Flexbox from '../../Flexbox/Flexbox'

class PanelWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.contentWrapper = null

    this.state = {
      open: props.open,
      hover: false,
      contentWrapperHeight: 0,
    }
  }

  componentDidMount() {
    this.adjustContentHeight()
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

  componentDidUpdate() {
    this.adjustContentHeight()
  }

  adjustContentHeight() {
    if (this.contentWrapper.offsetHeight !== this.state.contentWrapperHeight) {
      this.setState({ contentWrapperHeight: this.contentWrapper.offsetHeight })
    }
  }

  mouseEnter = () => {
    this.setState({ hover: true })
  }

  mouseLeave = () => {
    this.setState({ hover: false })
  }

  renderCaret(disabled, hover, open) {
    if (disabled) {
      // FIXME: Replace with undefined. And use "between" above
      return false
    }

    return (
      <Translate timeout={300} in={hover} direction="y" distance={open ? '-0.25rem' : '0.25rem'}>
        {() => (
          <DecorativeIcon symbol={open ? 'caretUp' : 'caretDown'} variant="primary" size={16} />
        )}
      </Translate>
    )
  }

  renderHeader(header, subtext, tertiaryText) {
    // FIXME: Figure out if the wrapping <div>s are necessary

    return (
      <Flexbox direction="row" dangerouslyAddClassName={styles.headerAlign}>
        <Box between={2} dangerouslyAddClassName={styles.headerAlign}>
          <div>
            <Text size="medium" bold={!!subtext}>
              {header}
            </Text>
          </div>

          {subtext && (
            <div>
              <Text size="small">{subtext}</Text>
            </div>
          )}
        </Box>

        {tertiaryText && <Text size="large">{tertiaryText}</Text>}
      </Flexbox>
    )
  }

  render() {
    const {
      panelId,
      panelHeader,
      panelSubtext,
      panelTertiaryText,
      panelDisabled,
      onClick,
      children,
    } = this.props

    return (
      <div data-testid={panelId}>
        <Clickable
          onClick={onClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          dangerouslyAddClassName={joinClassNames(styles.header, panelDisabled && styles.disabled)}
          disabled={panelDisabled}
          aria-expanded={this.state.open}
        >
          <Box vertical={3}>
            <Box inline between={3}>
              {this.renderCaret(panelDisabled, this.state.hover, this.state.open)}

              {this.renderHeader(panelHeader, panelSubtext, panelTertiaryText)}
            </Box>
          </Box>
        </Clickable>

        <Reveal timeout={500} in={this.state.open} height={this.state.contentWrapperHeight}>
          {() => (
            <div
              ref={contentWrapper => {
                this.contentWrapper = contentWrapper
              }}
              aria-hidden={!this.state.open}
              data-testid="content"
            >
              <DimpleDivider />

              <Box vertical={3}>
                <Text block>{children}</Text>
              </Box>
            </div>
          )}
        </Reveal>

        <HairlineDivider />
      </div>
    )
  }
}
PanelWrapper.propTypes = {
  panelId: PropTypes.string.isRequired,
  panelHeader: PropTypes.string.isRequired,
  panelSubtext: PropTypes.string,
  panelTertiaryText: PropTypes.string,
  panelOnToggle: PropTypes.func,
  panelDisabled: PropTypes.bool,
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: childrenOfType(Panel).isRequired,
}

PanelWrapper.defaultProps = {
  panelSubtext: undefined,
  panelTertiaryText: undefined,
  panelDisabled: false,
  panelOnToggle: undefined,
  open: false,
}

export default PanelWrapper
