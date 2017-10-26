import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../src/components/Box/Box'
import UnorderedList from '../../../src/components/Lists/UnorderedList/UnorderedList'
import Text from '../../../src/components/Typography/Text/Text'

const MarkdownList = ({children}) => (
  <Box spacing="margin" bottom={3}>
    <Text size="medium">
      <UnorderedList>{children}</UnorderedList>
    </Text>
  </Box>
)

MarkdownList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownList
