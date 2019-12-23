import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Profile = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 1c6.066 0 11.001 4.934 11.001 11 0 6.065-4.935 11-11 11C5.935 23 1 18.065 1 12 1 5.933 5.935 1 12 1zm0 12.745c-3.309 0-6.135 2.541-6.515 5.813a9.938 9.938 0 0013.03 0c-.378-3.271-3.206-5.813-6.514-5.813zM12 2.01C6.493 2.01 2.01 6.49 2.01 12c0 2.577.99 4.923 2.598 6.697.752-3.408 3.83-5.961 7.393-5.961 3.561 0 6.64 2.553 7.391 5.961a9.938 9.938 0 002.6-6.698c0-5.508-4.482-9.99-9.991-9.99zm0 2.315a3.538 3.538 0 013.534 3.535A3.538 3.538 0 0112 11.394 3.538 3.538 0 018.466 7.86 3.538 3.538 0 0112 4.325zm0 1.01A2.527 2.527 0 009.476 7.86 2.527 2.527 0 0012 10.384a2.527 2.527 0 002.525-2.524A2.527 2.527 0 0012 5.335z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

Profile.displayName = 'Dependent'

export default Profile
