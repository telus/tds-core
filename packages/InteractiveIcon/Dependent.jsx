import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DependentIconSizeContext } from '@tds/util-helpers'
import {
  colorGreyShark,
  colorTelusPurple,
  colorWhite,
  colorAccessibleGreen,
} from '@tds/core-colours'

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

export const StyledDependentSVG = styled.svg.attrs({
  'aria-hidden': true,
  focusable: false,
})(
  positionStyles,
  ({ paragraphSize }) => ({
    width: paragraphSize === 'small' ? '1.25rem' : '1.5rem',
    height: paragraphSize === 'small' ? '1.25rem' : '1.5rem',
  }),
  ({ color }) => {
    let fill
    if (color === 'greyShark') {
      fill = colorGreyShark
    } else if (color === 'white') {
      fill = colorWhite
    } else if (color === 'telusPurple') {
      fill = colorTelusPurple
    } else if (color === 'accessibleGreen') {
      fill = colorAccessibleGreen
    }
    return { fill }
  }
)

const Dependent = ({ children, ...rest }) => {
  return (
    <DependentIconSizeContext.Consumer>
      {({ paragraphSize }) => {
        return React.cloneElement(children, {
          paragraphSize,
          'data-testid': 'dependentSvg',
          ...rest,
        })
      }}
    </DependentIconSizeContext.Consumer>
  )
}

Dependent.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['greyShark', 'white', 'telusPurple', 'accessibleGreen']),
}

Dependent.defaultProps = {
  color: 'greyShark',
}
export default Dependent
