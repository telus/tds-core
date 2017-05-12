import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

if ( process.env.BROWSER ) {
  require('./Spinner.scss');
}

class Spinner extends Component {
  constructor(props){
    super(props);
    this.getSpinElement = this.getSpinElement.bind(this);
    this.getSpinWrapper = this.getSpinWrapper.bind(this);
    this.isNestedPattern = this.isNestedPattern.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreen === true && nextProps.spinning === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }

  componentWillUnmount(){
    document.body.style.overflow = 'inherit';
  }

  isNestedPattern() {
    return !!(this.props && this.props.children);
  }

  getSpinElement(spinning, tip, fullScreen) {
    const cls = classnames('spinner', {
      'spinner--spinning': spinning,
      'spinner--full-screen': fullScreen
    });
    return (
      <div className={cls}>
        { fullScreen ? <div className="spinner__full-screen-layer" /> : null}
        <svg className="spinner__svg" viewBox="0 0 100 100" width="0" height="0">
            <circle
                className="spinner__circle"
                stroke="#177a00"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="89, 200"
                strokeDashoffset="0"
                cx="50"
                cy="50"
                r="20"
            />
        </svg>
        {tip ? <div className="spinner__tip">{tip}</div> : null}
      </div>
    );
  }

  getSpinWrapper(spinEl, spinning, wrapperClassNames) {
    const containerCls = classnames('spinner-container', {
      'spinner-container--loading': spinning
    }, wrapperClassNames);
    return (
      <div className="spinner-wrapper">
        {spinning ? <div className="spinner-wrapper__content-blocker" /> : null}
        {spinEl}
        <div className={containerCls}>
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    const { spinning, tip, wrapperClassNames, fullScreen } = this.props;
    if (this.isNestedPattern()) {
      return this.getSpinWrapper(this.getSpinElement(spinning, tip, fullScreen), spinning, wrapperClassNames);
    }
    return this.getSpinElement(spinning, tip, fullScreen);
  }
}

Spinner.propTypes = {
  wrapperClassNames: PropTypes.string,
  tip: PropTypes.string,
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool
};

Spinner.defaultProps = {
  wrapperClassNames: '',
  fullScreen: false
};

export default Spinner;
