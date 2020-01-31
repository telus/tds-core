import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'

import { supportBoldCopyDictionary } from './navButtonText'

import NavButtonInteractiveIcon, { StyledInteractiveIconSVG } from '../../NavButton'

const SupportBold = forwardRef(({ copy, ...props }, ref) => (
  <NavButtonInteractiveIcon
    {...props}
    ref={ref}
    a11yText={getCopy(supportBoldCopyDictionary, copy).a11yText}
    copy={copy} // Passed in to satisfy styleguidist workaround
  >
    <StyledInteractiveIconSVG width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 1c6.065 0 11 4.934 11 11 0 6.065-4.935 11-11 11-6.066 0-11-4.935-11-11C1 5.934 5.934 1 12 1zm0 1.878c-5.03 0-9.122 4.093-9.122 9.122 0 5.03 4.093 9.122 9.122 9.122 5.03 0 9.122-4.092 9.122-9.122S17.029 2.878 12 2.878zm0 12.58a1.17 1.17 0 110 2.34 1.17 1.17 0 010-2.34zm-.045-9.005c.694 0 1.274.096 1.738.285.463.19.837.427 1.12.711.284.285.488.589.608.917.123.326.184.632.184.915 0 .47-.061.855-.184 1.158a2.81 2.81 0 01-.454.777 3.04 3.04 0 01-.6.55c-.22.151-.428.302-.624.454a2.928 2.928 0 00-.52.52 1.417 1.417 0 00-.256.562l-.03.17v.558h-1.978v-.66c.03-.42.11-.772.241-1.055.133-.283.287-.525.462-.725.177-.201.361-.374.557-.522.196-.145.377-.292.542-.438.166-.148.302-.308.404-.484.102-.175.148-.395.14-.66 0-.449-.11-.78-.33-.996-.22-.215-.526-.323-.917-.323-.263 0-.49.051-.681.155-.19.102-.347.239-.469.41-.123.17-.213.37-.271.6a2.803 2.803 0 00-.082.546l-.005.195H8.394c.01-.529.1-1.011.273-1.451.17-.44.41-.82.717-1.144a3.223 3.223 0 011.114-.753 3.753 3.753 0 011.457-.272z"
        fillRule="evenodd"
      />
    </StyledInteractiveIconSVG>
  </NavButtonInteractiveIcon>
))

SupportBold.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

SupportBold.displayName = 'SupportBold'

export default SupportBold
