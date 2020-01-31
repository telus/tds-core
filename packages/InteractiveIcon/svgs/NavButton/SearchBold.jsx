import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'

import { searchBoldCopyDictionary } from './navButtonText'

import NavButtonInteractiveIcon, { StyledInteractiveIconSVG } from '../../NavButton'

const SearchBold = forwardRef(({ copy, ...props }, ref) => (
  <NavButtonInteractiveIcon
    {...props}
    ref={ref}
    a11yText={getCopy(searchBoldCopyDictionary, copy).a11yText}
    copy={copy} // Passed in to satisfy styleguidist workaround
  >
    <StyledInteractiveIconSVG width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.022 1l.253.003c4.994.13 8.935 4.278 8.806 9.267a8.985 8.985 0 01-1.728 5.087l-.189.249 5.604 5.897c.3.316.306.802.034 1.133l-.074.08-.03.028a.945.945 0 01-1.173.098l-.092-.072-6.081-5.418a9.01 9.01 0 01-5.543 1.719c-4.993-.13-8.935-4.278-8.806-9.267C1.13 4.898 5.144 1.008 10.023 1zm.02 1.81a7.214 7.214 0 100 14.43 7.214 7.214 0 000-14.43z" />
    </StyledInteractiveIconSVG>
  </NavButtonInteractiveIcon>
))

SearchBold.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}
SearchBold.displayName = 'SearchBold'

export default SearchBold
