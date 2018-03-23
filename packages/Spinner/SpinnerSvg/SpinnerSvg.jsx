import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import joinClassNames from '../../../shared/utils/joinClassNames'
import safeRest from '../../../shared/utils/safeRest'
import uniqueId from './uniqueId'

import styles from './SpinnerSvg.modules.scss'

class SpinnerSvg extends React.Component {
  // TODO: Check on SSR with this
  componentWillMount() {
    this.setState({
      titleId: uniqueId('spinner-title-'),
    })
  }

  render() {
    const { tip, overlay, a11yLabel, ...rest } = this.props

    return (
      <div
        className={joinClassNames(styles.container, overlay && styles.centered)}
        data-testid="spinner"
      >
        {/* TODO: hard coded colour. Can we use a class instead? */}
        <svg
          {...safeRest(rest)}
          className={styles.svg}
          viewBox="0 0 100 100"
          width="100"
          height="100"
          role="img"
          aria-labelledby={this.state.titleId}
          data-testid="svg"
        >
          <title id={this.state.titleId}>{a11yLabel}</title>
          <circle
            className={styles.circle}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="89, 200"
            strokeDashoffset="0"
            cx="50"
            cy="50"
            r="20"
          />
        </svg>
        {tip && (
          <div className={styles.tip}>
            <Text size="small">{tip}</Text>
          </div>
        )}
      </div>
    )
  }
}
SpinnerSvg.propTypes = {
  tip: PropTypes.string,
  overlay: PropTypes.bool,
  a11yLabel: PropTypes.string.isRequired,
}
SpinnerSvg.defaultProps = {
  tip: undefined,
  overlay: false,
}

export default SpinnerSvg
