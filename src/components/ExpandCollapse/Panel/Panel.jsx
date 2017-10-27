import PropTypes from 'prop-types'

// TODO: I think this breaks in React 15 w/out a wrapper?

const Panel = ({ children }) => children

Panel.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Panel.defaultProps = {
  onToggle: undefined
}

export default Panel
