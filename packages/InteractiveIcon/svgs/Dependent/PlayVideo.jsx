import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const PlayVideo = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.957C5.958 1.043 1.043 5.958 1.043 12c0 6.042 4.915 10.957 10.957 10.957 6.042 0 10.957-4.915 10.957-10.957 0-6.042-4.915-10.957-10.957-10.957zM9.4 17c-.08 0-.16 0-.16-.077-.16 0-.24-.155-.24-.31v-9.27c0-.154.08-.309.24-.309.16 0 .32-.077.4 0l7.2 4.636c.08.077.16.154.16.309 0 .154-.08.231-.16.309l-7.2 4.635C9.56 17 9.48 17 9.4 17zm.4-8.961v7.802l6.08-3.94L9.8 8.04z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

PlayVideo.displayName = 'Dependent'

export default PlayVideo
