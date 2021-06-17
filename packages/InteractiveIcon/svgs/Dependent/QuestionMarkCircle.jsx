import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const QuestionMarkCircle = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2V2ZM13.0001 19H11.0001V17H13.0001V19V19ZM14.1699 12.17C13.4499 12.9 12.9999 13.5 12.9999 15H10.9999V14.5C10.9999 13.4 11.4499 12.4 12.1699 11.67L13.4099 10.41C13.7799 10.05 13.9999 9.55001 13.9999 9.00001C13.9999 7.90001 13.0999 7.00001 11.9999 7.00001C10.8999 7.00001 9.99989 7.90001 9.99989 9.00001H7.99989C7.99989 6.79001 9.78989 5.00001 11.9999 5.00001C14.2099 5.00001 15.9999 6.79001 15.9999 9.00001C15.9999 9.88001 15.6399 10.68 15.0699 11.25L14.1699 12.17Z"
      />
    </StyledDependentSVG>
  </Dependent>
)

QuestionMarkCircle.displayName = 'Dependent'

export default QuestionMarkCircle
