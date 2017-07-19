import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Spinner.scss';

/**
 * A waiting indicator.
 */
class Spinner extends Component {
  constructor(props) {
    super(props);
    this.getSpinElement = this.getSpinElement.bind(this);
    this.getSpinWrapper = this.getSpinWrapper.bind(this);
    this.isNestedPattern = this.isNestedPattern.bind(this);
  }

  enableBodyScrolling() {
    document.body.style.overflow = 'inherit';
  }

  disableBodyScrolling() {
    document.body.style.overflow = 'hidden';
  }

  componentDidUpdate() {
    this.toggleBodyScrolling(this.props);
  }

  componentDidMount() {
    this.toggleBodyScrolling(this.props);
  }

  componentWillUnmount() {
    this.enableBodyScrolling();
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
        { fullScreen && <div className="spinner__full-screen-layer" />}
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
        {tip && <div className="spinner__tip">{tip}</div>}
      </div>
    );
  }

  getSpinWrapper(spinEl, spinning, wrapperClassNames) {
    const containerCls = classnames('spinner-container', {
      'spinner-container--loading': spinning
    }, wrapperClassNames);
    return (
      <div className="spinner-wrapper">
        {spinning && <div className="spinner-wrapper__content-blocker" />}
        {spinEl}
        <div className={containerCls}>
          {this.props.children}
        </div>
      </div>
    );
  }

  toggleBodyScrolling({ fullScreen, spinning }) {
    if (fullScreen === true && spinning === true) {
      this.disableBodyScrolling();
    } else {
      this.enableBodyScrolling();
    }
  }

  render() {
    const { spinning, tip, wrapperClassNames, fullScreen } = this.props;
    if (this.isNestedPattern()) {
      return this.getSpinWrapper(
        this.getSpinElement(spinning, tip, fullScreen), spinning, wrapperClassNames);
    }
    return this.getSpinElement(spinning, tip, fullScreen);
  }
}

Spinner.propTypes = {
  /**
   * Additional class names to add custom styling to the container while in embedded mode.
   */
  wrapperClassNames: PropTypes.string,
  /**
   * A message to display along with the spinner animation.
   */
  tip: PropTypes.string,
  /**
   * Whether or not to display the component.
   */
  spinning: PropTypes.bool,
  /**
   * Whether or not to display as a full screen overlay.
   */
  fullScreen: PropTypes.bool,
  /**
   * Content to be overlaid when the spinner is active. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node
};

Spinner.defaultProps = {
  wrapperClassNames: '',
  fullScreen: false
};

export default Spinner;
