import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../packages/Box/Box'
import Heading from '../../../packages/Heading/Heading'

const MarkdownHeading = ({ level, children }) => (
  <Box below={3}>
    <Heading level={level}>{children}</Heading>
  </Box>
)

MarkdownHeading.propTypes = {
  level: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default MarkdownHeading
