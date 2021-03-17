import React from 'react'

import { colorCardinal } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'

const copyDictionary = {
  en: {
    a11yText: 'Location not eligible',
  },
  fr: {
    a11yText: 'Emplacement non admissible',
  },
}

const LocationIneligible = props => {
  return (
    <FeedbackIcon
      {...props}
      copyDictionary={copyDictionary}
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill={colorCardinal}
        fillRule="evenodd"
        d="M12.5 9.207l-1.647 1.647a.498.498 0 0 1-.707 0 .5.5 0 0 1 0-.707l1.646-1.646-1.646-1.647a.5.5 0 0 1 .707-.707l1.646 1.646 1.647-1.646a.5.5 0 0 1 .707.707l-1.646 1.647 1.646 1.646a.5.5 0 0 1-.707.707l-1.647-1.646zM12.5 24a.501.501 0 0 1-.327-.122C11.839 23.59 4 16.718 4 8.5 4 3.813 7.813 0 12.5 0 17.187 0 21 3.813 21 8.5c0 8.218-7.839 15.09-8.173 15.378A.501.501 0 0 1 12.5 24zm0-23C8.364 1 5 4.364 5 8.5c0 6.842 6.016 12.926 7.5 14.322C13.983 21.425 20 15.334 20 8.5 20 4.364 16.636 1 12.5 1zm0 13A5.506 5.506 0 0 1 7 8.5C7 5.467 9.468 3 12.5 3S18 5.467 18 8.5 15.532 14 12.5 14zm0-10A4.505 4.505 0 0 0 8 8.5c0 2.481 2.019 4.5 4.5 4.5S17 10.981 17 8.5 14.981 4 12.5 4z"
      />
    </FeedbackIcon>
  )
}
LocationIneligible.displayName = 'LocationIneligible'

export default LocationIneligible
