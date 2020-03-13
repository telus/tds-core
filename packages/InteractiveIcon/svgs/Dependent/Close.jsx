import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Close = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 12.707l-4.147 4.146a.498.498 0 0 1-.707 0 .5.5 0 0 1 0-.707L11.293 12 7.146 7.853a.5.5 0 0 1 .707-.707L12 11.293l4.146-4.147a.5.5 0 0 1 .707.707L12.707 12l4.146 4.146a.5.5 0 0 1-.707.707L12 12.707zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.957C5.958 1.043 1.043 5.958 1.043 12c0 6.042 4.915 10.957 10.957 10.957 6.042 0 10.957-4.915 10.957-10.957 0-6.042-4.915-10.957-10.957-10.957z"
        fillRule="nonzero"
      />
    </StyledDependentSVG>
  </Dependent>
)

Close.displayName = 'Dependent'

export default Close
