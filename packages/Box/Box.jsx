import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { boxSpacing } from '../../shared/utils/media/media'
import safeRest from '../../shared/utils/safeRest'

const flexDirectionStyles = ({ inline }) => {
  if (inline === true) {
    return 'flex-direction: row;';
  }
  return 'flex-direction: column;';
}

const betweenStyles = ({ between, inline }) => {
  if (between == null) {
    return undefined
  }

  if (between === 'space-between') {
    return 'justify-content: space-between;'
  }

  const marginDirection = inline ? 'margin-right' : 'margin-bottom'
  return boxSpacing(between, spacing => `
    > *:not(:last-child) {
      ${marginDirection}: ${spacing};
    }
  `)
}

const horizontalStyles = ({ horizontal }) => {
  if (horizontal == null) {
    return undefined
  }
  return boxSpacing(horizontal, spacing => `
    padding-left: ${spacing};
    padding-right: ${spacing};
  `)
}

const verticalStyles = ({ vertical }) => {
  if (vertical == null) {
    return undefined
  }

  return boxSpacing(vertical, spacing => `
    padding-top: ${spacing};
    padding-bottom: ${spacing};
  `)
}

const insetStyles = ({ inset }) => {
  if (inset == null) {
    return undefined
  }
  const vertical = verticalStyles({ vertical: inset })
  const horizontal = horizontalStyles({ horizontal: inset })

  return vertical.concat(horizontal)
}

const belowStyles = ({ below }) => {
  if (below == null) {
    return undefined
  }

  return boxSpacing(below, spacing => `
    margin-bottom: ${spacing};
  `)
}

const StyledBox = styled.div.attrs(({ dangerouslyAddClassName, tag }) => {
  return { className: dangerouslyAddClassName, as: tag }
})`
  display: ${props => props.between ? 'flex' : 'block'};
  ${flexDirectionStyles}
  ${betweenStyles}
  ${horizontalStyles}
  ${verticalStyles}
  ${insetStyles}
  ${belowStyles}
`

/**
 * Apply spacing within or around components.
 *
 * @version ./package.json
 */
const Box = (props) => (
  <StyledBox {...safeRest(props)} />
)

Box.propTypes = {
  /**
   * Specify an HTML element to render, such as `section`.
   */
  tag: PropTypes.string,
  /**
   * Indent content from the container's top and bottom edge by applying padding.
   */
  vertical: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Indent content from the container's left and right edge by applying padding.
   */
  horizontal: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Indent content from all of the container's edges by applying padding.
   */
  inset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * @ignore
   *
   * We are keeping this hidden for now as we are not sold on the necessity. We use it internally still to apply
   * spacing to Markdown components, but would like to use between instead if the library allows it.
   *
   * Sets a `margin-bottom`.
   */
  below: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Create either a block or an inline stack, applying margin in between every direct child. Margin will not be
   * applied to the last component in the stack.
   *
   * By default, `between` will arrange the Box's children as a flex column. Combine with `inline` to arrange them
   * as a flex row.
   */
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 'space-between']),
  /**
   * Arrange children in a row. Combine with `between` to apply margins in between the row's elements.
   */
  inline: PropTypes.bool,
  /**
   * Append custom classes to `className`. Use sparingly, and do not attempt to override Box style properties as that
   * may cause unexpected behaviour.
   *
   * You would typically use this feature to apply flex alignment properties in combination with `between`.
   */
  dangerouslyAddClassName: PropTypes.string,
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  inline: false,
  tag: 'div',
  vertical: undefined,
  horizontal: undefined,
  inset: undefined,
  below: undefined,
  between: undefined,
  dangerouslyAddClassName: undefined,
}

/** @component */
export default Box
