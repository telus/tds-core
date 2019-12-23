import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Search = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M10.5 2c4.687 0 8.5 3.813 8.5 8.5 0 2.175-.82 4.161-2.17 5.666l6.036 6.029a.477.477 0 010 .67.468.468 0 01-.666 0l-6.037-6.031A8.466 8.466 0 0110.5 19C5.813 19 2 15.187 2 10.5 2 5.813 5.813 2 10.5 2zm0 1C6.364 3 3 6.364 3 10.5S6.364 18 10.5 18c4.137 0 7.5-3.364 7.5-7.5S14.637 3 10.5 3z"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

Search.displayName = 'Dependent'

export default Search
