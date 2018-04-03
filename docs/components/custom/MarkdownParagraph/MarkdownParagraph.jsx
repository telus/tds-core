import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import Paragraph from '../../../../packages/Paragraph/Paragraph'

const MarkdownParagraph = ({ children }) => (
  <Box below={3}>
    <Paragraph size="medium">{children}</Paragraph>
  </Box>
)

MarkdownParagraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownParagraph
