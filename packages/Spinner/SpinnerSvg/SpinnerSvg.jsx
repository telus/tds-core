import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import joinClassNames from '../../../shared/utils/joinClassNames'
import safeRest from '../../../shared/utils/safeRest'
import uniqueId from './uniqueId'

import styles from './SpinnerSvg.modules.scss'

class SpinnerSvg extends React.Component {
  componentWillMount() {
    this.setState({
      titleId: uniqueId('spinner-title-'),
    })
  }

  render() {
    const { tip, overlay, a11yLabel, size, variant, ...rest } = this.props
    return (
      <div
        className={joinClassNames(styles.container, overlay && styles.centered)}
        data-testid="spinner"
      >
        <svg
          {...safeRest(rest)}
          className={styles.svg}
          viewBox="0 0 100 100"
          width={size === 'large' ? '100' : '50'}
          height={size === 'large' ? '100' : '50'}
          role="alert"
          aria-labelledby={this.state.titleId}
          aria-live="assertive"
          data-testid="svg"
        >
          <title id={this.state.titleId}>{a11yLabel}</title>
          <circle
            className={styles[`${size === 'small' ? variant : 'primary'}Circle`]}
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
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  overlay: PropTypes.bool,
  a11yLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf(['large', 'small']).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
}
SpinnerSvg.defaultProps = {
  tip: undefined,
  overlay: false,
}

export default SpinnerSvg
