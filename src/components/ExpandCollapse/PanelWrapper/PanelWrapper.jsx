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

import joinClassNames from '../../../utils/joinClassNames'

import styles from './PanelWrapper.modules.scss'

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

  componentWillReceiveProps(nextProps) {
    const { panelOnToggle } = this.props

    if (this.state.open !== nextProps.open) {
      this.setState({ open: nextProps.open })

      if (panelOnToggle) {
        panelOnToggle(nextProps.open)
      }
    }
  }

  componentDidMount() {
    this.adjustContentHeight()
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

  renderHeader(header, subtext) {
    if (typeof header !== 'string') {
      return header
    }

    // FIXME: Use between here!
    return (
      <Flexbox direction="column">
        <Box spacing="margin" bottom={2}>
          <Text size="medium">{header}</Text>
        </Box>

        {subtext && <Text size="small">{subtext}</Text>}
      </Flexbox>
    )
  }

  render() {
    const {
      panelId,
      panelHeader,
      panelSubtext,
      panelDisabled,
      last,
      onClick,
      children,
    } = this.props

    return (
      <div data-testid={panelId}>
        <HairlineDivider />

        <Clickable
          onClick={onClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          dangerouslyAddClassName={joinClassNames(styles.header, panelDisabled && styles.disabled)}
          disabled={panelDisabled}
        >
          <Box vertical={3}>
            {/* padding */}
            <Flexbox direction="row">
              <Box right={3}>
                {' '}
                {/* margin */}
                {!panelDisabled && (
                  <Translate timeout={300} in={this.state.hover} direction="y" length="0.25rem">
                    {() => (
                      <DecorativeIcon
                        symbol={this.state.open ? 'caretUp' : 'caretDown'}
                        variant="primary"
                        size={16}
                      />
                    )}
                  </Translate>
                )}
              </Box>

              {this.renderHeader(panelHeader, panelSubtext)}
            </Flexbox>
          </Box>
        </Clickable>

        <Reveal timeout={500} in={this.state.open} height={this.state.contentWrapperHeight}>
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
  panelHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  panelSubtext: PropTypes.string,
  panelOnToggle: PropTypes.func,
  panelDisabled: PropTypes.bool,
  open: PropTypes.bool,
  last: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: childrenOfType(Panel).isRequired,
}

PanelWrapper.defaultProps = {
  panelSubtext: undefined,
  panelDisabled: false,
  panelOnToggle: undefined,
  open: false,
}

export default PanelWrapper
