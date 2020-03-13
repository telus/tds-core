import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Add = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.957C5.958 1.043 1.043 5.958 1.043 12c0 6.042 4.915 10.957 10.957 10.957 6.042 0 10.957-4.915 10.957-10.957 0-6.042-4.915-10.957-10.957-10.957zm-.697 11.654l-5.7-.176A.632.632 0 0 1 5 11.892v.21c0-.332.27-.605.602-.605h5.697v-.1l.178-5.791a.64.64 0 0 1 .63-.606h-.209c.334 0 .605.267.605.602v5.895h5.895c.335 0 .602.27.602.605v-.21a.64.64 0 0 1-.606.63l-5.79.178-.101.001v5.697a.605.605 0 0 1-.605.602h.21a.632.632 0 0 1-.63-.603l-.175-5.7z"
        fillRule="nonzero"
      />
    </StyledDependentSVG>
  </Dependent>
)

Add.displayName = 'Dependent'

export default Add
