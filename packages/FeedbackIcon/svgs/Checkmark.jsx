import React from 'react'
import PropTypes from 'prop-types'

import FeedbackIcon from '../FeedbackIcon'
import FeedbackIconSVG from '../FeedbackIconSVG'
import uniqueId from '../uniqueId'

const Checkmark = ({ a11yText, ...rest }) => {
  const checkA = uniqueId('check-a')
  return (
    <FeedbackIcon {...rest}>
      <FeedbackIconSVG a11yText={a11yText} width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id={checkA}
            d="M5.807 13.072a.592.592 0 0 1-.091.106l-.026.024-.1.112a.545.545 0 0 1-.433.185.581.581 0 0 1-.453-.204L1.159 9.2a.677.677 0 0 1 .014-.888.55.55 0 0 1 .812 0l3.155 3.382 8.872-9.512a.548.548 0 0 1 .816.002c.226.242.23.636.009.881l-9.03 10.008z"
          />
        </defs>
        <use
          fill="#2B8000"
          fillRule="evenodd"
          transform="translate(-1 -2)"
          xlinkHref={`#${checkA}`}
        />
      </FeedbackIconSVG>
    </FeedbackIcon>
  )
}
Checkmark.displayName = 'Checkmark'

Checkmark.propTypes = {
  a11yText: PropTypes.string,
}

Checkmark.defaultProps = {
  a11yText: undefined,
}

export default Checkmark
