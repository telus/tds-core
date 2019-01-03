import React from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../../../packages/Paragraph/Paragraph'

const PackageVersion = ({ version }) => (
  <Paragraph>
    Version:
    {version}
  </Paragraph>
)

PackageVersion.propTypes = {
  version: PropTypes.string.isRequired,
}

export default PackageVersion
