import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * Establish a 12-column grid layout.
 *
 * _This component must be accessed as a name-spaced component: `Grid.Container`._
 *
 * @see See [Grid.Column](#column) for grid usage.
 */
function Container(props) {
  const { className, limitWidth, ...extraProps } = props
  const classes = cx('container', className, {
    'container--limited-width': limitWidth === true
  })

  return (
    <div className={classes} {...extraProps}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  /**
   * One or more CSS class names separated by spaces to append onto the container.
   * Don't advertise as we may remove this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If true, a max width will be set at each breakpoint.
   */
  limitWidth: PropTypes.bool,
  /**
   * The grid's rows. Must be TDS `Grid.Row` components.
   *
   * @see See [Grid.Row](#row)
   */
  children: PropTypes.node
}

export default Container
