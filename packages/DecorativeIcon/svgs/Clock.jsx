import React from 'react'
import SVGIcon from '../SVGIcon'

const Clock = props => (
  <SVGIcon {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.9C6 22.9 1.1 18 1.1 12S6 1.1 12 1.1 22.9 6 22.9 12 18 22.9 12 22.9z" />
      <path d="M16.5 11.5h-4V3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5V12c0 .3.2.5.5.5h4.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
    </svg>
  </SVGIcon>
)

Clock.displayName = 'DecorativeIcon'

export default Clock
