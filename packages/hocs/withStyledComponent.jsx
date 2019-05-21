import React from 'react'

const withStyledComponent = StyledComponent => Component => props => {
  const WithStyledComponent = <Component {...props} styledComponent={StyledComponent} />
  return WithStyledComponent
}

export default withStyledComponent
