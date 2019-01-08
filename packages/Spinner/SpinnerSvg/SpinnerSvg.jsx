/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'
import { colours } from '@tds/core-colours/colours.js'

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
    const { tip, overlay, a11yLabel, ...rest } = this.props

    const spinnerRotate = keyframes({
      '100%': {
        transform: 'rotate(360deg)',
      },
    })
    const spinnerDash = keyframes({
      '0%': {
        strokeDasharray: '1, 200',
        strokeDashoffset: 0,
      },

      '50%': {
        strokeDasharray: '89, 200',
        strokeDashoffset: -35,
      },

      '100%': {
        strokeDasharray: '89, 200',
        strokeDashoffset: -124,
      },
    })

    const style = {
      container: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',

        ...(overlay && {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          zIndex: 1600,
        }),
      },

      svg: {
        animation: `${spinnerRotate} 1.8s linear infinite`,
      },

      circle: {
        stroke: colours.colorAccessibleGreen,

        animation: `${spinnerDash} 1.7s ease-in-out infinite 0s`,
      },

      tip: {
        marginTop: '-1.5rem',
      },
    }

    return (
      <div css={style.container} data-testid="spinner">
        <svg
          {...safeRest(rest)}
          css={style.svg}
          viewBox="0 0 100 100"
          width="100"
          height="100"
          role="img"
          aria-labelledby={this.state.titleId}
          data-testid="svg"
        >
          <title id={this.state.titleId}>{a11yLabel}</title>
          <circle
            css={style.circle}
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
          <div css={style.tip}>
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

/** @component */
export default SpinnerSvg
