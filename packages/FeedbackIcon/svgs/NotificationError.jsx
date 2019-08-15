import React from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'
import { colorCardinal } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'

const copyDictionary = {
  en: {
    a11yText: 'Error',
  },
  fr: {
    a11yText: 'Erreur',
  },
}

const NotificationError = ({ copy, ...rest }) => (
  <FeedbackIcon {...rest}>
    <FeedbackIconSVG
      a11yText={getCopy(copyDictionary, copy).a11yText}
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill={colorCardinal}
        fillRule="evenodd"
        d="M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm10 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666zm-.003-2.5c.354 0 .644-.306.654-.69l.182-6.912c.01-.4-.285-.731-.654-.731H9.82c-.369 0-.664.33-.654.73l.175 6.912c.01.385.3.691.655.691z"
      />
    </FeedbackIconSVG>
  </FeedbackIcon>
)
NotificationError.displayName = 'NotificationError'

NotificationError.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string,
    }),
  ]).isRequired,
}

export default NotificationError
