import React from 'react';
import PropTypes from 'prop-types';

/**
 * Align grid content horizontally.
 *
 * _This component can only be used as a child of `Grid.Container`, and must be accessed as a
 * name-spaced component: `Grid.Row`._
 *
 * @see See [Grid.Column](#column) for grid usage.
 */
function Row(props) {
  const { className, ...extraProps } = props;
  const classes = ['grid-row', className];

  return (
    <div className={classes.filter(c => c).join(' ')} {...extraProps}>
      {props.children}
    </div>
  );
}

Row.propTypes = {
  /**
   * One or more CSS class names separated by spaces to append onto the container.
   * Don't advertise as we may remove this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The grid's columns. Must be TDS `Grid.Column` components.
   *
   * @see See [Grid.Column](#column)
   */
  children: PropTypes.node.isRequired
};

export default Row;
