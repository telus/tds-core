import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import OrderedList from '../../../../packages/OrderedList/OrderedList'
import Text from '../../../../packages/Text/Text'

const MarkdownOrderedList = ({ children }) => (
  <Box below={3}>
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
