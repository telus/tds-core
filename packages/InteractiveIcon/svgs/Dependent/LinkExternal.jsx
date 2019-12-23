import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const LinkExternal = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M4.302 5h5.883a.488.488 0 01.087.969l-.087.007H4.302a.325.325 0 00-.319.26l-.007.066v13.396c0 .158.112.289.26.319l.066.007h13.396a.325.325 0 00.319-.26l.007-.066V13.62a.488.488 0 01.968-.088l.008.088v6.078c0 .673-.513 1.228-1.169 1.295l-.133.007H4.302a1.304 1.304 0 01-1.295-1.169L3 19.698V6.302c0-.673.513-1.228 1.169-1.295L4.302 5h5.883-5.883zm8.458-2h7.733a.509.509 0 01.468.314l.003.019a.574.574 0 01.031.112l.005.06v7.736a.505.505 0 01-1 .091l-.009-.09V4.72L9.861 14.852a.503.503 0 01-.772-.643l.06-.07 10.127-10.13H12.76a.504.504 0 01-.091-1l.09-.009h7.734-7.733z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

LinkExternal.displayName = 'Dependent'

export default LinkExternal
