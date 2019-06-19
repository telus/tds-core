import React from 'react'
import styled from 'styled-components'

import { borders, spacing } from '@tds/shared-styles'
import safeRest from '../../shared/utils/safeRest'

const StyledDimpleDivider = styled.hr(spacing.noSpacing, borders.none, {
  height: '2rem',
  backgroundImage:
    'radial-gradient(ellipse at top, rgba(150, 150, 150, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
})

/**
 * Separate modules.
 *
 * @version ./package.json
 */
const DimpleDivider = ({ ...rest }) => <StyledDimpleDivider {...safeRest(rest)} />

export default DimpleDivider
