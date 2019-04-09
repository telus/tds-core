import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { BaseButton } from '@tds/core-button'

const koodoTheme = {
  generate: (props) => ({
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
    fontWeight: '900',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px'
  })
}

/**
 * @version ./package.json
 */
const KDSButton = (props) => {
  return (
    <ThemeProvider theme={koodoTheme}>
      <BaseButton {...props} />
    </ThemeProvider>
  )
}

KDSButton.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

KDSButton.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default KDSButton
