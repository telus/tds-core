import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Consumer } from '../../shared/utils/context'
import { warn } from '../../shared/utils/warn'

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
    fill: invert && '#FFFFFF',
  }
}
export const StyledDependentSVG = styled.svg(positionStyles, invertStyles, ({ paragraphSize }) => ({
  width: paragraphSize === 'small' ? 20 : 24,
  height: paragraphSize === 'small' ? 20 : 24,
}))

const Dependent = ({ invert, children, parentType, ...rest }) => {
  if (parentType !== 'a' && parentType !== 'button') {
    warn('Dependent', 'Icon must be contained in an <a> or <button>')
  }

  return (
    <Consumer>
      {({ paragraphSize }) => {
        return React.cloneElement(children, { paragraphSize, invert, ...rest })
      }}
    </Consumer>
  )
}

Dependent.propTypes = {
  /**
   * @ignore
   */
  parentType: PropTypes.oneOf(['a', 'button']),
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
  parentType: undefined,
  invert: false,
}

export default Dependent
