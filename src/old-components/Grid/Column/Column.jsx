import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  className: PropTypes.string,
  // Sizing
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  // Offsets
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  // Push
  xsPush: PropTypes.number,
  smPush: PropTypes.number,
  mdPush: PropTypes.number,
  lgPush: PropTypes.number,
  xlPush: PropTypes.number,
  // Pull
  xsPull: PropTypes.number,
  smPull: PropTypes.number,
  mdPull: PropTypes.number,
  lgPull: PropTypes.number,
  xlPull: PropTypes.number,
  // Hidden
  xsHidden: PropTypes.bool,
  smHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
  xlHidden: PropTypes.bool,
  // HiddenUp
  xsHiddenUp: PropTypes.bool,
  smHiddenUp: PropTypes.bool,
  mdHiddenUp: PropTypes.bool,
  lgHiddenUp: PropTypes.bool,
  xlHiddenUp: PropTypes.bool
}

/**
 * Align grid content vertically.
 *
 * _This component can only be used as a child of `Grid.Row`, and must be accessed as a
 * name-spaced component: `Grid.Column`._
 */
function Column(props) {
  // Collect any "extra" props, that aren't explicitly consumed.
  const extraProps = {}

  Object.keys(props).forEach((propName) => {
    if (!propTypes[propName]) {
      extraProps[propName] = props[propName]
    }
  })

  const classes = [props.className]
  const deviceSizes = {
    xs: 'xs',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'xl'
  }

  Object.keys(deviceSizes).forEach((size) => {
    const sizeProp = props[size]
    const offsetProp = props[`${size}Offset`]
    const pushProp = props[`${size}Push`]
    const pullProp = props[`${size}Pull`]
    const hiddenProp = props[`${size}Hidden`]
    const hiddenUpProp = props[`${size}HiddenUp`]

    if (sizeProp) {
      classes.push(`${deviceSizes[size]}-${sizeProp}`)
    }

    if (offsetProp) {
      classes.push(`offset-${deviceSizes[size]}-${offsetProp}`)
    }

    if (pushProp) {
      classes.push(`push-${deviceSizes[size]}-${pushProp}`)
    }

    if (pullProp) {
      classes.push(`pull-${deviceSizes[size]}-${pullProp}`)
    }

    if (hiddenProp) {
      classes.push(`hidden-${deviceSizes[size]}`)
    }

    if (hiddenUpProp) {
      classes.push(`hidden-${deviceSizes[size]}-up`)
    }
  })

  return (
    <div className={classes.filter(c => c).join(' ')} {...extraProps}>
      {props.children}
    </div>
  )
}

Column.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  /**
   * Span the specified number of columns at this screen size and above.
   */
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  /**
   * &lt;size&gt;Offset: Offset by the specified number of columns at this screen size and above.
   */
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  /**
   * &lt;size&gt;Push: Re-arrange column order by pushing content to the right by the specified
   * number of columns at this screen size and above.
   */
  xsPush: PropTypes.number,
  smPush: PropTypes.number,
  mdPush: PropTypes.number,
  lgPush: PropTypes.number,
  xlPush: PropTypes.number,
  /**
   * &lt;size&gt;Pull: Re-arrange column order by pulling content to the left by the specified
   * number of columns at this screen size and above.
   */
  xsPull: PropTypes.number,
  smPull: PropTypes.number,
  mdPull: PropTypes.number,
  lgPull: PropTypes.number,
  xlPull: PropTypes.number,
  /**
   * &lt;size&gt;Hidden: Whether or not to hide content at only this screen size.
   */
  xsHidden: PropTypes.bool,
  smHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
  xlHidden: PropTypes.bool,
  /**
   * &lt;size&gt;HiddenUp: Whether or not to hide content at this screen size and above.
   */
  xsHiddenUp: PropTypes.bool,
  smHiddenUp: PropTypes.bool,
  mdHiddenUp: PropTypes.bool,
  lgHiddenUp: PropTypes.bool,
  xlHiddenUp: PropTypes.bool,
  /* eslint-enable react/no-unused-prop-types */
  /**
   * One or more CSS class names separated by spaces to append onto the container.
   * Don't advertise as we may remove this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The Column's content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node
}

export default Column
