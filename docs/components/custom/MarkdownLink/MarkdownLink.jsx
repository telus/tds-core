import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../../../packages/Link/Link'

const MarkdownLink = ({ href, children }) => <Link href={href}>{children}</Link>

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default MarkdownLink
