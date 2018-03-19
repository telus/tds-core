import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../../../packages/Box/Box'
import Input from '../../../../packages/Input/Input'

const TableOfContentsRenderer = ({ children, searchTerm, onSearchTermChange }) => {
  return (
    <Box between={2} inset={2}>
      <Input
        value={searchTerm}
        label="Filter by name"
        onChange={e => onSearchTermChange(e.target.value)}
      />
      <div>{children}</div>
    </Box>
  )
}

TableOfContentsRenderer.propTypes = {
  children: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
}

export default TableOfContentsRenderer
