import React from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'
import { colorWhite, colorTelusPurple } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const copyDictionary = {
  en: {
    a11yText: 'Location eligible',
  },
  fr: {
    a11yText: 'Emplacement admissible',
  },
}

const LocationSuccess = ({ copy, ...rest }) => (
  <FeedbackIcon {...rest}>
    <FeedbackIconSVG
      a11yText={getCopy(copyDictionary, copy).a11yText}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="locationsuccess-a"
          d="M9,24 C8.884,24 8.767,23.959 8.673,23.878 C8.339,23.59 0.5,16.718 0.5,8.5 C0.5,3.813 4.313,0 9,0 C13.687,0 17.5,3.813 17.5,8.5 C17.5,16.718 9.661,23.59 9.327,23.878 C9.233,23.959 9.116,24 9,24 Z M9,1 C4.864,1 1.5,4.364 1.5,8.5 C1.5,15.342 7.516,21.426 9,22.822 C10.483,21.425 16.5,15.334 16.5,8.5 C16.5,4.364 13.136,1 9,1 Z M9,14 C5.968,14 3.5,11.533 3.5,8.5 C3.5,5.467 5.968,3 9,3 C12.032,3 14.5,5.467 14.5,8.5 C14.5,11.533 12.032,14 9,14 Z M9,4 C6.519,4 4.5,6.019 4.5,8.5 C4.5,10.981 6.519,13 9,13 C11.481,13 13.5,10.981 13.5,8.5 C13.5,6.019 11.481,4 9,4 Z M8,11 C7.872,11 7.744,10.951 7.646,10.854 L5.646,8.854 C5.451,8.659 5.451,8.342 5.646,8.147 C5.841,7.952 6.158,7.952 6.353,8.147 L8,9.793 L11.646,6.147 C11.841,5.952 12.158,5.952 12.353,6.147 C12.548,6.342 12.548,6.659 12.353,6.854 L8.353,10.854 C8.256,10.951 8.128,11 8,11 Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(3)">
        <mask id="locationsuccess-b" fill={colorWhite}>
          <use xlinkHref="#locationsuccess-a" />
        </mask>
        <use fill={colorTelusPurple} xlinkHref="#locationsuccess-a" />
        <g fill="#2B8000" mask="url(#locationsuccess-b)">
          <rect width="24" height="24" transform="translate(-3)" />
        </g>
      </g>
    </FeedbackIconSVG>
  </FeedbackIcon>
)
LocationSuccess.displayName = 'LocationSuccess'

LocationSuccess.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string,
    }),
  ]).isRequired,
}

export default LocationSuccess
