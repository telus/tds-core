import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import Text from '../../../../packages/Text/Text'
import UnorderedList from '../../../../packages/UnorderedList/UnorderedList'
import OrderedList from '../../../../packages/OrderedList/OrderedList'

// This interface must match the React Styleguidist Markdown List component
// https://github.com/styleguidist/react-styleguidist/blob/master/src/rsg-components/Markdown/List/ListRenderer.js
const MarkdownList = ({ ordered, children }) => {
  const ListComponent = ordered ? OrderedList : UnorderedList

  return (
    <Box below={3}>
      <Text block size="medium">
        <ListComponent>
          {React.Children.map(children, li => (
            <ListComponent.Item>{li.props.children}</ListComponent.Item>
          ))}
        </ListComponent>
      </Text>
    </Box>
  )
}

MarkdownList.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
MarkdownList.defaultProps = {
  ordered: false,
}

export default MarkdownList
