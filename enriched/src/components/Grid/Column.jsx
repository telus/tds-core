import React, { PropTypes } from 'react';

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
  xlHiddenUp: PropTypes.bool,
};

function Column(props) {

  // Collect any "extra" props, that aren't explicitly consumed.
  const extraProps = {};

  Object.keys(props).forEach((propName) => {
    if (!propTypes[propName]) {
      extraProps[propName] = props[propName];
    }
  });

  const classes = [props.className];
  const deviceSizes = {
    xs: 'xs',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'xl',
  };

  Object.keys(deviceSizes).forEach((size) => {
    const sizeProp = props[size];
    const offsetProp = props[`${ size }Offset`];
    const pushProp = props[`${ size }Push`];
    const pullProp = props[`${ size }Pull`];
    const hiddenProp = props[`${ size }Hidden`];
    const hiddenUpProp = props[`${ size }HiddenUp`];

    if (sizeProp) {
      classes.push(`${ deviceSizes[size] }-${ sizeProp }`);
    }

    if (offsetProp) {
      classes.push(`offset-${ deviceSizes[size] }-${ offsetProp }`);
    }

    if (pushProp) {
      classes.push(`push-${ deviceSizes[size] }-${ pushProp }`);
    }

    if (pullProp) {
      classes.push(`pull-${ deviceSizes[size] }-${ pullProp }`);
    }

    if (hiddenProp) {
      classes.push(`hidden-${ deviceSizes[size] }`);
    }

    if (hiddenUpProp) {
      classes.push(`hidden-${ deviceSizes[size] }-up`);
    }
  });

  return (
    <div className={ classes.filter(c => c).join(' ') } { ...extraProps }>
      { props.children }
    </div>
  );
}

Column.propTypes = propTypes;

export default Column;
