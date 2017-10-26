import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../src/components/Box/Box'
import OrderedList from '../../../src/components/Lists/OrderedList/OrderedList'
import Text from '../../../src/components/Typography/Text/Text'

const MarkdownOrderedList = ({children}) => (
  <Box spacing="margin" bottom={3}>
    <Text block size="medium">
      <OrderedList>
        {React.Children.map(children, li => (
          <OrderedList.Item>{li.props.children}</OrderedList.Item>
        ))}
      </OrderedList>
    </Text>
  </Box>
)

MarkdownOrderedList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownOrderedList
