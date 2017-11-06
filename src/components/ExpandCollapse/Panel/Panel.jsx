import PropTypes from 'prop-types'

// TODO: I think this breaks in React 15 w/out a wrapper?

const Panel = ({ children }) => children

Panel.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subtext: PropTypes.string,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Panel.defaultProps = {
  subtext: undefined,
  disabled: false,
  onToggle: undefined,
}

export default Panel
