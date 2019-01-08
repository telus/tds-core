/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName, or } from '@tds/util-prop-types'

import { colours } from '@tds/core-colours/colours.js'
import { breakpoints } from '@tds/core-responsive/breakpoints.js'
import { borders } from '../../styles/Borders.js'
import { forms } from '../../styles/Forms.js'
import { typography } from '../../styles/Typography/typography'

import safeRest from '../../utils/safeRest'

/**
 * A common base for Button and ButtonLink.
 */
const BaseButton = ({ element, variant, dangerouslyAddClassName, children, ...rest }) => {
  const style = {
    sizing: {
      ...borders.none,
      ...borders.rounded,
      ...typography.medium,
      ...typography.boldFont,
      ...forms.height,
      ...forms.font,

      margin: 0,
      padding: '0 2rem',

      cursor: 'pointer',

      background: 'none',
      transition: 'background 0.2s',

      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',

      [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
        display: 'inline-flex',

        width: 'auto',
        minWidth: 180,
      },
    },
    '.inline + .inline': {
      marginLeft: '1rem',
    },

    primary: {
      backgroundColor: colours.colorPrimary,
      color: colours.colorWhite,

      '&:hover': {
        boxShadow: '0 0 0 1px',
        backgroundColor: colours.colorWhite,
        color: colours.colorPrimary,
      },
    },
    secondary: {
      backgroundColor: colours.colorSecondary,
      color: colours.colorWhite,

      '&:hover': {
        boxShadow: '0 0 0 1px',
        backgroundColor: colours.colorWhite,
        color: colours.colorSecondary,
      },
    },
    inverted: {
      backgroundColor: colours.colorWhite,
      color: colours.colorText,

      '&:hover': {
        boxShadow: '0 0 0 1px',
        backgroundColor: 'transparent',
        color: colours.colorWhite,
      },
    },
  }
  return jsx(
    element,
    {
      ...safeRest(rest),
      css: [style.sizing, style[variant]],
      className: dangerouslyAddClassName,
    },
    children
  )
}

BaseButton.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

BaseButton.defaultProps = {
  dangerouslyAddClassName: undefined,
}

/** @component */
export default BaseButton
