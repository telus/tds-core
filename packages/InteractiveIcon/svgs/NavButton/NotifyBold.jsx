import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'

import { notifyBoldCopyDictionary } from './navButtonText'

import NavButtonInteractiveIcon, { StyledInteractiveIconSVG } from '../../NavButton'

const NotifyBold = forwardRef(({ copy, ...props }, ref) => (
  <NavButtonInteractiveIcon
    {...props}
    ref={ref}
    a11yText={getCopy(notifyBoldCopyDictionary, copy).a11yText}
    copy={copy} // Passed in to satisfy styleguidist workaround
  >
    <StyledInteractiveIconSVG width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0c1.322 0 2.41 1.008 2.494 2.276l.006.16v1.346c2.54.86 4.402 3.006 4.728 5.73l.036.699c.014.333.026.75.026 1.176l-.003.698c.002 1.206.085 2.45.824 3.831l.169.298 1.542 2.544c.228.373.237.844.02 1.228-.196.35-.55.58-.946.623l-.133.007h-5.865l.025.19c.008.079.012.134.012.181 0 1.661-1.323 3.013-2.95 3.013-1.627 0-2.95-1.352-2.95-3.013 0-.063.006-.142.02-.251l.016-.12H3.237c-.45 0-.863-.24-1.081-.63a1.22 1.22 0 01-.046-1.102l.069-.129 1.545-2.547c.937-1.57 1.027-2.962.993-4.352l-.014-.606c-.006-.859.062-1.666.065-1.704.318-2.658 2.067-4.76 4.48-5.674l.252-.09V2.436C9.5 1.093 10.622 0 12 0zm1.136 20.616h-2.302c-.003.042-.01.083-.01.126 0 .755.52 1.367 1.16 1.367.64 0 1.16-.612 1.16-1.367 0-.043-.005-.084-.008-.126zM12 5.372c-2.697 0-4.807 1.696-5.21 4.152l-.032.225s-.068.823-.053 1.62l.016.662c.018 1.447-.12 3.098-1.11 4.904l-.174.304-.835 1.377h14.795l-.831-1.37c-1.128-1.891-1.27-3.592-1.279-5.023l.003-1a30.047 30.047 0 00-.053-1.528c-.303-2.523-2.46-4.323-5.237-4.323zm0-3.46c-.38 0-.696.27-.746.622l-.006.097v.778a7.63 7.63 0 011.255-.02l.248.02v-.778c0-.397-.337-.719-.751-.719z"
        fillRule="evenodd"
      />
    </StyledInteractiveIconSVG>
  </NavButtonInteractiveIcon>
))

NotifyBold.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

NotifyBold.displayName = 'NotifyBold'

export default NotifyBold
