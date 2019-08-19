import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../../../packages/Heading/Heading'
import Box from '../../../../packages/Box/Box'

const SectionHeadingRenderer = ({ id, depth, toolbar, children }) => {
  const level = Math.min(depth, 4)

  return (
    <Box inline between="space-between" below={3} style={{ alignItems: 'center' }}>
      <Heading level={`h${level}`} id={id}>
        {children}
      </Heading>
      <div>{toolbar}</div>
    </Box>
  )
}

SectionHeadingRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  toolbar: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
}

export default SectionHeadingRenderer
