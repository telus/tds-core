import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../packages/Box/Box'
import UnorderedList from '../../../packages/UnorderedList/UnorderedList'
import Text from '../../../packages/Text/Text'

const MarkdownUnorderedList = ({ children }) => (
  <Box below={3}>
    <Text block size="medium">
      <UnorderedList>
        {React.Children.map(children, li => (
          <UnorderedList.Item>{li.props.children}</UnorderedList.Item>
        ))}
      </UnorderedList>
    </Text>
  </Box>
)

MarkdownUnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownUnorderedList
