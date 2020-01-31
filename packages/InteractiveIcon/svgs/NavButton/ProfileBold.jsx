import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'

import { profileBoldCopyDictionary } from './navButtonText'

import NavButtonInteractiveIcon, { StyledInteractiveIconSVG } from '../../NavButton'

const ProfileBold = forwardRef(({ copy, ...props }, ref) => (
  <NavButtonInteractiveIcon
    {...props}
    ref={ref}
    a11yText={getCopy(profileBoldCopyDictionary, copy).a11yText}
    copy={copy} // Passed in to satisfy styleguidist workaround
  >
    <StyledInteractiveIconSVG width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M11.999 1C18.065 1 23 5.934 23 11.999c0 6.066-4.935 11-11.001 11-6.065 0-10.999-4.934-10.999-11C1 5.934 5.934 1 11.999 1zm0 13.455c-2.747 0-5.096 1.99-5.648 4.628a9.024 9.024 0 0011.296 0c-.552-2.637-2.902-4.628-5.648-4.628zm0-11.524c-5 0-9.068 4.068-9.068 9.068 0 2.063.7 3.961 1.864 5.487 1.129-2.902 3.972-4.962 7.204-4.962 3.231 0 6.075 2.06 7.205 4.962a9.013 9.013 0 001.865-5.487c0-5-4.07-9.068-9.07-9.068zm0 1.248a3.866 3.866 0 013.862 3.862 3.866 3.866 0 01-3.862 3.861 3.866 3.866 0 01-3.861-3.861 3.866 3.866 0 013.861-3.862zm0 1.93c-1.065 0-1.93.867-1.93 1.932 0 1.064.865 1.93 1.93 1.93s1.931-.866 1.931-1.93c0-1.065-.866-1.931-1.93-1.931z"
        fillRule="evenodd"
      />
    </StyledInteractiveIconSVG>
  </NavButtonInteractiveIcon>
))

ProfileBold.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

ProfileBold.displayName = 'ProfileBold'

export default ProfileBold
