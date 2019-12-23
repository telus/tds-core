import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const OrderDescend = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 17c.327 0 .654-.122.907-.366l7.685-7.367c.855-.821.276-2.267-.907-2.267H4.315c-1.183 0-1.762 1.446-.907 2.267l7.685 7.367c.253.244.58.366.907.366zm0-1.005a.304.304 0 01-.215-.086L4.101 8.54a.294.294 0 01-.074-.34.292.292 0 01.288-.195h15.37c.172 0 .252.105.288.195a.29.29 0 01-.074.34l-7.684 7.369a.304.304 0 01-.215.086z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

OrderDescend.displayName = 'Dependent'

export default OrderDescend
