import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '@tds/core-responsive'
import safeRest from '../../shared/utils/safeRest'

const isObject = item => {
  return item && typeof item === 'object' && !Array.isArray(item) && item !== null
}

const mergeDeep = (target, source) => {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    })
  }
  return target
}

const spacing = {
  mobile: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '2rem',
    6: '2.5rem',
    7: '3rem',
    8: '4rem',
  },
  desktop: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '2rem',
    5: '3rem',
    6: '4rem',
    7: '4.5rem',
    8: '6rem',
  },
}

const boxSpacing = (level, f) => {
  const mobileStyle = f(spacing.mobile[level])
  if (spacing.mobile[level] === spacing.desktop[level]) {
    return mobileStyle
  }
  const desktopStyle = media.from('md')(f(spacing.desktop[level]))

  return mergeDeep(mobileStyle, desktopStyle)
}

const flexDirectionStyles = ({ inline }) => ({ flexDirection: inline ? 'row' : 'column' })
const betweenStyles = ({ between, inline }) => {
  if (between == null) {
    return undefined
  }

  if (between === 'space-between') {
    return { justifyContent: 'space-between' }
  }

  const marginDirection = inline ? 'marginRight' : 'marginBottom'

  return boxSpacing(between, s => ({
    '> *:not(:last-child)': {
      [marginDirection]: s,
    },
  }))
}

const horizontalStyles = ({ horizontal }) => {
  if (horizontal == null) {
    return undefined
  }
  return boxSpacing(horizontal, s => ({
    paddingLeft: s,
    paddingRight: s,
  }))
}

const verticalStyles = ({ vertical }) => {
  if (vertical == null) {
    return undefined
  }
  return boxSpacing(vertical, s => ({
    paddingTop: s,
    paddingBottom: s,
  }))
}

const insetStyles = ({ inset }) => {
  if (inset == null) {
    return undefined
  }
  const vertical = verticalStyles({ vertical: inset })
  const horizontal = horizontalStyles({ horizontal: inset })

  return mergeDeep(vertical, horizontal)
}

const belowStyles = ({ below }) => {
  if (below == null) {
    return undefined
  }

  return boxSpacing(below, s => ({
    marginBottom: s,
  }))
}

const StyledBox = styled.div(props => ({
  display: props.between ? 'flex' : 'block',
  ...flexDirectionStyles(props),
  ...betweenStyles(props),
  ...horizontalStyles(props),
  ...verticalStyles(props),
  ...insetStyles(props),
  ...belowStyles(props),
}))

/**
 * Apply spacing within or around components.
 *
 * @version ./package.json
 */
const Box = ({ dangerouslyAddClassName, tag, ...rest }) => (
  <StyledBox {...safeRest(rest)} as={tag} className={dangerouslyAddClassName} />
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
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
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

export default Box
