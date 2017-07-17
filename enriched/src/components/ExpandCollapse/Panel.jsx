import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

if (process.env.BROWSER) {
  require('./Panel.scss');
}

class Panel extends Component {

  componentWillMount() {
    const id = Math.random().toString(36).substr(2, 9);
    this.setId(id);
  }

  componentDidMount() {
    this.setMaxHeight();
  }

  componentDidUpdate() {
    this.setMaxHeight();
  }

  setId(id) {
    this.contentId = id;
  }

  setMaxHeight() {
    if (this.props.isActive) {
      const height = this.panelContent.scrollHeight + 40;
      this.panelContent.style.maxHeight = `${height}px`;
    } else {
      this.panelContent.style.maxHeight = '0px';
    }
  }

  getHeader() {
    const { header, ordinal, panelKey } = this.props;

    if (typeof header === 'function') {
      return header({ ordinal, panelKey });
    }

    return header;
  }

  render() {
    const { className, children, isActive, isDisabled, onPanelClick, isFirst } = this.props;
    const collapsePanelClassName = classNames('collapsible-panel', className);
    const collapsePanelContent = classNames('collapsible-panel__content', {
      'collapsible-panel__content--visible': isActive
    });

    const collapsePaneLabelClassName = classNames('collapsible-panel__label', {
      'collapsible-panel__label--disabled': isDisabled,
      'collapsible-panel__label--expanded': isActive,
      'collapsible-panel__label--collapsed': !isActive,
      'collapsible-panel__label--first': isFirst
    });

    const iconClassName = classNames('icon icon--primary', {
      'icon-core-caret-up': isActive,
      'icon-core-caret-down': !isActive
    });

    return (
      <div className={collapsePanelClassName}>
        <span className="accessible-hide">{isActive ? 'expanded' : 'collapsed'}</span>
        <button
          onClick={onPanelClick}
          aria-expanded={isActive ? 'true' : 'false'}
          aria-controls={this.contentId}
          className={collapsePaneLabelClassName}>
          <span className="collapsible-panel__icon">
            <i className={iconClassName} />
          </span>
          <span className="collapsible-panel__header">{ this.getHeader() }</span>
        </button>
        <div
          ref={(node) => { this.panelContent = node; }}
          className={collapsePanelContent}
          id={this.contentId}>
          { children }
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  ordinal: PropTypes.number,
  panelKey: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string, PropTypes.func
  ]),
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onPanelClick: PropTypes.func,
  isFirst: PropTypes.bool
};

Panel.defaultProps = {
  isActive: false,
  isDisabled: false,
  className: '',
  header: ''
};


export default Panel;
