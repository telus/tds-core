import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Edit = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M19.717 2c.612 0 1.198.235 1.61.646a2.275 2.275 0 01.135 3.086l-.138.148L7.11 20.093a2.215 2.215 0 01-.227.205l-.03.015-4.114 1.648a.544.544 0 01-.581-.119.536.536 0 01-.146-.495l.027-.087 1.644-4.118a.519.519 0 01.07-.124l.05-.056L18.107 2.646A2.281 2.281 0 0119.718 2zm-15.1 15.715l-1.11 2.776 2.772-1.11-1.663-1.666zM16.114 6.167L5.358 16.931l1.68 1.682 1.335-1.37c1.2-1.216 3.012-3.027 5.672-5.67l3.753-3.721-1.683-1.685zm4.454-2.753a1.222 1.222 0 00-1.595-.096l-.103.091-1.993 1.995 1.686 1.689 2.002-1.982c.23-.224.355-.524.355-.844a1.19 1.19 0 00-.352-.853z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

Edit.displayName = 'Dependent'

export default Edit
