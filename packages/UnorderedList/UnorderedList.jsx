import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../shared/utils/safeRest'

import UnorderedItem from './UnorderedItem/UnorderedItem'

const StyledListContainer = styled(Box)({
  paddingLeft: '3rem',
})

const injectListStyle = (child, listStyle, size) => React.cloneElement(child, { listStyle, size })

/**
 * @version ./package.json
 */
const UnorderedList = ({ listStyle, size, children, ...rest }) => {
  const filteredChildren = React.Children.toArray(children).filter(child => child)
  return (
    <StyledListContainer {...safeRest(rest)} tag="ul" between={2}>
      {React.Children.map(filteredChildren, child => injectListStyle(child, listStyle, size))}
    </StyledListContainer>
  )
}

UnorderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  /**
   * The size of the list's text.
   *
   * @since 2.0.0
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The list items. Must be at least one `UnorderedList.Item`.
   */
  children: componentWithName('UnorderedItem').isRequired,
}

UnorderedList.defaultProps = {
  listStyle: 'circle',
  size: 'medium',
}

UnorderedList.Item = UnorderedItem

export default UnorderedList
