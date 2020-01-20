import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colorWhite } from '@tds/core-colours'

import { DependentIconSizeContext } from '@tds/util-helpers'

const positionStyles = ({ paragraphSize }) => {
  let top = 0
  if (paragraphSize === 'large') {
    top = '-4px'
  }

  return {
    position: 'relative',
    top,
  }
}

const invertStyles = ({ invert }) => {
  return {
    fill: invert && colorWhite,
  }
}
export const StyledDependentSVG = styled.svg(positionStyles, invertStyles, ({ paragraphSize }) => ({
  width: paragraphSize === 'small' ? 20 : 24,
  height: paragraphSize === 'small' ? 20 : 24,
}))

const Dependent = ({ invert, children, ...rest }) => {
  return (
    <DependentIconSizeContext.Consumer>
      {({ paragraphSize }) => {
        return React.cloneElement(children, { paragraphSize, invert, ...rest })
      }}
    </DependentIconSizeContext.Consumer>
  )
}

Dependent.propTypes = {
  /**
   * @ignore
   */
  invert: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
}

Dependent.defaultProps = {
  invert: false,
}

export default Dependent
