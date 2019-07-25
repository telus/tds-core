import React from 'react'
import PropTypes from 'prop-types'

import { colorWhite, colorShark } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const Checkmark = ({ a11yText, ...rest }) => (
  <FeedbackIcon {...rest}>
    <FeedbackIconSVG
      a11yText={a11yText}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs>
        <path
          id="check-a"
          d="M4.80704257,11.0724193 C4.78158917,11.1102831 4.75124181,11.1458298 4.71601955,11.1781862 L4.69030272,11.2018105 L4.58923996,11.3138257 C4.47110567,11.4447625 4.3131571,11.5069395 4.15716228,11.4993862 C3.99109613,11.5030099 3.82400439,11.4340415 3.70395505,11.295338 L0.158769778,7.19927455 C-0.0576056521,6.94927704 -0.0527868641,6.55339761 0.173024834,6.3113094 C0.397273114,6.07089731 0.763972727,6.0742436 0.984840742,6.31103179 L4.13955796,9.69314104 L13.0124245,0.180718232 C13.2371196,-0.0601728497 13.6006798,-0.0609687568 13.827974,0.182708796 C14.0536945,0.424699236 14.0580195,0.818890512 13.8366025,1.06430301 L4.80704257,11.0724193 Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)">
          <mask id="check-b" fill={colorWhite}>
            <use xlinkHref="#check-a" />
          </mask>
          <use fill={colorShark} xlinkHref="#check-a" />
          <g fill="#2B8000" mask="url(#check-b)">
            <rect width="14" height="12" />
          </g>
        </g>
        <rect width="16" height="16" />
      </g>
    </FeedbackIconSVG>
  </FeedbackIcon>
)
Checkmark.displayName = 'Checkmark'

Checkmark.propTypes = {
  a11yText: PropTypes.string,
}

Checkmark.defaultProps = {
  a11yText: undefined,
}

export default Checkmark
