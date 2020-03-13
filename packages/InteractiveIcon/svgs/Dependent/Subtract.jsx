import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Subtract = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.957C5.958 1.043 1.043 5.958 1.043 12c0 6.042 4.915 10.957 10.957 10.957 6.042 0 10.957-4.915 10.957-10.957 0-6.042-4.915-10.957-10.957-10.957zM12 11l6.303.162c.387.01.697.329.697.712v-.388a.737.737 0 0 1-.7.723s-3.96.178-6.3.178c-1.994 0-6.3-.18-6.3-.18a.726.726 0 0 1-.7-.721v.388c0-.378.312-.702.697-.712L12 11z"
        fillRule="nonzero"
      />
    </StyledDependentSVG>
  </Dependent>
)

Subtract.displayName = 'Dependent'

export default Subtract
