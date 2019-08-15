import React from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'

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
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="#2B8000"
        fillRule="evenodd"
        d="M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm8.127 4.673a.633.633 0 0 0 .092-.105l7.734-8.572a.693.693 0 0 0-.009-.925.595.595 0 0 0-.882-.001l-7.514 8.055-2.612-2.8a.596.596 0 0 0-.88 0 .706.706 0 0 0-.014.928l3.038 3.51a.623.623 0 0 0 .486.219.587.587 0 0 0 .46-.2l.087-.097.014-.012z"
      />
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
