import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import { colorShark, colorShuttleGrey } from '@tds/core-colours'
import Paragraph from '@tds/core-paragraph'

import videoText from '../../../videoText'

import Checkmark from '../../svg/Checkmark'

const MenuContainer = styled.div({
  width: 114,
  padding: '1rem',
  backgroundColor: colorShark,
  borderRadius: 5,
})

const MenuDivider = styled.div({
  width: '100%',
  height: 1,
  backgroundColor: colorShuttleGrey,
})

const MenuButton = styled.button(({ selectedItem, itemValue }) => ({
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',

  width: '100%',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  verticalAlign: 'middle',
  rect: {
    fill: selectedItem === itemValue ? '#ffffff' : 'transparent',
  },

  ':hover': {
    '#checkmark': {
      rect: {
        fill: selectedItem === itemValue ? '#ffffff' : colorShuttleGrey,
      },
    },
  },
  ':focus': {
    '#checkmark': {
      rect: {
        fill: selectedItem === itemValue ? '#ffffff' : colorShuttleGrey,
      },
    },
  },
}))

const CheckmarkContainer = styled.div({
  width: 24,
  height: 24,
  marginTop: 2,
  outline: 'none',
})

const VideoMenu = ({ menuLabel, menuOptions, setSelection, selectedItem, copy, ...rest }) => {
  const getMenuItems = () => {
    return menuOptions.map(option => {
      if (option.name) {
        return (
          <MenuButton
            aria-haspopup="true"
            role="menuitem"
            aria-label={`${option.name} ${menuLabel}. ${
              selectedItem === option.value
                ? videoText[copy].itemSelected
                : videoText[copy].itemUnselected
            }`}
            selectedItem={selectedItem}
            itemValue={option.value}
            onClick={() => {
              if (selectedItem !== option.value) {
                setSelection(option.value)
              }
            }}
            key={option.value}
            id={`menuSelection-${option.value}`}
          >
            <Paragraph invert bold>
              {option.name}
            </Paragraph>
            <CheckmarkContainer id="checkmark">
              <Checkmark />
            </CheckmarkContainer>
          </MenuButton>
        )
      }
      return null
    })
  }

  const handleOnKeyDown = event => {
    const key = event.key || event.keyCode

    // Disables playing by space bar, as that can be used to click a button
    if (key === ' ' || key === 32) {
      event.stopPropagation()
    }
  }

  return (
    <MenuContainer onKeyDown={handleOnKeyDown} {...rest}>
      <Box between={2}>
        <Paragraph invert bold>
          {menuLabel}
        </Paragraph>
        <MenuDivider />
        <div role="menu">{getMenuItems()}</div>
      </Box>
    </MenuContainer>
  )
}
VideoMenu.propTypes = {
  menuLabel: PropTypes.string.isRequired,
  menuOptions: PropTypes.array.isRequired,
  setSelection: PropTypes.func.isRequired,
  selectedItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  copy: PropTypes.oneOf(['en', 'fr']).isRequired,
}

VideoMenu.defaultProps = {}

export default VideoMenu
