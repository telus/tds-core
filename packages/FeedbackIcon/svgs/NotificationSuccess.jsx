import React from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'
import { colorAthensGrey, colorWhite } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const copyDictionary = {
  en: {
    a11yText: 'Success',
  },
  fr: {
    a11yText: 'Réussite',
  },
}

const NotificationSuccess = ({ copy, ...rest }) => (
  <FeedbackIcon {...rest}>
    <FeedbackIconSVG
      a11yText={getCopy(copyDictionary, copy).a11yText}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#2B8000"
          d="M0,10 C0,15.52 4.48,20 10,20 C15.52,20 20,15.52 20,10 C20,4.48 15.52,0 10,0 C4.48,0 0,4.48 0,10 Z"
        />
        <path
          fill={colorAthensGrey}
          stroke={colorWhite}
          d="M7.55593031,13.7615835 L15.4118686,5.90564525 C15.5082845,5.80922936 15.6646055,5.80922936 15.7610214,5.90564525 C15.8574373,6.00206114 15.8574373,6.15838217 15.7610214,6.25479806 L7.73050671,14.2853128 C7.63409083,14.3817287 7.47776979,14.3817287 7.3813539,14.2853128 L4.23897858,11.1429374 C4.14256269,11.0465216 4.14256269,10.8902005 4.23897858,10.7937846 C4.33539447,10.6973687 4.49171551,10.6973687 4.5881314,10.7937846 L7.55593031,13.7615835 Z"
        />
      </g>
    </FeedbackIconSVG>
  </FeedbackIcon>
)
NotificationSuccess.displayName = 'NotificationSuccess'

NotificationSuccess.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string,
    }),
  ]).isRequired,
}

export default NotificationSuccess
