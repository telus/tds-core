import React from 'react'

import { colorRajahDark } from '@tds/core-colours'

import FeedbackIcon from '../FeedbackIcon'

const copyDictionary = {
  en: {
    a11yText: 'Warning',
  },
  fr: {
    a11yText: 'Avertissement',
  },
}

const NotificationWarning = props => (
  <FeedbackIcon
    {...props}
    copyDictionary={copyDictionary}
    width={20}
    height={20}
    viewBox="0 0 20 20"
  >
    <path
      fill={colorRajahDark}
      fillRule="evenodd"
      d="M10.878 1.61l8.315 15.244a1 1 0 0 1-.878 1.48H1.685a1 1 0 0 1-.878-1.48L9.122 1.61a1 1 0 0 1 1.756 0zM10 16.794c.46 0 .833-.402.833-.898 0-.495-.373-.897-.833-.897-.46 0-.833.402-.833.897 0 .496.373.898.833.898zm-.022-2.885c.347 0 .63-.297.64-.67l.179-6.698c.01-.388-.28-.709-.64-.709h-.35c-.361 0-.65.32-.64.708l.171 6.699c.01.373.294.67.64.67z"
    />
  </FeedbackIcon>
)
NotificationWarning.displayName = 'NotificationWarning'

export default NotificationWarning
