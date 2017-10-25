import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../src/components/Box/Box'
import Heading from '../../../src/components/Typography/Heading/Heading'

const MarkdownHeading = ({spacing, level, children}) => (
  <Box spacing="margin" bottom={spacing}>
    <Heading level={level}>{children}</Heading>
  </Box>
)

MarkdownHeading.propTypes = {
  spacing: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default MarkdownHeading
