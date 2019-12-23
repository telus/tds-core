import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Download = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M22.5 18a.5.5 0 01.492.41l.008.09V23H1v-4.5a.5.5 0 01.992-.09L2 18.5V22h20v-3.5a.5.5 0 01.5-.5zM12.001 2c.253 0 .463.185.507.427l.008.093v15.718l5.604-5.604a.515.515 0 01.788.657l-.06.071-6.483 6.484a.51.51 0 01-.366.15.515.515 0 01-.3-.096l-.065-.054-6.483-6.484a.515.515 0 01.657-.788l.071.06 5.607 5.607V2.52c0-.285.23-.52.515-.52z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

Download.displayName = 'Dependent'

export default Download
