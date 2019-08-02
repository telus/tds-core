import React from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'
import { colorCardinal } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const copyDictionary = {
  en: {
    a11yText: 'Location not eligible',
  },
  fr: {
    a11yText: 'Emplacement non admissible',
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
      <path
        fill={colorCardinal}
        fillRule="evenodd"
        transform="translate(3)"
        d="M8.9995,9.2075 L7.353,10.854 C7.256,10.951 7.128,11 7,11 C6.872,11 6.744,10.951 6.646,10.854 C6.451,10.659 6.451,10.342 6.646,10.147 L8.2925,8.5005 L6.646,6.854 C6.451,6.659 6.451,6.342 6.646,6.147 C6.841,5.952 7.158,5.952 7.353,6.147 L8.9995,7.7935 L10.646,6.147 C10.841,5.952 11.158,5.952 11.353,6.147 C11.548,6.342 11.548,6.659 11.353,6.854 L9.7065,8.5005 L11.353,10.147 C11.548,10.342 11.548,10.659 11.353,10.854 C11.256,10.951 11.128,11 11,11 C10.872,11 10.744,10.951 10.646,10.854 L8.9995,9.2075 Z M9,24 C8.884,24 8.767,23.959 8.673,23.878 C8.339,23.59 0.5,16.718 0.5,8.5 C0.5,3.813 4.313,0 9,0 C13.687,0 17.5,3.813 17.5,8.5 C17.5,16.718 9.661,23.59 9.327,23.878 C9.233,23.959 9.116,24 9,24 Z M9,1 C4.864,1 1.5,4.364 1.5,8.5 C1.5,15.342 7.516,21.426 9,22.822 C10.483,21.425 16.5,15.334 16.5,8.5 C16.5,4.364 13.136,1 9,1 Z M9,14 C5.968,14 3.5,11.533 3.5,8.5 C3.5,5.467 5.968,3 9,3 C12.032,3 14.5,5.467 14.5,8.5 C14.5,11.533 12.032,14 9,14 Z M9,4 C6.519,4 4.5,6.019 4.5,8.5 C4.5,10.981 6.519,13 9,13 C11.481,13 13.5,10.981 13.5,8.5 C13.5,6.019 11.481,4 9,4 Z"
      />
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
