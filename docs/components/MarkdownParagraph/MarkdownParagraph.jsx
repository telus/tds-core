import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../packages/Box/Box'
import Paragraph from '../../../packages/Paragraph/Paragraph'

const MarkdownParagraph = ({ small, children }) => (
  <Box below={3}>
    <Paragraph size={small ? 'small' : 'medium'}>{children}</Paragraph>
  </Box>
)

MarkdownParagraph.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

MarkdownParagraph.defaultProps = {
  small: false,
}

export default MarkdownParagraph
