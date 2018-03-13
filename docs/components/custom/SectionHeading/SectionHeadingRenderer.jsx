import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../../../packages/Heading/Heading'
import Flexbox from '../../../../shared/components/Flexbox/Flexbox'
import Box from '../../../../packages/Box/Box'

import styles from './SectionHeadingRenderer.modules.scss'

const SectionHeadingRenderer = ({ id, depth, toolbar, children }) => {
  const level = Math.min(depth, 4)

  return (
    <Box below={3}>
      <Heading level={`h${level}`} id={id}>
        <Flexbox direction="row">
          {children}
          <div className={styles.toolbar}>{toolbar}</div>
        </Flexbox>
      </Heading>
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
