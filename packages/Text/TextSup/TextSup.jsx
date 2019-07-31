import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { sup } from '@tds/shared-typography'

import { deprecate } from '../../../shared/utils/warn'
import safeRest from '../../../shared/utils/safeRest'

const StyledTextSup = styled.sup(sup)

/**
 * @deprecated Superscript text an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Text.Sup`._
 */
const TextSup = ({ children, ...rest }) => {
  deprecate(
    '@tds/core-text',
    'The Text.Sup component is deprecated. Please use a standard HTML sup element instead.'
  )
  return <StyledTextSup {...safeRest(rest)}>{children}</StyledTextSup>
}

TextSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.node.isRequired,
}

TextSup.displayName = 'Text.Sup'

export default TextSup
