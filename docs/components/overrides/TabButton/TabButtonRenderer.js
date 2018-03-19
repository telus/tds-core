/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'
import cx from 'classnames'

export const styles = function styles(_ref) {
  const space = _ref.space
  const color = _ref.color
  const fontFamily = _ref.fontFamily
  const fontSize = _ref.fontSize
  const buttonTextTransform = _ref.buttonTextTransform

  return {
    button: {
      padding: [[space[1], 0]],
      fontFamily: fontFamily.base,
      fontSize: fontSize.base,
      color: '#575757',
      background: 'transparent',
      textTransform: buttonTextTransform,
      transition: 'color 750ms ease-out',
      border: 'none',
      cursor: 'pointer',
      '&:hover, &:focus': {
        isolate: false,
        outline: 0,
        color: '#000',
        transition: 'color 150ms ease-in',
      },
      '&:focus:not($isActive)': {
        isolate: false,
        outline: [[1, 'dotted', color.linkHover]],
      },
      '& + &': {
        isolate: false,
        marginLeft: space[1],
      },
    },
    isActive: {
      borderBottom: [[2, color.linkHover, 'solid']],
    },
  }
}

export function TabButtonRenderer({ classes, name, className, onClick, active, children }) {
  const classNames = cx(classes.button, className, {
    [classes.isActive]: active,
  })

  return (
    <button type="button" name={name} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

TabButtonRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

TabButtonRenderer.defaultProps = {
  name: undefined,
  className: undefined,
  onClick: undefined,
  active: undefined,
}

export default Styled(styles)(TabButtonRenderer)
