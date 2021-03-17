import React from 'react'

import { colorCardinal } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'

const Times = props => {
  return (
    <FeedbackIcon
      copy={{ a11yText: '' }}
      {...props}
      optionalText
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <path
        fill={colorCardinal}
        fillRule="evenodd"
        d="M8 9.17l-4.931 4.637a.756.756 0 0 1-1.034-.021l.176.175a.718.718 0 0 1-.003-1.012l4.781-4.782a40.59 40.59 0 0 1-.083-.085l-4.72-5.017a.753.753 0 0 1 .03-1.03l-.176.177a.714.714 0 0 1 1.012-.003L8 7.157l4.948-4.948a.714.714 0 0 1 1.012.003l-.176-.176a.753.753 0 0 1 .03 1.029l-4.72 5.017a40.59 40.59 0 0 1-.083.085l4.781 4.782a.718.718 0 0 1-.003 1.012l.176-.175a.756.756 0 0 1-1.034.021L8 9.17z"
      />
    </FeedbackIcon>
  )
}
Times.displayName = 'Times'

export default Times
