import React from 'react'

import safeRest from '../../src/utils/safeRest'

import styles from './WaveDivider.modules.scss'

/**
 * Separate page content blocks.
 */
const WaveDivider = ({ ...rest }) => (
  <svg
    {...safeRest(rest)}
    className={styles.wave}
    xmlns="http://www.w3.org/2000/svg"
    width="1202"
    height="226"
    viewBox="0 0 1202 226"
  >
    <defs>
      <linearGradient
        id="TDS_WaveDivider_gradient-1"
        x1="600"
        y1="47.26"
        x2="600"
        y2="176.96"
        gradientTransform="matrix(1, 0, 0, -1, 0, 227.8)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#d8d8d8" />
      </linearGradient>
      <linearGradient
        id="TDS_WaveDivider_gradient-2"
        x1="600"
        y1="224.7"
        x2="600"
        y2="70.2"
        gradientTransform="matrix(1, 0, 0, -1, 0, 227.8)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.19" stopColor="#fff" />
        <stop offset="1" stopColor="#d8d8d8" />
      </linearGradient>
      <linearGradient
        id="TDS_WaveDivider_gradient-3"
        x1="146.95"
        y1="82.92"
        x2="146.95"
        y2="122.08"
        xlinkHref="#TDS_WaveDivider_gradient-1"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-4"
        x1="146.95"
        y1="224.7"
        x2="146.95"
        y2="70.2"
        xlinkHref="#TDS_WaveDivider_gradient-2"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-5"
        x1="1076.11"
        y1="102.31"
        x2="1076.11"
        y2="163.51"
        xlinkHref="#TDS_WaveDivider_gradient-1"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-6"
        x1="1128.83"
        y1="213.27"
        x2="1061.33"
        y2="87.28"
        xlinkHref="#TDS_WaveDivider_gradient-2"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-7"
        x1="28.8"
        y1="115"
        x2="170.73"
        y2="115"
        gradientTransform="matrix(1, 0, 0, -1, 0, 228)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="TDS_WaveDivider_gradient-8"
        x1="1185.42"
        y1="113.95"
        x2="1041.42"
        y2="115.95"
        xlinkHref="#TDS_WaveDivider_gradient-7"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-9"
        x1="601"
        y1="-2"
        x2="601"
        y2="52.08"
        xlinkHref="#TDS_WaveDivider_gradient-7"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-10"
        x1="600.78"
        y1="222.98"
        x2="600.78"
        y2="160.94"
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#TDS_WaveDivider_gradient-7"
      />
      <linearGradient
        id="TDS_WaveDivider_gradient-11"
        x1="601.22"
        y1="64.89"
        x2="601.22"
        y2="2.85"
        gradientTransform="translate(0.01 -0.21) rotate(0.02)"
        xlinkHref="#TDS_WaveDivider_gradient-7"
      />
    </defs>
    <g>
      <g>
        <path
          className={styles.noFill}
          d="M293.89 144.8c24.26 1.32 47.12 2.06 67.8 2.06 193 0 395.64-56 590.52-67C886.68 66.05 821.57 56.1 769.84 56.1 614.41 56.1 452.32 117.3 293.89 144.8Z"
        />
        <g className={styles.opacity3}>
          <path
            className={styles.gradient1}
            d="M1200 146c-57.54-18-153.12-46.11-247.79-66.1-194.87 11.06-397.57 67-590.52 67-20.69 0-43.55-.74-67.8-2.06-46 8-91.66 13.16-136.77 13.16-42.2 0-100.58-6.26-157.12-14.1V224H1200Z"
          />
          <g className={styles.opacity2}>
            <path d="M1200 146c-57.54-18-153.12-46.11-247.79-66.1-194.87 11.06-397.57 67-590.52 67-20.69 0-43.55-.74-67.8-2.06-46 8-91.66 13.16-136.77 13.16-42.2 0-100.58-6.26-157.12-14.1V224H1200Z" />
          </g>
        </g>
        <path
          className={styles.gradient2}
          d="M769.84 56.1c51.74 0 116.84 10 182.38 23.79C973.58 78.68 994.85 78 1016 78c49.13 0 118.77 11.47 184 25.06V0H0V114.49c90.58 12.22 202.25 25.38 293.89 30.31C452.32 117.3 614.41 56.1 769.84 56.1Z"
        />
        <g className={styles.opacity3}>
          <path
            className={styles.gradient3}
            d="M293.89 144.8C202.25 139.8 90.58 126.67 0 114.45V143.9C56.54 151.74 114.92 158 157.12 158 202.23 158 247.91 152.8 293.89 144.8Z"
          />
          <g className={styles.opacity2}>
            <path d="M293.89 144.8C202.25 139.8 90.58 126.67 0 114.45V143.9C56.54 151.74 114.92 158 157.12 158 202.23 158 247.91 152.8 293.89 144.8Z" />
          </g>
        </g>
        <path
          className={styles.gradient4}
          d="M293.89 144.8C202.25 139.8 90.58 126.67 0 114.45V143.9C56.54 151.74 114.92 158 157.12 158 202.23 158 247.91 152.8 293.89 144.8Z"
        />
        <g className={styles.opacity3}>
          <path
            className={styles.gradient5}
            d="M952.21 79.89c94.67 20 190.24 48.11 247.79 66.1V103.05C1134.77 89.47 1065.13 78 1016 78 994.85 78 973.58 78.68 952.21 79.89Z"
          />
          <g className={styles.opacity2}>
            <path d="M952.21 79.89c94.67 20 190.24 48.11 247.79 66.1V103.05C1134.77 89.47 1065.13 78 1016 78 994.85 78 973.58 78.68 952.21 79.89Z" />
          </g>
        </g>
        <path
          className={styles.gradient6}
          d="M952.21 79.89c94.67 20 190.24 48.11 247.79 66.1V103.05C1134.77 89.47 1065.13 78 1016 78 994.85 78 973.58 78.68 952.21 79.89Z"
        />
        <rect className={styles.gradient7} width="180" height="226" />
        <rect className={styles.gradient8} x="1020" width="180" height="226" />
        <rect className={styles.gradient9} y="154" width="1202" height="72" />
      </g>
    </g>
    <g>
      <rect className={styles.gradient10} y="158.3" width="1201.56" height="67.5" />
      <rect
        className={styles.gradient11}
        x="0.44"
        y="0.21"
        width="1201.56"
        height="67.5"
        transform="translate(1202.45 67.7) rotate(179.98)"
      />
    </g>
  </svg>
)

export default WaveDivider
