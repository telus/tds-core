import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import DecorativeIcon from '@tds/core-decorative-icon'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import DimpleDivider from '@tds/core-dimple-divider'
import { Reveal, Translate } from '@tds/shared-animation'

import Clickable from '../../../shared/components/Clickable/Clickable'
import Flexbox from '../../../shared/components/Flexbox/Flexbox'

import joinClassNames from '../../../shared/utils/joinClassNames'

import styles from './PanelWrapper.modules.scss'
import displayStyles from '../../../shared/styles/Display.modules.scss'

const parseHeader = text => {
  const t = text
    .replace('&trade;', '\u2122')
    .replace('&reg;', '\u00AE')
    .split('^^')
    .map((line, index) => {
      if (line === '') {
        return ''
      }
      if (index % 2 === 0) {
        return line
      }
      return <Text.Sup key={line}>{line}</Text.Sup>
    })
  return t
}

class PanelWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.contentWrapper = null
  }

  state = {
    open: this.props.open,
    hover: false,
    contentWrapperHeight: 0,
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

  adjustContentHeight = () => {
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

  renderCaret = (disabled, hover, open) => {
    return (
      <div className={disabled ? displayStyles.invisible : undefined}>
        <Translate timeout={300} in={hover} direction="y" distance={open ? '-0.25rem' : '0.25rem'}>
          {() => (
            <Text size="large">
              <DecorativeIcon symbol={open ? 'caretUp' : 'caretDown'} variant="primary" size={16} />
            </Text>
          )}
        </Translate>
      </div>
    )
  }

  renderHeader = (header, subtext, tertiaryText) => {
    return (
      <Flexbox direction="row" dangerouslyAddClassName={styles.headerAlign}>
        <Flexbox direction="column" dangerouslyAddClassName={styles.headerAlign}>
          <div className={styles.fullWidth}>
            <Text size="large">{parseHeader(header)}</Text>
          </div>
          {subtext && (
            <div className={styles.subtextContainer}>
              <Text size="small">{subtext}</Text>
            </div>
          )}
        </Flexbox>

        {tertiaryText && (
          <span className={styles.alignSelfFlexEnd}>
            <span className={styles.showFromMd}>
              <Text data-testid="tertiarytext" size="large">
                {tertiaryText}
              </Text>
            </span>
            <span className={styles.showUntilMd}>
              <Text data-testid="tertiarytext" size="medium">
                {tertiaryText}
              </Text>
            </span>
          </span>
        )}
      </Flexbox>
    )
  }

  renderPanelWrapper = () => {
    const {
      panelHeader,
      panelSubtext,
      panelTertiaryText,
      panelDisabled,
      tag,
      onClick,
      children,
    } = this.props

    const headerButton = (
      <Clickable
        onClick={onClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        className={joinClassNames(styles.header, panelDisabled && styles.disabled)}
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
    )

    return (
      <div>
        {tag
          ? React.createElement(tag, { 'data-testid': 'headerWrapper' }, headerButton)
          : headerButton}

        <Reveal
          timeout={this.state.open ? 500 : 0}
          duration={500}
          in={this.state.open}
          height={this.state.contentWrapperHeight}
        >
          {() => (
            <div
              ref={contentWrapper => {
                this.contentWrapper = contentWrapper
              }}
              data-testid="content"
            >
              <DimpleDivider />

              <Box inset={4}>
                <Text block>{children}</Text>
              </Box>
            </div>
          )}
        </Reveal>

        <HairlineDivider />
      </div>
    )
  }

  render() {
    const { panelId } = this.props

    return <div data-testid={panelId}>{this.renderPanelWrapper()}</div>
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
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  onClick: PropTypes.func.isRequired,
  children: componentWithName('Panel').isRequired,
}

PanelWrapper.defaultProps = {
  panelSubtext: undefined,
  panelTertiaryText: undefined,
  panelDisabled: false,
  panelOnToggle: undefined,
  open: false,
  tag: undefined,
}

export default PanelWrapper
