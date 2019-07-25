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
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill={colorCardinal}
        fillRule="evenodd"
        d="M40,535 C40,529.48 44.48,525 50,525 C55.52,525 60,529.48 60,535 C60,540.52 55.52,545 50,545 C44.48,545 40,540.52 40,535 Z M50,540.833333 C50.4602373,540.833333 50.8333333,540.460237 50.8333333,540 C50.8333333,539.539763 50.4602373,539.166667 50,539.166667 C49.5397627,539.166667 49.1666667,539.539763 49.1666667,540 C49.1666667,540.460237 49.5397627,540.833333 50,540.833333 Z M49.9965927,538.333333 C50.3509482,538.333333 50.6405656,538.026852 50.6507874,537.642593 L50.833076,530.731481 C50.8432978,530.330556 50.5477176,530 50.1788813,530 L49.8211187,530 C49.4522824,530 49.1567022,530.330556 49.166924,530.730556 L49.3423981,537.641667 C49.3526199,538.026852 49.6422373,538.333333 49.9965927,538.333333 Z"
        transform="translate(-40 -525)"
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
