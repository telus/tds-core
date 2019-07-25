import React from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'
import { colorWhite } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const copyDictionary = {
  en: {
    a11yText: 'Warning',
  },
  fr: {
    a11yText: 'Avertissement',
  },
}

const NotificationWarning = ({ copy, ...rest }) => (
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
          fill="#8C5415"
          d="M10.8778956,1.60947522 L19.1933534,16.8544812 C19.4578161,17.3393295 19.2791583,17.9467662 18.7943099,18.2112289 C18.6474213,18.29135 18.4827768,18.3333333 18.3154578,18.3333333 L1.68454219,18.3333333 C1.13225744,18.3333333 0.68454219,17.8856181 0.68454219,17.3333333 C0.68454219,17.1660143 0.726525562,17.0013698 0.806646617,16.8544812 L9.12210443,1.60947522 C9.38656716,1.12462688 9.99400379,0.945969046 10.4788521,1.21043177 C10.6474186,1.30237715 10.7859502,1.4409087 10.8778956,1.60947522 Z"
        />
        <ellipse cx="10" cy="15.897" fill={colorWhite} rx="1" ry="1" />
        <path
          fill={colorWhite}
          d="M9.97841667,13.9102564 L9.97841667,13.9102564 C9.63175,13.9102564 9.34841667,13.6132051 9.33841667,13.2398718 L9.16675,6.54141026 C9.15675,6.15371795 9.44591667,5.83333333 9.80675,5.83333333 L10.15675,5.83333333 C10.5175833,5.83333333 10.80675,6.15371795 10.79675,6.54230769 L10.6184167,13.2407692 C10.6084167,13.6132051 10.3250833,13.9102564 9.97841667,13.9102564"
        />
      </g>
    </FeedbackIconSVG>
  </FeedbackIcon>
)
NotificationWarning.displayName = 'NotificationWarning'

NotificationWarning.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string,
    }),
  ]).isRequired,
}

export default NotificationWarning
