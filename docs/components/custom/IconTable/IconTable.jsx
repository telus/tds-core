import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import Heading from '../../../../packages/Heading/Heading'

const IconTable = ({ icons, heading }) => (
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
        {icons
          .sort((a, b) => {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
          })
          .map(icon => (
            <tr key={icon.name}>
              <td>{icon.name}</td>
              <td>
                <icon.Component />
              </td>
              <td>{icon.usageCriteria}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </Box>
)

IconTable.propTypes = {
  heading: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
}

export default IconTable
