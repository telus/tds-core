import React from 'react'
import PropTypes from 'prop-types'

import { colorCardinal, colorWhite, colorShark } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const Times = ({ a11yText, ...rest }) => (
  <FeedbackIcon {...rest}>
    <FeedbackIconSVG
      a11yText={a11yText}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs>
        <path
          id="times-a"
          d="M5.99913208,7.16982013 L1.06873364,11.8062002 C0.782053236,12.0710343 0.314984457,12.0649802 0.0346979049,11.7846734 L0.210542076,11.9605303 C-0.0676565822,11.6823115 -0.0709569963,11.2269689 0.207833836,10.9481579 L4.98872652,6.1669194 C4.95934926,6.13719427 4.93128141,6.10871852 4.90482623,6.08179119 L0.186771829,1.06473267 C-0.0775937638,0.77680694 -0.0625993824,0.314075391 0.215599276,0.0358566083 L0.0397551046,0.2117135 C0.320041657,-0.0685933273 0.771449728,-0.0716197644 1.05205426,0.209005064 L5.99913208,5.15644074 L10.9462099,0.209005064 C11.2268144,-0.0716197644 11.6782225,-0.0685933273 11.9585091,0.2117135 L11.7826649,0.0358566083 C12.0608635,0.314075391 12.0758579,0.77680694 11.8114923,1.06473267 L7.09343794,6.08179119 C7.06698275,6.10871852 7.03891491,6.13719427 7.00953764,6.1669194 L11.7904303,10.9481579 C12.0692212,11.2269689 12.0659207,11.6823115 11.7877221,11.9605303 L11.9635663,11.7846734 C11.6832797,12.0649802 11.2162109,12.0710343 10.9295305,11.8062002 L5.99913208,7.16982013 Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <mask id="times-b" fill={colorWhite}>
          <use xlinkHref="#times-a" />
        </mask>
        <use fill={colorShark} xlinkHref="#times-a" />
        <g fill={colorCardinal} mask="url(#times-b)">
          <rect width="12" height="12" />
        </g>
      </g>
    </FeedbackIconSVG>
  </FeedbackIcon>
)
Times.displayName = 'Times'

Times.propTypes = {
  a11yText: PropTypes.string,
}

Times.defaultProps = {
  a11yText: undefined,
}

export default Times
