import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import Heading from '../../../../packages/Heading/Heading'

// This interface must match the React Styleguidist MarkdownHeadingRenderer component
// https://github.com/styleguidist/react-styleguidist/blob/master/src/rsg-components/Markdown/MarkdownHeading/MarkdownHeadingRenderer.js
const MarkdownHeading = ({ level, children }) => (
  <Box below={3}>
    <Heading level={`h${level}`}>{children}</Heading>
  </Box>
)

MarkdownHeading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
}

export default MarkdownHeading
