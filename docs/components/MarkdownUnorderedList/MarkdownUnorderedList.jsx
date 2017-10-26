import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../src/components/Box/Box'
import UnorderedList from '../../../src/components/Lists/UnorderedList/UnorderedList'
import Text from '../../../src/components/Typography/Text/Text'

const MarkdownUnorderedList = ({children}) => (
  <Box spacing="margin" bottom={3}>
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
