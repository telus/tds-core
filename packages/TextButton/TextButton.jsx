import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { componentWithName, or } from '@tds/util-prop-types'
import { colorGreyRaven, colorWhite, colorGreyGainsboro, colorGreyShark } from '@tds/core-colours'
import { medium } from '@tds/shared-typography'
import { safeRest } from '@tds/util-helpers'

const baseButton = {
  boxSizing: 'border-box',
  padding: '0.25rem 0rem',
  cursor: 'pointer',
  background: colorWhite,
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  borderRadius: '0.1875rem',
  color: colorGreyShark,
  textDecoration: 'underline',
  borderStyle: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  '&:active': {
    background: colorGreyGainsboro,
    boxShadow: `0 0 0 0.125rem ${colorGreyGainsboro}`,
    textDecoration: 'underline',
  },
  '&:focus': {
    outline: 'none !important',
    boxShadow: `0 0 0 0.125rem ${colorGreyRaven}`,
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
}

export const StyledTextButton = styled.button(baseButton, medium)

/**
 * @version ./package.json
 */
const TextButton = ({ children, ...rest }) => (
  <StyledTextButton {...safeRest(rest)}>{children}</StyledTextButton>
)

TextButton.propTypes = {
  /**
   * The label. It can include the `A11yContent` component or strings.
   */
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

export default TextButton
