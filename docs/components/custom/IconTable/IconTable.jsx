import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import Heading from '../../../../packages/Heading/Heading'

const IconTable = ({ icons, heading, noSort }) => {
  let i = icons
  if (!noSort) {
    i = icons.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
  }
  return (
    <Box between={3}>
      <Heading level="h3">{heading}</Heading>
      <table className="docs_svgicon-table">
        <colgroup>
          <col width="20%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Icon</th>
            <th>Usage Criteria</th>
          </tr>
        </thead>
        <tbody>
          {i.map(icon => (
            <tr key={icon.name}>
              <td>{icon.name}</td>
              <td>
                <icon.Component {...icon.props} />
              </td>
              <td>{icon.usageCriteria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

IconTable.propTypes = {
  heading: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  noSort: PropTypes.bool,
}

IconTable.defaultProps = {
  noSort: false,
}

export default IconTable
