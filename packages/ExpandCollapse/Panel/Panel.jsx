/* eslint-disable react/no-unused-prop-types */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Expandable content areas for use with the `ExpandCollapse` or `Accordion`
 *
 * _This component can only be accessed as a name-spaced component: `ExpandCollapse.Panel` or `Accordion.Panel`._
 */
const Panel = ({ children }) => <div>{children}</div>

Panel.propTypes = {
  /**
   * The identifier of the panel. Must be unique within the `ExpandCollapse` panels.
   */
  id: PropTypes.string.isRequired,
  /**
   * The title.
   */
  header: PropTypes.string.isRequired,
  /**
   * Optional subtext.
   */
  subtext: PropTypes.string,
  /**
   * Optional tertiary text. Will be displayed on the right side of the panel header.
   */
  tertiaryText: PropTypes.string,
  /**
   * Whether or not to disable the panel from being opened or closed.
   */
  disabled: PropTypes.bool,
  /**
   * A callback function to be invoked when the panel is opened or closed.
   *
   * @param {boolean} open Whether or not the panel is open or closed.
   */
  onToggle: PropTypes.func,
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node,
}

Panel.defaultProps = {
  subtext: undefined,
  tertiaryText: undefined,
  disabled: false,
  onToggle: undefined,
  children: undefined,
}

export default Panel
