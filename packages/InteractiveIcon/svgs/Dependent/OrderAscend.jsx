import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const OrderAscend = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 7c-.327 0-.654.122-.907.366l-7.685 7.367c-.855.821-.276 2.267.907 2.267h15.37c1.183 0 1.762-1.446.907-2.267l-7.685-7.367A1.304 1.304 0 0012 7m0 1.005c.057 0 .14.015.215.086l7.684 7.369c.125.12.109.25.074.34a.292.292 0 01-.288.195H4.315a.292.292 0 01-.288-.195.29.29 0 01.074-.34l7.684-7.369A.304.304 0 0112 8.005"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

OrderAscend.displayName = 'Dependent'

export default OrderAscend
